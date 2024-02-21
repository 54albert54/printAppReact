import Context from "../context/provider";

const SideBar = () => {
  const context = Context();

  return (
    <section className={` ${
      context?.area != "PrintArea" ? " " : "hidden"
    }`}>
      <div className="flex relative h-full  w-[320px]  z-30 shadow-xl  flex-col justify-between border-e bg-white">
        <div className="px-4 py-6">
          <span className="grid h-10 w-32 place-content-center rounded-lg bg-gray-100 text-xs text-gray-600">
            Logo
          </span>

          <ul className="mt-6 space-y-1">
            <li>
              <button
                onClick={() => context?.setArea("Home")}
                className={`flex w-full ${
                  context?.area == "Home" ? "bg-gray-200 " : ""
                }  justify-start rounded-lg hover:bg-gray-200 px-4 py-2 text-sm font-medium text-gray-700`}
              >
                General
              </button>
            </li>

            <li>
              <button
                onClick={() => context?.setArea("Editar")}
                className={`flex w-full ${
                  context?.area == "Editar" ? "bg-gray-200 " : ""
                }  justify-start rounded-lg hover:bg-gray-200 px-4 py-2 text-sm font-medium text-gray-700`}
              >
                Editar
              </button>
            </li>
            <li>
              <button
                onClick={() => context?.setArea("Print")}
                className={`flex w-full ${
                  context?.area == "Print" ? "bg-gray-200 " : ""
                }  justify-start rounded-lg hover:bg-gray-200 px-4 py-2 text-sm font-medium text-gray-700`}
              >
                Llenar
              </button>
            </li>

           

            <li>
              <details className="group [&_summary::-webkit-details-marker]:hidden">
                <summary className="flex cursor-pointer items-center justify-between rounded-lg px-4 py-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700">
                  <span className="text-sm font-medium"> Account </span>

                  <span className="shrink-0 transition duration-300 group-open:-rotate-180">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </span>
                </summary>

                <ul className="mt-2 space-y-1 px-4">
                  <li>
                    <a
                      href="#"
                      className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                    >
                      Details
                    </a>
                  </li>

                  <li>
                    <a
                      href="#"
                      className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                    >
                      Security
                    </a>
                  </li>

                  <li>
                    <a href="./index.html">
                      <button
                        type="submit"
                        className="w-full rounded-lg px-4 py-2 text-sm font-medium text-gray-500 [text-align:_inherit] hover:bg-gray-100 hover:text-gray-700"
                      >
                        Logout
                      </button>
                    </a>
                  </li>
                </ul>
              </details>
            </li>
          </ul>
        </div>

        <div className="sticky inset-x-0 bottom-0 border-t border-gray-100">
          <a
            href="#"
            className="flex items-center gap-2 bg-white p-4 hover:bg-gray-50"
          >
            <img
              alt=""
              src="https://images.unsplash.com/photo-1600486913747-55e5470d6f40?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
              className="size-10 rounded-full object-cover"
            />

            <div>
              <p className="text-xs">
                <strong className="block font-medium">Eric Frusciante</strong>

                <span> eric@frusciante.com </span>
              </p>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default SideBar;
