import React, { useState, useEffect } from "react";
import { Header, Text, LoadingImg, SelectAudience, SelectMultiEquipment, SelectMultiMusic, SelectMultiSport, Button } from "components";
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Select from "react-select";
import { useSelector, useDispatch } from 'react-redux';
import { fetchDataIfNeeded } from 'redux_file/reducers/buildingReducer';
import { uploadAudience } from "repo/uploadAudience";



const audiencesTypeOptions= [
  { value: 1, label: 'Аудитория' },
  { value: 2, label: 'Библиотека>' },
  { value: 3, label: 'Актовый зал' },
  { value: 4, label: 'Лабораторная'  },
  { value: 5, label: 'Выстовочный зал' },
  { value: 6, label: 'Спортивный зал' },
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
  
  const [generalFormData, setGeneralFormData] = useState({name: '', typeAudience_id: '', building_id: '', address: '', square: ''});
  const [mainFormData, setMainFormData] = useState({name: '', typeAudience_id: '', building_id: '', address: '', square: ''});

  const [selectedTypeAudience, setSelectedTypeAudience] = useState(null);
   // redux
 // настроки rкорпусов
  const [selectedOptionBuilding, setSelectedOptionBuilding] = useState(null);
  const optionsBuilding = useSelector((state) => state.data.data);
  const loadingBuilding = useSelector((state) => state.data.loading);
  const dispatch = useDispatch();

  useEffect(() => {
    if(loadingBuilding !== 'fulfilled') {
      dispatch(fetchDataIfNeeded());
    }
  }, [dispatch]);
  

  
  const handleChangeTypeAudience = (selected) => {
    setSelectedTypeAudience(selected)
    setGeneralFormData({ ...generalFormData, ['typeAudience_id']: selected.value }); 
  }
  const handleChangeBuild = (selected) => {
    setSelectedOptionBuilding();
    setGeneralFormData({ ...generalFormData, ['building_id']: selected.value }); 
  }
  const handleOnMainChange = (event) => {
    const { name, value } = event.target;
    setGeneralFormData({ ...generalFormData, [name]: value });
  };
  const handleOnImagesChange = (data) => {
    setGeneralFormData({ ...generalFormData, ['images']: data });
  };
  const handleOnExtraFormChange = (form) => {
    setGeneralFormData({ ...generalFormData, ['extra_fields']: form });  
  }

  const onMiltiFormExtraChange = (data) => {
    setGeneralFormData({ ...generalFormData, ['multi_extra_fields']: data });  
  }

  const handleSubmit = async () => {
    console.log(generalFormData);
    const data = await uploadAudience(generalFormData)
    if (data.status == 201 || data.status == 200) {
      alert("Аудитория создана")
    }
    else {
      alert("Произошла ошибка")
    }
    console.log(data)
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
                        name="name"
                        value={generalFormData.name}
                        placeholder="Наименование"
                        variant="outlined"
                        margin="normal"
                        type="text" 
                        fullWidth
                        onChange={handleOnMainChange}
                      />
                    </div>
                    <div>
                      <Typography variant="h7">Тип помещения</Typography>
                      <Select
                        id="dropdown"
                        name="typeAudience_id"
                        options={audiencesTypeOptions}
                        value={selectedTypeAudience}
                        onChange={handleChangeTypeAudience}
                        className='w-wull mb-[8px] mt-[16px] sm:ml-[20px]'
                        styles={customStyles}
                        placeholder={"Аудитория, спортзал, актовый зал...."}
                      />
                    </div>
                    <div>
                      <Typography variant="h7">Местоположение</Typography>
                      <Grid container spacing={2} >
                        <Grid item xs={4} marginTop={"16px"}>
                        {loadingBuilding === 'fulfilled' ? 
                          <Select
                            id="dropdown"
                            options={optionsBuilding.map(item => {
                              return { value: item.id, label: item.name };
                            })}
                            name="building_id"
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
                        </Grid>
                        <Grid item xs={8}>
                          <TextField
                            type='text'
                            name="address"
                            value={generalFormData.address}
                            margin="normal"
                            fullWidth
                            placeholder="Крыло, этаж, номер кабинета (если есть)"
                            onChange={handleOnMainChange}
                          />
                        </Grid>
                      </Grid>
                    </div>
                    <div>
                      <Typography variant="h7">Площадь (кв. м)</Typography>
                      <TextField
                        name="square"
                        value={generalFormData.square}
                        placeholder="Площадь"
                        variant="outlined"
                        margin="normal"
                        type="number" 
                        onChange={handleOnMainChange}
                        fullWidth
                      />
                    </div>
                      {selectedTypeAudience && selectedTypeAudience.value === 1 && (
                        <SelectAudience onFormChange={handleOnExtraFormChange} text={"Есть электронная доска?"}></SelectAudience>
                      )}
                      {selectedTypeAudience && selectedTypeAudience.value === 2 && (
                        <div>
                          <SelectAudience onFormChange={handleOnExtraFormChange}  text={"Есть электронная доска?"}></SelectAudience>
                          <SelectMultiEquipment onMiltiFormExtraChange={onMiltiFormExtraChange}></SelectMultiEquipment>
                        </div>
                      )}
                      {selectedTypeAudience && selectedTypeAudience.value === 3 && (
                        <div>
                        <SelectAudience onFormChange={handleOnExtraFormChange}  text={"Есть аудиосистема?"}></SelectAudience>
                        <SelectMultiMusic></SelectMultiMusic>
                        </div>
                      )}
                      {selectedTypeAudience && selectedTypeAudience.value === 4 && (
                        <div>
                          <SelectAudience onFormChange={handleOnExtraFormChange}  text={"Есть электронная доска?"}></SelectAudience>
                          <SelectMultiEquipment onMiltiFormExtraChange={onMiltiFormExtraChange}></SelectMultiEquipment>
                        </div>
                      )}
                      {selectedTypeAudience && selectedTypeAudience.value === 6 && (
                        <div>
                          <SelectAudience onFormChange={handleOnExtraFormChange}  text={"Есть худ. принадлежности?"}></SelectAudience>
                          <SelectMultiMusic></SelectMultiMusic>
                        </div>
                      )}
                      {selectedTypeAudience && selectedTypeAudience.value === 5 && (
                        <SelectMultiSport></SelectMultiSport>
                      )}
                  </div>
                  <div className="flex flex-col justify-between items-end">
                  <LoadingImg onImagesChange={handleOnImagesChange}></LoadingImg>
                  <Button type='submit' onClick={handleSubmit} className="w-[48%] font-semibold">Сохранить</Button>
                  </div>

                </div>
            </div>
          </main>
        </div>
    </div>
    </>);
  
}

export default CreateAudience;