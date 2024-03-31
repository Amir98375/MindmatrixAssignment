import React, { useState } from "react";
import "../App.css";
export const ImageCard = () => {
  const [arr, setArray] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9]);
  return (
    <>
      <div className="container">
        {arr.map((el) => {
          return (
            <div className="imageContainer">
              <img
                className="myImage"
                src="https://images.unsplash.com/photo-1707343848610-16f9afe1ae23?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              />
              <h3 className="heading">Customize Title</h3>
              <div className="aboutTitle">Customise about the product</div>
               <div className="buttonClass"> <button>Show</button> <button>cart</button></div>
            </div>
          );
        })}
      </div>
    </>
  );
};
