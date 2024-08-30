import PropTypes from "prop-types";

Index.propTypes = {
  header: PropTypes.node,
  content: PropTypes.node,
};

function Index({ header, content }) {
  return (
    <div>
      {/* 上部 */}
      <div className="w-full h-12 bg-red-300">{header}</div>

      {/* 下部 */}
      {/* <div className="bg-green-300 h-[calc(100vh-3rem)] mx-8 md:mx-6 lg:mx-4 xl:mx-2"></div> */}
      <div className="container mx-auto bg-green-300 h-[calc(100vh-3rem)]">
        {content}
      </div>
    </div>
  );
}

export default Index;
