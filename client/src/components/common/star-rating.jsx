import { StarIcon } from "lucide-react";
import { Button } from "../ui/button";

function StarRatingComponent({ rating, handleRatingChange }) {
  return (
    <div className="flex gap-1">
      {[1, 2, 3, 4, 5].map((star) => (
        <Button
          key={star}
          className={`p-1 transition-all rounded-full focus-visible:ring-2 ${
            star <= rating ? "text-yellow-400" : "text-gray-400"
          }`}
          variant="ghost"
          size="icon"
          onClick={handleRatingChange ? () => handleRatingChange(star) : null}
        >
          <StarIcon
            className={`w-6 h-6 transition-colors duration-300 ease-in-out ${
              star <= rating ? "fill-yellow-400" : "fill-gray-400"
            }`}
          />
        </Button>
      ))}
    </div>
  );
}

export default StarRatingComponent;
