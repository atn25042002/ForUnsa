import { BrowserRouter, Routes, Route } from "react-router-dom";
import { PostFormPage} from "./pages/PostFormPage";
import { Header } from "./components/Header";
import { BodyPage } from "./components/BodyPage";


function App(){
  return(
    <BrowserRouter>

      <Header/>
      <Routes>
        <Route path="" element={<BodyPage />}></Route>
        <Route path="/post" element={<BodyPage />}></Route>
        <Route path="/post/:id" element={<PostFormPage />}></Route>
        <Route path="/post-create" element={<PostFormPage />}></Route>
      </Routes>

    </BrowserRouter>
  );
}

export default App;