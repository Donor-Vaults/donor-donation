import React, { useRef, useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
//import './Css.css'
import { Button } from "../../../components/Navbar/Navbar";
//import logo from './logo.png'
// import man from './man.svg'
import { useDispatch } from "react-redux";
import { uploadFile } from "../../../utils/upload";
// import logo from '../../../components/Navbar/logo.svg'

import Webcam from "react-webcam";
const WebcamComponent = () => <Webcam />;
const videoConstraints = {
  width: 400,
  height: 400,
  facingMode: "user",
};

const ManIcon = () => {
  return (
    <svg
      width="298"
      height="327"
      viewBox="0 0 298 327"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M179.731 167.076V158.901H159.244V167.076C159.244 171.675 155.984 175.251 152.259 175.251H187.181C182.991 175.251 179.731 171.675 179.731 167.076Z"
        fill="#FFE1BD"
      />
      <path
        d="M142.947 175.251H195.562V201.309H142.947V175.251Z"
        fill="#FFE1BD"
      />
      <path
        d="M120.597 175.251C114.078 175.251 110.819 179.339 108.491 181.894L33.9907 274.884H48.8907C60.5313 274.884 64.2563 270.286 67.5157 266.198L140.619 175.251H120.597"
        fill="#75A843"
      />
      <path
        d="M22.8157 223.791L45.1657 238.608C49.3564 241.163 54.4782 240.141 57.272 235.542C60.0657 231.455 58.6689 225.323 54.4782 222.769L32.1282 207.952C27.9376 205.397 22.8157 206.419 20.022 211.017C17.6939 215.105 19.0907 221.236 22.8157 223.791"
        fill="#E6B796"
      />
      <path
        d="M82.4157 246.783C82.4157 249.848 80.0876 252.403 77.2938 252.403H34.4563C31.6626 252.403 29.3345 249.848 29.3345 246.783V141.529C29.3345 138.464 31.6626 135.909 34.4563 135.909H76.8282C79.622 135.909 81.9501 138.464 81.9501 141.529V246.783H82.4157Z"
        fill="#3E4347"
      />
      <path
        d="M55.8748 164.522C58.7035 164.522 60.9967 162.006 60.9967 158.902C60.9967 155.798 58.7035 153.281 55.8748 153.281C53.0461 153.281 50.7529 155.798 50.7529 158.902C50.7529 162.006 53.0461 164.522 55.8748 164.522Z"
        fill="#B2C1C0"
      />
      <path
        d="M55.8748 161.967C57.4178 161.967 58.6686 160.595 58.6686 158.902C58.6686 157.208 57.4178 155.836 55.8748 155.836C54.3319 155.836 53.0811 157.208 53.0811 158.902C53.0811 160.595 54.3319 161.967 55.8748 161.967Z"
        fill="#3E4347"
      />
      <path
        d="M59.6 263.133C59.6 269.775 54.9437 274.884 48.8906 274.884H29.3344C23.2813 274.884 18.625 269.775 18.625 263.133V223.791C18.625 217.148 23.2813 212.039 29.3344 212.039H49.3563C55.4094 212.039 60.0656 217.148 60.0656 223.791V263.133H59.6Z"
        fill="#FFE1BD"
      />
      <path
        d="M248.644 127.223V148.683C248.644 152.77 251.437 155.836 255.162 155.836C258.887 155.836 261.681 152.77 261.681 148.683V127.223C261.681 123.136 258.887 120.07 255.162 120.07C251.437 120.07 248.644 123.136 248.644 127.223Z"
        fill="#E6B796"
      />
      <path
        d="M279.375 174.229C279.375 178.828 275.65 182.915 271.459 182.915H256.559C252.369 182.915 248.644 178.828 248.644 174.229V144.595C248.644 139.997 252.369 135.909 256.559 135.909H271.459C275.65 135.909 279.375 139.997 279.375 144.595V174.229Z"
        fill="#FFE1BD"
      />
      <path
        d="M75.8971 146.639C75.8971 147.661 75.4314 148.172 74.5002 148.172H71.7064C70.7752 148.172 70.3096 147.661 70.3096 146.639V143.573C70.3096 142.551 70.7752 142.041 71.7064 142.041H74.5002C75.4314 142.041 75.8971 142.551 75.8971 143.573V146.639Z"
        fill="white"
      />
      <path
        d="M252.834 181.894C248.178 193.134 243.987 203.353 240.262 212.55C236.537 203.353 232.347 193.134 227.691 181.894C226.294 178.317 222.103 175.251 215.584 175.251H203.478C203.478 175.251 219.775 215.616 225.362 228.9C225.362 229.411 229.553 239.119 238.4 239.119H239.331C242.125 239.119 250.506 238.097 254.231 228.9L273.322 182.405H252.834V181.894Z"
        fill="#75A843"
      />
      <path
        d="M216.05 175.251H189.975C187.647 185.981 179.265 194.156 169.487 194.156C159.709 194.156 151.328 185.981 149 175.251H122.925V306.562C122.925 306.562 138.756 316.781 169.487 316.781C199.753 316.781 216.05 306.562 216.05 306.562V175.251Z"
        fill="#83BF4F"
      />
      <path
        d="M104.3 84.8156L110.819 98.1H227.69L232.812 83.7938C232.812 32.7 221.637 10.7297 169.953 10.2188C117.337 9.70784 104.3 32.7 104.3 84.8156Z"
        fill="#594640"
      />
      <path
        d="M228.156 84.3047C227.691 87.3703 227.225 89.925 226.294 91.4578C224.897 94.5234 222.103 96.0562 222.103 96.0562C222.103 96.0562 223.035 90.4359 222.569 82.2609C219.775 34.7437 216.981 57.7359 169.488 57.7359C121.994 57.7359 119.2 34.7437 116.406 82.2609C115.941 90.4359 116.872 96.0562 116.872 96.0562C116.872 96.0562 114.078 94.5234 112.681 91.4578C111.75 89.925 111.285 86.8594 110.819 84.3047C106.163 82.7719 100.575 84.3047 100.575 98.6109C100.575 107.297 103.369 114.961 113.613 115.472C117.338 145.106 153.191 165.033 169.488 165.033C185.785 165.033 222.103 145.106 225.363 115.472C235.141 114.45 238.4 107.297 238.4 98.6109C238.4 83.7937 232.347 82.7719 228.156 84.3047"
        fill="#FFE1BD"
      />
      <path
        d="M144.809 110.873C150.467 110.873 155.053 105.841 155.053 99.6327C155.053 93.4247 150.467 88.3921 144.809 88.3921C139.152 88.3921 134.565 93.4247 134.565 99.6327C134.565 105.841 139.152 110.873 144.809 110.873Z"
        fill="#664E27"
      />
      <path
        d="M193.7 110.873C199.357 110.873 203.944 105.841 203.944 99.6327C203.944 93.4247 199.357 88.3921 193.7 88.3921C188.042 88.3921 183.456 93.4247 183.456 99.6327C183.456 105.841 188.042 110.873 193.7 110.873Z"
        fill="#664E27"
      />
      <path
        d="M188.112 136.42C188.112 144.084 178.8 148.172 169.487 148.172C160.175 148.172 150.862 144.084 150.862 136.42C150.862 136.42 150.862 134.376 152.725 134.376H186.25C188.112 134.376 188.112 136.42 188.112 136.42Z"
        fill="#664E27"
      />
    </svg>
  );
};

const T = styled.p`
  color: #000;
  font-weight: 500;
  font-size: 1rem;
  margin-bottom: 2rem;
  text-align: left;
  width: 100%;

  @media only screen and (max-width: 768px) {
    font-weight: 510;
    font-size: 1rem;
  }
`;

const Ht = styled.h1`
  color: #000;
  font-weight: bold;
  font-size: 1.5rem;
  margin-bottom: 1.5rem;
  width: 100%;

  @media only screen and (max-width: 768px) {
    font-weight: 510;
    font-size: 1rem;
  }
`;

const Left = styled.div`
  width: 35%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  background-color: #fff;
  border-radius: 1rem;
  padding: 1rem;
  //   @media only screen and (max-width: 1100px) {
  //     width: 50%;
  // }

  @media only screen and (max-width: 998px) {
    width: 35rem;
    padding: 1rem 0;
    margin: 7rem 0 0 0;
  }

  @media only screen and (max-width: 768px) {
    width: 95%;
    padding: 1rem;
    margin: 7rem 0 0 0;
  }
`;

const Right = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  width: 60%;

  @media only screen and (max-width: 998px) {
    width: 100%;
    margin: 4rem 0 0 0;
  }

  @media only screen and (max-width: 998px) {
    width: 95%;
  }
`;

const Box = styled.div`
    display: flex;
    width: 95%;
    min-height: 30rem;
    border-radius: 1rem;
    position: relative;
    justify-content: space-around;
 

    @media only screen and (max-width: 998px) {
        
        flex-direction: column;
        min-height: 30rem;
       
        justify-content: space-between;
 
     }
`

const Back = styled.div`
  margin: 3rem 0;
  cursor: pointer;

  @media only screen and (max-width: 998px) {
    position: absolute;
    top: 0;
    right: 2rem;
  }
`;
const Details = styled.div`
  background: linear-gradient(
      180deg,
      rgba(2, 169, 92, 0.5) 0%,
      rgba(34, 170, 48, 0.5) 100%
    ),
    linear-gradient(0deg, #ffffff, #ffffff);
  padding: 3rem 2rem 2rem 2rem;
  border: 0.25rem solid #ffffff;
  border-radius: 1.25rem;
  margin: 0 1rem 4rem 1rem;

  @media only screen and (max-width: 998px) {
    width: 100%;
    margin: 0 0 2rem 0;
    padding: 3rem 0.5rem 2rem 0.5rem;
  }

  @media only screen and (max-width: 768px) {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

const Man = styled.div`
  width: 12rem;
  height: 12rem;
`;
const H = styled.p`
  font-size: 1.25rem;
  font-weight: bold;

  @media only screen and (max-width: 768px) {
    font-weight: 510;
    font-size: 0.95rem;
    font-weight: bold;
  }
`;

const Frame = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 25rem;
  height: 22rem;
  border-radius: 1rem;
  background: #fff;

  @media only screen and (max-width: 768px) {
    width: 95%;
  }
`;

const Part2 = ({ hide, onNext, onPrev }) => {
  const dispatch = useDispatch();
  const [selectedFile, setSelectedFile] = useState();
  const [uploadUrl, setUploadUrl] = useState();
  const [isLoading, setLoading] = useState(false);
  const webcamRef = React.useRef(null);

  const capture = React.useCallback(() => {
    const pictureSrc = webcamRef.current.getScreenshot();
    setSelectedFile(pictureSrc);
  });
  const inputRef = useRef(null);

  const handleFinish = () => {
    console.log("handleFinish",uploadUrl)
    onNext({ selfie: uploadUrl });
  };

  const handleFileSelect = () => {
    // 👇️ open file input box on click of other element
    inputRef.current.click();
  };

  const handleUpload = async () => {
    setLoading(true);
    try {
      // const url = await uploadFile(selectedFile);
      setUploadUrl(selectedFile);
    } catch (err) {
      console.error(err);
    }
    setLoading(false);
  };

  const handleFileChange = (event) => {
    const fileObj = event.target.files && event.target.files[0];
    if (!fileObj) {
      return;
    }

    setSelectedFile(event.target.files[0]);
  };

  return (
    
      <Box
        style={{
          display: hide ? "none" : "flex",
        }}
      >
        <Left>
          <div style={{ width: "100%" }}>
            {/* <img src={logo} alt='' style={{width:'5rem',height:'4.5rem',margin:'0 0 2rem 0'}} /> */}
          </div>
          <Ht>Capture your selfie</Ht>
          <T>Please take a selfie using your device</T>
        </Left>

        <Right>
          <Back
            style={{
              display: "flex",
              width: "100%",
              alignItems: "flex-end",
              justifyContent: "flex-end",
            }}
            onClick={() => {
              onPrev();
            }}
          >
            <div
              style={{
                width: "8rem",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <div>
                <svg
                  width="32"
                  height="30"
                  viewBox="0 0 42 40"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M22.4582 0C17.5662 0 13.5862 3.98 13.5862 8.872V10.736C13.5862 11.564 14.2582 12.236 15.0862 12.236C15.9142 12.236 16.5862 11.564 16.5862 10.736V8.872C16.5862 5.632 19.2202 3 22.4582 3H32.2082C35.4422 3 38.0742 5.632 38.0742 8.872V31.13C38.0742 34.368 35.4422 37 32.2082 37H22.4362C19.2122 37 16.5862 34.376 16.5862 31.152V29.266C16.5862 28.438 15.9142 27.766 15.0862 27.766C14.2582 27.766 13.5862 28.438 13.5862 29.266V31.152C13.5862 36.032 17.5582 40 22.4362 40H32.2082C37.0962 40 41.0742 36.022 41.0742 31.13V8.872C41.0742 3.98 37.0962 0 32.2082 0H22.4582ZM6.29802 13.108L0.442017 18.938C0.389774 18.9898 0.342995 19.0437 0.300182 19.1008L0.442017 18.938C0.371159 19.0079 0.308144 19.0842 0.253468 19.1656C0.229401 19.2025 0.206188 19.2406 0.184677 19.2798C0.167221 19.3105 0.151154 19.3424 0.136261 19.3749C0.123634 19.4036 0.111515 19.4324 0.100281 19.4615C0.0852013 19.4995 0.0719986 19.5386 0.0604172 19.5782C0.0516891 19.6094 0.0436668 19.6405 0.0366364 19.672C0.0277023 19.7102 0.020668 19.7486 0.0151329 19.7874C0.012001 19.8125 0.00893784 19.8389 0.00657272 19.8655C0.00199509 19.9111 1.90735e-05 19.9555 1.90735e-05 20L0.0102158 20.124L0.0143204 20.2035C0.014782 20.2068 0.0152512 20.2102 0.0157356 20.2136L1.90735e-05 20C1.90735e-05 20.111 0.01231 20.221 0.0362053 20.3278C0.0436668 20.3595 0.0516891 20.3906 0.0606689 20.4213C0.0719986 20.4614 0.0852013 20.5005 0.0999908 20.5389C0.111515 20.5676 0.123638 20.5964 0.136608 20.6246C0.151157 20.6576 0.167221 20.6895 0.184433 20.7209C0.206188 20.7594 0.229401 20.7975 0.254215 20.8345C0.268253 20.8564 0.283653 20.8781 0.299652 20.8993C0.347271 20.962 0.399162 21.0209 0.455307 21.0755L6.29802 26.894C6.59002 27.186 6.97402 27.332 7.35602 27.332C7.74002 27.332 8.12602 27.186 8.41802 26.89C9.00202 26.302 9.00002 25.354 8.41402 24.77L5.13422 21.5H25.5826C26.4106 21.5 27.0826 20.828 27.0826 20C27.0826 19.172 26.4106 18.5 25.5826 18.5H5.13022L8.41402 15.232C9.00002 14.648 9.00402 13.7 8.41802 13.112C7.83402 12.524 6.88602 12.524 6.29802 13.108Z"
                    fill="#082F37"
                  />
                </svg>
              </div>
              <T style={{ color: "#000", margin: "0", fontSize: "1.75rem" }}>
                Back
              </T>
            </div>
          </Back>

          <Details>
            <div style={{ width: "100%" }}>
              <H
                style={{
                  fontSize: "1.5rem",
                  color: "#FFF",
                  textAlign: "left",
                  margin: "0 0 2rem 0",
                }}
              >
                Selfie
              </H>
            </div>

            <Frame>
              <input
                accept="image/png, image/jpeg"
                style={{ display: "none" }}
                ref={inputRef}
                type="file"
                onChange={handleFileChange}
              />
              {selectedFile ? (
                <img
                  src={selectedFile}
                  height={300}
                  width={300}
                />
              ) : (
                <Man>
                  <Webcam
                    audio={false}
                    height={"100%"}
                    ref={webcamRef}
                    width={"100%"}
                    screenshotFormat="image/jpeg"
                    videoConstraints={videoConstraints}
                  />
                </Man>
              )}

           
              <Button
                style={{ height: "2.5rem", margin: "1rem 0 0 0" }}
                onClick={(e) => {
                  e.preventDefault();
                  if (selectedFile) {
                    setSelectedFile()
                  } else {
                    capture();
                  }
                }}
              >
               {selectedFile?"Retake":" Click To Capture"}
              </Button>
            </Frame>

            <div style={{ display: "grid", placeItems: "center" }}>
              {selectedFile ? (
                <Button
                  style={{
                    borderRadius: "2rem",
                    //   width: "9rem",
                    margin: "2rem 0 0 0",
                    border: "2px solid #FFFFFF",
                    fontSize: "2rem",
                  }}
                  disabled={isLoading}
                  onClick={() => {
                    if (!uploadUrl) {
                      handleUpload();
                    } else {
                      handleFinish();
                    }
                  }}
                >
                  {uploadUrl ? "Finish" : "Upload Image"}
                </Button>
              ) : null}
            </div>
          </Details>
        </Right>
      </Box>
  
  );
};

export default Part2;
