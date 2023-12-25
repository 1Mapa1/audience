import React from "react"
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';



const InputCount = ({children}) => {
    return (
        <div>
            <Typography variant="h7">{children}</Typography>
            <TextField
            margin="normal"
            fullWidth
            placeholder="Число"
            />
        </div>
    )
}

export { InputCount }