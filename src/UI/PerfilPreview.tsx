import useContext from "../context/provider";

const PerfilPreview = () => {
  const context = useContext();

  return (
    <section className="sticky inset-x-0 bottom-0 border-t border-gray-100   flex flex-row justify-between items-center pr-8">
      <div className="flex items-center gap-2  p-4 hover:bg-gray-50  rounded-l-lg ">
        <img
          alt=""
          src={context?.auth?.img}
          className="size-10 rounded-full object-cover"
        />

        <div>
          <p className="text-xs">
            <strong className="block font-medium">{context?.auth?.name}</strong>

            <span> {context?.auth?.detail}</span>
          </p>
        </div>
      </div>
      {/* button logout */}
      <div onClick={() => context?.logout()}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="icon icon-tabler icon-tabler-logout hover:cursor-pointer hover:stroke-blue-500"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M14 8v-2a2 2 0 0 0 -2 -2h-7a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h7a2 2 0 0 0 2 -2v-2" />
          <path d="M9 12h12l-3 -3" />
          <path d="M18 15l3 -3" />
        </svg>
      </div>
    </section>
  );
};

export default PerfilPreview;
