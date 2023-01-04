import { Route, Routes } from "react-router-dom";
import Layout from "./components/layout/Layout";
import AllScenes from "./pages/AllScenes";
import './App.css';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path='/' element={<AllScenes />}></Route>
      </Routes>
    </Layout>
  );
}

export default App;
