import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import "../styles/globals.scss";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Header />
      <main className="container">
        <Component {...pageProps} />
      </main>
      <Footer />
    </>
  );
}

export default MyApp;
