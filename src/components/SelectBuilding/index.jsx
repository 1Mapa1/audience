import React, {useState, useEffect} from "react";
import Select from 'react-select';
import { useSelector, useDispatch } from 'react-redux';
import { fetchDataIfNeeded } from 'redux_file/reducers/buildingReducer';

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
    if(selectedOptionBuilding) {
        fetchData(selectedOptionBuilding.value);
    }
  }, [selectedOptionBuilding]);

  const handleChangeBuild = (selected) => {
    setSelectedOptionBuilding(selected);    
  }

    return (
        <div>
        {loadingBuilding === 'fulfilled' ? 
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
    )
}

export { SelectBuilding }