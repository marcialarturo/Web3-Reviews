## Web 3 Restaurant Reviews

A decentralized review system built on blockchain.

### Problem:

There are many restaurant review platforms available, but they are often centralized and lack transparency. Users cannot be sure if reviews are authentic, and restaurant owners have limited control over their reputation on these platforms. Additionally, traditional review platforms are often limited to fiat currency, making international transactions difficult and costly.

# Technologies Used
- `TableLand` made our work easy with the Ethereum network. This allows us to work with a relational database to store Restaurant and metadata for EVM chains like Ethereum. We will definitely keep using complex TableLand functions in the future.
- `Polygon Mumbai Network` enables Book Swap application to be a scalable platform with fast transactions. We deployed our app on the Gnosis Network.


- `spheron` for data storage on IPFS that generates a transaction hash used to create an NFT of a photo.
- `Tellor` to request Restaurant business data. This tips the data provider and returns the data in a timely manner. All contracts for Tellor https://docs.tellor.io/tellor/the-basics/contracts-reference#filecoin-fvm Tellor: To get data from Yelp API so i can get prices, & hours
  For Tellor we used the playground contract to interact as our test token contract.
  We requested data using the RickAndMorty is UsingTellor.

We used the IAutopay to tip the data user provider.
We used the TellorFlex to staking to become a data user provider.
We used the IERC20 to transferFrom tokens fromone user to another one and to get the balance of an account.

Here are all our transactions ids:
Contract Interaction:
https://hyperspace.filfox.info/en/tx/0x559ccad2ea1250dfdb845dc70f6e62632e12eb5572e5d9a3177112c60eb0fb49

https://hyperspace.filfox.info/en/tx/0x62b0d06f12170c784e03569e1d5ac30dbc513d942e160c22e20f161eeac756e7

https://hyperspace.filfox.info/en/tx/0x4c2110f6cbe7281821de766e5d456e244e078bfaaea83f4009e411fd991b49c0

Faucet
https://hyperspace.filfox.info/en/tx/0x6f8212d3df1c84d886bd5dfa786307e57101ad300fa241a3f31566da075b13fe

Submit Value
https://hyperspace.filfox.info/en/tx/0xfb003b484687c4211f18e2719b04ebf2c04c3881a17477ad0637a9b01efe546f

Tip: https://hyperspace.filfox.info/en/tx/0xeeec791142f013977fc94aafe2a81eb8eaaf048540e738139bc124f0425d5393

Approve TRBP Spending : https://hyperspace.filfox.info/en/tx/0x9280458a410bf1403ff2b2f62c55c41403ee7cc5630a003843e8eba33493ab69

Deposit Stake:
https://hyperspace.filfox.info/en/tx/0xd92c65549586d62224661738f10e58efa03b67ec00e921634a7d65dd247cbe15

Submit Value, InvokeContract
https://hyperspace.filfox.info/en/tx/0xfb003b484687c4211f18e2719b04ebf2c04c3881a17477ad0637a9b01efe546f

Contract deployment
https://hyperspace.filfox.info/en/tx/0x7893d4c934fed8d30adbe7270c40518f8d9f24793c5ed5064ba719128d3776eb


* `Hyperlane` connects our application across OptimismGoerli and Polygon Mumbai Network. This allows users to interact with our application from both either network which reduces the number of hoops users have to jump through just to use our app in multiple chains, get to your app.
  We deployed to HyperSpace our contract is 0x36Df2Cb62B988263143e6aEA32cbc7844EAEE87C
  https://beryx.zondax.ch/v1/search/fil/hyperspace/address/f410fg3psznrltcbggfb6nlvdfs6hqrhk52d47ngovpy

- `OptimismGoerli Network` enables Book Swap application to be a scalable platform with fast transactions. We deployed our app on the Alfajores Network.



- `Optimism Network` enables our app to be secure and cost-effective. We deployed our app on the Optimism Network

It's about abstracting away the complexity of navigating between chains, and letting you and your users simply focus on your app. Here Hyperlane plays a important part as it help the platforms to be function on multiple chains, thus being true to the original purpose of being easy to access. Here, we use QueryAPI provided by hyperlane to call function across both moonbase alpha and goerli testnets.

- `Valist` facilitated the process of distribution of our in a secure way.

- `TableLand` made our work easy with the Ethereum network. This allows us to work with a relational database to store Employment references and metadata for EVM chains like Ethereum. We will definitely keep using complex TableLand functions in the future.

- `XMTP` facilitated the process of communication between employers and employees, especially for important employment documents. XMTP allows our users to request employment letters and documents in and seamless and secure way.

- `Covalent API` was really helpful for users' donations and tips. This facilitated the retrieval of users’ NFTs and smart contract transactions. The Covalent API endpoints to get all NFTs balance and metadata from a wallet address such as images, contracts name, NFTs images, and balances.

* `IPFS NFTStorage` for data storage on IPFS that generates a transaction hash used to create an NFT of a photo.

* `textile/eth-storage`: facilitated a fast way to store metadata for NFTs such: as names, locations, description, images, wallet addresses, and more. It was perfect for our use case to save their needs on the textile storage.

