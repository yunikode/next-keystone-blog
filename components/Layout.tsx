import Nav from "./Nav";
import { styled } from "../stitches.config";
import Link from "next/link";

const Container = styled("div", {
  maxWidth: "768px",
  width: "100%",
});

const A = styled("a", {
  padding: "0 1rem",
  textDecoration: 'none',
  color: 'inherit'
});

export default function Layout({ children }: any) {
  return (
    <>
      <Nav name="Dog-Food Central">
        <Link href="/posts/" passHref>
          <A>articles</A>
        </Link>

        <Link href="/authors/" passHref>
          <A>authors</A>
        </Link>
      </Nav>
      <main>
        <section style={{ display: "flex", justifyContent: "center", maxWidth: '768px' }}>

        <Container>{children}</Container>
        </section>
      </main>
    </>
  );
}
