import React, {useState, useEffect} from 'react';
import Select from 'react-select';
import { Button, ModalEditReservation, Header, ModalReservation, ModalRemove} from "components";
// import { loadFreeTime } from 'repo/loadFreeTime';
// import { uploadScheduleSelect } from 'repo/uploadScheduleSelect';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider, DatePicker, ruRU} from '@mui/x-date-pickers';
import dayjs from 'dayjs';
import 'dayjs/locale/ru';
import { loadFreeTime } from 'repo/loadFreetime';
import { LoadBuildingsData } from 'repo/LoadBuildingsData';
import { getAllAudience } from 'repo/getAllAudience';
import { useSelector, useDispatch } from 'react-redux';
import { fetchDataIfNeeded } from 'redux_file/reducers/buildingReducer';
// import { fetchAllAudiencesData, getData } from 'redux/actions/pageActions';
// import { useSelector, useDispatch } from 'react-redux';

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
  const [modalRemoveActive, setModalRemoveActive] = useState(false);
  const [modalEditActive, setModalditActive] = useState(false);

  const [selectedDataRow, setSelectedDataRow] = useState(null);
  const [data, setData] = useState([]);

  const [loadingData, setLoadingData] = useState(true);
  const [audience, setAudience] = useState([]);


  // redux
 // настроки фильтрации
  const [selectedOptionBuilding, setSelectedOptionBuilding] = useState(null);
  const optionsBuilding = useSelector((state) => state.data.data);
  const loadingBuilding = useSelector((state) => state.data.loading);
  const dispatch = useDispatch();

  useEffect(() => {
    if(loadingBuilding !== 'fulfilled') {
      dispatch(fetchDataIfNeeded());
    }
  }, [dispatch]);
  useEffect(() => {
    if (loadingBuilding === 'fulfilled') {
      setSelectedOptionBuilding({value: optionsBuilding[0].id, label: optionsBuilding[0].name})
    }
  }, [loadingBuilding]);

  useEffect(() => {
    if(selectedOptionBuilding && selectedDate) {
      fetchData(selectedOptionBuilding.value, selectedDate.format('YYYY-MM-DD'));
    }
  }, [selectedOptionBuilding, selectedDate]);
  

  const fetchData = async (building_id, date) => {
    setLoadingData(true)
    // Получаем строения
    try {
      // using await to make async code look sync and shorten 
      const res = await loadFreeTime(building_id, date);
      setData(res);
    } catch (err) {
      console.error(`Error: ${err}`);
      // setting the error state
    } finally {
      setLoadingData(false);
    }
  };

  const fetchAudience = async () => {
    // Получаем все аудиенции
    try {
      const res = await getAllAudience();
      setAudience(res);
      console.log(audience);
    } catch (err) {
      console.error(`Error: ${err}`);
    }
  };
  

  useEffect(() => {
    if(selectedOptionBuilding && selectedDate) {
      fetchData(selectedOptionBuilding.value, selectedDate.format('YYYY-MM-DD'));
    }
  }, [selectedOptionBuilding, selectedDate]);





  const handleChangeBuild = (selected) => {
    setSelectedOptionBuilding(selected);    
  }

  const handleClickEdit = () => {
    selectedDataRow !== null ? setModalditActive(true) : setModalditActive(false)
  };

  

  const handleClickAdd = () => {
    
    fetchAudience();
    setModalActive(true);
    
  };

  const deleteReservation = () => {
    selectedDataRow !== null ? setModalRemoveActive(true) : setModalRemoveActive(false)
    }

  

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
              
              <LocalizationProvider adapterLocale='ru' localeText={ruRU.components.MuiLocalizationProvider.defaultProps.localeText} dateAdapter={AdapterDayjs}>
                <DatePicker
                  
                  format='DD/MM/YYYY'
                  label="Выберите дату"
                  value={selectedDate}
                  onChange={(newValue) => {
                    setSelectedDate(newValue);
                    // handleChange(newValue);
                  }}
                  
                />
              </LocalizationProvider>
              { loadingBuilding === 'fulfilled' ? 
                <Select
                  id="dropdown"
                  
                  options={optionsBuilding.map(item => {
                    return { value: item.id, label: item.name };
                  })}
                  value={selectedOptionBuilding}
                  onChange={handleChangeBuild}
                  className='w-[259px] mb-[20px] sm:ml-[20px]'
                  styles={customStyles}
                  placeholder="Корпуса"
                />
                :
                <Select
                  id="dropdown"
                  className='w-[259px] mb-[20px] sm:ml-[20px]'
                  styles={customStyles}
                  placeholder="Корпуса"
                />
                }
              
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
                { loadingData ? <></> :
                <tbody>
                  {data.length !== 0 ? (
                    data.map((row, index) => (
                      <tr key={row.id} onClick={() => swapSelected(index)} className={row.isSelected ? "select-row" : ""}>
                        <td className={'border-l-0 '}>{index + 1}</td>
                        <td className=''>{row.date}</td>
                        <td className=''>{row.Audiences.audience_name}</td>
                        <td className=''>{row.starting_time.substring(0, 5)}</td>
                        <td className='border-r-0'>{row.end_time.substring(0, 5)}</td>
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
              }
              </table>
              

              <div className='flex flex-row mt-[20px] gap-5 justify-end fotter-block w-full'>
                  
                  <Button onClick={deleteReservation} type="submit" className="cursor-pointer font-semibold leading-[normal] min-w-[200px] h-[60px] text-center text-l p-[0px]">
                    Удалить
                  </Button>
                  <Button onClick={handleClickEdit} type="submit" className="cursor-pointer font-semibold leading-[normal] min-w-[200px] h-[60px] text-center text-l p-[0px]">
                    Редактировать
                  </Button>
                  <Button onClick={handleClickAdd} type="submit" className="cursor-pointer font-semibold leading-[normal] min-w-[200px] h-[60px] text-center text-l p-[0px]">
                    Добавить
                  </Button>
              </div>

            </div>
          </main>
          
        </div>
        <ModalReservation audiences={audience} active={modalActive} setActive={setModalActive}>
          
        </ModalReservation>
        {
          selectedDataRow !== null 
          ? <ModalEditReservation audience={selectedDataRow} active={modalEditActive} setActive={setModalditActive}></ModalEditReservation> 
          : <></>
        }
        {
          selectedDataRow !== null 
          ? <ModalRemove audience={selectedDataRow} active={modalRemoveActive} setActive={setModalRemoveActive}></ModalRemove> 
          : <></>
        }
       
    </div>
    </>);
  
}
      

export default EditReservation;