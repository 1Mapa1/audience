import React from "react";
import { useState, useEffect } from "react";
import { LoadAudienceByBuilding } from "repo/loadAudienceByBulding";
import { HighText, Header, Building, ListAudience} from "components";
import { useSelector } from 'react-redux';

const Audience = () => { 

  const pageAudienceData = useSelector(state => state.page.pageAudienceData);
  console.log(pageAudienceData);
  const [audiences, setAudiences] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    // Получаем строения
    try {
      // using await to make async code look sync and shorten 
      const res = await LoadAudienceByBuilding(1);
      setAudiences(res);
    } catch (err) {
      console.error(`Error: ${err}`);
      // setting the error state
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

    // const audiences = [
    //     {
    //         audience_name: "Аудитория 1025",
    //         type: "Аудитория", 
    //         address: "1 этаж, ауд. 1025",
    //         square: 40,
    //         capacity: 32,
    //         image_links: [
    //             "images/img_121.png",
    //             "images/img_121.png",
    //             "images/img_121.png",
    //         ]
    //     },
    //     {
    //         title: "Аудитория 1030",
    //         type: "Аудитория", 
    //         place: "1 этаж, ауд. 1025",
    //         square: 40,
    //         desk: 32,
    //         computer: 1,
    //         projector: 1,
    //         imgs: [
    //             "images/img_121.png",
    //             "images/img_121.png",
    //             "images/img_121.png",
    //         ]
    //     },
    // ]
    return (
      
        <>
          <div className="bg-white-A700 font-sourcesanspromx-auto pb-[27px] px-[27px] md:px-[0px] relative w-full">
            <div className="font-inter h-[200px] max-w-[1360px] mx-auto w-full z-[1]">
              <Header shadow={true}>
              </Header>
            </div>
            
            
            <div className="max-w-[1360px] mt-auto mx-auto md:px-5 w-full flex justify-center">
                <Building urlImg={pageAudienceData.icon_link} build={pageAudienceData.name} address={pageAudienceData.address}></Building>
            </div>
    
            <div className="max-w-[1360px] mt-auto mx-auto md:px-5 w-full">
              <HighText spacing="tracking-[50px] md:tracking-[20px] sm:tracking-[10px]">
                Аудитории
              </HighText>
    
                {loading ? (<div>Ждемс</div>) : (<ListAudience audiences={audiences}></ListAudience>)}
            </div>
            
            
          </div>
        </>
      );
}

export default Audience