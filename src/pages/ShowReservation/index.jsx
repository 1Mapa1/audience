import React from "react";
import Carousel from "react-multi-carousel";
import { Img, Text, Header, Button, LoadingImg} from "components";
import { useSelector } from 'react-redux';


const ShowReservation = () => {

    const pageAudienceData = useSelector(state => state.page.pageReservationData);
    console.log(pageAudienceData.starting_time); // Обратите внимание на правильное имя свойства
    const responsive = {
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 1
        },
      };


    const imgs = ["images/img_121.png", "images/img_121.png", "images/img_121.png", "images/img_121.png"];

    return (
        <>
        <div className="bg-grey-bg font-sourcesanspromx-auto pb-[27px] px-[27px] md:px-[0px] relative w-full">
            <div className="font-inter flex justify-center h-wull  max-w-[1360px] mx-auto w-full z-[1] body-login">
              <Header>
    
              </Header>
    
              <main className="main-block mt-[130px] ">
                <div className="login-box w-[60vw] sm:w-[100%] px-[60px] py-[30px] sm:px-[100px]">
                    <Text className="mb-10 text-[30px] font-semibold">Информация о бронировании</Text>
                    
                    <div className="flex flex-row w-full justify-between items-center">
                        <div className="flex flex-col gap-3">
                            <Text className="text-[18px]"><span className="font-semibold mr-[10px]">Корпус: </span> {pageAudienceData.location.name}</Text>
                            <Text className="text-[18px]"><span className="font-semibold mr-[10px]">Аудитория: </span> {pageAudienceData.location.name}</Text>
                            <Text className="text-[18px]"><span className="font-semibold mr-[10px]">Дата проведения: </span> {pageAudienceData.date}</Text>
                            <Text className="text-[18px]"><span className="font-semibold mr-[10px]">Время: </span> {pageAudienceData.starting_time}:00 - {pageAudienceData.end_time}:00</Text>
                            <Text className="text-[18px]"><span className="font-semibold mr-[10px]">Статус: </span> <span className="text-sky-500">{pageAudienceData.status}</span></Text>
                            <Button className="w-[60%] mt-[10px]">Отменить бронь</Button>
                        </div>
                        <div className="w-[480px]">
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
                                    imgs.map((img) => {
                                        return(<Img
                                            src={img} 
                                            className="h-[300px] rounded-[20px] mx-auto">
                                        </Img>)
                                    }) 
                                }
                            </Carousel>
                        </div>
                    </div>
                    <div className="flex-row flex justify-between mt-10 w-full">
                        <div className="flex flex-col items-center">
                            <Text className="text-[60px] text-sky-600 font-bold">ДО</Text>
                            <LoadingImg></LoadingImg>

                        </div>
                        <div className="flex flex-col items-center">
                            <Text className="text-[60px] text-sky-600 font-bold">ПОСЛЕ</Text>
                            <LoadingImg></LoadingImg>

                        </div>

                    </div>
                </div>
              </main>
            </div>
        </div>
        </>);

}

export default ShowReservation