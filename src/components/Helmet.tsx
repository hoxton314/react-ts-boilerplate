import { FC } from 'react'
import { Helmet as ReactHelmet } from 'react-helmet'

import AppleTouchIcon from '../assets/favicons/apple-touch-icon.png'
import Favicon32 from '../assets/favicons/favicon-32x32.png'
import Favicon16 from '../assets/favicons/favicon-16x16.png'
import Favicon from '../assets/favicons/favicon.ico'
import WebManifest from '../assets/favicons/site.webmanifest'
import SafariPinnedTab from '../assets/favicons/safari-pinned-tab.svg'

interface HelmetProps {
  title: string
  description?: string
  themeColor?: string
}

export const Helmet: FC<HelmetProps> = ({ title, description, themeColor }) => {
  return (
    <ReactHelmet defaultTitle={title}>
      {/* General */}
      <meta charSet="utf-8" />
      <meta name="description" content={description} />
      <meta name="theme-color" content={themeColor} />

      {/* Favicon */}
      <link rel="apple-touch-icon" sizes="180x180" href={AppleTouchIcon} />
      <link rel="icon" type="image/png" sizes="32x32" href={Favicon32} />
      <link rel="icon" type="image/png" sizes="16x16" href={Favicon16} />
      <link rel="shortcut icon" href={Favicon} />
      <link rel="manifest" href={WebManifest} />
      <link rel="mask-icon" href={SafariPinnedTab} color={themeColor} />
      <meta name="msapplication-TileColor" content="#170110" />
      <meta name="theme-color" content={themeColor}></meta>

      {/* Fonts */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link
        href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap"
        rel="stylesheet"
      />
    </ReactHelmet>
  )
}
