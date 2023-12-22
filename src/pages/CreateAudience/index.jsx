import React from "react";
import { Header} from "components";
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import { Text, LoadingImg } from 'components';
import Select from "react-select";


const CreateAudience = () => {


  return (
    <>
    <div className="bg-grey-bg font-sourcesanspromx-auto pb-[27px] px-[27px] md:px-[0px] relative w-full">
        <div className="font-inter flex items-center justify-center h-[100vh]  max-w-[1360px] mx-auto w-full z-[1] body-login">
          <Header>

          </Header>

          <main className="main-block mt-[100px]">
            <div className="login-box w-full sm:w-[100%] px-[40px] py-[20px] sm:px-[20px]">
                <Text className="mb-10 text-[30px]">Создание новой аудитории</Text>
                <div className="flex flex-row w-full">
                  <div className="flex flex-col w-full mr-[40px]">
                    <div>
                      <Typography variant="h7">Наименование аудитории</Typography>
                      <TextField
                        placeholder="Наименование"
                        variant="outlined"
                        margin="normal"
                        type="text" 
                        fullWidth
                      />
                    </div>
                    <div>
                      <Typography variant="h7">Тип помещения</Typography>
                      <TextField
                        placeholder="Аудитория, спортзал, актовый зал...."
                        variant="outlined"
                        margin="normal"
                        type="text" 
                        fullWidth
                      />
                    </div>
                    <div>
                      <Typography variant="h7">Местоположение</Typography>
                      <Grid container spacing={2} >
                        <Grid item xs={4}>
                          <TextField
                          margin="normal"
                            fullWidth
                            placeholder="Корпус"
                          />
                        </Grid>
                        <Grid item xs={8}>
                          <TextField
                          margin="normal"
                            fullWidth
                            placeholder="Крыло, этаж, номер кабинета (если есть)"
                          />
                        </Grid>
                      </Grid>
                    </div>
                    <div>
                      <Typography variant="h7">Площадь (кв. м)</Typography>
                      <TextField
                        placeholder="Площадь"
                        variant="outlined"
                        margin="normal"
                        type="text" 
                        fullWidth
                      />
                    </div>
                    <div>
                      <Typography variant="h7">Вместимость</Typography>
                      <TextField
                        placeholder="Сколько человек вмещается в аудитории в комфортных условиях"
                        variant="outlined"
                        margin="normal"
                        type="text" 
                        fullWidth
                      />
                    </div>
                    <div>
                      <Grid container spacing={3} className="pt-[16px] mb-[8px]">
                        <Grid item xs={4}>
                          <Typography variant="h7">Количество мест</Typography>
                          <TextField
                          margin="normal"
                            fullWidth
                            placeholder="Число"
                          />
                        </Grid>
                        <Grid item xs={4}>
                          <Typography variant="h7">Количество ПК</Typography>
                          <TextField
                          margin="normal"
                            fullWidth
                            placeholder="Число"
                          />
                        </Grid>
                        <Grid item xs={4}>
                          <Typography variant="h7">Количество проекторов</Typography>
                          <TextField
                          margin="normal"
                            fullWidth
                            placeholder="Число"
                          />
                        </Grid>
                      </Grid>
                    </div>
                  </div>
                  <LoadingImg></LoadingImg>

                </div>
            </div>
          </main>
        </div>
    </div>
    </>);
  
}

export default CreateAudience;