* `NFTPort` smooths the path of the minting and donating process and eliminates the high transaction fees. Our users will not pay anything for donating NFTs or minting.

* `Solidity` for the smart contract.
* `OpenZeppelin ERC721` we use the ERC721 template for faster development of our smart contract.

* `Hardhat` for local blockchain development.

* `React Js, Material-ui, Web3` React Js for the frontend, Material-ui, and Web3 to connect to the blockchain.

# DEMO

The Burger Joint
Fast Food Italian Organic


Taco Bell Cantina
98-102 Queens Blvd, Queens, NY 11374
http://www.tacobell.com
Fast Food, Mexican, Tacos, Drinks

### Solution:

Restaurant Reviews web3 is a decentralized platform that allows users to leave verified reviews on restaurants and enables restaurant owners to manage their reputation on the platform. The use of blockchain technology ensures that reviews are authentic, immutable, and transparent. Additionally, users can pay for services and leave tips using cryptocurrencies, making transactions fast and affordable regardless of location. With Restaurant Reviews web3, users can trust that the reviews they read are genuine, while restaurant owners can be confident that their reputation is being managed fairly and accurately.

# Funtionalities

Bussiness informations and reviews are stored in the block's MPT. When a client want to post a bussiness or a review, the client need to pay the transaction fee to the miner.

1. A Client can post a bussiness or a review with a transaction fee.
2. A Minner can take a transaction, publish a block and take the transaction fee.

```
  // 1. Post /business
  Req:
  {
    business_name: “KO Ramen”,
    business_location: “San Francisco”,
    business_tag: “Restaurant”,
  }
  Res:
  {
    business_id: 1
  }
  // 2. Get /business?id=1
  Res:
  {
    average_rating: 3.4,
    reviews: [
    {
      rating: 4,
      comment: “Good restaurant”
    },
  {
    rating: 1,
    comment: “Bad restaurant”
  }]
  }
  3. Post /rate?id=1
  Req:
  {
    rating: 3,
    comment: “not bad”
  }
```

# How does the reviews get stored in blockchain?

Both reviews and business information are stored in the MPT of the block

# Who pay the transaction fee?

Users will have unlimited starting gas for now. And they will attach transaction fee when they submit a transaction.

# How it works

When a user create a transaction, the user will send the transaction to all its peers and peers will forward the transaction to their peers, so on and so forth.

### Local transaction pool:

When a miner recieve a transaction, it will store the transaction in the local transaction pool.
When a miner tries to create a block, it polls a pending transaction (Check if the transaction is already in the chain) from local transaction pool, and tries to solve PoW.
Once the miner succeed, it forward the new block to its peers.

### Client

Client is a node int

# Milestones

1. Build data structure for business info - [x]
2. Build data structure for transaction - [x]
3. Implement integrity using public / private key - [x]
4. Implement Post business
5. Implement Post business's review
6. Implement Get business's review
7. Build interactive front end

## Restaurant Reviews

All contracts for Tellor https://docs.tellor.io/tellor/the-basics/contracts-reference#filecoin-fvm
Tellor: To get data from Yelp API so i can get prices, & hours

This is to request data
requirements:

1. Correct implemenation install, connecting, retriving from tellr
2. Submitting a tip testnet ( when requestiond data u need to tip) 1 time tip
   remix connect to contract

autopay contract is use for approve from tellor Playground
first approve
then create
\_queryId:
\_amount:
\_queryData

u can also become a data provider
for all contracts specs https://docs.tellor.io/tellor/the-basics/contracts-overview

how to accomplish: numeric api response(api_req) => returns resp u can use it for any type data

- from scontract
- bytes memory \_queryData = abi.encode("numericType", abi.encode("YESP_API_URL", "ALL_INFO (specify return data)"));

### Polygon Deployed to

- https://mumbai.polygonscan.com/tx/0xb96d9bcfba43208473be388e7ab12ebd6b0a1c4af3c1710674d701cc2bcfba10
- https://mumbai.polygonscan.com/address/0x3B6EfecD4F05Cb607783a81981B7Aed95D6cc12c
- Contract address: 0x3B6EfecD4F05Cb607783a81981B7Aed95D6cc12c
- Tweet: https://twitter.com/byLionelMessi/status/1657580793160507392

## Scroll Alpha Network

- Deployed Cotract: 0x8d2b6A2f9063553cc86A78041cC7b3A979269a7B
- https://blockscout.scroll.io/tx/0xb8f3363fa00fd50f27096c7f93f178145000d1d87832cb16eb518cd374845910
- https://blockscout.scroll.io/address/0x8d2b6A2f9063553cc86A78041cC7b3A979269a7B

## How It's Made

This app makes use of the following software:

- `Polygon Mumbai Network` enables our application to be a scalable and secure platform with light-speed transactions. We have successfully deployed to the Polygon Mumba Network at contract address: `0x3B6EfecD4F05Cb607783a81981B7Aed95D6cc12c`

