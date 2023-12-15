import { React } from 'react';
import { Text, Img } from 'components';

const TextBlock = () => {
    return (
        <div className="my-0 relative shadow-bs rounded-[20px] w-full">
            <div className="m-auto w-full">
              <Img
                  className="h-[468px] m-auto object-cover rounded-[20px] w-full md:h-[300px] sm:h-[350px]"
                  src="images/img_image4_734x1390.png"
                  alt="imageFour"
              />
            </div>
            <div className="absolute flex flex-row sm:flex-col md:gap-[25px] gap-[62px] h-max inset-[0] items-start justify-between m-auto w-[86%] sm:items-center">
              <div className="flex flex-col sm:items-center justify-start sm:min-w-[320px] sm:px-[10px]">
                  <Text
                  className="sm:text-[13px] md:text-[17px] text-[1.5em] text-white-A700 w-full"
                  size="txtSourceSansProBold48"
                  >
                    Служебное письмо должно быть готово за 3 дня до мероприятия.
                  </Text>
                  <Text
                  className="sm:text-[10px] md:text-[13px] text-[1.2em] text-white-A700 w-full"
                  size="txtSourceSansProBold48"
                  >
                    Ждем ваши заявки в рабочие дни, до 18:00. Обращаем ваше внимание, что бронь аудиторий на воскресенье не осуществляется.
                  </Text>
                  <br></br>
                  <Text
                  className="sm:text-[13px] md:text-[17px] text-[1.5em] text-white-A700 w-full"
                  size="txtSourceSansProBold48"
                  >
                    Отдел расписаний может подписывать служебку 1-2 дня.
                  </Text>
                  <br></br>
                  <Text
                  className="sm:text-[13px] md:text-[17px] text-[1.5em] text-white-A700 w-full"
                  size="txtSourceSansProBold48"
                  >
                    Следите за чистотой в аудиториях, бронируемых для мероприятий. По окончании мероприятия не забывайте привести аудиторию в изначальный вид, расставив все парты и стулья, убрав мусор.
                  </Text>
                  <br></br>
                  <Text
                  className="sm:text-[13px] md:text-[17px] text-[1.5em] text-white-A700 w-full"
                  size="txtSourceSansProBold48"
                  >
                    По всем вопросам пишите на info@rguk.ru.
                  </Text>
              </div>
            </div>
          </div>
    )
}

export { TextBlock };