import { useState } from 'react';
import Footer from './components/Footer';
import Header from './components/Header';
const App = () => {

  //state handling the search input
  const[input,setInput]=useState('');
 
  //function to clear the input field on buttonclick
  const handleClear=()=>{
    setInput('');
  }


 
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <section className="mt-8 flex flex-col items-center w-full gap-4">
        <div className="flex w-[30%] sm:w-[40%] md:w-full justify-center">
          <img src="googlelogo_light_color_272x92dp.png"></img>
        </div>
        <div className="flex justify-between gap-2 hover:bg-zinc-700 active:bg-gray-700 text-slate-50 border-[1.5px] border-zinc-600 w-[80%] sm:w-[75%] md:w-[60%] lg:w-[40%] rounded-3xl py-1 px-2 md:py-2 md:px-4 shadow-lg text-[6px] sm:text-[10px] md:text-sm">
          <div className="flex items-center text-sm md:text-xl text-zinc-500 ">
            <ion-icon name="search-sharp"></ion-icon>
          </div>
          <input
            type="text"
            className="bg-transparent outline-none w-full "
            value={input}
            onChange={e=>setInput(e.target.value)}
          ></input>
          <div className="flex items-center gap-2 md:gap-4 sm:text-md md:text-xl cursor-pointer ">
            {input.length>0?
            <div onClick={handleClear} className='flex items-center'><ion-icon name="close"></ion-icon></div>
            :null}
            <ion-icon name="mic"></ion-icon>
            <ion-icon name="camera"></ion-icon>
          </div>
        </div>
        <div className="text-slate-50 flex gap-1 md:gap-3">
          <button className="bg-zinc-800 px-2 md:px-4 py-1 md:py-2 rounded-md text-[6px] sm:text-[10px] md:text-sm hover:border-[1.5px] hover:border-zinc-600">
            Google Search
          </button>
          <button className="bg-zinc-800 px-2 md:px-4 py-1 md:py-2 rounded-md text-[6px] sm:text-[10px] md:text-sm hover:border-[1.5px] hover:border-zinc-600 ">
            I&apos;m Feeling Lucky
          </button>
        </div>
        <div>
          <ul className="flex text-sm gap-2">
            <li>
              <p className="text-gray-400 hover:underline text-[6px] sm:text-[10px] md:text-sm cursor-pointer">
                Google offered in:{' '}
              </p>
            </li>
            <li>
              <p className="text-blue-400 hover:underline text-[6px] sm:text-[10px] md:text-sm cursor-pointer">
                हिन्दी
              </p>
            </li>
            <li>
              <p className="text-blue-400 hover:underline text-[6px] sm:text-[10px] md:text-sm cursor-pointer">
                বাংলা
              </p>
            </li>
            <li>
              <p className="text-blue-400 hover:underline text-[6px] sm:text-[10px] md:text-sm cursor-pointer">
                తెలుగు
              </p>
            </li>
            <li>
              <p className="text-blue-400 hover:underline text-[6px] sm:text-[10px] md:text-sm cursor-pointer">
                मराठी
              </p>
            </li>
            <li>
              <p className="text-blue-400 hover:underline text-[6px] sm:text-[10px] md:text-sm cursor-pointer">
                தமிழ்
              </p>
            </li>
            <li>
              <p className="text-blue-400 hover:underline text-[6px] sm:text-[10px] md:text-sm cursor-pointer">
                ગુજરાતી
              </p>
            </li>
            <li>
              <p className="text-blue-400 hover:underline text-[6px] sm:text-[10px] md:text-sm cursor-pointer">
                ಕನ್ನಡ
              </p>
            </li>
            <li>
              <p className="text-blue-400 hover:underline text-[6px] sm:text-[10px] md:text-sm cursor-pointer">
                മലയാളം
              </p>
            </li>
            <li>
              <p className="text-blue-400 hover:underline text-[6px] sm:text-[10px] md:text-sm cursor-pointer">
                ਪੰਜਾਬੀ
              </p>
            </li>
          </ul>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default App;
