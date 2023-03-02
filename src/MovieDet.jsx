import Button from "@mui/material/Button";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { API } from "./golbal";

export function MovieDet() {
  const { id } = useParams();

  const navigate = useNavigate();
  const [movie, setMovie] = useState({});
  useEffect(() => {
    fetch(`${API}/movies/${id}`)
      .then((e) => e.json())
      .then((e) => setMovie(e));
  }, []);
  const styles = {
    color: movie.rating < 8.5 ? "red" : "green",
  };
  return (
    <div className="dtp">
      <div className="trailer">
        <iframe
          width="942"
          height="530"
          src={movie.trailer}
          title="The Romantics | Official Trailer | Shah Rukh Khan, Salman Khan, Ranbir Kapoor | Netflix India"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      </div>

      <div>
        <p>{movie.name}</p>
        <p style={styles}>⭐{movie.rating}</p>
      </div>
      <Button variant="contained" onClick={() => navigate(-1)}>
        Back
      </Button>
    </div>
  );
}
