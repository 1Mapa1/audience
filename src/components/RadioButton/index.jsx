import React, {useState} from "react";
import Typography from '@mui/material/Typography';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';

const RadioButton = ({children}) => {
    const [value, setValue] = useState('option1');

  const handleRadioChange = (event) => {
    setValue(event.target.value);
  };
    return (
        <div>
            <Typography variant="h7">{children}</Typography>
            <RadioGroup
            aria-label="options"
            name="options"
            value={value}
            onChange={handleRadioChange}
            row
            className="mt-[23px] "
            >
                <FormControlLabel value="option1" control={<Radio />} label="Нет" />
                <FormControlLabel value="option2" control={<Radio />} label="Да" />
            </RadioGroup>
        </div>
    )
}

export { RadioButton }