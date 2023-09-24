

const Header = () => {
  return (
    <header className="w-full flex justify-end px-3 py-2">
        <div className="flex gap-1 md:gap-6 text-slate-50">
          <ul className="flex gap-2 sm:gap-3 md:gap-5 justify-center item-center">
            <li className="flex items-center ">
              <h1 className="hover:underline text-[6px] sm:text-[10px] md:text-sm cursor-pointer">Gmail</h1>
            </li>
            <li className="flex items-center">
              <h1 className="hover:underline text-[6px] sm:text-[10px] md:text-sm cursor-pointer">Images</h1>
            </li>
          </ul>
          <div className="flex justify-center">
            <div className="flex items-center text-[6px] sm:text-[10px] md:text-sm cursor-pointer rounded-full px-1 md:px-3 hover:bg-slate-800">
              <ion-icon name="apps"></ion-icon>
            </div>
            <div className="rounded-full cursor-pointer px-1 md:px-2 hover:bg-slate-800">
              <img
                className="h-3 sm:h-5 md:h-8 rounded-full"
                src="src\assets\pngegg.png"
              ></img>
            </div>
          </div>
        </div>
      </header>
  )
}

export default Header