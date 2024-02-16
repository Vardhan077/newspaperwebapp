import {BrowserRouter,Routes, Route, Navigate} from 'react-router-dom'

import HomeScreen from './components/HomeScreen'
import ArticleDetailScreen from './components/ArticleDetailScreen'
import Main from './components/Main'

const App = () =>(
  <BrowserRouter basename='/newspaperwebapp'>
      <Routes>
          <Route exact path ='/' element={<HomeScreen/>} ></Route>
          <Route exact path = '/article/:id' element = {<ArticleDetailScreen/>} ></Route>
          <Route exact path = '/main' element = {<Main/>} ></Route>
      </Routes>
  </BrowserRouter>
)

export default App

