import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer.jsx";

export default function Layout({ children, onNavigate }) {
  return (
    <div>
      <Header onNavigate={onNavigate} />
      <main>
        <div>{children}</div>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}
