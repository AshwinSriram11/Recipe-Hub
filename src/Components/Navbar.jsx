function Navbar() {
  return (
    <div>
      <div className="flex justify-between text-center">
        <h1 className="pt-4 pb-4 pl-16 pr-4 tracking-wider text-teal-400 text-3xl font-sans  font-medium">
          Recipe-Hub
        </h1>
        <button className="pr-5 pl-5 mt-4 mb-4 mr-16 rounded-full font-sans font-normal text-teal-400 text-xl transition ease-in-out duration-500 hover:text-slate-50 hover:bg-teal-400">
          About
        </button>
      </div>
      <hr className="border-teal-400 border-[1.5px] w-[90%] m-auto" />
    </div>
  );
}

export default Navbar;
