import { Link } from "react-router-dom";

import Nav from "./Nav";
import { useEffect, useState } from "react";
import axios from "axios";

const AddUpcoming = () => {
  const [image, setImage] = useState("");
  const [title, setTitle] = useState("");
  const [img, setImg] = useState("");
  const [director, setDirector] = useState("");
  const [displayImg, setDisplayImg] = useState(
    "https://res.cloudinary.com/djb3n17c0/image/upload/v1688627048/JSR_PRODUCTION_HOUSE_LOGO_PNG_FINAL_kkanqx.png"
  );
  const [displayMsg, setDisplayMsg] = useState(false);

  const submitData = () => {
    const data = new FormData();
    data.append("file", image);
    data.append("upload_preset", "pwn94dct");
    data.append("cloud_name", "doj6ebjik");

    fetch("https://api.cloudinary.com/v1_1/doj6ebjik/image/upload", {
      method: "post",
      body: data,
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setImg(data?.secure_url);
        // setDisplayImg(data?.secure_url)
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    if (img != "") setDisplayImg(img);
  }, [img]);

  const URL = "https://jsr-backend.onrender.com/Upcoming";
  const PostData = {
    title,
    img,
    director
  };

  const addData = async () => {
    axios
      .post(URL, PostData)
      .then((res) => {
        console.log("Data Posted Successfully", res.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <>
      <Nav/>
      <div className="pl-10 pt-10">
        <input
          type="file"
          onChange={(e) => {
            setImage(e.target.files[0]);
          }}
        />
        <button
          className=" h-9 w-24 bg-blue-700 rounded-lg text-white"
          onClick={submitData}
        >
          Upload
        </button>
      </div>

      <div className="flex flex-row">
        <div className=" pl-10">
          <div className="pt-10 flex flex-row">
            title :
            <div className="pl-[66px]">
              <input
                onChange={(e) => setTitle(e.target.value)}
                className="h-9 text-center w-[270px] rounded-lg"
                type="title:"
                placeholder="title : "
              />
            </div>
          </div>


          <div className="pt-5 flex flex-row">
            Director :
            <div className="pl-10">
              <input
                onChange={(e) => setDirector(e.target.value)}
                className="h-8 text-center w-[270px] rounded-lg"
                type="title:"
                placeholder="Director :"
              />
            </div>
          </div>

          <div className="pt-8">
            <Link to={displayMsg==false ? "/Upcoming" : "/"}>
              <button
                onClick={() => {
                  if(title == "" || director == "" || img == ""){
                    setDisplayMsg(true)
                  }else{
                  addData();
                  }
                }}
                className="h-10 w-24 bg-blue-800 rounded-lg text-white"
              >
                Add New
              </button>
            </Link>
            {displayMsg && <p className="pt-4 text-red-700">*All fields are mandatory</p>}
          </div>
        </div>

        <div className="pl-[100px] flex justify-center h-[350px] w-[550px]">
          <img src={displayImg} alt="sdfgh" />
        </div>
        
      </div>
    </>
  );
};

export default AddUpcoming;
