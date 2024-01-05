import { Card } from "react-bootstrap";
import renderStars from "../helpers/renderStars";
import useCardHeight from "./hooks/useCardHeight";
import { FaStar, FaStarHalf } from "react-icons/fa";

const ReviewCard = ({ testimonial }) => {
  const userRating = renderStars(testimonial.rating, FaStar, FaStarHalf);

  const cardHeight = useCardHeight();

  return (
    <Card className="p-3 rounded-4 border shadow font-karla" style={cardHeight}>
      <div className="d-flex flex-wrap justify-content-center align-items-center gap-3">
        <img
          src={testimonial.picture}
          alt={testimonial.name}
          width={100}
          className="rounded-4"
        />
        <p className="d-flex flex-wrap fw-semibold fs-6">{testimonial.name}</p>
      </div>
      <div className="mt-3 d-flex justify-content-center text-pri-yellow fs-4">
        {userRating}
      </div>
      <div className="mt-2 text-sec-black fs-6">{testimonial.review}</div>
    </Card>
  );
};

export default ReviewCard;
