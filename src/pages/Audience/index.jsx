import React from "react";
import { HighText, Header, Building, ListAudience} from "components";

const Audience = () => { 
    

    const audiences = [
        {
            title: "Аудитория 1025",
            type: "Аудитория", 
            place: "1 этаж, ауд. 1025",
            square: 40,
            desk: 32,
            computer: 1,
            projector: 1,
            imgs: [
                "images/img_121.png",
                "images/img_121.png",
                "images/img_121.png",
            ]
        },
        {
            title: "Аудитория 1030",
            type: "Аудитория", 
            place: "1 этаж, ауд. 1025",
            square: 40,
            desk: 32,
            computer: 1,
            projector: 1,
            imgs: [
                "images/img_121.png",
                "images/img_121.png",
                "images/img_121.png",
            ]
        },
    ]
    
    return (
        <>
          <div className="bg-white-A700 font-sourcesanspromx-auto pb-[27px] px-[27px] md:px-[0px] relative w-full">
            <div className="font-inter h-[200px] max-w-[1360px] mx-auto w-full z-[1]">
              <Header shadow={true}>
              </Header>
            </div>
            
            
            <div className="max-w-[1360px] mt-auto mx-auto md:px-5 w-full flex justify-center">
                <Building urlImg={"images/first.png"} build={"1-Й КОРПУС"} adres={"Какой-то адрес"}></Building>
            </div>
    
            <div className="max-w-[1360px] mt-auto mx-auto md:px-5 w-full">
              <HighText spacing="tracking-[50px] md:tracking-[20px] sm:tracking-[10px]">
                Аудитория
              </HighText>
    
                <ListAudience audiences={audiences}></ListAudience>
            </div>
            
            
          </div>
        </>
      );
}

export default Audience