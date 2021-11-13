import { InferGetStaticPropsType } from "next";
import Link from "next/link";
import Text from "../components/Text";
import { Card } from "../components/Card";
import { Grid } from "../components/Grid";
// Import the generated Lists API from Keystone
import { query } from ".keystone/api";
import slugify from "slugify";

// Home receives a `posts` prop from `getStaticProps` below
export default function Authors({
  authors,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <Text as="h1" size="xxl">
        Current authors
      </Text>
        <Grid>
        {authors.map((author) => (
          <Link
            key={author.id}
            href={`/author/${slugify(author.name)}`}
            passHref
          >
            <Card style={{cursor: 'pointer'}}>{author.name}</Card>
          </Link>
        ))}
        </Grid>
     </>
  );
}

// Here we use the Lists API to load all the posts we want to display
// The return of this function is provided to the `Home` component
export async function getStaticProps() {
  const authors = await query.Author.findMany({
    query: "id name",
  });
  return { props: { authors } };
}
