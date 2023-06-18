import React, { useState } from "react";
import { useRouter } from "next/router";
import RestaurantHeader from "~~/components/RestaurantHeader";
import ReviewComponent from "~~/components/ReviewComponent";

function Restaurant(props) {
  const router = useRouter();
  const { id } = router.query;

  const getReviews = () => {
    //  fetch reviews by id
  };

  const reviews = [
    {
      id: "1",
      img: "https://i.pravatar.cc/100",
      walletId: "x2342...2342",
      createdDate: "12/04/2022",
      rating: 4,
      review: "The food was delicious here. Highly recommended!",
    },
    {
      id: "2",
      img: "https://i.pravatar.cc/100",
      walletId: "f3465...2354",
      createdDate: "05/07/2022",
      rating: 5,
      review:
        "Absolutely loved this place! The food was amazing, the service was excellent, and the atmosphere was perfect. Highly recommend! ",
    },
    {
      id: "3",
      img: "https://i.pravatar.cc/100",
      walletId: "a9876...6789",
      createdDate: "20/09/2022",
      rating: 3,
      review:
        "The food here was decent, but nothing special. The service was good, though, and the prices were reasonable.",
    },
    {
      id: "4",
      img: "https://i.pravatar.cc/100",
      walletId: "g1290...7890",
      createdDate: "11/10/2022",
      rating: 4,
      review:
        "I had a great experience at this restaurant. The food was delicious, and the staff were friendly and attentive. I would definitely come back!",
    },
    {
      id: "5",
      img: "https://i.pravatar.cc/100",
      walletId: "p2567...1234",
      createdDate: "30/11/2022",
      rating: 2,
      review:
        "I was really disappointed with my experience here. The food was bland and overpriced, and the service was slow and inattentive.",
    },
    {
      id: "6",
      img: "https://i.pravatar.cc/100",
      walletId: "m3456...4567",
      createdDate: "03/01/2023",
      rating: 5,
      review:
        "This restaurant is amazing! The food is some of the best I've ever had, and the service is exceptional. I can't recommend it enough!",
    },
  ];

  return (
    <>
      <RestaurantHeader />

      <div className="container">
        <div className="flex gap-3 pt-10 pl-10">
          <button
            className="bg-red-500 hover:bg-red-700 text-white   w-60  font-bold py-3 px-4 rounded inline-flex items-center text-xl"
            onClick={() => router.push(`/create-review/${id}`)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
              />
            </svg>

            <span className="pl-2">Write a review</span>
          </button>

          <button className="bg-transparent border border-gray-400 hover:bg-yellow-300  w-40  font-bold py-2 px-4  inline-flex items-center hover:rounded">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M6.827 6.175A2.31 2.31 0 015.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 00-1.134-.175 2.31 2.31 0 01-1.64-1.055l-.822-1.316a2.192 2.192 0 00-1.736-1.039 48.774 48.774 0 00-5.232 0 2.192 2.192 0 00-1.736 1.039l-.821 1.316z"
              />
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M16.5 12.75a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zM18.75 10.5h.008v.008h-.008V10.5z"
              />
            </svg>

            <span className="pl-2">Add photo</span>
          </button>

          <button className="bg-transparent border border-gray-400 hover:bg-yellow-300  w-40  font-bold py-2 px-4  inline-flex items-center hover:rounded">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M9 8.25H7.5a2.25 2.25 0 00-2.25 2.25v9a2.25 2.25 0 002.25 2.25h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25H15m0-3l-3-3m0 0l-3 3m3-3V15"
              />
            </svg>

            <span className="pl-2">Share</span>
          </button>

          <button className="bg-transparent border border-gray-400 hover:bg-yellow-300  w-40  font-bold py-2 px-4  inline-flex items-center hover:rounded">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z"
              />
            </svg>

            <span className="pl-2">Save</span>
          </button>
        </div>

        {reviews?.length > 0
          ? reviews.map(review => <ReviewComponent review={review} key={review.id} />)
          : "No Reviews"}
      </div>
    </>
  );
}

export default Restaurant;
