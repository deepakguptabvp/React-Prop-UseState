import React from "react";
import StarRating from "./StarRating";

const starList = ["⭐", "⭐", "⭐", "⭐", "⭐"];
// const rating =

const App = () => {
  return (
    <div className="items-center justify-center flex flex-col m-2 p-4">
      <h1> Star Rating App</h1>
       
      <StarRating starList={starList} />
    </div>
  );
};

export default App;
