import React from "react";
import style from "./Cards.module.scss";

const Cards = ({ results }) => {
  console.log(results);
  let display;
  if (results) {
    display = results.map((x) => {
      let { id, name, image, location, status } = x;
      return (
        <div key={id} className="col-4 mb-4 position-relative">
          <div className={style.cards}>
            <img src={image} alt="" className={`${style.img} img-fluid`} />
            <div className={style.content}>
              <div className="fs-4 fw-bold mb-4">{name}</div>
              <div className="fs-6">Last location</div>
              <div className="fs-5">{location.name}</div>
            </div>
          </div>
          {(() =>{
              if (status=== "Dead") {
                  return <div className={`${style.badge} badge bg-danger position-absolute `}>{status} </div>
              } else if(status==="Alive") {
                return <div className={`${style.badge} badge bg-success position-absolute `}>{status} </div>
              } else{
                return <div className={`${style.badge} badge bg-secondary position-absolute `}>{status} </div>
              }
          })()}
          
        </div>
      );
    });
  } else {
    display = "No Characters Found :/";
  }

  return <>{display}</>;
};

export default Cards;
