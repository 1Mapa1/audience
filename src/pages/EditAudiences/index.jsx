import React, {useState} from 'react';
import { Button, Header} from "components";
// import { loadFreeTime } from 'repo/loadFreeTime';
// import { uploadScheduleSelect } from 'repo/uploadScheduleSelect';
import { Link } from 'react-router-dom';


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

const EditAudiences = () => {

  const [data, setData] = useState([ {
    location: {
      name: "пример"
    },
    buildimg: "1-корпус"
  }, 
  {
    location: {
      name: "пример 2"
    },
    buildimg: "2-корпус"
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
                      <th className='table-th-left px-[20px] md:px-[15px] sm:px-[10px]'>
                        №
                      </th>
                      <th className='border-t-0 px-[40px] md:px-[15px] sm:px-[10px]'>
                        Аудитория
                      </th>
                      <th className='border-t-0 md:px-[50px] sm:px-[30px]'>
                       Корпус
                      </th>
                      <th className='table-th-right  px-[160px]'>
                        Действия
                      </th>
                  </tr>
                  
                </thead>
                <tbody>
                  { data.map((row, index) => (
                    <tr key={row.id} className={row.isSelected ? "select-row" : ""}>
                      <td className={'border-l-0 '}>{index + 1}</td>
                      <td className=''>{row.location.name}</td>
                      <td className=''>{row.buildimg}</td>
                      <td className='border-r-0 '>
                        <Link to={"/detailsAudience"}>
                        <button className='white-button mr-[10px]'>Подробнее</button>
                        </Link>
                        <button className='white-button mr-[10px]'>Редактировать</button>
                        <button className='delete-button'>Удалить</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>

              <div className='flex flex-row justify-end mt-[20px] items-center fotter-block'>
                <div className='flex flex-row gap-5'>
                  <Button className='px-[40px] text-[18px]'>Сделать PDF отчет</Button>
                  <Link to={"/createaudience"}>
                    <Button className='px-[40px] text-[18px]'>Добавить</Button>
                  </Link>
                </div>
              </div>

            </div>
          </main>
        </div>
    </div>
    </>);
  
}

export default EditAudiences;