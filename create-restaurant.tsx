import React, { useState } from "react";
import { apiKey } from "../components/APIKEYS";
import { Database } from "@tableland/sdk";
import axios from "axios";
import { File, NFTStorage } from "nft.storage";
import { useScaffoldContractWrite } from "~~/hooks/scaffold-eth";

function CreateRestaurant(props) {
  const [name, setName] = useState("");
  const [tableName, setTableName] = useState("");
  console.log("🚀 ~ file: create-restaurant.tsx:11 ~ CreateRestaurant ~ tableName:", tableName);
  const [location, setLocation] = useState("");
  const [website, setWebsite] = useState("");
  const [attributes, setAttributes] = useState("");
  const [image, setImage] = useState("");
  const [ipf_url, setIpf_url] = useState("");
  const [rating, setTating] = useState("5");

  const [imageName, setImageName] = useState("");

  const createTable = async () => {
    console.log("createTable:");
    // Default to grabbing a wallet connection in a browser
    const db = new Database();

    // This is the table's `prefix`--a custom table value prefixed as part of the table's name
    const prefix = "sdk_table";
    const { meta: create } = await db.prepare(`CREATE TABLE ${prefix} (id integer primary key, val text);`).run();

    // The table's `name` is in the format `{prefix}_{chainId}_{tableId}`
    const t = create.txn; // e.g., my_sdk_table_80001_311
    console.log("+_____t:", t);
    const { name } = create.txn; // e.g., my_sdk_table_80001_311
    console.log("🚀 ~ file: create-restaurant.tsx:32 ~ createTable ~ name:", name);
    setTableName(name);
  };

  const { writeAsync, isLoading } = useScaffoldContractWrite({
    contractName: "RestaurantReviews",
    functionName: "addRestaurant",
    args: [name, ipf_url, rating, tableName],
  });

  const handleImage = async event => {
    setImageName(event.target.files[0].name);
    const updataData = new FormData();
    updataData.append("file", event.target.files[0]);
    const res = await axios.post("https://api.pinata.cloud/pinning/pinFileToIPFS", updataData, {
      maxContentLength: "Infinity",
      headers: {
        "Content-Type": "multipart/form-data",
        pinata_api_key: "2f7a99fef33b2783bde7",
        pinata_secret_api_key: "9082e887ce9262fcf525cd85b5a0da348a5b1fc3fb725bacdd5af3d80a051d5c",
      },
    });
    setImage("https://gateway.pinata.cloud/ipfs/" + res.data.IpfsHash);
  };

  const handleSubmit = event => {
    event.preventDefault();
  };

  const getDay = async () => {
    const d = new Date();
    const ye = new Intl.DateTimeFormat("en", { year: "numeric" }).format(d);
    const mo = new Intl.DateTimeFormat("en", { month: "short" }).format(d);
    const da = new Intl.DateTimeFormat("en", { day: "2-digit" }).format(d);
    return `${mo}-${da}-${ye}`;
  };

  const saveToNFTStorage = async event => {
    event.preventDefault();
    try {
      const createdDate = await getDay();
      const obj = {
        name,
        location,
        website,
        attributes,
        createdDate,
        image,
      };
      const client = new NFTStorage({ token: apiKey });
      const metadata = await client.store({
        name: name ? name : "Restaurant House",
        description: JSON.stringify(obj),
        image: new File([image], "imageName", { type: "image/*" }),
      });

      if (metadata) {
        console.log("metadata URL", metadata?.url);
        const url = metadata?.url.substring(7); //  bafyreifeiksc7pfbdex5fhes2inqdail7cvf3jfphugtpyzw4rpzte3rca/metadata.json
        const fullUrl = `https://cloudflare-ipfs.com/ipfs/${url}`;
        setIpf_url(fullUrl);
        console.log("fullUrl", fullUrl);

        // const saveToContract = await contract.createGroup(fullUrl, targetAmmount);
        // const tx = await saveToContract.wait();
        // console.log("tx", tx);
        // history.push("/");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleWrite = async event => {
    event.preventDefault();
    await writeAsync();
  };

  return (
    <div className="flex justify-center ">
      <div className="rounded overflow-hidden shadow-lg" style={{ width: "500px", padding: "3rem" }}>
        <p className="text-lg text-center font-bold mb-2 pb-4">Create Restaurant </p>

        <form onSubmit={saveToNFTStorage}>
          <img
            style={{
              width: "150px",
              top: "0",
              left: "0",
            }}
            src={image ? image : "/assets/placeHolder.png"}
            alt="userBGimage"
          />
          <label htmlFor="formFileImage5">+ Add Restaurant Image</label>
          <div className="mb-4">
            <input
              type="file"
              id="formFileImage5"
              onChange={handleImage}
              defaultValue={image}
              style={{ display: "none" }}
              required
              className="border rounded py-2 px-3 w-full"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="name">
              Name
            </label>
            <input
              className="border rounded py-2 px-3 w-full"
              id="name"
              type="text"
              value={name}
              onChange={event => setName(event.target.value)}
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="location">
              Full Address (location)
            </label>
            <input
              className="border rounded py-2 px-3 w-full"
              id="location"
              type="text"
              value={location}
              onChange={event => setLocation(event.target.value)}
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="website">
              Website
            </label>
            <input
              className="border rounded py-2 px-3 w-full"
              id="website"
              type="text"
              value={website}
              onChange={event => setWebsite(event.target.value)}
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="attributes">
              Restaurant attributes separated by comma
            </label>
            <input
              className="border rounded py-2 px-3 w-full"
              id="attributes"
              type="text"
              value={attributes}
              onChange={event => setAttributes(event.target.value)}
            />
          </div>

          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" type="submit">
            Save
          </button>

          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={createTable}
          >
            createTable
          </button>

          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={handleWrite}
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default CreateRestaurant;
