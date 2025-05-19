function Country({ title, children }) {
  return (
    <div className="mb-4 border border-primary rounded-3 p-4">
      <h2>{title}</h2>
      {children}
    </div>
  );
}

export default Country;
