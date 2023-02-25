
export interface DeviceCard  {
    nameDevice?:string;
    infoDevice?:string;
    moreDevice?:Boolean;
    nameGroup?:string;
    onClick?:any;
    mqqtTopic?:string | undefined;
    idGroup?:string;
    onDelete?:any;
    idDevice?:string;
    infoType?:string;
    measurement?:string;
    
}

export interface Device {
    __v?: number;
    _id?:string;
    name:string;
    deviceInput:DeviceInfo[];
    created_at?:Date;
    updated_at?:Date;
}



export interface DeviceInfo {
    _id?:string
    nameInput:string;
    measurement:string;
    value:any;
    mqttClientTopic?:string;

}