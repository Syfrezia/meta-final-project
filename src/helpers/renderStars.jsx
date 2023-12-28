const renderStars = (rating, FullStarIcon, HalfStarIcon) => {
  const fullStars = Math.floor(rating);
  const halfStar = rating - fullStars === 0.5;

  const stars = [];
  for (let i = 0; i < fullStars; i++) {
    stars.push(<FullStarIcon key={i} />);
  }
  if (halfStar) {
    stars.push(<HalfStarIcon key={fullStars} />);
  }

  return stars;
};

export default renderStars;
