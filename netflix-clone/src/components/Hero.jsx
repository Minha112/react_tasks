import { useState } from "react"

function Hero() {
  const [isPlaying, setIsPlaying] = useState(false)
  const [showInfo, setShowInfo] = useState(false)
  function handlePlay() {
    setIsPlaying(true)
  }

  function handleClose() {
    setIsPlaying(false)
  }
   function handleMoreInfo() {
    setShowInfo(true)
  }

  function handleCloseInfo() {
    setShowInfo(false)
  }

  return (
    <section className="hero">
      {!isPlaying ? (
        <div className="hero-content">
          <h1>Stranger Things</h1>

          <p>
            When a young boy disappears, his friends discover
            a mysterious world filled with strange secrets.
          </p>

          <div className="hero-buttons">
            <button onClick={handlePlay}>
              ▶ Play
            </button>

            <button onClick={handleMoreInfo}>
              More Info
            </button>
          </div>
        </div>
      ) : (
        <div className="video-container">
          <button
            className="close-button"
            onClick={handleClose}
          >
            ✕
          </button>

          <video controls autoPlay>
            <source
              src="https://www.w3schools.com/html/mov_bbb.mp4"
              type="video/mp4"
            />
            Your browser does not support video.
          </video>
        </div>
      )}
      

       {showInfo && (
        <div className="info-modal">
          <div className="info-content">

            <button
              className="info-close"
              onClick={handleCloseInfo}
            >
              ✕
            </button>

            <h2>Stranger Things</h2>

            <p>
              A group of friends discovers mysterious events
              happening in their small town while searching
              for their missing friend.
            </p>

            <p>
              <strong>Genre:</strong> Sci-Fi, Drama, Mystery
            </p>

            <p>
              <strong>Rating:</strong> 8.7/10
            </p>

          </div>
        </div>
      )}

    </section>
  )
}

export default Hero