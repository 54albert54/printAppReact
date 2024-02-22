
import MainTableView from "../components/MainTableView";

import MainTitle from "../UI/MainTitle";
import AreaView from "../UI/AreaView";


const Home =()=>{
  


  return(
    <AreaView area={"Home"}>
      <MainTitle title={'Estas en casa.'}/>
      <MainTableView/>
    </AreaView>
    )
};

export default Home; 