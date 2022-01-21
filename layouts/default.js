import { Container } from "@chakra-ui/react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function DefaultLayout({ children }) {
  return (
    <>
      <Navbar />
      <main>
        <Container maxW={"6xl"} py={4}>
          {children}
        </Container>
      </main>
      <Footer />
    </>
  );
}
