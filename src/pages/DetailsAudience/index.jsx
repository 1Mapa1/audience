import React from "react";
import Carousel from "react-multi-carousel";
import { Img, Text, Header, Button, HistoryReservation} from "components";


const DetailsAudience = () => {

    // const pageAudienceData = useSelector(state => state.page.pageReservationData);
    // console.log(pageAudienceData.starting_time); // Обратите внимание на правильное имя свойства

    const pageAudienceData = {
        location: {
          name: "пример"
        },
        type: "Аудитория",
        building: "1-корпус",
        deteilsBuilding: "1 этаж, ауд. 1025",
        square: "40",
        countSeat: "25",
      };

    const whoUse = [ 
        {
            name: "Максим Максимов Максимович",
            start_time: "10",
            end_time: "18",
            event: "Инфо-цыганский курс",
            countPeople: 25,
            imgBefore: ["images/img_121.png", "images/img_121.png", "images/img_121.png", "images/img_121.png"],
            imgAfter: ["images/img_121.png", "images/img_121.png", "images/img_121.png", "images/img_121.png"],
        },
        {
            name: "Саша Сашачка Сашок",
            start_time: "12",
            end_time: "14",
            event: "Сбор Саш",
            countPeople: 10,
            imgBefore: ["images/img_121.png", "images/img_121.png", "images/img_121.png", "images/img_121.png"],
            imgAfter: ["images/img_121.png", "images/img_121.png", "images/img_121.png", "images/img_121.png"],
        }
    ]
      
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
                    <Text className="mb-10 text-[30px] font-semibold">Информация о аудитории 1125</Text>
                    
                    <div className="flex flex-row w-full justify-between items-center">
                        <div className="flex flex-col gap-3">
                            <Text className="text-[18px]"><span className="font-semibold mr-[10px]">Корпус: </span> {pageAudienceData.location.name}</Text>
                            <Text className="text-[18px]"><span className="font-semibold mr-[10px]">Тип: </span> {pageAudienceData.type}</Text>
                            <Text className="text-[18px]"><span className="font-semibold mr-[10px]">Место: </span> {pageAudienceData.building}, {pageAudienceData.deteilsBuilding}</Text>
                            <Text className="text-[18px]"><span className="font-semibold mr-[10px]">Площадь: </span> {pageAudienceData.square} м<sup>2</sup></Text>
                            <Text className="text-[18px]"><span className="font-semibold mr-[10px]">Количество мест: </span> {pageAudienceData.countSeat}</Text>
                            <Button className="w-[70%] mt-[10px]">Сделать PDF отчет</Button>
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
                    <div className="flex-col flex items-center mt-20 w-full">
                        <Text className="text-[30px] font-bold">История бронирования</Text>
                        {
                            whoUse.map((use, index) => {
                                return (<HistoryReservation index={index + 1} users={use}></HistoryReservation>)
                            })
                        }

                    </div>
                </div>
              </main>
            </div>
        </div>
        </>);

}

export default DetailsAudience