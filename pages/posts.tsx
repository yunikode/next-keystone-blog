import { InferGetStaticPropsType } from "next";
import Link from "next/link";
import Text from "../components/Text";
// Import the generated Lists API from Keystone
import { query } from ".keystone/api";

// Home receives a `posts` prop from `getStaticProps` below
export default function Posts({
  posts,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <Text as="h1" size="xxl">
        Current articles
      </Text>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <Link href={`/post/${post.slug}`}>
              <a>
                {post.title} - by {post.author.name}
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}

// Here we use the Lists API to load all the posts we want to display
// The return of this function is provided to the `Home` component
export async function getStaticProps() {
  const posts = await query.Post.findMany({
    query: "id title slug author {name}",
  });
  return { props: { posts } };
}
