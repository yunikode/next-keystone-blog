import { InferGetStaticPropsType } from "next";
import Link from "next/link";
import Text from "../components/Text";
// Import the generated Lists API from Keystone
import { query } from ".keystone/api";
import {styled } from '../stitches.config'

const A = styled('a', {
  textDecoration: 'none',
  color: 'inherit',
  fontSize: '1.25rem',
})

const UL = styled('ul', {
  listStyle: 'none',
})

const LI = styled('li', {
  lineHeight: '2rem',
  '&:before': {
    content: '↬ '  }
})

// Home receives a `posts` prop from `getStaticProps` below
export default function Posts({
  posts,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <Text as="h1" size="xxl">
        Current articles
      </Text>
      <UL>
        {posts.map((post) => (
          <LI key={post.id}>
            <Link href={`/post/${post.slug}`} passHref>
              <A>
                {post.title} - by {post.author.name}
              </A>
            </Link>
          </LI>
        ))}
      </UL>
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
