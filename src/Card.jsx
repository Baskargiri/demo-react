import { useState } from "react";
import { useEffect } from "react";
import Button from "@mui/material/Button";
import { Btn } from "./App";

import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { IconButton } from "@mui/material";
import InfoIcon from "@mui/icons-material/Info";
import { Navigate, useNavigate } from "react-router-dom";
import { AddMovie } from "./AddMovie";
import DeleteIcon from "@mui/icons-material/Delete";
import { API } from "./golbal";

function Card() {
  const [movie_info, setMovie_info] = useState([]);
  const getmovie = () => {
    fetch(`${API}/movies`, {
      method: "GET",
    })
      .then((e) => e.json())
      .then((e) => setMovie_info(e));
  };

  useEffect(() => getmovie(), []);
  return (
    <div>
      <div className="new">
        {movie_info.map((e) => (
          <Movie1 key={e.id} movies={e} id={e.id} getmovie={getmovie} />
        ))}
      </div>
    </div>
  );
}

function Movie1({ movies, id, getmovie }) {
  const styles = {
    color: movies.rating < 8.5 ? "red" : "green",
  };

  const [show, setShow] = useState(true);
  const dis = {
    display: show ? "none" : "block",
  };
  const navigate = useNavigate();
  const delbtn = () => {
    fetch(`${API}/movies/${id}`, {
      method: "DELETE",
    }).then(() => getmovie());
  };
  return (
    <div className="container">
      <img className="poster" src={movies.poster} alt={movies.name} />
      <div className="header">
        <h1>{movies.name}</h1>
        <p className="rating" style={styles}>
          ⭐{movies.rating}
        </p>
      </div>
      <IconButton color="primary" onClick={() => setShow(!show)}>
        {show ? <ExpandLessIcon /> : <ExpandMoreIcon />}
      </IconButton>
      <IconButton color="primary" onClick={() => navigate(`/movies/${id}`)}>
        <InfoIcon />
      </IconButton>

      {/* <p className='summary' style={dis}>{movies.summary}</p> */}

      {show ? <p>{movies.summary}</p> : null}
      <Btn
        deletebtn={
          <IconButton
            sx={{ marginLeft: "auto" }}
            color="error"
            onClick={delbtn}
            variant="contained"
          >
            <DeleteIcon />
          </IconButton>
        }
      />
    </div>
  );
}

export { Card };
