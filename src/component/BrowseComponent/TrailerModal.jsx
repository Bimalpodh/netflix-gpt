import React, { useEffect, useState } from "react";

const TrailerModal = ({ movieId, onClose }) => {
  const [trailerKey, setTrailerKey] = useState(null);

  useEffect(() => {
    const fetchTrailer = async () => {
      const res = await fetch(
        `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`,
        {
          headers: {
            Authorization: `Bearer ${import.meta.env.VITE_TMDB_KEY}`,
          },
        }
      );
      const data = await res.json();
      const trailer = data.results.find(
        (vid) => vid.type === "Trailer" && vid.site === "YouTube"
      );
      setTrailerKey(trailer?.key);
    };

    fetchTrailer();

    const handleEsc = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleEsc);

    return () => window.removeEventListener("keydown", handleEsc);
  }, [movieId]);

  return (
    <div className="fixed top-0 left-0 w-full h-full backdrop-blur-sm bg-black/60 flex items-center justify-center z-50">

      <div className=" bg-black rounded-lg shadow-lg w-[80%] md:w-[90%">
        <button className="text-white float-right p-2" onClick={onClose}>
          X
        </button>
        {trailerKey ? (
          <iframe
            className="w-full aspect-video rounded-b-lg"
            src={`https://www.youtube.com/embed/${trailerKey}?autoplay=1&rel=0`}
            title="Trailer"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        ) : (
          <div className="w-full aspect-video bg-gray-800 rounded-b-lg relative overflow-hidden">
            <div className="absolute inset-0 animate-pulse bg-gradient-to-r from-gray-800 via-gray-700 to-gray-800 opacity-60"></div>
            <div className="text-center text-gray-400 md:pt-28">
              Loading Trailer...
            </div>
            <div className="flex justify-center items-center aspect-video">
              <div className="w-12 h-12   border-4 border-white border-t-transparent rounded-full animate-spin"></div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default TrailerModal;
