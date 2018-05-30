import React from 'react'

const Logo = props => {
  return (
    <svg
      version="1"
      xmlns="http://www.w3.org/2000/svg"
      height={props.height || '50'}
      viewBox="0 0 579 160"
    >
      <title>FFIEC Logo</title>
      <path
        d="M76.7 5.8l-4.9 3.5.7 32.6c.4 17.9.8 32.7 1 32.9.2.3 73.3-25.6 75.1-26.6.8-.5-.4-1.8-3.7-4.1l-4.9-3.3-28.2 10c-15.5 5.6-28.3 10-28.4 9.9-.1-.1-.6-13.3-1.1-29.3l-.8-29-4.8 3.4zm-16 11.5l-4.9 3.2.5 27.7c.4 21.6.2 27.8-.7 27.8-.7 0-12.9-3.4-27.1-7.5-14.2-4.1-26-7.3-26.3-7.1-.2.3.4 2.7 1.3 5.5 1.6 5 1.7 5.1 8.3 7 33.7 10 54.7 16 54.9 15.7.2-.2 0-17.2-.4-37.9L65.5 14l-4.8 3.3zm465.7 22.1a46.5 46.5 0 0 0-28.7 71.4c6.9 10.1 18.7 16.2 33.9 17.7a45 45 0 0 0 34-10.1c3.7-3 4.4-4.2 4.4-7.1v-3.5l-6.2 5.6a32 32 0 0 1-23.6 9.6c-17.2 0-26.5-12-27.9-36.1-1.6-27.2 11-44.3 31.3-42.6 10.7.8 20.3 8.3 24 18.8 1 2.7 2.2 4.9 2.6 4.9.4 0 .8-6.8.8-15 0-9.3-.4-15-1-15-.5 0-1 .6-1 1.3 0 2-3.3 4.7-5.6 4.7-1 0-5.4-1.1-9.7-2.5a52.4 52.4 0 0 0-27.3-2.1zM188 41c0 .5 1.5 1 3.4 1s4.5.9 6 2.1l2.6 2v74.8l-2.6 2a10.9 10.9 0 0 1-6 2.1c-1.9 0-3.4.4-3.4 1s8.2 1 22.5 1 22.5-.4 22.5-1-1.5-1-3.4-1-4.5-.9-6-2.1l-2.6-2V85h3.8a17.6 17.6 0 0 1 17.2 16.2c0 1.5.5 3 1 3.3.7.4 1-7.4 1-22.6a154 154 0 0 0-.8-22.4c-.4.6-1.4 3.2-2 5.9-2.3 9-7.7 13.6-16.1 13.6H221V45.8l11.8.4c10.2.3 12.3.6 16.2 2.8 4.6 2.6 8.2 8.1 9.5 14.2.3 1.6 1 2.8 1.5 2.8.6 0 1-5.2 1-13V40h-36.5a272 272 0 0 0-36.5 1zm80 0c0 .5 1.5 1 3.4 1s4.5.9 6 2.1l2.6 2v74.8l-2.6 2a10.9 10.9 0 0 1-6 2.1c-1.9 0-3.4.4-3.4 1s8.2 1 22.5 1 22.5-.4 22.5-1-1.5-1-3.4-1-4.5-.9-6-2.1l-2.6-2V85h3.8a17.6 17.6 0 0 1 17.2 16.2c0 1.5.5 3 1 3.3.7.4 1-7.4 1-22.6a154 154 0 0 0-.8-22.4c-.4.6-1.4 3.2-2 5.9-2.3 9-7.7 13.6-16.1 13.6H301V45.8l11.8.4c10.2.3 12.3.6 16.2 2.8 4.6 2.6 8.2 8.1 9.5 14.2.3 1.6 1 2.8 1.5 2.8.6 0 1-5.2 1-13V40h-36.5a272 272 0 0 0-36.5 1zm80 0c0 .5 1.6 1 3.5 1 2.5 0 4.4.8 6 2.5l2.5 2.4v73.2l-2.5 2.4a7.7 7.7 0 0 1-6 2.5c-1.9 0-3.5.4-3.5 1s8.2 1 22.5 1 22.5-.4 22.5-1-1.3-1-3-1c-3.7 0-7.7-1.8-8.7-3.9-.9-2.1-1.7-60.7-.8-68.9.8-7.6 3-10.2 8.7-10.2 2.1 0 3.8-.5 3.8-1 0-.6-8.2-1-22.5-1s-22.5.4-22.5 1zm51 0c0 .5 1.6 1 3.5 1 2.5 0 4.4.8 6 2.5l2.5 2.4v73.2l-2.5 2.4a7.7 7.7 0 0 1-6 2.5c-1.9 0-3.5.5-3.5 1 0 .7 12.6.9 37.2.8l37.3-.3 1.7-11.5a247 247 0 0 0 1.7-13.3c.2-3.2-1.6-1.7-3.4 3a34.7 34.7 0 0 1-14 15.6c-3 1.6-6.4 2.2-13.8 2.5-14.2.6-13.7 1.3-13.7-20.5V85h3.3c6.9 0 12.8 6.6 14.3 15.9 1.5 9.4 2.4 2.7 2.4-17.9 0-12.1-.4-22-.8-22s-1.3 2.6-2 5.9c-1.9 8.9-7 14.1-14.2 14.1h-3V46h9.3c5 0 10.9.5 12.9 1a21.8 21.8 0 0 1 14.2 16.2c.3 1.6 1.1 2.8 1.6 2.8.6 0 1-5.2 1-13V40h-36c-23.3 0-36 .4-36 1zM144 56.9l-31.2 11-20.7 7.3 12 15.4 24 31.1a1072 1072 0 0 0 12.9 16.6c.4.5 1.7-1.9 2.8-5.2l2.1-6.1-17.7-22.6c-9.7-12.4-17.7-23-17.7-23.6 0-.5 12.5-5.3 27.7-10.6 15.3-5.4 27.8-10 27.8-10.3 0-1-8.8-6.9-10.2-6.8-.7 0-6 1.7-11.8 3.8zM8 79.8l1.6 5.7 1.6 5.1 27.6 8.2c15.2 4.6 27.8 8.4 28 8.6.2.3-7.1 11.1-16.2 24-9.2 13-16.9 24.3-17.2 25.1-.5 1.2.5 1.5 5.2 1.5l5.9-.1 19-27a655.5 655.5 0 0 0 19.3-28.3c.2-.7-13.6-5.2-37.3-12.2A754.7 754.7 0 0 0 8 79.8zm68.9 42.9a1504 1504 0 0 1-22.7 32l-2.4 3.3h12.8L81 134.6a497.2 497.2 0 0 1 17.1-23.5c.3-.1 8.8 10.6 18.9 23.6l18.4 23.8 1.9-6.1 2-6-20.4-26.2a480.5 480.5 0 0 0-21-26.2c-.4 0-9.9 12.9-21 28.7z"
        fill="#1f498f"
      />
    </svg>
  )
}

export default Logo