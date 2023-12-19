import React, {useState, useRef} from "react";
import { Header} from "components";
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import { Button, Text } from 'components';
const CreateAudience = () => {
  const [name, setName] = useState('');
  const [audience, setAudience] = useState('');

  const [image, setImage] = useState(null); // Состояние для хранения изображения
  const fileInputRef = useRef(null);
  const handleImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      let img = e.target.files[0];
      setImage(URL.createObjectURL(img)); // Создаем URL изображения
    }
  };
  const handleButtonClick = () => {
    fileInputRef.current.click(); // Программно вызывает клик по input
  };
  const handleDelete = () => {
    setImage(null); // Программно вызывает клик по input
  };
  const handleNameChange = (e) => {
    setName(e.target.value);
  }

  const handleAudienceChange = (e) => {
    setAudience(e.target.value);
  }

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
                  <div className="flex flex-col w-full">
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
                  <div className="py-[40px] pl-[40px]">
                    <div className="h-[350px] w-[450px] rounded-[20px]" style={{ backgroundImage: `url(${image})`, backgroundSize: 'cover', backgroundPosition: 'center', border: "1px solid gray" }}>
                      {!image && <div className="h-full w-full bg-gray-400 rounded-[20px]"></div>} {/* Показывать серый фон, если изображение не выбрано */}
                    </div>
                    <div className="flex flex-col items-center mt-[40px] gap-5">
                      <div className="flex flex-row items-center gap-5">
                      <input
                        type="file"
                        style={{ display: 'none' }}
                        ref={fileInputRef}
                        onChange={handleImageChange}
                      />

                      <Button className=" font-semibold leading-[normal] min-w-[200px] h-[60px] text-center text-l p-[0px]" onClick={handleButtonClick}>
                        Загрузить фото
                      </Button>
                        <Button className=" font-semibold leading-[normal] min-w-[200px] h-[60px] text-center text-l p-[0px]" onClick={handleButtonClick}>
                          Изменить фото
                        </Button>

                      </div>
                      <Button className=" font-semibold leading-[normal] min-w-[200px] h-[60px] text-center text-l p-[0px]" onClick={handleDelete}>
                        Удалить фото
                      </Button>
                    </div>
                  </div>

                </div>
            </div>
          </main>
        </div>
    </div>
    </>);
  
}

export default CreateAudience;