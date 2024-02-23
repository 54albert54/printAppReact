import imagenMuestra from "../../public/access/BanReservasBlank.jpeg";

const ShowImgBlank =()=>{

  return(
    <figure>
    <img
      className="relative  z-0 w-[720px] h-[320px]"
      id="imgMuestra"
      src={imagenMuestra}
      alt="hola"
    />
  </figure>
    )
};

export default ShowImgBlank; 