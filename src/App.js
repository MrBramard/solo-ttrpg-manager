import { Route, Routes } from "react-router-dom";
import Layout from "./components/layout/Layout";
import AllScenes from "./pages/AllScenes";
import './App.css';
import Campaigns from "./pages/Campaigns";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path='/' element={<Campaigns />}></Route>
        <Route path='/scenes' element={<AllScenes />}></Route>
      </Routes>
    </Layout>
  );
}

export default App;
