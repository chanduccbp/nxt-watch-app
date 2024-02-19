import React from 'react'

const ThemeContext = React.createContext({
  isLightTheme: '',
  activeTab: '',
  changeTheme: () => {},
  changeTab: () => {},
})

export default ThemeContext
