import './App.css';
import { Route, Routes } from "react-router-dom";
import Footer from "./Components/Footer/Footer";

import Header from "./Components/Header/Header";
import Article from "./Components/Pages/Home/Article/Article";
import HomeBanner from "./Components/Pages/Home/HomeBanner/HomeBanner";
import Join from "./Components/Pages/Join/Join";
import Results from "./Components/Pages/Results/Results/Results";
import PackageDetails from "./Components/Pages/Services/PackageDetails/PackageDetails";
import Packages from "./Components/Pages/Services/Packages/Packages";
import ArticleFacilities from './Components/Pages/Home/ArticleFacilities/ArticleFacilities';
import RequireAuth from './Components/Auth/RequireAuth/RequireAuth';
import Error from './Components/Pages/Error/Error';
import UserAuth from './Components/Auth/UserAuth/UserAuth';




function App() {

  return (
    <div className="app">

      <Header />
      <Routes>
        <Route path='/' element={<><HomeBanner /> <Article /> <Packages />  <ArticleFacilities /> <Results /> <Footer /></>} />
        <Route path='/home' element={<><HomeBanner /> <Article /> <Packages /> <ArticleFacilities />  <Results /> <Footer /></>} />

        <Route path='/package' element={<><Packages /> <Footer /></>} />
        <Route path='/package/:id' element={
          <RequireAuth>
            <PackageDetails></PackageDetails>
            <Footer />
          </RequireAuth>
        } ></Route>

        <Route path="/result" element={<><Results /> <Footer /></>} />

        <Route path='/join' element={
          <UserAuth>
            <Join />
          </UserAuth>
        } />
        <Route path='/join' element={<Join />} />
        <Route path='*' element={<Error />} />
      </Routes>




    </div>
  );
}

export default App;
