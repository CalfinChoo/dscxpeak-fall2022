import React from "react";

export default function Box(props) {
    return(

        <div className = 'text-[30px] px-10 row-span-3 border-black border-2 flex h-96 m-4 w-30'>
            <div className="block">
            <p>{props.categoryName}</p>
            <p>{props.review}</p>
            <img width={125} src={props.imgSrc}></img>
            </div>
        </div>
    );
}