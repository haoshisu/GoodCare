import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
  // Link,
  // useNavigate,
  // Outlet,
  // useLocation,
} from 'react-router-dom'

// get page from pages
import { Home, News, Policy, Video, Service,
         Subsidy, Map, Product, Reserve, WebQA,
         UserLogin, UserForget, UserRegister, UserProfile, UserModify,
         SingleVideo, Cart
} from './pages/appIndex'

//範例用 
import Template from './pages/Template'
// const baseURL = "http://18.182.1.131:3000/news";

function App() {

  return (
      <div className='App'>
        <Router>
          <Routes>
                  <Route index element={<Home />} exact />
                  <Route path='/News' element={<News />} />
                  <Route path='/Policy' element={<Policy />} />
                  <Route path='/Video' element={<Video/>}/>
                  <Route path='/Service' element={<Service/>}/>
                  <Route path='/Subsidy' element={<Subsidy/>}/>
                  <Route path='/Map' element={<Map/>}/>
                  <Route path='/Reserve' element={<Reserve />}/>
                  <Route path='/Product' element={<Product/>}/>
                  <Route path='/WebQA' element={<WebQA/>}/>

                  {/* 購物車 */}
                  <Route path='/Cart' element={<Cart/>}/>

                  {/* 會員中心 */}
                  <Route path='/UserLogin' element={<UserLogin/>}/>
                  <Route path='/UserForget' element={<UserForget/>}/>
                  <Route path='/UserRegister' element={<UserRegister/>}/>
                  <Route path='/UserProfile' element={<UserProfile/>}/>
                  <Route path='/UserModify' element={<UserModify/>}/>

                  {/* single video */}
                  <Route path='/Video/:id' element={<SingleVideo/>}/>

                  {/* 範例用 */}
                  <Route path='/Template' element={<Template/>}/>

          </Routes>
        </Router>
      </div>
  )
}

export default App;
