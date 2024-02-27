import {Component} from 'react'
import {Switch, Route} from 'react-router-dom'
import ProtectedRoute from './components/ProtectedRoute'
import Login from './components/Login'
import Home from './components/Home'
import VideoItemDetails from './components/VideoItemDetails'
import SavedVideosRoute from './components/SavedVideosRoute'
import TrendingRoute from './components/TrendingRoute'
import GamingRoute from './components/GamingRoute'
import NotFound from './components/NotFound'
import ThemeContext from './context/ThemeContext'
import './App.css'

// Replace your code here
class App extends Component {
  state = {isLightTheme: true, activeTab: 'HOME', savedVideos: []}

  changeTheme = () => {
    this.setState(prevState => ({
      isLightTheme: !prevState.isLightTheme,
    }))
  }

  changeTab = id => {
    this.setState({activeTab: id})
  }

  updateSavedVideos = video => {
    const {savedVideos} = this.state
    const isSaved = savedVideos.find(eachObj => eachObj.id === video.id)
    if (isSaved === undefined) {
      const updatedSavedVideos = [...savedVideos, video]
      this.setState({savedVideos: updatedSavedVideos})
    } else {
      const updatedSavedVideos = savedVideos.filter(
        eachObj => eachObj.id !== video.id,
      )
      this.setState({savedVideos: updatedSavedVideos})
    }
  }

  render() {
    const {isLightTheme, activeTab, savedVideos} = this.state

    return (
      <ThemeContext.Provider
        value={{
          isLightTheme,
          activeTab,
          savedVideos,
          changeTheme: this.changeTheme,
          changeTab: this.changeTab,
          updateSavedVideos: this.updateSavedVideos,
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
          <ProtectedRoute
            exact
            path="/saved-videos"
            component={SavedVideosRoute}
          />
          <ProtectedRoute exact path="/trending" component={TrendingRoute} />
          <ProtectedRoute exact path="/gaming" component={GamingRoute} />
          <Route component={NotFound} />
        </Switch>
      </ThemeContext.Provider>
    )
  }
}

export default App
