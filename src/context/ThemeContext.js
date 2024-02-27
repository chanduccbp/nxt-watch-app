import React from 'react'

const ThemeContext = React.createContext({
  isLightTheme: '',
  activeTab: '',
  savedVideos: [],
  changeTheme: () => {},
  changeTab: () => {},
  updateSavedVideos: () => {},
})

export default ThemeContext
