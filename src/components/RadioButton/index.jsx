import React, {useState, useEffect} from "react";
import Typography from '@mui/material/Typography';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';

const RadioButton = ({name, children, onInputChange}) => {
  const [value, setValue] = useState(0);

  useEffect(() => {
    
    onInputChange(name, value); // Вызовите обработчик после монтирования компонента
  }, []);

  const handleRadioChange = (event) => {
    const value = event.target.value;
    setValue(value);
    onInputChange(name, value);
  };
    return (
        <div>
            <Typography variant="h7">{children}</Typography>
            <RadioGroup
            aria-label="options"
            name={name}
            value={value}
            onChange={handleRadioChange}
            row
            className="mt-[23px] "
            >
                <FormControlLabel value={0} control={<Radio />} label="Нет" />
                <FormControlLabel value={1} control={<Radio />} label="Да" />
            </RadioGroup>
        </div>
    )
}

export { RadioButton }