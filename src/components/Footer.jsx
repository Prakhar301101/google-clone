//footer component
const Footer = () => {
  return (
    <div className="mt-auto w-full flex flex-col bg-zinc-900 text-gray-400">
        <div className="flex items-center justify-start px-5 md:px-9 py-1 sm:py-2 md:py-3 border-b-[0.25px] md:border-b-[1.05px] border-b-gray-700">
            <h1 className="text-[6px] sm:text-[10px] md:text-sm">India</h1>
        </div>
        <div className="flex justify-between px-5 md:px-9  py-1 sm:py-2 md:py-4">
            <div className="">
                <ul className="flex gap-2 sm:gap-3 md:gap-6">
                    <li><h1 className="hover:underline text-[6px] sm:text-[10px] md:text-sm cursor-pointer">About</h1></li>
                    <li><h1 className="hover:underline text-[6px] sm:text-[10px] md:text-sm cursor-pointer">Advertising</h1></li>
                    <li><h1 className="hover:underline text-[6px] sm:text-[10px] md:text-sm cursor-pointer">Business</h1></li>
                    <li><h1 className="hover:underline text-[6px] sm:text-[10px] md:text-sm cursor-pointer">How Search works</h1></li>
                </ul>
            </div>
            <div>
            <div className="">
                <ul className="flex gap-2 sm:gap-3 md:gap-6">
                    <li><h1 className="hover:underline text-[6px] sm:text-[10px] md:text-sm cursor-pointer">Privacy</h1></li>
                    <li><h1 className="hover:underline text-[6px] sm:text-[10px] md:text-sm cursor-pointer">Terms</h1></li>
                    <li><h1 className="hover:underline text-[6px] sm:text-[10px] md:text-sm cursor-pointer">Settings</h1></li>
                </ul>
            </div>
            </div>
        </div>  
    </div>
  )
}

export default Footer