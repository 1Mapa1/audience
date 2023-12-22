import React, {useState, useRef} from "react";
import { Img, Button } from "components";
import Carousel from "react-multi-carousel";

const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1
    },
  };

const LoadingImg = () => { 

    const [images, setImages] = useState([]);
  const [activeIndex, setActiveIndex] = useState(null);
  const fileInputRef = useRef(null);
  const handleImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      let img = e.target.files[0];
      setImages([...images, URL.createObjectURL(img)]);
    }
  };

  const afterChangeHandler = (previousSlide, { currentSlide }) => {
    console.log(currentSlide);
    setActiveIndex(images[currentSlide - 2]);
  };

  const handleButtonClick = () => {
    fileInputRef.current.click(); 
  };
  const handleDelete = () => {
    setImages(images.length === 1 ? [] : images.filter(x => x !== activeIndex));
  };

    return(
        <div className="py-[40px]">
            <div className="h-[350px] w-[450px] rounded-[20px]" style={{backgroundSize: 'cover', backgroundPosition: 'center', border: "1px solid gray" }}>
                {images.length !== 0 
                ? <Carousel swipeable={true}
                    draggable={true}
                    showDots={true}
                    responsive={responsive}
                    ssr={true} // Server-side rendering
                    infinite={true}
                    transitionDuration={500}
                    afterChange={afterChangeHandler}
                    containerClass="pb-[30px]"
                    removeArrowOnDeviceType={["desktop", "mobile"]}
                    dotListClass="custom-dot-list-style"
                    itemClass="rounded-[20px]" 
                    className="w-full items-start" >
                    {
                        images.map((img) => {
                        return(<Img
                            src={img} 
                            className="h-[350px] rounded-[20px] mx-auto">
                        </Img>)
                        })
                    }
                </Carousel>
                : <div className="h-full w-full bg-gray-400 rounded-[20px]"></div>} {/* Показывать серый фон, если изображение не выбрано */}
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
                <Button className=" font-semibold leading-[normal] min-w-[200px] h-[60px] text-center text-l p-[0px]" onClick={handleDelete}>
                Удалить фото
                </Button>

                </div>
            </div>
        </div>
    )
}

export { LoadingImg }