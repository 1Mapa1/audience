import React from "react";

const Spinner = ({height}) => {

    return (
        <div className={"spinner-container border-r-0 " + (height !== null ? "h-[" + height + "px]" : '')}>
            <div className="spinner"></div>
        </div>
    )

}

export {Spinner}