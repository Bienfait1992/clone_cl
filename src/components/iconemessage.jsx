import React, { useState } from "react";
export function Icone({ imagesvg, classeimage }) {

    const [count, setCount] = useState(0);
    return (
        <>

            <div className={classeimage} >
                <div>
                    <svg width="81" height="34" viewBox="0 0 75 34" fill="" xmlns="http://www.w3.org/2000/svg" onClick={() => setCount(count + 1)} >
                        <rect width="34" height="34" rx="17" fill="" />
                        <path d={imagesvg} fill="#6E767D" />
                    </svg>
                </div>

               <p>{count}</p>
            </div>
        </>
    )
}