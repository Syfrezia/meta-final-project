import { Card } from "react-bootstrap";
import { useMediaQuery } from "react-responsive";
import renderStars from "../helpers/renderStars";
import { FaStar, FaStarHalf } from "react-icons/fa";

const ReviewCard = ({ testimonial }) => {
  const userRating = renderStars(testimonial.rating, FaStar, FaStarHalf);

  const isTablet = useMediaQuery({ maxWidth: 991 });

  return (
    <Card
      className="p-3 rounded-4 border shadow font-karla"
      style={isTablet ? { height: "fit-content" } : { height: "22rem" }}
    >
      <div className="d-flex align-items-center gap-3">
        <img
          src={testimonial.picture}
          alt={testimonial.name}
          width={100}
          className="rounded-4"
        />
        <p className="d-flex flex-wrap fw-semibold">{testimonial.name}</p>
      </div>
      <div className="mt-3 d-flex justify-content-center text-pri-yellow fs-4">
        {userRating}
      </div>
      <div className="mt-2 text-sec-black">{testimonial.review}</div>
    </Card>
  );
};

export default ReviewCard;
