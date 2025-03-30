const Card = ({ title, description }) => {
  return (
    <div style={{ border: "1px solid #ddd", padding: "1rem", borderRadius: "8px", margin: "10px", textAlign: "center" }}>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};

export default Card;
