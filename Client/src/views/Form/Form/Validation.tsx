const Validation = ({ error }) => {

  if (error) {
    return <span className="text-argentina">{error}</span>;
  }
  return null;
};

export default Validation;
