import { Route, Routes } from "react-router-dom";
import MainLayout from "./Layout/MainLayout";
import Home from "./Pages/Home";
import AllArtCraft from "./Pages/AllArt&Craft";
import AddCraftItem from "./Pages/AddCraftItem";
import MyArtCraft from "./Pages/MyArtCraft";
import LogIn from "./Pages/LogIn";
import SignUp from "./Pages/SignUp";
import Error from "./Pages/Error";
import MyProfile from "./Pages/MyProfile";
import IndividualArt from "./Pages/IndividualArt";
import UpdatePage from "./Pages/UpdatePage";
import Landscape from "./Pages/Landscape";
import Potrait from "./Pages/Potrait";
import Watercolor from "./Pages/Watercolor";
import Oil from "./Pages/Oil";
import Charcol from "./Pages/Charcol";
import Cartoon from "./Pages/Cartoon";
import IndividualItem from "./Pages/IndivitualItem";
import PrivateRoute from "./PrivateRoute/PrivateRoute";
import { IoPricetag } from "react-icons/io5";

function App() {
  return (
    <div className="">
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="/allartcraft" element={<AllArtCraft />} />
          <Route
            path="/addcraft"
            element={
              <PrivateRoute>
                <AddCraftItem />
              </PrivateRoute>
            }
          />
          <Route
            path="/mycraft"
            element={
              <PrivateRoute>
                <MyArtCraft />
              </PrivateRoute>
            }
          />
          <Route path="/login" element={<LogIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route
            path="/myprofile"
            element={
              <PrivateRoute>
                <MyProfile />
              </PrivateRoute>
            }
          />
          <Route
            path="/art/:id"
            element={
              <PrivateRoute>
                <IndividualArt />
              </PrivateRoute>
            }
          />
          <Route
            path="/allcateroy/:id"
            element={
              <PrivateRoute>
                <IndividualItem />
              </PrivateRoute>
            }
          />
          <Route
            path="/update/:id"
            element={
              <PrivateRoute>
                <UpdatePage />
              </PrivateRoute>
            }
          />
          <Route path="/landscape" element={<Landscape />} />
          <Route path="/potrait" element={<Potrait />} />
          <Route path="/watercolor" element={<Watercolor />} />
          <Route path="/oil" element={<Oil />} />
          <Route path="/charcol" element={<Charcol />} />
          <Route path="/cartoon" element={<Cartoon />} />
        </Route>
        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  );
}

export default App;
