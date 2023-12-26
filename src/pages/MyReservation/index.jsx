import React, {useState, useEffect} from 'react';
import { Button, Header} from "components";
// import { loadFreeTime } from 'repo/loadFreeTime';
// import { uploadScheduleSelect } from 'repo/uploadScheduleSelect';
import { useDispatch } from 'react-redux';
import { setReservationData } from 'redux_file/actions/pageActions';
import { Link } from 'react-router-dom';
import { useUser } from 'hooks/UserContext';
import { getReservationByUser } from 'repo/getReservationByUser';



const MyReservation = () => {

  const dispatch = useDispatch();
  
  const [loadingData, setLoadingData] = useState(true);
  const [data, setData] = useState([]);
  const {user, setUserData} = useUser();
  const [selectedRow, setSelectedRow] = useState(null);

  
  

  const fetchData = async () => {
    setLoadingData(true)
    // Получаем брони
    try {
      const res = await getReservationByUser(user.data.id);
      console.log(res)
      setData(res)
      
    } catch (err) {
      console.error(`Error: ${err}`);
    } finally {
      setLoadingData(false);
    }
  };
  useEffect(() => {
    fetchData()
  }, []);

  const swapSelected = (code) => {
    setData(prevData =>
      prevData.map((item, index) => {
        if (index === code) {
          const isSelected = !item.isSelected;
          setSelectedRow(isSelected ? data[code] : null);
          return { ...item, isSelected };
        }
        return { ...item, isSelected: false };
      })
    );
  };

  const handleSendData = () => {
    const dataToSend = selectedRow;
    dispatch(setReservationData(dataToSend));
  };

  return (
    <>
    <div className="bg-grey-bg font-sourcesanspromx-auto pb-[27px] px-[27px] md:px-[0px] relative w-full">
        <div className="font-inter flex items-center justify-center h-[100vh]  max-w-[1360px] mx-auto w-full z-[1] body-login">
        <Header>
            
            </Header>

          <main className="main-block mt-10">
            <div className="login-box-table sm:w-[100%] px-[40px] py-[20px] sm:px-[0px]" >
              
              <table className='table-res h-[422px] sm:max-w-[457px] md:mx-auto md:max-w-[571px]'>
                <thead>
                  <tr>
                      <th rowSpan={2} className='table-th-left px-[20px] md:px-[15px] sm:px-[10px]'>
                        №
                      </th>
                      <th rowSpan={2} className='border-t-0 px-[40px] md:px-[15px] sm:px-[10px]'>
                        Дата
                      </th>
                      <th rowSpan={2} className='border-t-0 md:px-[50px] sm:px-[30px]'>
                        Расположение
                      </th>
                      <th colSpan="2" className='border-t-0'>Доступное время</th>
                      <th rowSpan={2} className='table-th-right md:px-[50px] sm:px-[30px]'>
                        * Статус
                      </th>
                  </tr>
                  <tr>
                    <th className='px-[80px] md:px-[40px] sm:px-[20px]'>Начало</th>
                    <th className='border-r-0 px-[80px] md:px-[40px] sm:px-[20px]'>Конец</th>
                  </tr>
                </thead>
                {loadingData ? <></> :
                <tbody>
                  { data.map((row, index) => (
                    <tr key={row.id} onClick={() => swapSelected(index)} className={row.isSelected ? "select-row" : ""}>
                      <td className={'border-l-0 '}>{index + 1}</td>
                      <td className=''>{row.date}</td>
                      <td className=''>{row.audience_id.audience_name}</td>
                      <td className=''>{row.starting_time.substring(0, 5)}</td>
                      <td className=''>{row.end_time.substring(0, 5)}</td>
                      <td className='border-r-0'>{row.status_id.status_name}</td>
                    </tr>
                  ))}
                </tbody>
                }
              </table>

              <div className='flex flex-row justify-between mt-[20px] items-center fotter-block'>
                <p className='text-xs text-zinc-400 w-[40%]'>* Брони, на которые ответили отказом или была отменена, пропадут из таблицы в течении трех дней</p>
                <div className='flex flex-row gap-5'>
                <Link to="/showreservation">
                  <Button onClick={handleSendData} className="cursor-pointer font-semibold leading-[normal] min-w-[200px] h-[60px] text-center text-l p-[0px]">
                    Подробнее
                  </Button>
                  </Link>
                </div>
              </div>

            </div>
          </main>
        </div>
    </div>
    </>);
  
}

export default MyReservation;