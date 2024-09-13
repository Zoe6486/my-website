import Layout from "./Layout";
import Navbar from "./components/nav/Navbar";
import Middle from "./components/middle/Middle";

function App() {
  return (
    <>
      {/* <Layout header={Navbar()} content={Content()} /> */}
      <Layout header={<Navbar />} middle={<Middle />} />
    </>
  );
}

export default App;
