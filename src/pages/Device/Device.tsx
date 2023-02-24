import React from 'react';
import CardDevice from '../../components/CardDevice/CardDevice';
import Header from '../../components/Header/Header';
// import logo from './logo.svg';
// import './App.css';

function Device() {
  return (
    <>
        <Header/>
        <div className='w-[100%] justify-center flex items-center'>
            <div className='w-[1100px] h-[500px]'>

                <div className='mb-[0px] mt-[50px]'>
                    <p className='font-bold text-[#3C3C3C] text-2xl'>Sala</p>
                    <p className='font-semibold text-[#3C3C3C]'>TGrupo de dispositivo</p>
                </div>

                {/* <hr className="h-px my-8 bg-[#d3d3d3] border-0 dark:bg-[#d3d3d3]"/>         */}

                <div className='w-[100%] h-[500px] border border-[#d3d3d3] rounded-[20px] mt-[20px] justify-start flex items-start gap-[30px] p-[30px]'>
                    {/* <img src={More} alt="More" className='w-[100px]'/>
                    <span className='text-[#7a7a7a] text-semibold cursor-pointer'>Nenhum dispositivo encontrado, clique aqui para adicionar</span> */}

                    <CardDevice infoDevice='20 C' nameDevice='Temperatura'/>
                    <CardDevice infoDevice='Dia' nameDevice='Claridade'/>

                </div>
                
            </div>

        </div>
    </>

  );
}

export default Device;
