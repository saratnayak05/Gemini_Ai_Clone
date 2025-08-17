import { assets } from "../assets/assets";
import { useState } from "react";

const Sidebar = () => {
  const [extended, setextended] = useState(false);

  return (
    <div className="sidebar min-h-screen inline-flex flex-col justify-between px-2 py-3 bg-slate-100">
      <div className="top">
        <img
          onClick={() => {
            setextended(!extended);
          }}
          className="menu w-8 block ml-1 cursor-pointer rounded-2xl p-1"
          src={assets.menu_icon}
          alt=""
        />
        <div class="new-chat mt-7 ml-0.5  inline-flex items-center justify- gap-3 px-2 py-1 bg-slate-300 rounded-2xl text-sm text-slate-400 pointer">
          <img className="w-5 p-0.5" src={assets.plus_icon} alt="" />
          {extended ? <p>New chat</p> : null}
        </div>
        {extended ? (
          <div class="recent flex flex-col ">
            <p class="recent-title mt-8 mb-4 ">Recent</p>
            <div class="recent-entry flex items-center gap-3 p-3 pr-7 rounded-full text-black  cursor-pointer text-balance hover:bg-slate-200">
              <img className="w-5 pt-0.5 " src={assets.message_icon} alt="" />
              <p>What is react ...</p>
            </div>
          </div>
        ) : null}
      </div>
      <div className="bottom flex flex-col">
        <div class="  flex items-center gap-3 p-3 pr-7 rounded-full text-black  cursor-pointer text-balance  hover:bg-slate-200">
          <img className="w-5 pt-0.5" src={assets.question_icon} alt="" />
          {extended ? <p>Help</p> : null}
        </div>
        <div class="flex items-center gap-3 p-3 pr-7 rounded-full text-black  cursor-pointer text-balance  hover:bg-slate-200">
          <img className="w-5 pt-0.5" src={assets.history_icon} alt="" />
          {extended ? <p>Activity</p> : null}
        </div>
        <div class="  flex items-center gap-3 p-3 pr-7 rounded-full text-black  cursor-pointer text-balance  hover:bg-slate-200">
          <img className="w-5 pt-0.5" src={assets.setting_icon} alt="" />
          {extended ? <p>Setting</p> : null}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
