import React, { useEffect, useState } from 'react';
import Header from '../../components/Header';
import More from "../../assets/MacOSMaximize.svg"
import CardGroup from '../../components/CardGroup';
import { useNavigate } from "react-router";
import api from '../../service/api';
import { Device } from '../../@types/types';

function Home() {
  const navigate = useNavigate();
  const [groupList, setgroupList] = useState<Device[]>([])


  const getDevicesGroup = async () => {

    await api.get('/devices')
    .then(response => {
      setgroupList(response.data.device);
    })
    .catch(error => {
      console.error(error);
    });
  }
  function handleDeleteItem() {
    // setgroupList(groupList)
    document.location.reload();
  }
  
  useEffect(() => {
      getDevicesGroup();
    
  }, [])

  return (
    <>
    <Header/>
       
        <div className='w-[100%] justify-center flex items-center'>
            <div className='w-[1100px] h-[500px]'>

                <div className='w-[100%] h-[500px] border border-[#d3d3d3] rounded-[20px] mt-[20px] justify-start flex items-start p-[20px] gap-[20px]'>
                  <div className='justify-center flex items-center  gap-[20px]'>
                    {
                    groupList.map((content) => (
                      <CardGroup 
                        nameGroup={content.name}
                        idGroup={content._id} 
                        onClick={() => navigate(`/device/${content._id}`)} 
                        onDelete={handleDeleteItem} 
                        mqqtTopic={content?.deviceInput[0].mqttClientTopic}

                        infoType={content?.deviceInput[0].nameInput}
                        measurement={content?.deviceInput[0].measurement}

                         />
                    ))
                    }
                    <img src={More} alt="Device" className='w-[100px] cursor-pointer' onClick={() => navigate(`/form-group`)}/>
                  </div>
                </div>
                
            </div>

        </div>
    </>
 
  );
}

export default Home;
