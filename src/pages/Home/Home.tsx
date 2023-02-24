import React from 'react';
import Header from '../../components/Header/Header';
import More from "../../assets/MacOSMaximize.svg"

// import logo from './logo.svg';
// import './App.css';

function Home() {
  return (
    <>
    <Header/>
       
        <div className='w-[100%] justify-center flex items-center'>
            <div className='w-[1100px] h-[500px]'>

                <div className='w-[100%] h-[500px] border border-[#d3d3d3] rounded-[20px] mt-[20px] justify-center flex items-center flex-col'>
                    <img src={More} alt="More" className='w-[100px] cursor-pointer'/>
                    <span className='text-[#7a7a7a] text-semibold cursor-pointer'>Nenhum dispositivo encontrado, clique aqui para adicionar</span>

                </div>
                
            </div>

        </div>
    </>
 
  );
}

export default Home;
