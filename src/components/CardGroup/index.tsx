import React, {useEffect, useState} from 'react';
import { DeviceCard } from '../../@types/types';
import Device from "../../assets/MultipleDevices.svg"
import More from "../../assets/MacOSMaximize.svg"
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import api from '../../service/api';
import { io } from 'socket.io-client';

function CardGroup({nameGroup, moreDevice, onClick, idGroup, onDelete, mqqtTopic, infoType, measurement}:DeviceCard) {
    const navigate = useNavigate();

    const [value, setValue] = useState<string>()

    const socket = io('http://localhost:8000')
    // useEffect(() => {
        socket.on('connect', () => console.log('[IO] Connect => A new connection has been established'))
        if(mqqtTopic){
            socket.on(mqqtTopic, (value) => {
                setValue(value)
            })
        }
    // }, [value])
    // socket.disconnect()

    const deleteGroup = () => {
        api.delete(`/device/${idGroup}`)
        .then(response => {
            console.log(response)
            // navigate('/')
            onDelete()
        })
        .catch(error => {
            console.error(error);
        });
    }

  return (
      <div className="bg-[#FFF] w-[222px] h-[222px] justify-start flex items-center rounded-[5px] flex-col border border-[#2068F5]">

            <div className="border-b border-b-[#2068F5] w-[100%] h-[60px] flex justify-between items-start ">

                <div className="w-[90%] flex justify-between items-center ">

                    <div className='w-[60px] h-[60px] rounded-[50%] bg-[#2068F5] flex justify-center items-center mt-[30px] ml-[20px]'>
                        <img src={moreDevice == true ? More : Device} alt="Device" className='w-[35px]'/>
                    </div>
                    <p className='text-[#2068F5] mt-[-30px] text-[15px] cursor-pointer' onClick={() => navigate(`/form-group/${idGroup}`)}>Editar</p>
                    <p className='text-[red] mt-[-30px] text-[15px] cursor-pointer' onClick={() => deleteGroup()}>Excluir</p>

                </div>
            </div>

            <div className="w-[85%] mt-[40px] text-[10px] " >
                <p className='font-normal text-[13px] text-[#092F79]'>{nameGroup}</p>
                <h2 className='font-semibold text-[18px] text-[#2068F5]'>{infoType}</h2>

                <p className='font-semibold text-[20px] text-[#717171]'>{!value ? "Carregando..." : value} {measurement}</p>
            </div>

      </div>
    
  );
}

export default CardGroup;
