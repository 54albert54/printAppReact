import MainTableView from "../components/MainTableView";
import MainTitle from "../UI/MainTitle";
import AreaView from "../UI/AreaView";
import {Area} from '../context/types.ts'

const Home =()=>{
  


  return(
    <AreaView area={Area.HOME}>
      <MainTitle title={'Generales'}/>
      <MainTableView/>
    </AreaView>
    )
};

export default Home; 