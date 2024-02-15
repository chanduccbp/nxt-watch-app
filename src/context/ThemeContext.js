import React from 'react'

const ThemeContext = React.createContext({
  isLightTheme: '',
  activeTab: '',
  changeTheme: () => {},
})

export default ThemeContext
