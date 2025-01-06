import React, { useState } from "react";
import "./Rating.css";

const Rating = () => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  return (
    <div className="rating">
      {[1, 2, 3, 4, 5].map((star) => (
        <div
          key={star}
          className={`star ${hover >= star || rating >= star ? "highlighted" : ""}`}
          onClick={() => setRating(star)}
          onMouseEnter={() => setHover(star)}
          onMouseLeave={() => setHover(0)}
        >
          &#9733; {/* Unicode character for a star */}
        </div>
      ))}
    </div>
  );
};

export default Rating;
