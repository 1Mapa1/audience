import React from 'react';
import { Text, Button, Img } from "components";


const ModalRemove = ({audience, active, setActive}) => {
    console.log(audience);
    return (
      <div className={active ? "modal active" : "modal"} onClick={() => setActive(false)}>
        <div className={"bg-white-A700 flex flex-col font-sourcesanspro items-center justify-start max-w-[1221px] mx-auto p-[17px] md:px-5 rounded-[50px] sm:rounded-[0px] w-full" + (active ? " modal__content active" : " modal__content")} onClick={(e) => e.stopPropagation()}>
            <div className="items-center justify-center px-[100px] py-[30px] w-full flex flex-col">
              <div className="flex md:flex-col flex-row md:gap-5 items-end justify-between w-full md:w-full">
                <div className='w-[60px]'></div>
                <div className="flex flex-col gap-6 items-start justify-start md:mt-0 mt-[15px]">
                  
                  <div className='close-text'>
                    <Text
                      className="md:text-3xl sm:text-[28px] text-3xl font-semibold text-sky-700"
                      size="txtSourceSansProSemiBold32"
                    >
                      Удаление брони
                    </Text>
                    <div className="hidden md:flex items-center cursor-pointer justify-start ml-5 md:ml-[0] md:mt-0 mt-[13px] w-6 md:w-[10px]" onClick={() => setActive(false)}>
                      <Img
                        className="h-[25px] w-6 cursor-pointer"
                        src="images/img_close.svg"
                        alt="close"
                      />
                    </div>
                  </div>
                </div>
                
                <div className="flex flex-col items-center justify-start ml-5 md:hidden md:ml-[0] cursor-pointer md:mt-0 mt-[13px] w-10" onClick={() => setActive(false)}>
                  <Img
                    className="h-[25px] w-6"
                    src="images/img_close.svg"
                    alt="close"
                  />
                </div>
              </div>
              <Text className='my-[40px] text-xl'>Вы дествительно хотите удалить бронь "{audience.Audiences.audience_name}" с {audience.starting_time} по {audience.end_time}</Text>  
                
              <div className="flex flex-row font-inter gap-10 items-center md:ml-[0] ">
                
                <Button onClick={() => setActive(false)} 
                  className="cursor-pointer font-semibold leading-[normal] mb-1 w-[150px] text-center text-xl">
                  Нет
                </Button>
                <Button onClick={
                  function handleClick() {
                  }} 
                  className="cursor-pointer font-semibold leading-[normal] mb-1 w-[150px] text-center text-xl bg-red-600">
                  Да
                </Button>
              </div>
            </div>
          </div>
      </div>
  
    )
  }
  
  export { ModalRemove };