import React, { FormEvent, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
// import CardDevice from '../../components/CardDevice';
import Header from '../../components/Header';
import api from '../../service/api';
import { Device } from '../../@types/types';
// import logo from './logo.svg';
// import './App.css';

function FormGroup() {

    const { id } = useParams();
    const navigate = useNavigate();

    const [deviceList, setDeviceList] = useState<Device>()
  
    const fetchData = () => {
        api.get(`/device/${id}`)
        .then(response => {
            setDeviceList(response.data.device);
        })
        .catch(error => {
            console.error(error);
        });
    }
    const updateGroup = (event: FormEvent) => {
        event.preventDefault()
        const formData = new FormData(event.target as HTMLFormElement)
        const dataForm = Object.fromEntries(formData)

        
        api.put(`/device/${id}`, { 
            name: dataForm.name,
            deviceInput: [{
                "nameInput": dataForm.infoType.toString(),
                "measurement": dataForm.measurement.toString(),
                "value": "",
                "mqttClientTopic":dataForm.mqttTopic.toString()
            }]
        })
        .then(response => {
            console.log(response)
            navigate('/')
        })
        .catch(error => {
            console.error(error);
        });
    }

    const createGroup = (event: FormEvent) => {
        event.preventDefault()
        const formData = new FormData(event.target as HTMLFormElement)
        const dataForm = Object.fromEntries(formData)

        api.post(`/device`, { 
            "name": dataForm.name,
            deviceInput: [{
                "nameInput": dataForm.infoType.toString(),
                "measurement": dataForm.measurement.toString(),
                "value": "",
                "mqttClientTopic":dataForm.mqttTopic.toString()
            }]
        })
        .then(response => {
            console.log(response.data)
            navigate(`/`)
        })
        .catch(error => {
            console.error(error);
        });
    }


    useEffect(() => {
        if (id) {
          fetchData();
        }
      }, []);



  return (
    <>
        <Header/>
        <div className='w-[100%] justify-center flex items-center'>
            <div className='w-[1100px] h-[500px]'>

                <div className='mb-[0px] mt-[50px]'>
                    <p className='font-bold text-[#3C3C3C] mb-[40px] text-2xl'>Criar novo <span className="text-[#2068F5]">dispositivos</span></p>
                </div>


                <div className='w-[100%] h-[500px] border border-[#d3d3d3] rounded-[20px] mt-[20px] justify-start flex items-start gap-[30px] p-[30px]'>
                    <form className="w-[100%]" onSubmit={id ? updateGroup : createGroup}>
                    <div className="flex flex-wrap -mx-3 mb-6 ">
                        <div className="w-full md:w-1/1 px-3 mb-6 md:mb-0">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" >
                            Nome
                        </label>
                        <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" 
                            id="name"
                            name="name" 
                            type="text"
                            placeholder="Defina um nome para o grupo de dispositivo" 
                            defaultValue={id && deviceList?.name}/>
                        <p className="text-gray-600 text-xs italic">Defina um nome para seu dispositivos, Exemplo: Sensor</p>
                        </div>
                    </div>
                    <div className="flex flex-wrap -mx-3 mb-6 ">
                        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" >
                            Tipo de Informação
                        </label>
                        <input defaultValue={id && deviceList?.deviceInput[0].nameInput} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="infoType" name="infoType" type="text" placeholder="Tipo de Informação"/>
                        <p className="text-gray-600 text-xs italic">Exemplo: temperatura, umidade, luminosidade etc.</p>

                        </div>
                        <div className="w-full md:w-1/2 px-3">
                        <label   className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" >
                            Unidade de medida
                        </label>
                        <input defaultValue={id && deviceList?.deviceInput[0].measurement} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="measurement" name="measurement" type="text" placeholder="Unidade de medida"/>
                        <p className="text-gray-600 text-xs italic">Exemplo: Lux, % ºC etc.</p>
                        </div>
                    </div>
                    <div className="flex flex-wrap -mx-3 mb-6">
                        <div className="w-full px-3">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" >
                            Tópico MQTT
                        </label>
                        <input defaultValue={id && deviceList?.deviceInput[0].mqttClientTopic} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="mqttTopic" name="mqttTopic" type="text" placeholder="Adicione o tópico do seu dispositivo"/>
                        <p className="text-gray-600 text-xs italic">O tópico MQTT é a informação que o seu dispositivo envia para o broker escutar e captar.</p>
                        </div>
                    </div>
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" type="submit">
                        {id ? "Editar Nome" : "Criar Dispositivo"}
                    </button>
                    </form>

                </div>
                
            </div>

        </div>
    </>

  );
}

export default FormGroup;
