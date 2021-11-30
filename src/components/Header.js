import React from 'react'
import {
  Createİcon,
  Menuİcon,
  Notificationsİcon,
  SearchWithYourVoiceİcon,
  Searchİcon,
  YouTubeAppsİcon,
  YouTubeLogoİcon,
} from '../icons /İcons'

import Avatar from '../images/avatar.jpeg'

const Header = () => {
  return (
    <div className="flex items-center justify-between p-6  w-full h-14  ">
      <div className="flex align-center gap-x-4  ">
        <button>
          <Menuİcon />
        </button>
        <div className="flex items-center justify-center gap-x-2">
          <YouTubeLogoİcon />
          <h2 className="text-base  font-normal antialiased  ">Youtube</h2>
        </div>
      </div>

      <div className="flex justify-between w-full max-w-2xl h-10 gap-x-2">
        <div className="flex-1 border-2 rounded-md flex justify-between items-center	  ">
          <div className=" w-full p-2 ">
            <input
              type="text"
              placeholder="Search"
              className="w-full px-2 font-medium focus:outline-none  "
            />
          </div>
          <div className=" flex items-center justify-center w-10 h-10 border-l-2  ">
            <Searchİcon />
          </div>
        </div>
        <div className=" flex items-center justify-center">
          <SearchWithYourVoiceİcon />
        </div>
      </div>

      <div className=" flex items-center justify-between gap-x-4">
        <Createİcon />
        <YouTubeAppsİcon />
        <Notificationsİcon />

        <div className="w-8 h-8  ">
          <img src={Avatar} alt="Avatar" className="rounded-full" />
        </div>
      </div>
    </div>
  )
}

export default Header
