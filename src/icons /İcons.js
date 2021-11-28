import React from 'react'
import { FaYoutube } from 'react-icons/fa'

const Svg = ({ children, className }) => {
  return <svg className={` fill-current ${className} `}>{children}</svg>
}

export const YouTubeLogoİcon = () => {
  return (
    <Svg className="w-10 h-10 text-red-600">
      <FaYoutube size={40} />
    </Svg>
  )
}
export const Menuİcon = () => {
  return (
    <Svg className="w-6 h-6 ">
      <path
        d="M21,6H3V5h18V6z M21,11H3v1h18V11z M21,17H3v1h18V17z"
        class="style-scope yt-icon"
      ></path>
    </Svg>
  )
}

export const Homeİcon = () => {
  return (
    <Svg className="w-6 h-6 ">
      <path d="M4,10V21h6V15h4v6h6V10L12,3Z" class="style-scope yt-icon"></path>
    </Svg>
  )
}

export const Exploreİcon = () => {
  return (
    <Svg className="w-6 h-6 ">
      <path
        d="M9.8,9.8l-3.83,8.23l8.23-3.83l3.83-8.23L9.8,9.8z M13.08,12.77c-0.21,0.29-0.51,0.48-0.86,0.54 c-0.07,0.01-0.15,0.02-0.22,0.02c-0.28,0-0.54-0.08-0.77-0.25c-0.29-0.21-0.48-0.51-0.54-0.86c-0.06-0.35,0.02-0.71,0.23-0.99 c0.21-0.29,0.51-0.48,0.86-0.54c0.35-0.06,0.7,0.02,0.99,0.23c0.29,0.21,0.48,0.51,0.54,0.86C13.37,12.13,13.29,12.48,13.08,12.77z M12,3c4.96,0,9,4.04,9,9s-4.04,9-9,9s-9-4.04-9-9S7.04,3,12,3 M12,2C6.48,2,2,6.48,2,12s4.48,10,10,10s10-4.48,10-10S17.52,2,12,2 L12,2z"
        class="style-scope yt-icon"
      ></path>
    </Svg>
  )
}
export const Subscriptionsİcon = () => {
  return (
    <Svg className="w-6 h-6 ">
      <path
        d="M10,18v-6l5,3L10,18z M17,3H7v1h10V3z M20,6H4v1h16V6z M22,9H2v12h20V9z M3,10h18v10H3V10z"
        class="style-scope yt-icon"
      ></path>
    </Svg>
  )
}
export const Orginalsİcon = () => {
  return (
    <Svg className="w-6 h-6 ">
      <path
        d="M10,9.35,15,12l-5,2.65ZM12,6a54.36,54.36,0,0,0-7.56.38A1.53,1.53,0,0,0,3.38,7.44,24.63,24.63,0,0,0,3,12a24.63,24.63,0,0,0,.38,4.56,1.53,1.53,0,0,0,1.06,1.06A54.36,54.36,0,0,0,12,18a54.36,54.36,0,0,0,7.56-.38,1.53,1.53,0,0,0,1.06-1.06A24.63,24.63,0,0,0,21,12a24.63,24.63,0,0,0-.38-4.56,1.53,1.53,0,0,0-1.06-1.06A54.36,54.36,0,0,0,12,6h0m0-1s6.25,0,7.81.42a2.51,2.51,0,0,1,1.77,1.77A25.87,25.87,0,0,1,22,12a25.87,25.87,0,0,1-.42,4.81,2.51,2.51,0,0,1-1.77,1.77C18.25,19,12,19,12,19s-6.25,0-7.81-.42a2.51,2.51,0,0,1-1.77-1.77A25.87,25.87,0,0,1,2,12a25.87,25.87,0,0,1,.42-4.81A2.51,2.51,0,0,1,4.19,5.42C5.75,5,12,5,12,5Z"
        class="style-scope yt-icon"
      ></path>
    </Svg>
  )
}
export const YouTubeMusicİcon = () => {
  return (
    <Svg className="w-6 h-6 ">
      <path
        d="M10 9.35L15 12l-5 2.65zM12 7a5 5 0 105 5 5 5 0 00-5-5m0-1a6 6 0 11-6 6 6 6 0 016-6zm0-3a9 9 0 109 9 9 9 0 00-9-9m0-1A10 10 0 112 12 10 10 0 0112 2z"
        class="style-scope yt-icon"
      ></path>
    </Svg>
  )
}
export const Libraryİcon = () => {
  return (
    <Svg className="w-6 h-6 ">
      <path
        d="M11,7l6,3.5L11,14V7L11,7z M18,20H4V6H3v15h15V20z M21,18H6V3h15V18z M7,17h13V4H7V17z"
        class="style-scope yt-icon"
      ></path>
    </Svg>
  )
}
export const Historyİcon = () => {
  return (
    <Svg className="w-6 h-6 ">
      <path
        d="M14.97,16.95L10,13.87V7h2v5.76l4.03,2.49L14.97,16.95z M12,2C8.73,2,5.8,3.44,4,5.83V3.02H2V9h6V7H5.62 C7.08,5.09,9.36,4,12,4c4.41,0,8,3.59,8,8s-3.59,8-8,8s-8-3.59-8-8H2c0,5.51,4.49,10,10,10s10-4.49,10-10S17.51,2,12,2z"
        class="style-scope yt-icon"
      ></path>
    </Svg>
  )
}
export const YourVideosİcon = () => {
  return (
    <Svg className="w-6 h-6 ">
      <path
        d="M10,8l6,4l-6,4V8L10,8z M21,3v18H3V3H21z M20,4H4v16h16V4z"
        class="style-scope yt-icon"
      ></path>
    </Svg>
  )
}
export const WhatchLaterİcon = () => {
  return (
    <Svg className="w-6 h-6 ">
      <path
        d="M14.97,16.95L10,13.87V7h2v5.76l4.03,2.49L14.97,16.95z M12,3c-4.96,0-9,4.04-9,9s4.04,9,9,9s9-4.04,9-9S16.96,3,12,3 M12,2c5.52,0,10,4.48,10,10s-4.48,10-10,10S2,17.52,2,12S6.48,2,12,2L12,2z"
        class="style-scope yt-icon"
      ></path>
    </Svg>
  )
}
export const PlayListİcon = () => {
  return (
    <Svg className="w-6 h-6 ">
      <path
        d="M22,7H2v1h20V7z M13,12H2v-1h11V12z M13,16H2v-1h11V16z M15,19v-8l7,4L15,19z"
        class="style-scope yt-icon"
      ></path>
    </Svg>
  )
}
export const ShowMoreİcon = () => {
  return (
    <Svg className="w-6 h-6 ">
      <path
        d="M12,15.7L5.6,9.4l0.7-0.7l5.6,5.6l5.6-5.6l0.7,0.7L12,15.7z"
        class="style-scope yt-icon"
      ></path>{' '}
    </Svg>
  )
}
export const Searchİcon = () => {
  return (
    <Svg className="w-6 h-6 ">
      <path
        d="M20.87,20.17l-5.59-5.59C16.35,13.35,17,11.75,17,10c0-3.87-3.13-7-7-7s-7,3.13-7,7s3.13,7,7,7c1.75,0,3.35-0.65,4.58-1.71 l5.59,5.59L20.87,20.17z M10,16c-3.31,0-6-2.69-6-6s2.69-6,6-6s6,2.69,6,6S13.31,16,10,16z"
        class="style-scope yt-icon"
      ></path>
    </Svg>
  )
}
export const SearchWithYourVoiceİcon = () => {
  return (
    <Svg className="w-6 h-6 ">
      <path
        d="M12 3C10.34 3 9 4.37 9 6.07V11.93C9 13.63 10.34 15 12 15C13.66 15 15 13.63 15 11.93V6.07C15 4.37 13.66 3 12 3ZM18.5 12H17.5C17.5 15.03 15.03 17.5 12 17.5C8.97 17.5 6.5 15.03 6.5 12H5.5C5.5 15.24 7.89 17.93 11 18.41V21H13V18.41C16.11 17.93 18.5 15.24 18.5 12Z"
        class="style-scope yt-icon"
      ></path>
    </Svg>
  )
}
export const Createİcon = () => {
  return (
    <Svg className="w-6 h-6 ">
      <path
        d="M14,13h-3v3H9v-3H6v-2h3V8h2v3h3V13z M17,6H3v12h14v-6.39l4,1.83V8.56l-4,1.83V6 M18,5v3.83L22,7v8l-4-1.83V19H2V5H18L18,5 z"
        class="style-scope yt-icon"
      ></path>
    </Svg>
  )
}
export const YouTubeAppsİcon = () => {
  return (
    <Svg className="w-6 h-6 ">
      <path
        d="M16,4v4h4V4H16z M16,10v4h4v-4H16z M10,4v4h4V4H10z M10,10v4h4v-4H10z M16,16v4h4v-4H16z M10,16v4h4v-4H10z M4,4v4h4V4H4z M4,10v4h4v-4H4z M4,16v4h4v-4H4z"
        class="style-scope yt-icon"
      ></path>
    </Svg>
  )
}
export const Notificationsİcon = () => {
  return (
    <Svg className="w-6 h-6 ">
      <path
        d="M10,20h4c0,1.1-0.9,2-2,2S10,21.1,10,20z M20,17.35V19H4v-1.65l2-1.88v-5.15c0-2.92,1.56-5.22,4-5.98V3.96 c0-1.42,1.49-2.5,2.99-1.76C13.64,2.52,14,3.23,14,3.96l0,0.39c2.44,0.75,4,3.06,4,5.98v5.15L20,17.35z M19,17.77l-2-1.88v-5.47 c0-2.47-1.19-4.36-3.13-5.1c-1.26-0.53-2.64-0.5-3.84,0.03C8.15,6.11,7,7.99,7,10.42v5.47l-2,1.88V18h14V17.77z"
        class="style-scope yt-icon"
      ></path>
    </Svg>
  )
}
