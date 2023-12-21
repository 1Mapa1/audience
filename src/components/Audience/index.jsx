import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Text, Img } from "components";


const Audience = ({audience}) => {
    

    const responsive = {
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 1
        },
      };

    return (
        <div className="flex flex-col rounded-[20px] h-max items-center px-[20px] py-[40px] mb-[40px]" style={{backgroundColor: "white"}}>
            <Text className="text-[35px] font-bold text-sky-700">
                {audience.audience_name}
            </Text>
            <hr style={{ border: '1px solid black', width: '100%' }}  className="my-7"></hr>
            <div className="flex flex-row h-max items-center gap-20">
                <div className="flex flex-col items-center gap-1">
                    <Text>
                        Тип помещения
                    </Text>
                    <Text className="font-bold text-sm">
                        {audience.audience_type.type_audiences}
                    </Text>
                </div>
                <div className="flex flex-col items-center gap-1">
                    <Text>
                        Местоположение
                    </Text>
                    <Text className="font-bold text-sm">
                        {audience.address}
                    </Text>
                </div>
                <div className="flex flex-col items-center gap-1">
                    <Text>
                        Площадь
                    </Text>
                    <Text className="font-bold text-sm">
                        {audience.square} м <sup>2</sup>
                    </Text>
                </div>
            </div>
            <div className="flex flex-row w-[70%] justify-between mt-10">
                <div className="flex flex-col items-center gap-1">
                <Img
                    className=" h-[120px] w-[120px]"
                    src="images/desk.svg"
                    alt="imageOne"
                />
                <Text className="font-bold text-xl">
                    {audience.capacity} места
                </Text>
                </div>
                {audience.equipment_list ?
                (audience.equipment_list.map((equipment) =>{
                        return (
                            <div className="flex flex-col items-center gap-2">
                                <Img
                                    className=" object-cover h-[120px]"
                                    src={equipment.logo_link}
                                    alt="imageOne"
                                />
                                <Text className="font-bold text-xl">
                                {equipment.quantity} {equipment.equipment} 
                                </Text>
                                </div>
                        )
                    })) : <></>
                }
                {/* <div className="flex flex-col items-center gap-2">
                <Img
                    className=" object-cover h-[120px]"
                    src="images/computer.svg"
                    alt="imageOne"
                />
                <Text className="font-bold text-xl">
                    {audience.computer} ПК
                </Text>
                </div>
                <div className="flex flex-col items-center gap-1">
                <Img
                    className=" w-[120px] h-[120px]"
                    src="images/projector.svg"
                    alt="imageOne"
                />
                <Text className="font-bold text-xl">
                    {audience.projector} проектор
                </Text>
                </div> */}
            </div>
            { audience.images_links ?
            (<Carousel swipeable={true}
            draggable={true}
            showDots={true}
            responsive={responsive}
            ssr={true} // Server-side rendering
            infinite={true}
            transitionDuration={500}
            containerClass="py-[50px]"
            removeArrowOnDeviceType={["desktop", "mobile"]}
            dotListClass="custom-dot-list-style"
            itemClass="rounded-[20px]" 
            className="w-full items-start" >
            {
                 audience.images_links.map((img) => {
                    return(<Img
                        src={img} 
                        className="h-[400px] rounded-[20px] mx-auto">
                    </Img>)
                }) 
            }
            </Carousel>) : <></>
            }
        </div>
    )
}

export { Audience }