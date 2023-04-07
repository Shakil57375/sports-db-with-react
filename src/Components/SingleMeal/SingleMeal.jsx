import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const SingleMeal = ({ mealDetail }) => {
  console.log(mealDetail)
  const [fold, setFold] = useState(true);
  const {strInstructions, strMealThumb, strMeal } = mealDetail;
  const navigate = useNavigate();
  const handleGoBack = () =>{
    navigate(-1);
  }
  return (
    <div>
      <div className="flex flex-col max-w-screen-lg overflow-hidden bg-white border rounded shadow-sm lg:flex-row sm:mx-auto">
        {/* Image Container */}
        <div className=" lg:w-1/2 h-full">
          <img
            src={strMealThumb}
            alt="book cover"
            className="object-cover w-full  lg:h-full"
          />
        </div>
        {/* Details Container */}
        <div className=" p-8 bg-white lg:p-16 lg:pl-10 lg:w-1/2 relative">
          <h5 className="mb-3 text-3xl font-extrabold leading-none sm:text-4xl">
            {strMeal}
          </h5>
          {fold ? (
            <>
              <p className=" text-gray-500">
                {strInstructions.substring(0, 100)}.....
              </p>
              <span
                className="cursor-pointer text-blue-600 "
                onClick={() => setFold(!fold)}
              >
                Read More
              </span>
            </>
          ) : (
            <>
              <p className=" text-gray-900 ">{strInstructions}.....</p>
              <span
                className="cursor-pointer text-blue-600 "
                onClick={() => setFold(!fold)}
              >
                Read Less
              </span>
            </>
          )}
          <button onClick={handleGoBack} className="btn absolute bottom-3 inline-block">Go Back</button>
        </div>
      </div>
    </div>
  );
};

export default SingleMeal;
