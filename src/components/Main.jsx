import { assets } from "../assets/assets"


const Main = () => {
  return (
    <div className="main flex-1 min-h pb-[15vh] relative">
       <div className="nav flex items-center justify-between text-xl p-5 ">
         <p>Gemini</p>
         <img src={assets.user_icon} alt=""  className=" w-10 rounded-full"/>
       </div>
       <div className="main-container max-w-4xl m-auto">
        <div className="greet mx-12 text-4xl font-semibold p-5">
            <p><span className=" bg-gradient-to-r from-blue-500 to-red-500 bg-clip-text text-transparent">Hello, Dev</span></p>
            <p>How can i help today?</p>
        </div>
        <div className="cards grid grid-flow-col gap-4 p-5">
            <div className="card h-48 p-4 rounded-2xl bg-amber-100 relative cursor-pointer">
                <p>Suggest beutifull things upcoming road trip</p>
                <img src={assets.compass_icon} alt="" className=" w-7 p-1.5 absolute rounded-2xl bottom-2.5 right-2.5"/>
            </div>
            <div className="card h-48 p-4 rounded-2xl bg-amber-100 relative cursor-pointer">
                <p>Suggest beutifull things upcoming road trip</p>
                <img src={assets.compass_icon} alt="" className=" w-7 p-1.5 absolute rounded-2xl bottom-2.5 right-2.5"/>
            </div>
            <div className="card h-48 p-4 rounded-2xl bg-amber-100 relative cursor-pointer">
                <p>Suggest beutifull things upcoming road trip</p>
                <img src={assets.compass_icon} alt="" className=" w-7 p-1.5 absolute rounded-2xl bottom-2.5 right-2.5"/>
            </div>
            <div className="card h-48 p-4 rounded-2xl bg-amber-100 relative cursor-pointer">
                <p>Suggest beutifull things upcoming road trip</p>
                <img src={assets.compass_icon} alt="" className=" w-7 p-1.5 absolute rounded-2xl bottom-2.5 right-2.5"/>
            </div>
        
        </div>
        <div class="main-bottom absolute bottom-0 w-full max-w-4xl py-5 m-auto ">
            <div class="search-box flex items-center justify-between gap-5  px-5 py-2.5 bg-slate-200 rounded-2xl">
                <input type="text" placeholder=" Enter a prompt here" className=" flex-1 bg-transparent border-none outline-none p-2 text-xl"/>
                <div className="flex items-center gap-3.5">
                  <img src={assets.gallery_icon} alt="" className="w-6 cursor-pointer"/>
                  <img src={assets.mic_icon} alt="" className="w-6 cursor-pointer"/>
                  <img src={assets.send_icon} alt="" className="w-6 cursor-pointer"/>
                </div>
                
            </div>
            <p className=" text-sm my-3.5 mx-auto text-center font-light">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reprehenderit cum earum placeat dicta veniam cumque nisi. Facere consequuntur doloremque nesciunt eligendi delectus? Expedita quam fugiat pariatur dolor eveniet, labore deserunt!
            </p>
        </div>
       </div>
    </div>
  )
}

export default Main