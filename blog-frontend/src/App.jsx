import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import {PostList} from "./component/PostList.jsx";
import {PostDetail} from "./component/PostDetail.jsx";
import {CreatePost} from "./component/CreatePost.jsx";
import {AppHeader} from "./component/Header.jsx";


function App() {


  return (
    <>
        <Router>
            <AppHeader />
            <Routes>
                <Route path="/" element={<PostList />} />
                <Route path="/posts/:id" element={<PostDetail />} />
                <Route path="/create" element={<CreatePost />} />
            </Routes>
        </Router>
    </>
  )
}

export default App
