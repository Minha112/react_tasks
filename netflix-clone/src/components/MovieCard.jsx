function MovieCard({title,image,onMovieClick}) {
  return (
    <div className="movie-card" onClick={onMovieClick}>
      <img
        src={image}
        alt={title}
      />
      <h3>{title}</h3>
    </div>
  )
}

export default MovieCard