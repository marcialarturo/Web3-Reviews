import React from "react";
import { Rating } from "react-simple-star-rating";
import Image from "next/image";

function ReviewComponent({ review }) {
  return (
    <div className="px-10">
      <figure className=" flex flex-col p-8  rounded-bl-lg md:border-b-0  dark:bg-gray-800 dark:border-gray-700 dark:text-white">
        <blockquote className="max-w-7xl mb-4 text-gray-500 lg:mb-8 dark:text-gray-400 ">
          {/*   HEADER */}
          <div className="mb-4">
            <figcaption className="flex items-center space-x-3">
              <Image className="rounded-full" src={review.img} alt="profile picture" width={100} height={100} />
              <div className="space-y-0.5 font-medium dark:text-white text-left">
                {/* <div>12Af...5AF3</div> */}
                <div>{review.walletId.slice(0, 5) + "..." + review.walletId.slice(39, 42)}</div>
                <div className="text-sm text-gray-500 dark:text-white-600">Verify by Worldcoin</div>
              </div>
            </figcaption>
          </div>

          {/*   BODY */}
          <div>
            <div className="flex items-center">
              <Rating
                initialValue={review.rating}
                readonly
                allowFraction
                size={35}
                emptyStyle={{ display: "flex" }}
                fillStyle={{ display: "-webkit-inline-box" }}
              />
              <span className="flex text-bold pl-4 ">{review.createdDate} </span>
            </div>

            <div className="p-2">
              <p className="text-lg">{review.review}</p>
            </div>
          </div>

          {/*   FOOTER */}
          <div className="flex gap-4">
            <button className="bg-transparent border border-gray-400  w-28  font-bold py-2 px-4  inline-flex items-center hover:rounded">
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
                  d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18"
                />
              </svg>
              <span className="pl-2">Useful</span>
            </button>

            <button className="bg-transparent border border-gray-400  w-28  font-bold py-2 px-4  inline-flex items-center hover:rounded">
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
                  d="M15.182 15.182a4.5 4.5 0 01-6.364 0M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z"
                />
              </svg>

              <span className="pl-2">Funny</span>
            </button>

            <button className="bg-transparent border border-gray-400  w-28  font-bold py-2 px-4  inline-flex items-center hover:rounded">
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
                  d="M6.633 10.5c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 012.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 00.322-1.672V3a.75.75 0 01.75-.75A2.25 2.25 0 0116.5 4.5c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 01-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 00-1.423-.23H5.904M14.25 9h2.25M5.904 18.75c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 01-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 10.203 4.167 9.75 5 9.75h1.053c.472 0 .745.556.5.96a8.958 8.958 0 00-1.302 4.665c0 1.194.232 2.333.654 3.375z"
                />
              </svg>

              <span className="pl-2">Cool</span>
            </button>
          </div>
        </blockquote>
      </figure>
    </div>
  );
}

export default ReviewComponent;
