import React from "react";
import Grid from '@mui/material/Grid';
import { RadioButton, InputCount } from "components";
import { useState, useEffect } from "react";

const SelectAudience = ({text, onFormChange}) => {

    const [formData, setFormData] = useState({});

    useEffect(() => {
        console.log(formData)
        onFormChange(formData); // Вызовите обработчик после монтирования компонента
    }, [formData]);

    const handleChildInputChange = (name, value) => {
        setFormData(prevFormData => {
            return { ...prevFormData, [name]: value };
        });
      };

    return (
        <div>
            <div>
                <Grid container spacing={3} className="pt-[16px] mb-[8px]">
                <Grid item xs={4}>
                    <InputCount name={'seats'} onInputChange={handleChildInputChange}>Количество мест</InputCount>
                </Grid>
                <Grid item xs={4}>
                    <InputCount name={'PC'} onInputChange={handleChildInputChange}>Количество ПК</InputCount>
                </Grid>
                <Grid item xs={4}>
                    <RadioButton name={'projector'} onInputChange={handleChildInputChange}>Есть проектор?</RadioButton>
                </Grid>
                </Grid>
            </div>
            <div>
                <Grid container spacing={3} className="pt-[16px] mb-[8px]">
                <Grid item xs={4}>
                    <InputCount name={'printer'} onInputChange={handleChildInputChange}>Количество принтеров</InputCount>
                </Grid>
                <Grid item xs={4}>
                    <RadioButton name={'conditioner'} onInputChange={handleChildInputChange}>{"Есть кондиционер?"}</RadioButton>
                </Grid>
                <Grid item xs={4}>
                    <RadioButton name={'argument'} onInputChange={handleChildInputChange}>{text}</RadioButton>
                </Grid>
                </Grid>
            </div>
        </div>
    )
}

export { SelectAudience }