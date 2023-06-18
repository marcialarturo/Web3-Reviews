const contracts = {
  31337: [
    {
      name: "localhost",
      chainId: "31337",
      contracts: {
        RestaurantReviews: {
          address: "0xDc64a140Aa3E981100a9becA4E685f962f0cF6C9",
          abi: [
            {
              anonymous: false,
              inputs: [
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "id",
                  type: "uint256",
                },
                {
                  indexed: false,
                  internalType: "string",
                  name: "name",
                  type: "string",
                },
                {
                  indexed: false,
                  internalType: "string",
                  name: "url_ipfs",
                  type: "string",
                },
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "rating",
                  type: "uint256",
                },
                {
                  indexed: false,
                  internalType: "string",
                  name: "tableLand",
                  type: "string",
                },
              ],
              name: "newRestaurant",
              type: "event",
            },
            {
              inputs: [
                {
                  internalType: "string",
                  name: "_name",
                  type: "string",
                },
                {
                  internalType: "string",
                  name: "_url_ipfs",
                  type: "string",
                },
                {
                  internalType: "uint256",
                  name: "_rating",
                  type: "uint256",
                },
                {
                  internalType: "string",
                  name: "_tableLand",
                  type: "string",
                },
              ],
              name: "addRestaurant",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint256",
                  name: "_restaurantId",
                  type: "uint256",
                },
                {
                  internalType: "string",
                  name: "_url_ipfs",
                  type: "string",
                },
              ],
              name: "addReview",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [],
              name: "getAllRestaurants",
              outputs: [
                {
                  components: [
                    {
                      internalType: "uint256",
                      name: "id",
                      type: "uint256",
                    },
                    {
                      internalType: "string",
                      name: "name",
                      type: "string",
                    },
                    {
                      internalType: "string",
                      name: "url_ipfs",
                      type: "string",
                    },
                    {
                      internalType: "uint256[]",
                      name: "reviewIds",
                      type: "uint256[]",
                    },
                    {
                      internalType: "uint256",
                      name: "rating",
                      type: "uint256",
                    },
                    {
                      internalType: "string",
                      name: "tableLand",
                      type: "string",
                    },
                  ],
                  internalType: "struct RestaurantReviews.Restaurant[]",
                  name: "",
                  type: "tuple[]",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint256",
                  name: "_restaurantId",
                  type: "uint256",
                },
              ],
              name: "getRestaurant",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
                {
                  internalType: "string",
                  name: "",
                  type: "string",
                },
                {
                  internalType: "string",
                  name: "",
                  type: "string",
                },
                {
                  internalType: "uint256[]",
                  name: "",
                  type: "uint256[]",
                },
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint256",
                  name: "_restaurantId",
                  type: "uint256",
                },
              ],
              name: "getReviewsByRestaurant",
              outputs: [
                {
                  internalType: "uint256[]",
                  name: "",
                  type: "uint256[]",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "restaurantCount",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              name: "restaurants",
              outputs: [
                {
                  internalType: "uint256",
                  name: "id",
                  type: "uint256",
                },
                {
                  internalType: "string",
                  name: "name",
                  type: "string",
                },
                {
                  internalType: "string",
                  name: "url_ipfs",
                  type: "string",
                },
                {
                  internalType: "uint256",
                  name: "rating",
                  type: "uint256",
                },
                {
                  internalType: "string",
                  name: "tableLand",
                  type: "string",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "reviewCount",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              name: "reviews",
              outputs: [
                {
                  internalType: "uint256",
                  name: "id",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "restaurantId",
                  type: "uint256",
                },
                {
                  internalType: "string",
                  name: "url_ipfs",
                  type: "string",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
          ],
        },
      },
    },
  ],
} as const;

export default contracts;
