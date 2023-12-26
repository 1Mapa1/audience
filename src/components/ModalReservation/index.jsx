import React, { useState } from 'react';
import Select from 'react-select';
import { Typography} from '@mui/material'
import { Text, Button, Img } from "components";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker, TimePicker, ruRU  } from '@mui/x-date-pickers';
import dayjs from 'dayjs'
import { addFreeTime } from 'repo/addFreetime';

  
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
    const [selectedOptionStart, setSelectedOptionStart] = useState(null);
    const [selectedOptionEnd, setSelectedOptionEnd] = useState(null);
    const [selectedOptionAudience, setSelectedOptionAudience] = useState(null);
    
    const audiencesData  = audiences.map(item => {
      return { value: item.id, label: item.audience_name};
    })
    const handleSubmit = async (event) => {
      event.preventDefault();
      console.log(selectedOptionStart, selectedOptionEnd, selectedOptionAudience)
      if (!selectedOptionStart || !selectedOptionEnd || !selectedOptionAudience) {
        alert("заполните форму")
        // document.getElementById("error-text").style.display = "block"
        return;
      }
      const data = await addFreeTime({
        date: selectedDate.format('YYYY-MM-DD'),
        starting_time: selectedOptionStart,
        end_time: selectedOptionEnd,
        audience_id: selectedOptionAudience.value })
      console.log(data)  
      if(data.status = 201) {
        alert("Данные записаны")
        window.location.reload();
      }
      else alert("Ошибка")
    }

    const handleChangeStart = (selected) => {
      const selectedTime = new Date(selected);
      const hours = selectedTime.getHours();
      const minutes = selectedTime.getMinutes();
      setSelectedOptionStart(`${hours}:${minutes}:00`);
    }

    const handleChangeEnd = (selected) => {
      const selectedTime = new Date(selected);
      const hours = selectedTime.getHours();
      const minutes = selectedTime.getMinutes();
      setSelectedOptionEnd(`${hours}:${minutes}:00`);
    }

    const handleChangeAudience = (selected) => {
      console.log(selected)
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
              <form onSubmit={handleSubmit}>
              <div className='flex flex-row mt-[40px] gap-5'>
              
                <div>
                  <Typography fontWeight={600} marginBottom={"16px"}>Дата</Typography>
                  <LocalizationProvider adapterLocale='ru' localeText={ruRU.components.MuiLocalizationProvider.defaultProps.localeText} dateAdapter={AdapterDayjs}>
                    <DatePicker
                      format='DD/MM/YYYY'
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
                  <Typography fontWeight={600} marginBottom={"16px"}>Время начала</Typography>
                    <LocalizationProvider adapterLocale='ru' localeText={ruRU.components.MuiLocalizationProvider.defaultProps.localeText}
                    dateAdapter={AdapterDayjs}>
                      <TimePicker
                        value={selectedOptionStart}
                        ampm = {false}
                        onChange={handleChangeStart}
                      />
                    </LocalizationProvider>
                  </div>
                <div>
                  <Typography fontWeight={600} marginBottom={"16px"}>Время конца</Typography>
                    <LocalizationProvider adapterLocale='ru' localeText={ruRU.components.MuiLocalizationProvider.defaultProps.localeText}
                    dateAdapter={AdapterDayjs}>
                      <TimePicker
                        value={selectedOptionEnd}
                        ampm = {false}
                        onChange={handleChangeEnd}
                      />
                    </LocalizationProvider>
                </div>
                
              </div>
              </form>
              <div className="flex flex-row font-inter gap-10 items-center md:ml-[0] mt-[40px] ">
                
                <Button onClick={() => setActive(false)}
                  className="cursor-pointer font-semibold leading-[normal] mb-1 min-w-[244px] text-center text-xl">
                  Отменить
                </Button>
                <Button type='submit' onClick={handleSubmit} 
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