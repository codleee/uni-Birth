import React from "react";
import { Routes, Route } from "react-router-dom";

// Home
import Home from "./components/Home/screens/Home";

// Member
import LoginMember from "./components/Member/screens/LoginMember";
import RegisterMember from "./components/Member/screens/RegisterMember";

// Constellation
import DetailConstellation from "./components/Constellation/screens/DetailConstellation";
import RegisterConstellation from "./components/Constellation/screens/RegisterConstellation";
import DrawingConstellation from "./components/Constellation/screens/DrawingConstellation";

// Planet
import DetailPlanet from "./components/Planet/screens/DetailPlanet";
import MainPlanet from "./components/Planet/screens/MainPlanet";

// Profile
import MemberProfile from "./components/Profile/screens/MemberProfile";
import Followings from "./components/Profile/screens/Followings";
import Followers from "./components/Profile/screens/Followers";
import ModifyProfile from "./components/Profile/screens/ModifyProfile";
import DirectMessage from "./components/Profile/screens/DirectMessage";
import MessageBox from "./components/Profile/screens/MessageBox";

// Star
import RegisterStar from "./components/Star/screens/RegisterStar";

// Search
import SearchCommon from "./common/screens/SearchCommon";
import SearchQuration from "./common/screens/SearchQuration";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/members/login" element={<LoginMember />} />
      <Route path="/members/register" element={<RegisterMember />} />
      <Route path="/planets/:id" element={<DetailPlanet />} />
      <Route path="/planets" element={<MainPlanet />} />
      <Route
        path="/constellations/detail/:id"
        element={<DetailConstellation />}
      />
      <Route
        path="/constellations/register/:member_id"
        element={<RegisterConstellation />}
      />
      <Route
        path="/constellations/drawing"
        element={<DrawingConstellation />}
      />
      <Route path="/stars/register/:member_id" element={<RegisterStar />} />
      <Route path="/profiles/:id" element={<MemberProfile />} />
      <Route path="/profiles/followings/:id" element={<Followings />} />
      <Route path="/profiles/followers/:id" element={<Followers />} />
      <Route path="/profiles/modify/:id" element={<ModifyProfile />} />
      <Route path="/profiles/directmessage/:id" element={<DirectMessage />} />
      <Route path="/profiles/messagebox/:id" element={<MessageBox />} />
      <Route path="/search" element={<SearchQuration />} />
      <Route
        path="/search?content=:query&category=:categoryname"
        element={<SearchCommon />}
      />
    </Routes>
  );
};

export default App;
