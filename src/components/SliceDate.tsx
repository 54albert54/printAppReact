const SliceDate = ({ date }) => {
  const dataParts = date?.split(" "); //.map(ele => `<p>${ele}</p>`).join(" ");

  return (
    <div className="relative  w-[200px] flex justify-between">
      {dataParts?.map((ele, i) => (
        <p key={ele + i}>{ele}</p>
      ))}
    </div>
  );
};
export default  SliceDate;