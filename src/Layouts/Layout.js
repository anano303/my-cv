import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer.jsx";

export default function Layout({ children, onNavigate }) {
  return (
    <div className="layout">
      <Header onNavigate={onNavigate} />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
