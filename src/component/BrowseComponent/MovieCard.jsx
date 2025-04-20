import { IMG_CDN_URL } from "../../utils/constant"

const MovieCard = ({posterPath}) => {
  if(!posterPath)return null;
  return (
    <div>
      <div className="w-50 pr-4">
        <img className="rounded-xl "  src={IMG_CDN_URL+posterPath} alt="Movie Cart"  />
      </div>
    </div>
  )
}

export default MovieCard