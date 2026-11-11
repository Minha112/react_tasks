import MovieCard from "./MovieCard";
// import movies from "../data/movies"
function MovieRow({title,movies,onMovieClick}){
    return(
        <section className="movie-row">
            <h2>{title}</h2>
            <div className="movies">
                {movies.map((movie)=>(
               <MovieCard key={movie.id} title={movie.title} image={movie.image} onMovieClick={()=>onMovieClick(movie)} /> 
                ))}
        
            </div>
        </section>
    )
}
export default  MovieRow