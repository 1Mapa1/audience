import React from "react";
import { Img, TextBlock, HighText, Header, Instruction, Text, Button, Building, ListBuilding} from "components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';


const Page = () => {

  const buildings = [
    {
      urlImg: "images/first.png",
      build: "1-Й КОРПУС",
      adres: "Малая Калужская улица, 1"
    },
    {
      urlImg: "images/first.png",
      build: "2-Й КОРПУС",
      adres: "Малый Калужский переулок, 2с7"
    },
    {
      urlImg: "images/first.png",
      build: "3-Й КОРПУС",
      adres: "Малый Калужский переулок, 2с6"
    },
    {
      urlImg: "images/first.png",
      build: "4-Й КОРПУС",
      adres: "Малый Калужский переулок, 2с4"
    },
    {
      urlImg: "images/first.png",
      build: "6-Й КОРПУС",
      adres: "Малый Калужский переулок, 2с5"
    }
  ]

  return (
    <>
      <div className="bg-white-A700 font-sourcesanspromx-auto pb-[27px] px-[27px] md:px-[0px] relative w-full">
        <div className="font-inter md:h-[500px] h-[700px] max-w-[1360px] mx-auto w-full z-[1]">
          <Img
            className="h-[700px] md:h-[500px] m-auto object-cover w-full"
            src="images/img_121.png"
            alt="OneHundredTwentyOne"
          />
          <Header>
          </Header>
        </div>
        
        <div className="max-w-[1360px] mt-auto mx-auto md:px-5 w-full">
          <HighText>
            ПРАВИЛА
          </HighText>

          <TextBlock />
        </div>

        <div className="max-w-[1360px] mt-auto mx-auto md:px-5 w-full">
          <HighText spacing="tracking-[50px] md:tracking-[20px] sm:tracking-[10px]">
            Инструкция
          </HighText>

          <Instruction />
        </div>
        <div className="max-w-[1360px] mt-auto mx-auto md:px-5 w-full">
          <HighText spacing="tracking-[30px] md:tracking-[20px] sm:tracking-[10px]">
            Бронирование
          </HighText>
          <div className="flex flex-col items-center">
            <Text className="text-[20px] font-semibold">Знаете что ищите? Тогда забронируйте сразу</Text>
            <FontAwesomeIcon icon={faArrowDown} style={{color: "grey", fontSize: "60px"}} className="my-8"/>
            <Button className="w-[300px] text-[18px] mb-8">Забронировать</Button>
            <Text className="text-[20px] font-semibold">Или посмотрите что есть</Text>
            <div className="flex flex-col items-center gap-10">
              <Text className="text-[30px] font-bold my-12">Доступные корпуса</Text>
              <ListBuilding items={buildings}></ListBuilding>
            </div>
          </div>
        </div>
        
      </div>
    </>
  );
};

export default Page;
