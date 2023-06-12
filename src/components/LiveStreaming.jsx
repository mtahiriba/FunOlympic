import React from "react";
import LiveStreamBox from "./LiveStreamBox";
// import FirstImage from "../assets/images/image.png";
import {Live} from "./Live";

export default function LiveStreaming() {

  return (
    <>
    {
        Live.map((data) => {
            return(
                <LiveStreamBox data={data} btnText={"Get Started"}/>
            )
            
        })
    }
    </>
  );
}
