import { React } from 'react';
import { Text } from 'components';

const InstructBlock = ( {area, children,} ) => {
    return (
        <div className="bg-white-A700 px-[25px] py-[50px] w-[300px] h-[150px] rounded-[10px] flex items-center justify-center" style={{gridArea: area}}>
            <Text className="w-full text-light_blue-800 font-[600] text-center">
                {children}
            </Text>
        </div>
    )

}

export { InstructBlock }