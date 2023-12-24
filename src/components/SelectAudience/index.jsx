import React from "react";
import Grid from '@mui/material/Grid';
import { RadioButton, InputCount } from "components";

const SelectAudience = ({text}) => {
    return (
        <div>
            <div>
                <Grid container spacing={3} className="pt-[16px] mb-[8px]">
                <Grid item xs={4}>
                    <InputCount>Количество мест</InputCount>
                </Grid>
                <Grid item xs={4}>
                    <InputCount>Количество ПК</InputCount>
                </Grid>
                <Grid item xs={4}>
                    <RadioButton>Есть проектор?</RadioButton>
                </Grid>
                </Grid>
            </div>
            <div>
                <Grid container spacing={3} className="pt-[16px] mb-[8px]">
                <Grid item xs={4}>
                    <InputCount>Количество принтеров</InputCount>
                </Grid>
                <Grid item xs={4}>
                    <RadioButton>Есть кондиционер?</RadioButton>
                </Grid>
                <Grid item xs={4}>
                    <RadioButton>{text}</RadioButton>
                </Grid>
                </Grid>
            </div>
        </div>
    )
}

export { SelectAudience }