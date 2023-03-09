import React, { useEffect, useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import HomeDefault from "./Page/Home/Home";
import Footer from "./Page/Foot/Footer";
import { Routes, Route, useNavigate } from "react-router-dom";
import RegisterationHome from "./Page/1Registration/RegisterationHome";
import Login from "./Page/Login/Auth";
import Registeration from "./Page/Registration";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { changeLoading, setUser } from "./store/slices/userSlice";
import Work from "./Page/HowItWork/Work";
import Profile1 from "./Page/Profile/Profile1";
import Vault from "./Page/Vault/Vault";
import Payment from "./Page/Campaing/Payment/Payment";
import Page5 from "./Page/Campaing/Page5";
import LadingPage from "./Page/LandingPage/LadingPage";
import ComingSoon from "./Page/ComingSoon/ComingSoon";
import Register1 from "./Page/1Registration/Registeration1";
import client, { GetAllFundraisers, GetUser } from "./apollo";
import { Toaster } from "react-hot-toast";
import { useQuery } from "@apollo/client";
import { useDispatch } from "react-redux";
import Protected from "./ProtectedRoute";
import { BrowserRouter } from "react-router-dom";
import CreateFundraiser from "./Page/CreateFundraiser";
import InverseProtected from "./InverseProtected";
import { setGlobalFundraisers } from "./store/slices/fundraisersSlice";
import FundraiserInfo from "./Page/FundraiserInfo";
import ForgotPassword from "./Page/Login/ForgotPassword";
import ResetPassword from "./Page/Login/ResetPassword";
import VerifyEmail from "./Page/VerifyEmail";

const App = () => {
  const userResp = useQuery(GetUser);
  const fundraiserResp = useQuery(GetAllFundraisers);

  const dispatch = useDispatch();
  // const router = useRouter();
  const [isLoading, setLoading] = useState(true);
  const [isAuthenticated, setAuthenticated] = useState(false);

  const loadUser = async () => {
    try {
      const resp = await userResp.refetch();
      console.log("loadUser", { resp });
      return resp.data.me;
    } catch (err) {
      console.error("loadUserErro", err);
      if (userResp.error && userResp.error.graphQLErrors) {
        for (let error of userResp.error.graphQLErrors) {
          console.log({ error });
          if (error.extensions.code === "UNAUTHENTICATED") {
            localStorage.clear();
          }
        }
      }
    }

    return null;
  };

  useEffect(() => {
    console.log({ fundraiserResp, data: fundraiserResp.data })

    if (fundraiserResp && fundraiserResp.data) {
      dispatch(setGlobalFundraisers(fundraiserResp.data.fundraisers));
    }
  }, [fundraiserResp]);

  const validatedAuth = async () => {
    const accessToken = localStorage.getItem("accessToken");
    if (!accessToken) {
      setLoading(false);
    }
    const user = await loadUser();
    if (user) {
      setAuthenticated(true);
      dispatch(setUser(user));
    }
    setLoading(false);
    dispatch(changeLoading(false));
  };

  useEffect(() => {
    validatedAuth();
  }, []);

  return (
    <BrowserRouter>
      <>
        <Navbar />
        <Routes>
          <Route path="/" element={<LadingPage />} />
          <Route path="/allfundraiser" element={<HomeDefault />} />
          <Route path="/fundraise" element={<RegisterationHome />} />
          <Route path="/forgotPassword" element={
            <InverseProtected>

              <ForgotPassword />
            </InverseProtected>
          } />

          <Route path="/resetpassword" element={
            <InverseProtected>

              <ResetPassword />
            </InverseProtected>
          } />

          
<Route path="/verifyemail" element={

              <VerifyEmail />
          } />

          <Route
            path="/register"
            element={
              <InverseProtected>
                <Registeration />
              </InverseProtected>
            }
          />
          <Route
            path="/start"
            element={
              <Protected>
                <CreateFundraiser />
              </Protected>
            }
          />



          <Route
            path="/login"
            element={
              <InverseProtected >
                <Login />
              </InverseProtected>
            }
          />
          <Route path="/work" element={<Work />} />
          <Route path="/profile" element={<Profile1 />} />
          <Route path="/vault" element={<Vault />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/fundraiser" element={<FundraiserInfo />} />
          <Route path="/docs" element={<ComingSoon />} />
        </Routes>
        <Footer />
      </>

      <div>
        <Toaster />
      </div>
    </BrowserRouter>
  );
};

export default App;
