import React from 'react'
import {assets} from '../assets/assets'
import { useState } from 'react'

const Sidebar = () => {
   
 const [extended, setextended] = useState(false)


  return (
    <div className='sidebar min-h-screen inline-flex flex-col justify-between bg-slate-100 px-3 py-5'>

        <div className='top'>
           <img onClick={()=>{setextended(!extended)}} className='menu img block ml-1.5 cursor-pointer' src={assets.menu_icon} alt=''/>
           <div class="new-chat mt-9 inline-flex items-center gap-3 px-2 py-1 bg-slate-400 rounded-2xl text-sm text-slate-500 pointer">
              <img className='img' src={assets.plus_icon} alt="" />
              {extended?<p>New chat</p>:null}
           </div>
           {extended? 
           <div class="recent flex flex-col ">
            <p class="recent-title mt-[30px] mb-[20px]">Recent</p>
            <div class="recent-entry item">
                <img className='img' src={assets.message_icon} alt=""/>
                <p>what is react ...</p>
            </div>
           </div> : null
           }
           
        </div>
        <div className='bottom flex flex-col'>
            <div class="bottom-item recent-entry item">
                <img className='img' src={assets.question_icon} alt="" />
                {extended?<p>help</p>:null}
            </div>
            <div class="bottom-item recent-entry item">
                <img className='img' src={assets.history_icon} alt="" />
                {extended?<p>Activity</p>:null}
            </div>
            <div class="bottom-item recent-entry item">
                <img className='img' src={assets.setting_icon} alt="" />
                {extended?<p>setting</p>:null}
            </div>

        </div>

    </div>
  )
}

export default Sidebar