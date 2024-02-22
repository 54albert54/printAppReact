import imagenMuestra from "../../public/access/BanReservasBlank.jpeg";

const ShowImgBlank =()=>{

  return(
    <figure>
    <img
      className="  z-40 w-[720px] h-[320px]"
      id="imgMuestra"
      src={imagenMuestra}
      alt="hola"
    />
  </figure>
    )
};

export default ShowImgBlank; 