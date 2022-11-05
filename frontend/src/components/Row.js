import React from "react";

export default function Row() {
    return(
    <div className = 'grid grid-rows-3 grid-flow-col'>
        <div className = 'row-span-3 border-black border-2 flex h-40 m-4'>
            <p>hello</p>
        </div>
        <div className = 'row-span-3 border-black border-2 flex h-40 m-4'>
            <p>hello</p>
        </div>
        <div className = 'row-span-3 border-black border-2 flex h-40 m-4'>
            <p>hello</p>
        </div>
    </div>
    );
}