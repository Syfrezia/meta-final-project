import { Card } from "react-bootstrap";
import { useMediaQuery } from "react-responsive";
import { FaStar, FaStarHalf } from "react-icons/fa";

const ReviewCard = ({ testimonial }) => {
  const renderStars = (rating) => {
    const fullStars = Math.floor(rating);
    const halfStar = rating - fullStars === 0.5;

    const stars = [];
    for (let i = 0; i < fullStars; i++) {
      stars.push(<FaStar key={i} />);
    }
    if (halfStar) {
      stars.push(<FaStarHalf key={fullStars} />);
    }

    return stars;
  };

  const userRating = renderStars(testimonial.rating);

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
      <div className="mt-3 d-flex justify-content-center text-warning fs-4">
        {userRating}
      </div>
      <div className="mt-2 text-sec-black">{testimonial.review}</div>
    </Card>
  );
};

export default ReviewCard;
