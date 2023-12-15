import React from "react";
import { Text, LetterLast } from "components";

const HighText = ({ children, spacing }) => {
    return (
        <Text
        className={"mx-auto club-text text-center text-white-A700 z-[1] sm:my-[30px] " + spacing}
        size="txtSourceSansProBold200"
        >
        <LetterLast>
            {children}
        </LetterLast>
        </Text>
    );
};

export { HighText }