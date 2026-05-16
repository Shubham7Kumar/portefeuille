import Navbar from "../components/common/Navbar/Navbar";
import Footer from "../components/common/Footer/Footer";
import ScrollProgress from "../components/common/ScrollProgress/ScrollProgress";

const MainLayout = ({ children }) => {
  return (
    <>
        <ScrollProgress/>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default MainLayout;