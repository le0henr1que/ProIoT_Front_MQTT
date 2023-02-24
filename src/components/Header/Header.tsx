import React from 'react';
import Signal from "../../assets/RFIDSignal.svg"
// import logo from './logo.svg';
// import './App.css';

function Header() {
    // var Signal:string
  return (
      <div className="bg-[#2068F5] w-[100%] h-[80px] justify-center flex items-center">
            <div className='w-[1100px] justify-start flex items-center gap-[20px] text-white'>
                <img src={Signal} alt="Logo" className='w-[50px]'/>
                <a href="#">Criar novo grupo de dispositivo</a>
                <a href="#">Grupos de dispositivos</a>
                <a href="#">Sobre</a>
            </div>
      </div>
    
  );
}

export default Header;
