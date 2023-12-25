import React from "react";
import { Building } from "components";
import { Link } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { setAudienceData } from '../../redux_file/actions/pageActions';

const ListBuilding = ({items}) => { 

  const dispatch = useDispatch();

  const getIterationsCount = (itemsCount) => {
      return Math.ceil(itemsCount / 3);
  };

  const handleData = (data) => {
    dispatch(setAudienceData(data));

  } 
    // Пример входных данных
    // data = [{
    //   address: "Малая Калужская улица, 1",
    //   icon_link: "https://bwdepnzjuqvzreolimzt.supabase.co/storage/v1/object/sign/spacesharing/buildings_icons/1_building.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJzcGFjZXNoYXJpbmcvYnVpbGRpbmdzX2ljb25zLzFfYnVpbGRpbmcucG5nIiwiaWF0IjoxNzAyNTg0MDAxLCJleHAiOjE3MzQxMjAwMDF9.xw61GCKGHibHgDqAiuRuaQUA9ESgXmeW671WbUQCqpY&t=2023-12-14T20%3A00%3A00.887Z",
    //   id: 1,
    //   name: "1-й корпус"}]
    // Функция для рендера элементов
    const renderItems = (iteration) => {
      const startIndex = iteration * 3;
      const endIndex = startIndex + 3;
      return items.slice(startIndex, endIndex).map((item, index) => (
        <Link to={'/audience'} onClick={() => handleData(item)}>
          <Building key={startIndex + index} urlImg={item.icon_link} build={item.name} address={item.address}></Building>
        </Link>
      ));
    };
  
  return (
      <div className="flex flex-col gap-10">
          {[...Array(getIterationsCount(items.length))].map((_, i) => (
          <div key={i} className="flex flex-row gap-40 justify-center">{renderItems(i)}</div>
          ))}
      </div>
  );

}

export { ListBuilding }
