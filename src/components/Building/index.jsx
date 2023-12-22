import React from "react";
import { Text, Img } from "components";

const Building = ({urlImg, build, address}) => {
    return (
        <div className="flex flex-col items-center">
            <Img
            className="h-[200px] w-full mb-5"
            src={urlImg}
            alt="OneHundredTwentyOne"
            />
            <Text className="font-semibold">
                {build}
            </Text>
            <Text className="text-sm text-center">
                {address}
            </Text>
        </div>
    )
}

export { Building }