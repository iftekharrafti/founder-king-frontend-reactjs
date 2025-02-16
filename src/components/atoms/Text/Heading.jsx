const Heading = ({ type = "main", children, className = "" }) => {
  // Set default styles based on type
  const styles = {
    main: "md:text-5xl text-2xl font-bold ", // Main heading with large text
    sub: "text-lg font-medium ", // Sub heading with smaller text
  };

  return <h1 className={`${styles[type]} ${className}`}>{children}</h1>;
};

export default Heading;
