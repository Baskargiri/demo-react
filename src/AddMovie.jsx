import { useState } from "react";
import { useNavigate } from "react-router-dom";

export function AddMovie() {
  const [name, setName] = useState("");
  const [poster, setPoster] = useState("");
  const [rating, setRating] = useState("");
  const [summary, setSummary] = useState("");
  const [trailer, setTrailer] = useState("");
  const navigate = useNavigate();
  const addmovies = async () => {
    const newMovie = {
      name: name,
      poster: poster,
      rating: rating,
      summary: summary,
      trailer: trailer,
    };

    await fetch(`${API}/movies`, {
      method: "POST",
      body: JSON.stringify(newMovie),
      headers: { "Content-Type": "application/json" },
    });
    navigate("/movie");
  };

  return (
    <div className="in">
      <input
        onChange={(e) => setName(e.target.value)}
        type="text"
        placeholder="name"
      ></input>
      <input
        onChange={(e) => setPoster(e.target.value)}
        type="text"
        placeholder="poster"
      ></input>
      <input
        onChange={(e) => setRating(e.target.value)}
        type="text"
        placeholder="rating"
      ></input>
      <input
        onChange={(e) => setSummary(e.target.value)}
        type="text"
        placeholder="summary"
      ></input>
      <input
        onChange={(e) => setTrailer(e.target.value)}
        type="text"
        placeholder="trailer"
      ></input>
      <button onClick={addmovies}>Add Cart</button>
    </div>
  );
}
