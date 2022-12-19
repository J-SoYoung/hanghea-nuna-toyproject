import Layout from "../components/layout/Layout";
import Banner from "../components/Banner/Banner";
import Header from "../components/Header/Header";
import Mainbody from "../components/MainBody/Mainbody";
import Footer from "../components/Footer/Footer";

function Main() {
  return (
    <>
      <Header />
      <Banner />
      <Layout>
        <Mainbody />
      </Layout>
      <Footer />
    </>
  );
}

export default Main;
