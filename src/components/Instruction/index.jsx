import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faArrowDown, faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { InstructBlock, Img } from "components";


const Instruction = () => {

    return (
        <div className="my-0 relative shadow-bs rounded-[20px] w-full">
            <div className="m-auto w-full">
              <Img
                  className="h-[600px] m-auto object-cover rounded-[20px] w-full md:h-[300px] sm:h-[350px]"
                  src="images/img_image4_734x1390.png"
                  alt="imageFour"
              />
            </div>
            <div className="absolute max-h-max inset-[0] items-center justify-between m-auto w-[86%] sm:items-center">
              <div className="grid sm:min-w-[320px] sm:px-[10px] instruction-block">
                <InstructBlock area="block1">
                  Ищем подходящую по времени и дате свободную аудиторию
                </InstructBlock>
                
                <FontAwesomeIcon icon={faArrowRight} style={{gridArea: "arrow1", color: "white", fontSize: "50px", fontWeight: 'bold'}}/>

                <InstructBlock area="block2">
                  Бронируем аудиторию на сайте, указывая все атрибуты
                </InstructBlock>

                <FontAwesomeIcon icon={faArrowRight} style={{gridArea: "arrow2", color: "white", fontSize: "50px"}}/>

                <InstructBlock area="block3">
                  Составляем служебное письмо на кого-то
                </InstructBlock>

                <FontAwesomeIcon icon={faArrowDown} style={{gridArea: "arrow3", color: "white", fontSize: "50px"}}/>

                <InstructBlock area="block4">
                  Отправляем служебку для подписи и подтверждения бронирования на сайте
                </InstructBlock>
                
                <FontAwesomeIcon icon={faArrowLeft} style={{gridArea: "arrow4", color: "white", fontSize: "50px"}}/>

                <InstructBlock area="block5">
                  Ждем одобрения и  проверяем статус брони
                </InstructBlock>

                
                <FontAwesomeIcon icon={faArrowLeft} style={{gridArea: "arrow5", color: "white", fontSize: "50px"}} size="10px"/>

                <InstructBlock area="block6">
                  Если одобрили - радуемся и пользуемся, если нет - не судьба
                </InstructBlock>

                
              </div>
              
            </div>
        </div>
    )

}

export { Instruction }