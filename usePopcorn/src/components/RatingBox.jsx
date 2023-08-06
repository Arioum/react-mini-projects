import { useState } from "react";
import StarRating from "./StarRating";

const RatingBox = () => {
  const [movieRating, setMovieRating] = useState(0);
  return (
    <div>
      <StarRating maxRating={10} size={24} onSetRating={setMovieRating} />
      <p>This movie was rating {movieRating} stars</p>
    </div>
  );
};

export default RatingBox;
