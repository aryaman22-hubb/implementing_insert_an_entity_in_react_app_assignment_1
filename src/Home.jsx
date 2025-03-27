import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  return (
    <div className="container">
      <h1>Book Library</h1>
      <button onClick={() => navigate("/add-book")} className="add-book-btn">
        Add Book
      </button>
      {/* Render BookCard components here */}
    </div>
  );
}

export default Home;
