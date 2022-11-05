import React from "react";

export default function Box(props) {
    return(

        <div className = 'row-span-3 border-black border-2 flex h-40 m-4 w-30'>
            <div className="block">
            <p>{props.categoryName}</p>
            <p>review-score</p>
            </div>
        </div>
    );
}