import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/header';

import Home from './Routes/Home';
import Signup from './Components/Signup';
import Login from './Components/Login';
import About from './Components/About';

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Sidebar from './Components/Sidebar';
import Video from './Components/Video'
import VideoPlayer from './Components/Videoplayer';
import Skill from './Components/Skill';
import Skillvideoplayer from './Components/Skillvideoplayer';
import Quizjava from './Components/Quizjava';
import Adminnavbar from './Components/Adminnavbar';
import Update from './Components/Update';
import DeleteSkill from './Components/DeleteSkill';
import DeleteReview from './Components/DeleteReview';
import Favcourse from './Components/Favcourse';
import C from './Components/C';
import HTML from './Components/HTML';
import Javascript from './Components/Javascript';
import Watchlater from './Components/Watchlater';



function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login1" element={<Login />} />
        <Route path="/login2" element={<About us />} />
        <Route path='/now' element={<Sidebar />} />
        <Route path="/wow" element={<Video />} />
        <Route path="/wow/:id/:coursename" element={<VideoPlayer />} />
        <Route path="/kill" element={<Skill />} />
        <Route path="/Kill/:id/:namecourse" element={<Skillvideoplayer />} />
        <Route path="/1" element={<Quizjava />} />
        <Route path="/Admin" element={<Adminnavbar />} />
        <Route path="/js" element={<Update />} />
        {/* <Route path="/Rev" element={<Reviewbox />}/> */}
        <Route path="/tha" element={<DeleteSkill />} />
        <Route path="/qqq" element={<DeleteReview />} />
        <Route path="/course" element={<Favcourse />} />
        <Route path="/2" element={<C />} />
        <Route path="/3" element={<HTML />} />
        <Route path="/4" element={<Javascript />} />
        <Route path="/Watch" element={<Watchlater />} />








      </Routes>
    </BrowserRouter>



  );
}

export default App;
