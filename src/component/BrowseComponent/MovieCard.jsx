import { IMG_CDN_URL } from "../../utils/constant"

const MovieCard = ({posterPath,onClick}) => {
  if(!posterPath)return null;
  return (
    <div onClick={onClick} className="cursor-pointer pb-5  ">
      <div className="w-24 md:w-50 pr-4  ">
        <img className="rounded-xl border-2  border-red-600 hover:border-cyan-400 md:border-3 md:border-red-500 md:hover:border-cyan-500 "  src={IMG_CDN_URL+posterPath} alt="Movie poster"  />
      </div>
    </div>
  )
}

export default MovieCard