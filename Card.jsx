import { RiDeleteBinLine } from "react-icons/ri";
import axios from "axios";

const Card = (data) => {
  const deleteURL = `https://jsr-backend.onrender.com/RProject/${data?.data?._id}`;
  const deleteCard = async () => {
    axios
      .delete(deleteURL)
      .then((res) => {
        console.log("Deleted Successfully:", res.data);
      })
      .catch((error) => {
        console.error("Error Deleting:", error);
      });
  };

  const deleteUpcomingURL = `https://jsr-backend.onrender.com/Upcoming/${data?.data?._id}`;
  const deleteUCard = async () => {
    axios
      .delete(deleteUpcomingURL)
      .then((res) => {
        console.log("Deleted Successfully:", res.data);
      })
      .catch((error) => {
        console.error("Error Deleting:", error);
      });
  };

  const deleteFutureURL = `https://jsr-backend.onrender.com/Future/${data?.data?._id}`;
  const deleteFCard = async () => {
    axios
      .delete(deleteFutureURL)
      .then((res) => {
        console.log("Deleted Successfully:", res.data);
      })
      .catch((error) => {
        console.error("Error Deleting:", error);
      });
  };

  return (
    <>
      <div className="flex flex-col bg-gray-50">
        <div className="text-center">
          <a href={data?.data?.link ? data?.data?.link : ""}>
            <img
              className="w-60 h-64 pl-[60px] pt-12 md:w-60 md:h-72 xl:w-80 xl:h-[400px]"
              src={data?.data?.img}
              alt=""
            />
          </a>
          <div className="font2 pt-2 pb-4  lg:pt-2  w-56 lg:w-60 xl:w-72">
            <ul>
              <li className="font-bold text-lg">{data?.data?.title}</li>
            </ul>
          </div>
        </div>

        <p className="font2 pt-2 pb-4  lg:pt-2  w-56 lg:w-60 xl:w-72">
          <div className="flex items-start flex-col pt-2 text-base">
            {data?.data?.producer ? (
              <ul>
                <li className=" ">
                  <span className="font-semibold pl-7">Producer : </span>
                  {data?.data?.producer}
                </li>
              </ul>
            ) : null}
            <ul>
              <li className=" ">
                {" "}
                <span className="font-semibold pl-7">Director : </span>
                {data?.data?.director}
              </li>
            </ul>
            {data?.data?.dop ? (
              <ul>
                <li className=" ">
                  {" "}
                  <span className="font-semibold pl-7">DOP : </span>
                  {data?.data?.dop}
                </li>
              </ul>
            ) : null}

            <div className=" pl-8">
              <RiDeleteBinLine
                onClick={() => {
                  if(data?.data?.title && data?.data?.director && data?.data?.producer && data?.data?.dop && data?.data?.link && data?.data?.img)
                  {deleteCard();}

                  else{ 
                    deleteUCard();
                    deleteFCard();
                  }
                }}
                className="h-12 text-red-700 w-12 cursor-pointer"
              />
            </div>
          </div>
        </p>
      </div>
    </>
  );
};

export default Card;
