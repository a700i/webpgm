import Card from "./Card";

const Home = () => {
  return (
    <div style={{ padding: "1rem" }}>
      <h2>Welcome to My Website</h2>
      <Card title="Feature 1" description="This is the first feature of our website." />
      <Card title="Feature 2" description="Another cool feature you will love!" />
    </div>
  );
};

export default Home;
