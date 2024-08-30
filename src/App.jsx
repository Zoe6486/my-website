import Content from "./components/Content";
import Navbar from "./components/Navbar";
import Layout from "./Layout";

function App() {
  return (
    <>
      {/* <Layout header={Navbar()} content={Content()} /> */}
      <Layout header={<Navbar />} content={<Content />} />
    </>
  );
}

export default App;
