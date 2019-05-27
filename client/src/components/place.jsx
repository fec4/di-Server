import React, { useState, useEffect } from "react";
export default function place(props) {
  console.log(props);

  var selectedListing=(e)=>{
    console.log(e);
  }
  return(
    <div>
      {props.listing.map((e,index)=>{

        return(
          <div key={index}
          onClick={()=>{
            selectedListing(e);
            props.onselect(e);
          }}
          >
          <span>
          name:{e.name}
          </span>
          <br></br>
          <span>
            detains for this listing {e.des}
          </span>
          </div>
        )
      }
      )}
      {

      }
      </div>

  )

}