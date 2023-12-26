import React from "react";
import Carousel from "react-multi-carousel";
import { Img, Text, Header, Button, LoadingImg} from "components";
import { useSelector } from 'react-redux';
import { cancelReservation } from "repo/cancelReservation";


const ShowReservation = () => {

    const pageAudienceData = useSelector(state => state.page.pageReservationData); // Обратите внимание на правильное имя свойства
    console.log(pageAudienceData)
    const responsive = {
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 1
        },
      };


    const handleCancelReservation = async () => {
        const response = await cancelReservation(pageAudienceData.id);
        console.log(response)
        if(response.status = 200) {
            alert("Бронь отменена")
            
          }
          else {
            alert("Ошибка")
          }
    }

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
                            <Text className="text-[18px]"><span className="font-semibold mr-[10px]">Корпус: </span> {pageAudienceData.audience_id.building.name}</Text>
                            <Text className="text-[18px]"><span className="font-semibold mr-[10px]">Аудитория: </span> {pageAudienceData.audience_id.audience_name}</Text>
                            <Text className="text-[18px]"><span className="font-semibold mr-[10px]">Дата проведения: </span> {pageAudienceData.date}</Text>
                            <Text className="text-[18px]"><span className="font-semibold mr-[10px]">Время: </span> {pageAudienceData.starting_time.substring(0, 5)} - {pageAudienceData.end_time.substring(0, 5)}</Text>
                            <Text className="text-[18px]"><span className="font-semibold mr-[10px]">Статус: </span> <span className="text-sky-500">{pageAudienceData.status_id.status_name}</span></Text>
                            <Button onClick={handleCancelReservation} className="w-[80%] mt-[10px] px-[0px]">Отменить бронь</Button>
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
                                    pageAudienceData.audience_id.images_links.map((img) => {
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