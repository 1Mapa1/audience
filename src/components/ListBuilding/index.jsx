import React from "react";
import { Building } from "components";

const ListBuilding = ({items}) => { 
    const getIterationsCount = (itemsCount) => {
        return Math.ceil(itemsCount / 3);
    };
    
      // Функция для рендера элементов
      const renderItems = (iteration) => {
        const startIndex = iteration * 3;
        const endIndex = startIndex + 3;
        return items.slice(startIndex, endIndex).map((item, index) => (
          <Building key={startIndex + index} urlImg={item.urlImg} build={item.build} adres={item.adres}></Building>
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
