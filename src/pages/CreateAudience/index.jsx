import React, { useState } from "react";
import { Header, Text, LoadingImg, SelectAudience, SelectMultiEquipment, SelectMultiMusic, SelectMultiSport, Button } from "components";
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Select from "react-select";


const optionsBuilding = [
  { value: 1, label: 'Аудитория' },
  { value: 2, label: 'Лабораторная' },
  { value: 3, label: 'Актовый зал' },
  { value: 4, label: 'Творческая студия' },
  { value: 5, label: 'Спортзал' },
  { value: 6, label: 'Конференц зал' },
];
const customStyles = {
  control: (provided) => ({
    ...provided,
    height: '56px',
    minHeight: '56px'
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
const CreateAudience = () => {

  const [selectedOptionBuilding, setSelectedOptionBuilding] = useState(null);
  const handleChangeBuild = (selected) => {
    setSelectedOptionBuilding(selected);
  }
  

  
  
  return (
    <>
    <div className="bg-grey-bg font-sourcesanspromx-auto pb-[27px] px-[27px] md:px-[0px] relative w-full">
        <div className="font-inter flex items-center justify-center h-wull  max-w-[1360px] mx-auto w-full z-[1] body-login">
          <Header>

          </Header>

          <main className="main-block mt-[130px]">
            <div className="login-box w-[1360px] sm:w-[100%] px-[40px] py-[20px] sm:px-[20px]">
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
                      <Select
                        id="dropdown"
                        options={optionsBuilding}
                        value={selectedOptionBuilding}
                        onChange={handleChangeBuild}
                        className='w-wull mb-[8px] mt-[16px] sm:ml-[20px]'
                        styles={customStyles}
                        placeholder={"Аудитория, спортзал, актовый зал...."}
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
                      {selectedOptionBuilding && selectedOptionBuilding.value === 1 && (
                        <SelectAudience text={"Есть электронная доска?"}></SelectAudience>
                      )}
                      {selectedOptionBuilding && selectedOptionBuilding.value === 2 && (
                        <div>
                          <SelectAudience text={"Есть электронная доска?"}></SelectAudience>
                          <SelectMultiEquipment></SelectMultiEquipment>
                        </div>
                      )}
                      {selectedOptionBuilding && selectedOptionBuilding.value === 3 && (
                        <SelectAudience text={"Есть аудиосистема?"}></SelectAudience>
                      )}
                      {selectedOptionBuilding && selectedOptionBuilding.value === 4 && (
                        <div>
                          <SelectAudience text={"Есть худ. принадлежности?"}></SelectAudience>
                          <SelectMultiMusic></SelectMultiMusic>
                        </div>
                      )}
                      {selectedOptionBuilding && selectedOptionBuilding.value === 6 && (
                        <div>
                          <SelectAudience text={"Есть худ. принадлежности?"}></SelectAudience>
                          <SelectMultiMusic></SelectMultiMusic>
                        </div>
                      )}
                      {selectedOptionBuilding && selectedOptionBuilding.value === 5 && (
                        <SelectMultiSport></SelectMultiSport>
                      )}
                  </div>
                  <div className="flex flex-col justify-between items-end">
                  <LoadingImg></LoadingImg>
                  <Button className="w-[48%] font-semibold">Сохранить</Button>
                  </div>

                </div>
            </div>
          </main>
        </div>
    </div>
    </>);
  
}

export default CreateAudience;