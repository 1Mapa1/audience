import React, {useState, useEffect} from "react";
import Select from 'react-select';
import { LoadBuildingsData } from 'repo/LoadBuildingsData';


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

const SelectBuilding = ({fetchData}) => {

    const [selectedOptionBuilding, setSelectedOptionBuilding] = useState(null);
  const [optionsBuilding, setBuildings] = useState(null);
  const [loadingBuildings, setLoadingBuildings] = useState(true);

  const fetchBuildings = async () => {
    // Получаем строения
    try {
      // using await to make async code look sync and shorten 
      const res = await LoadBuildingsData();
      const preparedData = res.map(item => {
        return { value: item.id, label: item.name };
      });
      setBuildings(preparedData)
      setSelectedOptionBuilding(null)
    } catch (err) {
      console.error(`Error: ${err}`);
      // setting the error state
    } finally {
      setLoadingBuildings(false);
      
    }
  };

  useEffect(() => {
    fetchBuildings();
  }, []);
  
  useEffect(() => {
    if(selectedOptionBuilding) {
        fetchData(selectedOptionBuilding);
    }
  }, [selectedOptionBuilding]);

  const handleChangeBuild = (selected) => {
    setSelectedOptionBuilding(selected);    
  }

    return (
        <div>
        { loadingBuildings ? 
            <Select
              id="dropdown"
              className='w-[259px] mb-[20px] sm:ml-[20px]'
              styles={customStyles}
              placeholder="Корпуса"
            />
          :
            <Select
              id="dropdown"
              options={optionsBuilding}
              value={selectedOptionBuilding}
              onChange={handleChangeBuild}
              className='w-[259px] mb-[20px] sm:ml-[20px]'
              styles={customStyles}
              placeholder="Корпуса"
            />
          }
          </div>
    )
}

export { SelectBuilding }