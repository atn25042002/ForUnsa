import { BrowserRouter, Routes, Route } from "react-router-dom";
import { PostFormPage} from "./pages/PostFormPage";
import { Header } from "./components/Header";
import { BodyPage } from "./pages/BodyPage";
import { LoginPage } from "./pages/LoginPage";
import { Register } from "./pages/RegisterPage";


function App({logeado}){
  //if(logeado)
    return(
      <BrowserRouter>

        <Header/>
        <Routes>
          <Route path="" element={<Register />}></Route>
          <Route path="/post" element={<BodyPage />}></Route>
          <Route path="/post/:id" element={<PostFormPage />}></Route>
          <Route path="/post-create" element={<PostFormPage />}></Route>
          <Route path="/login" element={<LoginPage />}></Route>
        </Routes>

      </BrowserRouter>
    );
  /*else
    return(
      <BrowserRouter>
        <Routes>
          <Route path="" element={<LoginPage />}></Route>
          <Route path="/post" element={<LoginPage />}></Route>
          <Route path="/post/:id" element={<LoginPage />}></Route>
          <Route path="/post-create" element={<LoginPage />}></Route>
          <Route path="/login" element={<LoginPage />}></Route>
        </Routes>

      </BrowserRouter>
    );*/
}

export default App;