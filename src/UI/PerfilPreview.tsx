const PerfilPreview =()=>{

  return(
    <section className="sticky inset-x-0 bottom-0 border-t border-gray-100">
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
  </section>
    )
};

export default PerfilPreview; 