import React from "react"
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import { useState, useEffect } from "react";



const InputCount = ({name, children, onInputChange}) => {
    const [inputValue, setInputValue] = useState(0);

    useEffect(() => {
        onInputChange(name, inputValue); // Вызовите обработчик после монтирования компонента
      }, []);
      
    const handleInputChange = (event) => {
        const value = event.target.value;
        setInputValue(value);
        onInputChange(name, value); // Вызовите обратный вызов, передав значение в родительский компонент
      };
    return (
        <div>
            <Typography variant="h7">{children}</Typography>
            <TextField
            name={name}
            margin="normal"
            value={inputValue}
            fullWidth
            placeholder="Число"
            type="number"
            onChange={handleInputChange}
            />
        </div>
    )
}

export { InputCount }