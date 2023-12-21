import React, {useState, useEffect} from 'react';
import Select from 'react-select';
import { Button, Header, ModalReservation} from "components";
// import { loadFreeTime } from 'repo/loadFreeTime';
// import { uploadScheduleSelect } from 'repo/uploadScheduleSelect';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import dayjs from 'dayjs';

const optionsBuilding = [
  { value: 1, label: 'пример' },
  { value: 2, label: '2-й корпус' },
  { value: 3, label: '3-й корпус' },
  { value: 4, label: '4-й корпус' },
  { value: 5, label: '5-й корпус' },
  { value: 6, label: '6-й корпус' },
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



const EditReservation = () => {

  const [selectedDate, setSelectedDate] = useState(dayjs());
  const [modalActive, setModalActive] = useState(false);

  const [selectedOptionBuilding, setSelectedOptionBuilding] = useState(null);
  const [selectedDataRow, setSelectedDataRow] = useState(null);
  const [data, setData] = useState([ {
    id: 1,
    location: {
      name: "пример"
    },
    date: "14.12.23",
    starting_time: "12",
    end_time: "18",
    isSelected: false
  },
  {
    id: 2,
    location: {
      name: "пример"
    },
    date: "17.12.23",
    starting_time: "12",
    end_time: "18",
    isSelected: false
  },  
  {
    id: 3,
    location: {
      name: "пример 2"
    },
    date: "15.12.23",
    starting_time: "17",
    end_time: "18",
    isSelected: false
  }]);

  const loadBigdata = async () => {
    // Тут вызывается ваша функция для получения данных
    // const result = await loadFreeTime();
    // setBigData(result);
    // setData(result[0].schedule_entries)
  };

  useEffect(() => {
    loadBigdata();
  }, []);


  const handleChangeBuild = (selected) => {
    setSelectedOptionBuilding(selected);
    const audience = selected.label;
    console.log(audience);
    const filteredData = data.filter(item => item.location.name === audience);
    setData(filteredData);
  }

  const handleChange = (selected) => {

    const formattedDate = selected.format('DD.MM.YY');
    console.log(formattedDate);

    const filteredData = data.filter(item => item.date === formattedDate);

    setData(filteredData);

  };

  const deleteReservation = () => {

    if (selectedDataRow)
    {
    const filteredData = data.filter(item => item.id !== selectedDataRow.id);
    setSelectedDataRow(null);

    setData(filteredData);
    }

  };

  const swapSelected = (code) => {
    setData(prevData => {
      return prevData.map((item, index) => {
        if (index === code) {
          const isSelected = !item.isSelected;
          setSelectedDataRow(isSelected ? data[code] : null);
          return { ...item, isSelected };
        }
        return { ...item, isSelected: false };
      });
    });
  };

  return (
    <>
    <div className="bg-grey-bg font-sourcesanspromx-auto pb-[27px] px-[27px] md:px-[0px] relative w-full">
        <div className="font-inter flex items-center justify-center h-[100vh]  max-w-[1360px] mx-auto w-full z-[1] body-login">
        <Header>
            
            </Header>

          <main className="main-block mt-10">
            <div className="login-box-table sm:w-[100%] px-[40px] py-[20px] sm:px-[0px]" >
              <div className='flex flex-row gap-10'>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker
                  label="Выберите дату"
                  value={selectedDate}
                  onChange={(newValue) => {
                    setSelectedDate(newValue);
                    handleChange(newValue);
                  }}
                  
                />
              </LocalizationProvider>
              <Select
                id="dropdown"
                
                options={optionsBuilding}
                value={selectedOptionBuilding}
                onChange={handleChangeBuild}
                className='w-[259px] mb-[20px] sm:ml-[20px]'
                styles={customStyles}
                placeholder="Аудитории"
              />
              </div>
              <table className='table-res h-[422px] sm:max-w-[457px] md:mx-auto md:max-w-[571px]'>
                <thead>
                  <tr>
                      <th rowSpan={2} className='table-th-left px-[20px] md:px-[15px] sm:px-[10px]'>
                        №
                      </th>
                      <th rowSpan={2} className='border-t-0 md:px-[50px] sm:px-[30px]'>
                        Дата
                      </th>
                      <th rowSpan={2} className='border-t-0 md:px-[50px] sm:px-[30px]'>
                        Аудитория
                      </th>
                      <th colSpan="2" className='table-th-right'>Доступное время</th>
                  </tr>
                  <tr>
                    <th className='px-[80px] md:px-[50px] sm:px-[20px]'>Начало</th>
                    <th className='border-r-0 px-[80px] md:px-[50px] sm:px-[20px]'>Конец</th>
                  </tr>
                </thead>
                <tbody>
                  {data.length !== 0 ? (
                    data.map((row, index) => (
                      <tr key={row.id} onClick={() => swapSelected(index)} className={row.isSelected ? "select-row" : ""}>
                        <td className={'border-l-0 '}>{index + 1}</td>
                        <td className=''>{row.date}</td>
                        <td className=''>{row.location.name}</td>
                        <td className=''>{row.starting_time}:00</td>
                        <td className='border-r-0'>{row.end_time}:00</td>
                      </tr>
                    ))
                  ) : (
                    <tr className='h-[320px]'>
                      <td colSpan={5} className='table-th-right text-center text-xl'>
                        На данную дату нет броней
                      </td>
                    </tr>
                  )} 
                </tbody>

              </table>

              <div className='flex flex-row mt-[20px] gap-5 justify-end fotter-block w-full'>
                  
                  <Button onClick={deleteReservation} type="submit" className="cursor-pointer font-semibold leading-[normal] min-w-[200px] h-[60px] text-center text-l p-[0px]">
                    Удалить
                  </Button>
                  <Button onClick={() => setModalActive(true)} type="submit" className="cursor-pointer font-semibold leading-[normal] min-w-[200px] h-[60px] text-center text-l p-[0px]">
                    Редактировать
                  </Button>
                  <Button onClick={() => setModalActive(true)} type="submit" className="cursor-pointer font-semibold leading-[normal] min-w-[200px] h-[60px] text-center text-l p-[0px]">
                    Добавить
                  </Button>
              </div>

            </div>
          </main>
        </div>
        <ModalReservation audiences={["1225", "355", "444"]}  active={modalActive} setActive={setModalActive}>
          
      </ModalReservation>
    </div>
    </>);
  
}

export default EditReservation;