- `Scroll Alpha Network` for cheap transactions and a secure platform with light-speed transactions. We have successfully deployed to the Scroll Alpha Network at contract address: `0x8d2b6A2f9063553cc86A78041cC7b3A979269a7B`

- `The Graph`: we created a subgraph for indexing & fetching data on the chain, which is suitable for scaling

- `WorldCoin` makes sure users create only one Restaurant per person to avoid any scams. As well as, to create reviews.
- `IPFS NFTStorage`facilitated the storage of NFTS, details of the class, and metadata of every event class. We also save all the reviews, tags, class difficulty, class quality, and ratings.

- `NFTPort` smooths the path of the minting and donating process and eliminates the high transaction fees. Our users will not pay anything for donating NFTs or minting.
- `Solidity` for the smart contract.
- `OpenZeppelin ERC721` we use the ERC721 template for faster development of our smart contract.
- `Hardhat` for local blockchain development.
- `React Js, Material-ui, Web3` React Js for the frontend, Material-ui, and Web3 to connect to the blockchain.

### Polygon Deployed to

- https://mumbai.polygonscan.com/tx/0xb96d9bcfba43208473be388e7ab12ebd6b0a1c4af3c1710674d701cc2bcfba10
- https://mumbai.polygonscan.com/address/0x3B6EfecD4F05Cb607783a81981B7Aed95D6cc12c
- Contract address: 0x3B6EfecD4F05Cb607783a81981B7Aed95D6cc12c
- Tweet: https://twitter.com/byLionelMessi/status/1657580793160507392

## Scroll Alpha Network

- Deployed Contract: 0x8d2b6A2f9063553cc86A78041cC7b3A979269a7B
- https://blockscout.scroll.io/tx/0xb8f3363fa00fd50f27096c7f93f178145000d1d87832cb16eb518cd374845910
- https://blockscout.scroll.io/address/0x8d2b6A2f9063553cc86A78041cC7b3A979269a7B

## Requirements

Before you begin, you need to install the following tools:

- [Node (v18 LTS)](https://nodejs.org/en/download/)
- Yarn ([v1](https://classic.yarnpkg.com/en/docs/install/) or [v2+](https://yarnpkg.com/getting-started/install))
- [Git](https://git-scm.com/downloads)

## Quickstart

To get started with Scaffold-ETH 2, follow the steps below:

1. Clone this repo & install dependencies

```
git clone https://github.com/scaffold-eth/scaffold-eth-2.git
cd scaffold-eth-2
yarn install
```

2. Run a local network in the first terminal:

```
yarn chain
```

This command starts a local Ethereum network using Hardhat. The network runs on your local machine and can be used for testing and development. You can customize the network configuration in `hardhat.config.ts`.

3. On a second terminal, deploy the test contract:

```
yarn deploy
```

This command deploys a test smart contract to the local network. The contract is located in `packages/hardhat/contracts` and can be modified to suit your needs. The `yarn deploy` command uses the deploy script located in `packages/hardhat/deploy` to deploy the contract to the network. You can also customize the deploy script.

4. On a third terminal, start your NextJS app:

```
yarn start
```

Visit your app on: `http://localhost:3000`. You can interact with your smart contract using the contract component or the example ui in the frontend. You can tweak the app config in `packages/nextjs/scaffold.config.ts`.

Run smart contract test with `yarn hardhat:test`

- Edit your smart contract `YourContract.sol` in `packages/hardhat/contracts`
- Edit your frontend in `packages/nextjs/pages`
- Edit your deployment scripts in `packages/hardhat/deploy`

## Deploying your Smart Contracts to a Live Network

Once you are ready to deploy your smart contracts, there are a few things you need to adjust.

1. Select the network

By default, `yarn deploy` will deploy the contract to the local network. You can change the defaultNetwork in `packages/hardhat/hardhat.config.ts.` You could also simply run `yarn deploy --network target_network` to deploy to another network.

Check the `hardhat.config.ts` for the networks that are pre-configured. You can also add other network settings to the `hardhat.config.ts file`. Here are the [Alchemy docs](https://docs.alchemy.com/docs/how-to-add-alchemy-rpc-endpoints-to-metamask) for information on specific networks.

Example: To deploy the contract to the Sepolia network, run the command below:

```
yarn deploy --network sepolia
```

2. Generate a new account or add one to deploy the contract(s) from. Additionally you will need to add your Alchemy API key. Rename `.env.example` to `.env` and fill the required keys.

```
ALCHEMY_API_KEY="",
DEPLOYER_PRIVATE_KEY=""
```

The deployer account is the account that will deploy your contracts. Additionally, the deployer account will be used to execute any function calls that are part of your deployment script.

You can generate a random account / private key with `yarn generate` or add the private key of your crypto wallet. `yarn generate` will create a random account and add the DEPLOYER_PRIVATE_KEY to the .env file. You can check the generated account with `yarn account`.

3. Deploy your smart contract(s)

Run the command below to deploy the smart contract to the target network. Make sure to have some funds in your deployer account to pay for the transaction.

```
yarn deploy --network network_name
```

4. Verify your smart contract

You can verify your smart contract on Etherscan by running:

```
yarn verify --network network_name
```
