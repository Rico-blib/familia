import "./App.css";
import Home from "./Pages/Home/Home";
import Profile from "./Pages/Profile/Profile";
import FamilyTree from "./Pages/FamilyTree/FamilyTree";
import Auth from "./Pages/Auth/Auth";
import History from "./Pages/History/History";
import FamilyAlbum from "./Pages/FamilyAlbum/FamilyAlbum";
import { Routes, Route, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
function App() {
  const user = useSelector((state) => state.authReducer.authData);
  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={user ? <Navigate to="home" /> : <Navigate to="../auth" />}
        />

        <Route
          path="/home"
          element={user ? <Home /> : <Navigate to="../auth" />}
        />
        <Route
          path="/auth"
          element={user ?  <Auth />:<Navigate to="../home" />}
        />
        <Route
          path="/profile"
          element={user ? <Profile /> : <Navigate to="../auth" />}
        />
        <Route
          path="/family"
          element={user ? <FamilyTree /> : <Navigate to="../auth" />}
        />
        <Route
          path="/history"
          element={user ? <History /> : <Navigate to="../auth" />}
        />
        <Route
          path="/album"
          element={user ? <FamilyAlbum /> : <Navigate to="../auth" />}
        />
      </Routes>
    </div>
  );
}

export default App;
