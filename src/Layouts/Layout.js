import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer.jsx";
export default function Layout({ children }) {
  return (
    <div>
      {/* <Navbar /> */}
      <Header />

      <main>
        <div>{children}</div>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}
