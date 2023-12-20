import React, { useState } from 'react';
import Grid from '@mui/material/Grid';
import Select from 'react-select';
import { TextField, TextareaAutosize, Typography, FormHelperText } from '@mui/material'
import { Text, Button, Img } from "components";

const options = [
  { value: 1, label: 'Да' },
  { value: 2, label: 'Нет' }
];

const customStyles = {
  control: (provided) => ({
    ...provided,
    height: '56px',
    minHeight: '56px',
  }),
  valueContainer: (provided) => ({
    ...provided,
    height: '56px',
  }),
  input: (provided) => ({
    ...provided,
    position: 'absolute',
  }),
};


const Modal = ({club_data, active, setActive}) => {
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
                    Бронирование аудитории «{club_data.location.name}» {club_data.date} с {club_data.starting_time}:00 по {club_data.end_time}:00
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
              <div>
                <Typography variant="h6">Название мероприятия</Typography>
                <TextField
                  placeholder="Мероприятие"
                  variant="outlined"
                  margin="normal"
                  type="text" 
                  fullWidth
                  
                />
                <FormHelperText>Введите название мероприятие или любое другое название идентифицирующее ваше бронирование</FormHelperText>
              </div>
              <div>
                <Typography variant="h6">Предполагаемое количество человек</Typography>
                <TextField
                  placeholder="Количество"
                  variant="outlined"
                  margin="normal"
                  type="text" 
                  fullWidth
                  
                />
                <FormHelperText>Введите максимальное количество человек на мероприятиии</FormHelperText>
              </div>
              <div>
                <Typography variant="h6">Описание</Typography>
                <TextareaAutosize
                  placeholder="Введите текст"
                  variant="outlined"
                  margin="normal"
                  type="text" 
                  className='w-full mt-[16px]'
                />
                <FormHelperText>Описание того что будет происходить на мероприятии</FormHelperText>
              </div>
            </div>
              
            <div className="flex flex-row font-inter md:gap-10 justify-end md:ml-[0] mt-[18px] w-full md:w-full">
              
              <Button onClick={
                function handleClick() {
                }} 
                className="cursor-pointer font-semibold leading-[normal] mb-1 min-w-[244px] text-center text-xl">
                Вступить
              </Button>
            </div>
          </div>
        </div>
    </div>
    
  );
};



const ModalReservation = ({club_data, active, setActive}) => {
  const [selectedOption, setSelectedOption] = useState(options[0]);

  const handleChange = (selected) => {
    setSelectedOption(selected);
    console.log(selected.value);
    if (selected.value === 1) {
      document.getElementById("full_name").style.display = "none";
    }
    else {
      document.getElementById("full_name").style.display = "block";
    }
  }
  return (
    <div className={active ? "modal active" : "modal"} onClick={() => setActive(false)}>
      <div className={"bg-white-A700 flex flex-col font-sourcesanspro items-center justify-start max-w-[1221px] mx-auto p-[17px] md:px-5 rounded-[50px] sm:rounded-[0px] w-full" + (active ? " modal__content active" : " modal__content")} onClick={(e) => e.stopPropagation()}>
          <div className="items-center justify-center px-[100px] py-[50px] w-full flex flex-col">
            <div className="flex md:flex-col flex-row md:gap-5 items-end justify-between w-full md:w-full">
              <div className='w-[60px]'></div>
              <div className="flex flex-col gap-6 items-start justify-start md:mt-0 mt-[15px]">
                
                <div className='close-text'>
                  <Text
                    className="md:text-3xl sm:text-[28px] text-3xl font-semibold text-sky-700"
                    size="txtSourceSansProSemiBold32"
                  >
                    Добавление доступного времени аудитории
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
            <div className='flex flex-row mt-[18px] gap-5'>
               <Select
                          id="dropdown"
                          options={options}
                          value={selectedOption}
                          onChange={handleChange}
                          styles={customStyles}
                          className='w-[200px] mt-[16px] mb-[8px] sm:ml-[20px]'
                        />
                         <Select
                          id="dropdown"
                          options={options}
                          value={selectedOption}
                          onChange={handleChange}
                          styles={customStyles}
                          className='w-[200px] mt-[16px] mb-[8px] sm:ml-[20px]'
                        />
                         <Select
                          id="dropdown"
                          options={options}
                          value={selectedOption}
                          onChange={handleChange}
                          styles={customStyles}
                          className='w-[200px] mt-[16px] mb-[8px] sm:ml-[20px]'
                        />
                         <Select
                          id="dropdown"
                          options={options}
                          value={selectedOption}
                          onChange={handleChange}
                          styles={customStyles}
                          className='w-[200px] mt-[16px] mb-[8px] sm:ml-[20px]'
                        />
                        
            </div>
              
            <div className="flex flex-row font-inter gap-10 items-center md:ml-[0] mt-[18px] ">
              
              <Button onClick={
                function handleClick() {
                }} 
                className="cursor-pointer font-semibold leading-[normal] mb-1 min-w-[244px] text-center text-xl">
                Вступить
              </Button>
              <Button onClick={
                function handleClick() {
                }} 
                className="cursor-pointer font-semibold leading-[normal] mb-1 min-w-[244px] text-center text-xl">
                Вступить
              </Button>
            </div>
          </div>
        </div>
    </div>

  )
}

export { Modal, ModalReservation };