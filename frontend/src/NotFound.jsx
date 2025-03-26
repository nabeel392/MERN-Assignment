import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>404 - Page Not Found</h1>
      <p style={styles.text}>Oops! The page you're looking for doesn't exist.</p>
      <Link to="/">
        <button>Go Back to Home</button>
      </Link>
    </div>
  );
};

const styles = {
  container: {
    textAlign: "center",
    marginTop: "50px",
  },
  heading: {
    fontSize: "2rem",
    color: "#ff0000",
  },
  text: {
    fontSize: "1.2rem",
    color: "#333",
  },
};

export default NotFound;
