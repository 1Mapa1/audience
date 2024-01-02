import React, { useState } from 'react';
import Select from 'react-select';
import Typography from '@mui/material/Typography';

const optionsEquipment = [
    { value: 1, label: 'Микроскоп' },
    { value: 2, label: 'Весы' },
    { value: 3, label: 'Термометр' },
    { value: 4, label: 'Пробирки' },
    { value: 5, label: 'Барометр' },
    { value: 6, label: 'Колба' },
    { value: 7, label: 'Горелка' },
]

const optionsMusic = [
    { value: 1, label: 'Гитара' },
    { value: 2, label: 'Трамбон' },
    { value: 3, label: 'Треугольник' },
    { value: 4, label: 'Скрипка' },
    { value: 5, label: 'Баян' },
    { value: 6, label: 'Пианино' },
    { value: 7, label: 'Флейта' },
]

const optionsSport = [
    { value: 1, label: 'Баскетбольные мячи' },
    { value: 2, label: 'Скакалки' },
    { value: 3, label: 'Футбольные мячи' },
    { value: 4, label: 'Волейбольные мячи' },
    { value: 5, label: 'Козел' },
    { value: 6, label: 'Ворота' },
    { value: 7, label: 'Гири' },
]

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

const SelectMultiEquipment = ({text, type_audience_id, onMiltiFormExtraChange}) => {
  const [selectedEquipment, setSelectedEquipment] = useState([])

  const handleChange = (event) => {
    setSelectedEquipment(event)
    onMiltiFormExtraChange(event)
  };

  return (
    <div>
        <Typography variant="h7">{text}</Typography>
        <Select
            isMulti
            name="colors"
            options={optionsEquipment}
            styles={customStyles}
            className="basic-multi-select mt-[16px] mb-[8px]"
            classNamePrefix="select"
            placeholder={"Выберите оборудование"}
            menuPlacement="top"
            onChange={handleChange}
        />
    </div>
  )
};

const SelectMultiMusic = () => {
    return (
      <div>
          <Typography variant="h7">Музыкальные инструменты</Typography>
          <Select
              isMulti
              name="colors"
              options={optionsMusic}
              styles={customStyles}
              className="basic-multi-select mt-[16px] mb-[8px]"
              classNamePrefix="select"
              placeholder={"Выберите инструмент"}
              menuPlacement="top"
          />
      </div>
    )
};

const SelectMultiSport = () => {
    return (
      <div>
          <Typography variant="h7">Спортивный инвентарь</Typography>
          <Select
              isMulti
              name="colors"
              options={optionsSport}
              styles={customStyles}
              className="basic-multi-select mt-[16px] mb-[8px]"
              classNamePrefix="select"
              placeholder={"Выберите инвентарь"}
              menuPlacement="top"
          />
      </div>
    )
};
  
  

export { SelectMultiEquipment, SelectMultiMusic, SelectMultiSport }