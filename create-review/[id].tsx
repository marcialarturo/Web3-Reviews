import React, { useState } from "react";

function CreateReview(props) {
  const [review, setReview] = useState("");
  const [rating, setRating] = useState("");

  const handleSubmit = event => {
    event.preventDefault();
  };

  return (
    <div className="flex justify-center mt-8">
      <div className="rounded overflow-hidden shadow-lg" style={{ width: "500px", padding: "3rem" }}>
        <p className="text-lg text-center font-bold mb-2 pb-4">Create Review</p>

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="name">
              Enter your review
            </label>
            <input
              className="border rounded py-2 px-3 w-full"
              id="review"
              type="text"
              value={review}
              onChange={event => setReview(event.target.value)}
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="location">
              Rate the restaurant
            </label>
            <input
              className="border rounded py-2 px-3 w-full"
              id="rating"
              type="text"
              value={rating}
              onChange={event => setRating(event.target.value)}
            />
          </div>

          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" type="submit">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default CreateReview;
