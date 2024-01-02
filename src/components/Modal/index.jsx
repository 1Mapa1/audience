import React from 'react';
import { TextField, TextareaAutosize, Typography, FormHelperText } from '@mui/material'
import { Text, Button, Img } from "components";
import { useState } from 'react';
import { useUser } from 'hooks/UserContext';
import { createEvent } from 'repo/createEvent';
import { name } from 'dayjs/locale/ru';


const Modal = ({club_data, active, setActive}) => {
  console.log(club_data)
  const {user, setUserData} = useUser();
  const [formData, setFormData] = useState({ activity: '', people_count: '' , description: ''});
  
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };


  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!formData.activity || !formData.people_count) {
      document.getElementById("error-text").style.display = "block"
      return;
    }
    const data = await createEvent(club_data, formData, user.data.id)
    if(data) {
      alert("Данные записаны")
    }
    else alert("Ошибка")
  }
  if (!club_data) {
    // Обработка случая, когда данных нет
    return null; // Или отображение сообщения о том, что данные не выбраны
  }
  return (
    <div className={active ? "modal active" : "modal"} onClick={() => setActive(false)}>
      <div className={"bg-white-A700 flex flex-col font-sourcesanspro items-center justify-start max-w-[1221px] mx-auto p-[17px] md:px-5 rounded-[50px] sm:rounded-[0px] w-full" + (active ? " modal__content active" : " modal__content")} onClick={(e) => e.stopPropagation()}>
          <div className="items-center justify-start px-[10px] w-full">
            <div className="flex md:flex-col flex-row md:gap-5 items-end justify-between w-full md:w-full">
              <div className='w-[60px]'></div>
              <div className="flex flex-col gap-6 items-start justify-start md:mt-0 mt-[15px]">
                
                <div className='close-text'>
                  <Text
                    className="md:text-3xl sm:text-[28px] text-2xl font-semibold text-black-900"
                    size="txtSourceSansProSemiBold32"
                  >
                    Бронирование аудитории «{club_data.Audiences.audience_name}» {club_data.date} с {club_data.starting_time.substring(0, 5)} по {club_data.end_time.substring(0, 5)}
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
            <div className='mt-[18px]'>
            <form onSubmit={handleSubmit} className='text-center'>
              <div>
                <Typography variant="h6">Название мероприятия</Typography>
                <TextField
                  value={formData.activity}
                  placeholder="Мероприятие"
                  name='activity'
                  variant="outlined"
                  margin="normal"
                  type="text" 
                  fullWidth
                  onChange={handleInputChange}
                />
                <FormHelperText>Введите название мероприятие или любое другое название идентифицирующее ваше бронирование</FormHelperText>
              </div>
              <div>
                <Typography variant="h6">Предполагаемое количество человек</Typography>
                <TextField
                  value={formData.people_count}
                  placeholder="Количество"
                  name='people_count'
                  variant="outlined"
                  margin="normal"
                  type="number" 
                  fullWidth
                  onChange={handleInputChange}
                />
                <FormHelperText>Введите максимальное количество человек на мероприятиии</FormHelperText>
              </div>
              <div>
                <Typography variant="h6">Описание</Typography>
                <TextareaAutosize
                  value={formData.description}
                  placeholder="Введите текст"
                  name='description'
                  variant="outlined"
                  margin="normal"
                  type="text" 
                  className='w-full mt-[16px]'
                  onChange={handleInputChange}
                />
                <FormHelperText>Описание того что будет происходить на мероприятии</FormHelperText>
              </div>
              </form>
            </div>
            <div className="flex flex-row font-inter md:gap-10 justify-end md:ml-[0] mt-[18px] w-full md:w-full">
            <div className='w-[423px] my-[10px] h-[24px]'><Text className='w-full text-center hidden text-red-500' id="error-text">Вы не заполнили данные</Text></div>
              <Button type="submit" onClick={handleSubmit} 
                className="cursor-pointer font-semibold leading-[normal] mb-1 min-w-[244px] text-center text-xl">
                Вступить
              </Button>
            </div>
            
          </div>
        </div>
    </div>
    
  );
};

export { Modal };