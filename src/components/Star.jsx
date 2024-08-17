import React from "react";
import StarIcon from "@mui/icons-material/Star";
import StarHalfIcon from "@mui/icons-material/StarHalf";
import StarOutlineIcon from "@mui/icons-material/StarOutline";

const Star = ({ stars, reviews }) => {
  //three type of starts - fully filled, half filled, not filled
  const rating = Array.from({ length: 5 }, (elem, index) => {
    let number = index + 0.5;
    return (
      <span key={index}>
        {stars >= index + 1 ? (
          <StarIcon style={{ color: "#FEC108" }} />
        ) : stars >= number ? (
          <StarHalfIcon style={{ color: "#FEC108" }} />
        ) : (
          <StarOutlineIcon style={{ color: "#FEC108" }} />
        )}
      </span>
    );
  });
  return (
    <>
      <div>{rating} Customer reviews</div>
    </>
  );
};

export default Star;
