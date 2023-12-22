import React, { useState } from 'react';
import Select from 'react-select';
import { Typography} from '@mui/material'
import { Text, Button, Img } from "components";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import dayjs from 'dayjs'


const optionsTime = [
    { value: 1, label: '10:00' },
    { value: 2, label: '11:00' },
    { value: 3, label: '12:00' },
    { value: 4, label: '13:00' },
    { value: 5, label: '14:00' },
    { value: 6, label: '15:00' },
    { value: 7, label: '16:00' },
    { value: 8, label: '17:00' },
    { value: 9, label: '18:00' },
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
    menuPortal: base => ({ ...base, zIndex: 9999 })
  };



const ModalReservation = ({audiences, active, setActive}) => {
    const [selectedDate, setSelectedDate] = useState(dayjs());
    const [selectedOptionStart, setSelectedOptionStart] = useState(optionsTime[0]);
    const [selectedOptionEnd, setSelectedOptionEnd] = useState(optionsTime.at(-1));
    const [selectedOptionAudience, setSelectedOptionAudience] = useState(null);
    let audiencesData = [];
    
    for (var i = 0; i < audiences.length; i++ ) {
        audiencesData.push({value: i + 1, label: audiences[i]});
    }


    const handleChangeSatrt = (selected) => {
        setSelectedOptionStart(selected);
    }

    const handleChangeEnd = (selected) => {
        setSelectedOptionEnd(selected);
    }


    const handleChangeAudience = (selected) => {
        setSelectedOptionAudience(selected);
      }
  
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
              <div className='flex flex-row mt-[40px] gap-5'>
                <div>
                  <Typography fontWeight={600} marginBottom={"16px"}>Дата</Typography>
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DatePicker
                      value={selectedDate}
                      onChange={(newValue) => {
                        setSelectedDate(newValue);
                      }}
                      
                    />
                  </LocalizationProvider>
                </div>
                <div>
                  <Typography fontWeight={600}>Аудитория</Typography>
                  <Select
                    id="dropdown"
                    options={audiencesData}
                    value={selectedOptionAudience}
                    onChange={handleChangeAudience}
                    styles={customStyles}
                    placeholder={"Аудитория..."}
                    menuPortalTarget={document.body}
                    className='w-[200px] mt-[16px] mb-[8px] sm:ml-[20px]'
                  />
                </div>
                <div>
                  <Typography fontWeight={600}>Время начала</Typography>
                  <Select
                    id="dropdown"
                    options={optionsTime}
                    value={selectedOptionStart}
                    onChange={handleChangeSatrt}
                    styles={customStyles}
                    menuPortalTarget={document.body}
                    className='w-[200px] mt-[16px] mb-[8px] sm:ml-[20px]'
                  />
                </div>
                <div>
                  <Typography fontWeight={600}>Время конца</Typography>
                  <Select
                    id="dropdown"
                    options={optionsTime}
                    value={selectedOptionEnd}
                    onChange={handleChangeEnd}
                    styles={customStyles}
                    menuPortalTarget={document.body}
                    className='w-[200px] mt-[16px] mb-[8px] sm:ml-[20px] z-50'
                  />
                </div>
              </div>
                
              <div className="flex flex-row font-inter gap-10 items-center md:ml-[0] mt-[40px] ">
                
                <Button onClick={
                  function handleClick() {
                  }} 
                  className="cursor-pointer font-semibold leading-[normal] mb-1 min-w-[244px] text-center text-xl">
                  Отменить
                </Button>
                <Button onClick={
                  function handleClick() {
                  }} 
                  className="cursor-pointer font-semibold leading-[normal] mb-1 min-w-[244px] text-center text-xl">
                  Добавить
                </Button>
              </div>
            </div>
          </div>
      </div>
  
    )
  }
  
  export { ModalReservation };