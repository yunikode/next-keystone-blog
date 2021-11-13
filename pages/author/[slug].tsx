import {
  GetStaticPathsResult,
  GetStaticPropsContext,
  InferGetStaticPropsType,
} from "next";
import { query } from ".keystone/api";
import Link from "next/link";
import Text from "../../components/Text";
import slugify from "slugify";

export default function AuthorPage({
  author,
  posts,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <div>
      <main style={{ margin: "3rem" }}>
        <Text as="h1" size="xl">
          {author.name}
        </Text>
        <Text>Write them at: {author.email}</Text>
        <Text>{author.name} wrote the following articles</Text>
        <ul>
          {posts.map((post) => (
            <li key={post.id}>
              <Link href={`/post/${post.slug}`}>
                <a>{post.title}</a>
              </Link>
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
}

export async function getStaticPaths(): Promise<GetStaticPathsResult> {
  const authors = await query.Author.findMany({
    query: `name`,
  });

  const paths = authors
    .map((author) => author.name)
    .filter((name): name is string => !!name)
    .map((name) => `/author/${slugify(name)}`);

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }: GetStaticPropsContext) {
  const name = params!.slug as string;
  const clean = name.replace("-", " ");
  const author = await query.Author.findOne({
    where: { name: clean },
    query: "name email",
  });

  const posts = await query.Post.findMany({
    where: { author: { name: { equals: clean } } },
    query: "id title slug author {name}",
  });

  return { props: { author, posts } };
}
