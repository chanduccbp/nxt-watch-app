import {Component} from 'react'
import {Switch, Route} from 'react-router-dom'
import ProtectedRoute from './components/ProtectedRoute'
import Login from './components/Login'
import Home from './components/Home'
import VideoItemDetails from './components/VideoItemDetails'
import NotFound from './components/NotFound'
import ThemeContext from './context/ThemeContext'
import './App.css'

// Replace your code here
class App extends Component {
  state: {isLightTheme: true, activeTab: 'HOME'}

  changeTheme = () => {
    this.setState(prevState => ({
      isLightTheme: !prevState.isLightTheme,
    }))
  }

  changeTab = id => {
    this.setState({activeTab: id})
  }

  render() {
    const {isLightTheme, activeTab} = this.state

    return (
      <ThemeContext.Provider
        value={{
          isLightTheme,
          activeTab,
          changeTheme: this.changeTheme,
          changeTab: this.changeTab,
        }}
      >
        <Switch>
          <Route exact path="/login" component={Login} />
          <ProtectedRoute exact path="/" component={Home} />
          <ProtectedRoute
            exact
            path="/videos/:id"
            component={VideoItemDetails}
          />
          <Route component={NotFound} />
        </Switch>
      </ThemeContext.Provider>
    )
  }
}

export default App
