import Link from "next/link";

import Text from "../components/Text";
import { Grid } from "../components/Grid";
import { Card } from "../components/Card";

// Home receives a `posts` prop from `getStaticProps` below
export default function Home() {
  return (
    <>
      <Text as="h1" size="xxl">
        Hi there! 👋🏻{" "}
      </Text>
      <Text>Welcome to my proof of concept and keystone/nextjs playground</Text>
      <Text>This current iteration is blog with articles and author pages</Text>
      <Text>I will try to explain the setup of this very project in the articles section</Text>
      <Grid>
      <Link href="/posts/" passHref>
        <Card style={{cursor: 'pointer'}}>&rarr;&nbsp;Go to the articles overview</Card>
      </Link>
      <Link href="/authors/" passHref>
        <Card style={{cursor: 'pointer'}}>&rarr;&nbsp;Go to the authors overview</Card>
      </Link>
      </Grid>
      
    </>
  );
}
