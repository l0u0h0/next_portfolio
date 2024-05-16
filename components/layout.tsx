import Footer from './Common/footer';
import Header from './Common/header';

export default function Layout({ children }) {
  return (
    <div className="bg-primary">
      <Header />
      <div>{children}</div>
      <Footer />
    </div>
  );
}
