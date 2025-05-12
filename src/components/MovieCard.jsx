import '../css/MovieCard.css';

function MovieCard({ movie }) {  // Destructure 'movie' from props
    function onLike() {
        console.log(`Liked: ${movie.title}`);
    }

    return (
        <div className="movie-card">
            <div className="movie-poster">
                <img
                    src={movie.poster_path ? `https://image.tmdb.org/t/p/w500${movie.poster_path}` : "https://via.placeholder.com/300x450?text=No+Image"}
                    alt={movie.title}
                />
                <div className="movie-overlay">
                    <button className="faviorite-btn" onClick={onLike}>🤍</button>
                </div>
            </div>
            <div className="movie-info">
                <h3>{movie.title}</h3>
                <p>{movie.release_date?.split("-")[0]}</p>
            </div>
        </div>
    )
}
export default MovieCard;
