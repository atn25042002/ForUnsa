import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navigation } from "./components/Navigation";
import { PostPage } from "./pages/PostPage";
import { PostFormPage} from "./pages/PostFormPage";


function App(){
  return(
    <BrowserRouter>    
      <Navigation/>
      <Routes>
        <Route path="" element={<PostPage />}></Route>
        <Route path="/posts" element={<PostPage />}></Route>
        <Route path="/posts/:id" element={<PostFormPage />}></Route>
        <Route path="/posts-create" element={<PostFormPage />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;