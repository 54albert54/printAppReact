
import MainTitle from "../UI/MainTitle.js";
import AreaView from "../UI/AreaView.js";
import { useEffect, useState} from "react";
import db from '../context/db/mySql.js'
import { channels } from '../../constants.js';


import { TCheckList } from "../context/types.js";
const { ipcRenderer } = window.require('electron');





const Default =()=>{
  const [mjs, setMjs] = useState('jo.a');
  const [data, setData] = useState<null | TCheckList[]>([]) ;
  const getData = () => {
    db.sendData('')
    setMjs("desde otro archivo")
  };
 
  useEffect(() => {
    ipcRenderer.on(channels.GET_DATA, async ( _ ,arg) => {
    
      console.log('desde adentro');
      
      setData(arg) 
   
    });
  
      

    
   
    // Clean the listener after the component is dismounted
    return () => {
      ipcRenderer.removeAllListeners();
    };
  }, []);
  

  return(
    <AreaView area={"Default"}>
    
      <MainTitle title={'Default'}/>
      <p>desde mi default</p>
      <p>-{mjs}-</p>
      {
        data?.map(ele =>(
          <p key={ele?.checkId}>{ele?.clientName}</p>
        ))
      }
      <button onClick={getData}>Get data</button>
    

    </AreaView>
    )
};

export default Default; 



