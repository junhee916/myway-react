import React from 'react';
import {Route, BrowserRouter, Switch} from 'react-router-dom'
import store from './store/store'
import { Provider } from 'react-redux'

//pages
// import LandingPage from './page/LandingPage'
import AgreePage from './page/AgreePage'
import LoginPage from './page/LoginPage'
import movePage from './page/movePage' 
import MainPage from './page/MainPage'
import KakaoLoginPage from './page/KakaoLoginPage'
import SelectPage from './page/SelectPage'
import Add from './page/Add'
import LandingPage from './page/LandingPage'
import Profile from './page/Profile'
import Test from './page/Test'
import Documentation from './page/Documentation'
import History from './page/History'
import ImgUpload from './page/ImgUpload'

function App() {
  return (
  	<BrowserRouter>
		 <Provider store={store}>
			 <Switch>
			    <Route exact path="/" component={Documentation}/>
				<Route path="/agree" component={AgreePage}/>
				<Route path="/login" component={LoginPage}/>
				<Route path="/move" component={movePage}/>
				<Route path="/main" component={MainPage}/>
				<Route path="/kakaologin" component={KakaoLoginPage}/>
				<Route path="/select" component={SelectPage}/>
				<Route path="/add" component={Add}/>
				<Route path="/profile" component={Profile}/>
				<Route path="/test" component={Test}/>
				<Route path="/landing" component={LandingPage}/>
				<Route path="/history" component={History}/>
				<Route path="/img" component={ImgUpload}/>
			</Switch>
			</Provider>
		</BrowserRouter>
  );
}

export default App;
