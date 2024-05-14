import React from 'react';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import {BodyElement} from './elements/bodyElement/bodyElement.jsx';
import {Home} from './component/home/Home.jsx'
import {Practice} from './component/practice/Practice.jsx';
import {Courses} from './component/courses/Courses.jsx';
import {Community} from './component/community/Community.jsx'
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<BodyElement />} >
      <Route index element={<Home />} errorElement={<Home />} />
      <Route path="practice" element={<Practice />} errorElement={<Home />}/>
      <Route path="courses" element={<Courses />} errorElement={<Home />}/>
      <Route path="community" element={<Community />} errorElement={<Home />} />
      <Route path="*" element={<Home />}/>
    </Route>  
  )  
)
const App = () => {
  return(
    <div>
      <RouterProvider router={router} />
    </div>
  )
}
export default App;