import React from "react";
import { Audience } from "components";

const ListAudience = ({audiences}) => { 
    console.log(audiences);
    return(
        <div className="shadow-bs rounded-[20px] w-full bg-sky-700 px-[40px] pt-[40px] pb-[1px]">
            {
                audiences.map((audience, index) =>{
                    return (
                        <Audience key={index} audience={audience}></Audience>
                    )
                })
            }
        </div>
    )
}

export { ListAudience }