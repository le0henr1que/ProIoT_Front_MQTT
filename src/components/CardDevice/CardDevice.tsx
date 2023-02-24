import React from 'react';
import { DeviceCard } from '../../@types/types';
import Signal from "../../assets/RFIDSignal.svg"


function CardDevice({nameDevice, infoDevice}:DeviceCard) {

  return (
      <div className="bg-[#2068F5] w-[222px] h-[222px] justify-center flex items-center rounded-[20px] cursor-pointer flex-col">
        
            <div className="w-[222px] h-[152px] justify-center flex items-center rounded-b-[20px] cursor-pointer">
                <p className='font-bold text-[#FFFF] text-5xl'>{infoDevice}</p>
            </div>

            <div className="bg-[#FFF] w-[222px] h-[70px] justify-center flex items-center rounded-b-[20px] cursor-pointer">
                <p className='font-bold text-[#2068F5] text-2xl'>{nameDevice}</p>
            </div>
      </div>
    
  );
}

export default CardDevice;
