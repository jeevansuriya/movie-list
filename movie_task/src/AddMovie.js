import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useState } from 'react';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import { useHistory } from "react-router-dom";

export function AddMovie() {
  const history = useHistory();
  const [movieName, setMovieName] = useState("");
  const [movieRating, setMovieRating] = useState("");
  const [movieSummary, setMovieSummary] = useState("");
  const [moviePoster, setMoviePoster] = useState("");
  const [movieRunningtime, setMovieRunningtime] = useState("");
  const [movieReleasedate, setMovieReleasedate] = useState("");
  const [movieGenres, setMovieGenres] = useState("");
  const [movietrailer, setMovieTrailer] = useState("");
  const addMovie = () => {
    const newMovie = {
      title: movieName,
      image: moviePoster,
      rating: movieRating,
      summary: movieSummary,
      runningtime: movieRunningtime,
      releasedate: movieReleasedate,
      Genres: movieGenres,
      trailer: movietrailer
};
    fetch(`https://6166c4db13aa1d00170a66fd.mockapi.io/movies/`,
    {method:"POST",
     body:JSON.stringify(newMovie),
     headers: {
     'Content-Type': 'application/json'
}
}).then(()=>history.push("/movies"))
  
};
  return (
    <div className="inputs">
      <TextField value={movieName} onChange={(event) => setMovieName(event.target.value)} id="standard-basic" label="Movie Name" variant="standard" />
      <TextField value={movieRating} onChange={(event) => setMovieRating(event.target.value)} id="standard-basic" label="Rating" variant="standard" />
      <TextField value={movieSummary} onChange={(event) => setMovieSummary(event.target.value)} id="standard-basic" label="Summary" variant="standard" />
      <TextField value={moviePoster} onChange={(event) => setMoviePoster(event.target.value)} id="standard-basic" label="Poster" variant="standard" />
      <TextField value={movieRunningtime} onChange={(event) => setMovieRunningtime(event.target.value)} id="standard-basic" label="Runningtime" variant="standard" />
      <TextField value={movieReleasedate} onChange={(event) => setMovieReleasedate(event.target.value)} id="standard-basic" label="Releasedate" variant="standard" />
      <TextField value={movieGenres} onChange={(event) => setMovieGenres(event.target.value)} id="standard-basic" label="Genres" variant="standard" />
      <TextField value={movietrailer} onChange={(event) => setMovieTrailer(event.target.value)} id="standard-basic" label="Trailer" variant="standard" />
      <div className="addSaveBtn">
        <Button className="button" onClick={addMovie} variant="outlined">Add Movie</Button>
      </div>
      <div>
        <Button variant="outlined" onClick={() => history.goBack()} startIcon={<KeyboardBackspaceIcon />}>
          Back
        </Button>
      </div>
    </div>
  );
}
