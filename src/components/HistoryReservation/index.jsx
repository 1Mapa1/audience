import React from "react";
import { Text, Img } from "components";
import Carousel from "react-multi-carousel";

const HistoryReservation = ({ index, users }) => {

    const responsive = {
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 1
        },
      };
    return (
        <div className="mt-10">
                            <div className="flex flex-row gap-2 w-[1030px] items-center">
                                <Text className="text-[20px] font-bold">{index}</Text>
                                <hr style={{ border: '1px solid black', width: '100%' }}></hr>
                            </div>

                            <div className="flex flex-row items-center justify-center gap-[100px] mt-10">
                                <div>
                                    <Text className="text-[18px]"><span className="font-semibold mr-[10px]">Кто: </span> {users.name}</Text>
                                    <Text className="text-[18px]"><span className="font-semibold mr-[10px]">Время: </span> {users.start_time}:00 - {users.end_time}:00</Text>
                                </div>
                                <div >
                                    <Text className="text-[18px]"><span className="font-semibold mr-[10px]">Мероприятие: </span> {users.event}</Text>
                                    <Text className="text-[18px]"><span className="font-semibold mr-[10px]">Количество: </span> {users.countPeople} человек</Text>
                                </div>
                            </div>

                            <div className="flex-row flex justify-center gap-[100px] my-10">
                                <div className="flex flex-col items-center">
                                    <Text className="text-[50px] text-sky-600 font-bold">ДО</Text>
                                    <div className="h-[250px] w-[350px] rounded-[20px]">
                                    <Carousel swipeable={true}
                                        draggable={true}
                                        showDots={true}
                                        responsive={responsive}
                                        ssr={true} // Server-side rendering
                                        infinite={true}
                                        transitionDuration={500}
                                        containerClass="pb-[30px]"
                                        removeArrowOnDeviceType={["desktop", "mobile"]}
                                        dotListClass="custom-dot-list-style"
                                        itemClass="rounded-[20px]" 
                                        className="w-full items-start" >
                                        {
                                            users.imgBefore.map((img) => {
                                            return(<Img
                                                src={img} 
                                                className="h-[250px] rounded-[20px] mx-auto">
                                            </Img>)
                                            })
                                        }
                                    </Carousel>
                                    </div>

                                </div>
                                <div className="flex flex-col items-center">
                                    <Text className="text-[50px] text-sky-600 font-bold">ПОСЛЕ</Text>
                                    <div className="h-[250px] w-[350px] rounded-[20px]">
                                    <Carousel swipeable={true}
                                        draggable={true}
                                        showDots={true}
                                        responsive={responsive}
                                        ssr={true} // Server-side rendering
                                        infinite={true}
                                        transitionDuration={500}
                                        containerClass="pb-[30px]"
                                        removeArrowOnDeviceType={["desktop", "mobile"]}
                                        dotListClass="custom-dot-list-style"
                                        itemClass="rounded-[20px]" 
                                        className="w-full items-start" >
                                        {
                                            users.imgAfter.map((img) => {
                                            return(<Img
                                                src={img} 
                                                className="h-[250px] rounded-[20px] mx-auto">
                                            </Img>)
                                            })
                                        }
                                    </Carousel>
                                    </div>

                                </div>

                            </div>

                        </div>
    );
};

export { HistoryReservation }