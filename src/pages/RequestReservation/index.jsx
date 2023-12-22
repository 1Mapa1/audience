import React, {useState} from 'react';
import { Button, Header} from "components";
// import { loadFreeTime } from 'repo/loadFreeTime';
// import { uploadScheduleSelect } from 'repo/uploadScheduleSelect';
import { faArrowAltCircleRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const getStatusButton = (row) => {

    if (row.status === "Одобрено")
    {
        return (
            <span>
            <button className='green-button select'>Одобрено</button> <button className='red-button'>Отказать</button>
            </span>
        )
    }
    if (row.status === "Отказ") {
        return (
            <span>
            <button className='green-button'>Одобрить</button> <button className='red-button select'>Отказано</button>
            </span>
        )
    }
    return (
        <span>
        <button className='green-button select'>Одобрить</button> <button className='red-button select'>Отказать</button>
        </span>
    )
}

const RequestReservation = () => {

  const [data, setData] = useState([ {
    location: {
      name: "пример"
    },
    date: "13.12.2023",
    starting_time: "12",
    end_time: "18",
    isSelected: false,
    status: "Одобрено",
    who: "Иванов И.И./Клубная деятельность"
  }, 
  {
    location: {
      name: "пример 2"
    },
    date: "14.12.2023",
    starting_time: "17",
    end_time: "18",
    isSelected: false,
    status: "На расмотрении",
    who: 'Маркизат М.М./Квиз “Ураган”'
  }]);


  return (
    <>
    <div className="bg-grey-bg font-sourcesanspromx-auto pb-[27px] px-[27px] md:px-[0px] relative w-full">
        <div className="font-inter flex items-center justify-center h-[100vh]  max-w-[1360px] mx-auto w-full z-[1] body-login">
        <Header>
            
            </Header>

          <main className="main-block mt-10">
            <div className="login-box-table sm:w-[100%] px-[40px] py-[20px] sm:px-[0px]" >
              
              <table className='table-res h-[500px] sm:max-w-[457px] md:mx-auto md:max-w-[571px]'>
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
                      <th rowSpan={2} className='border-t-0 md:px-[50px] sm:px-[30px] px-[80px]'>
                        Кто/зачем
                      </th>
                      <th rowSpan={2} className='table-th-right md:px-[50px] sm:px-[30px] px-[80px]'>
                        Статус*
                      </th>
                  </tr>
                  <tr>
                    <th className='px-[80px] md:px-[40px] sm:px-[20px]'>Начало</th>
                    <th className='border-r-0 px-[80px] md:px-[40px] sm:px-[20px]'>Конец</th>
                  </tr>
                </thead>
                <tbody>
                  { data.map((row, index) => (
                    <tr key={row.id} className={row.isSelected ? "select-row" : ""}>
                      <td className={'border-l-0 '}>{index + 1}</td>
                      <td className=''>{row.date}</td>
                      <td className=''>{row.location.name}</td>
                      <td className=''>{row.starting_time}:00</td>
                      <td className=''>{row.end_time}:00</td>
                      <td className='text-left px-[10px]'><span>{row.who}</span> <FontAwesomeIcon icon={faArrowAltCircleRight} style={{color: "grey", fontSize: "20px", margin: "auto"}} /></td>
                      <td className='border-r-0'>{getStatusButton(row)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>

              <div className='flex flex-row justify-between mt-[20px] items-center fotter-block'>
                <p className='text-xs text-zinc-400 w-[40%]'>* Брони, на которые ответили отказом или была отменена, пропадут из таблицы в течении трех дней</p>
                <div className='flex flex-row gap-5'>
                </div>
              </div>

            </div>
          </main>
        </div>
    </div>
    </>);
  
}

export default RequestReservation;