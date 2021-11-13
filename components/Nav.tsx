import { styled } from "../stitches.config";
import Link from "next/link";

const Navbar = styled("div", {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: "BlueViolet",
  height: "4rem",
});

const Container = styled("div", {
  maxWidth: "768px",
  width: "100%",
  color: "white",
  display: "flex",
  justifyContent: "space-between",
});

export const A = styled("a", {
  color: "inherit",
  textDecoration: "none",
});

const Nav = ({ name, children }: any) => {
  return (
    <Navbar>
      <Container>
        <Link href="/" passHref>
          <A>{name}</A>
        </Link>
        <div style={{ display: "flex", alignItems: "center" }}>{children}</div>
      </Container>
    </Navbar>
  );
};

export default Nav;
