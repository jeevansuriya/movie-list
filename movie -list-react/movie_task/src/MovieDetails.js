import { useParams } from "react-router-dom";
import { useEffect, useState } from 'react';

export function MovieDetails() {
  const { id } = useParams();
  const [movie,setMovie] = useState({})
useEffect(()=>{
  fetch(`https://6166c4db13aa1d00170a66fd.mockapi.io/movies/${id}`)
  .then((data)=>data.json())
  .then((mv)=>setMovie(mv))
},[]);
  const styles = {
    color: movie.rating < 9 ? "crimson" : "green",
    fontWeight: "bold",
  };
  return (
    <div>
       <iframe
        width="100%"
        height="800px"
        src={movie.trailer}
        title="YouTube Video Player"
        frameBorder="0"
        allow="accelerometer;autoplay;clipboard-write;encrypted-media;gyroscope;picture-in-picture"
        allowFullScreen
      ></iframe>
      <h2 className="info-title">{movie.title}</h2>
      <div className="information">
        <p>{movie.releasedate}</p>
        <p>{movie.runningtime}min</p>
        <p>{movie.Genres}</p>
        <p style={styles}><span className="fa fa-star checked"></span> {movie.rating}</p>
      </div>
      <p className="info-title">{movie.summary}</p>
    </div>
  );
}
