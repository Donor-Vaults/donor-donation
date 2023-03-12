import React, { useEffect, useState } from "react";
import styled from "styled-components";
import theme from "styled-theming";
import { Grid, Avatar, CardContent, Card, Box, Stack, Typography, CircularProgress, TableRow } from '@mui/material';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Tilt from "react-parallax-tilt";
import { H, T } from "../../Home/Page2/Page2";
import { Line, Circle } from "rc-progress";
import { Button } from "../../../components/Navbar/Navbar";
import SwitchSelector from "react-switch-selector";
import { getFundraiserDetails } from "../../../apollo/subgraph"
import { Link } from "react-router-dom";
import moment from "moment";
import Badge from "@mui/material/Badge";
import DonationModal from "../../../components/DonationModal";
import Web3 from "web3";
import config from "../../../config";
import CampaignAbi from "../../../config/abi/CampaingABI.json";
import { SocialShare } from "../../../components/SocialShare";
import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table';
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css';

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}


const Box1 = styled.div`
  width: 35rem;
  background-color: #2d7b43;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  margin: 2rem auto 0 auto;
  justify-self: center;
  padding: 3rem 0;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
    rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,
    rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
  border-radius: 2rem;

  @media only screen and (max-width: 500px) {
    width: 98%;
  }
`;
const Flex = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  // border-radius: 0.75rem 0.75rem 0 0;
`;

const Ts = styled(Td)`
  font-size: 1rem;
  font-weight: bold;
  text-align: center;
  color:#FFF;
  height: 3rem;
`;
const Hs = styled(Th)`
  font-size: 1rem;
  font-weight: bold;
  text-align: center;
  color:#FFF;
`;

const TH = styled(Thead)`
  
  height: 2rem;
`

const Container = styled.div`
  width: 80%;
  @media only screen and (max-width: 768px) {
    width: 90%;
    flex-direction: column;
  }
`;


const OneDisbursementItem = ({ data }) => {
  console.log("Saasa", data)
  const { createdAt, amount, id } = data
  return (
  // <Card sx={{}}>
  //   <CardContent>
  //     <Typography sx={{ fontSize: 14 }} variant="body2" gutterBottom>
  //       Date: {moment(createdAt * 1000).format("DD-MMM-YYYY hh:mm:a")}
  //     </Typography>


  //     <Typography variant="body2">
  //       Amount: {Web3.utils.fromWei(amount)} {config.DONTATION_TOKEN_SYMBOL}
  //     </Typography>

  //     <Typography variant="body2" >
  //       <a href={`https://testnet.bscscan.com/tx/${id}`} target="_blank">Txn Hash: {id}</a>
  //     </Typography>
  //   </CardContent>

  // </Card>
    
    <Tbody style={{margin: '0.5rem 0 0 0'}}>
      <Tr >
        <Ts style={{}}><a href={`https://testnet.bscscan.com/tx/${id}`} target="_blank" style={{textDecoration:'none',textAlign:'center'}}>{id.slice(0,10)}..</a></Ts>
        <Ts style={{}}>{moment(createdAt * 1000).format("DD-MMM-YYYY hh:mm:a")}</Ts>
        <Ts style={{}}>{Web3.utils.fromWei(amount)} {config.DONTATION_TOKEN_SYMBOL}</Ts>
      </Tr>
    </Tbody>
   
  )
}


const OneDonationItem = ({ data }) => {
  console.log("Saasa", data)
  const {     id,
    createdAt,
    amount,
    donor } = data

  return (
    
    <Tbody>
      <Tr>
        <Ts style={{}}> <a href={`https://testnet.bscscan.com/tx/${id}`} target="_blank" style={{textDecoration:'none',textAlign:'center'}}>{id.slice(0,10)}</a></Ts>
        <Ts style={{padding:'0 0.5rem'}}>{moment(createdAt * 1000).format("DD-MMM-YYYY hh:mm:a")}</Ts>
        <Ts style={{}}>{Web3.utils.fromWei(amount)} {config.DONTATION_TOKEN_SYMBOL}</Ts>
        <Ts style={{}}><a href={`https://testnet.bscscan.com/address/${donor}`} target="_blank" style={{textDecoration:'none',textAlign:'center'}}>{donor.slice(0,10)}</a></Ts>
      </Tr>
    </Tbody>
   
  )
  // <Card sx={{}}>
  //   <CardContent>
  //     <Typography sx={{ fontSize: 14 }} variant="body2" gutterBottom>
  //       Date: {moment(createdAt * 1000).format("DD-MMM-YYYY hh:mm:a")}
  //     </Typography>


  //     <Typography variant="body2">
  //       Amount: {Web3.utils.fromWei(amount)} {config.DONTATION_TOKEN_SYMBOL}
  //     </Typography>

  //     <Typography variant="body2" >
  //       <a href={`https://testnet.bscscan.com/tx/${id}`} target="_blank">Txn Hash: {id}</a>
  //     </Typography>


  //     <Typography variant="body2" >
  //       <a href={`https://testnet.bscscan.com/address/${donor}`} target="_blank">Donor: {donor}</a>
  //     </Typography>
  //   </CardContent>

  // </Card>
}
const DonationPanel = ({ fundraiser }) => {
  const [showDonationModal, setShowDonationModal] = useState(false);
  const [subgraphDetail, setSubgraphDetail] = useState()

  const [isDataLoading, setDataLoading] = useState(false);
  const [contractData, setContractData] = useState({ totalRaised: 0 });
  const [selectedTab, setSelectedTab] = React.useState(0);



  const loadSubgraphDetail = async () => {
    try {
      const subgraphData = await getFundraiserDetails(fundraiser.contract_address.toLowerCase())
      console.log({ subgraphData })
      setSubgraphDetail(subgraphData)
    } catch (Err) {
      console.log("loadSubgraphDetail", Err)
    }
  }
  useEffect(() => {
    console.log({ fundraiser });
    if (fundraiser) {
      loadSubgraphDetail()
    }
  }, [fundraiser]);

  useEffect(() => {
    console.log({ subgraphDetail });
    
  }, [subgraphDetail]);



  useEffect(() => {
    setInterval(() => {
      loadData();
    }, 5000);
    loadData();
  }, []);

  const loadData = async () => {
    setDataLoading(true);
    try {
      const web3 = new Web3(config.RPC);
      const donationContract = new web3.eth.Contract(
        CampaignAbi,
        fundraiser.contract_address
      );
      const totalRaised = await donationContract.methods.totalRaised().call();

      setContractData({ totalRaised: totalRaised / 1e18 });
    } catch (err) {
      console.log("saasas", err);
    }
    setDataLoading(false);
  };
  return (
    // <div style={{ display: "block" }}>

      <Box1>
        <DonationModal
          fundraiser={fundraiser}
          setOpen={setShowDonationModal}
          open={showDonationModal}
        />

        <Button
          disabled={fundraiser.fundraisers_status !== "APPROVED"}
          style={{ width: "12rem", background: "#FFF", color: "#2D7B43" }}
          onClick={() => {
            setShowDonationModal(true);
          }}
        >
          {fundraiser.fundraisers_status === "APPROVED"
            ? "Donate"
            : "Donation not Enabled"}
        </Button>

        {/* <Button
        style={{
          width: "12rem",
          background: "#FFF",
          color: "#2D7B43",
          margin: "1rem 0 0 0",
        }}
      >
        Share Now
      </Button> */}

        <SocialShare link={window.location.href} />

        <H style={{ margin: "3rem 0 1rem 0" }}>$ {contractData.totalRaised}</H>

        <Container>
          <T style={{ margin: "0", textAlign: "center" }}>
            raised of ${fundraiser.goalAmount} goal
          </T>
          <Line
            percent={
              (Number(contractData.totalRaised) / Number(fundraiser.goalAmount)) *
              100
            }
          />
          <Flex>
            <div>
              <T style={{ margin: "0" }}>Created At</T>
              <T style={{ fontSize: "0.85rem" }}>
                {moment(fundraiser.createdAt).format("DD MMM YYYY hh:mm a")}
              </T>
            </div>

            <div>
              <T style={{ margin: "0" }}>Status </T>
              <T style={{ fontSize: "0.85rem" }}>
                {fundraiser.fundraisers_status}
              </T>
            </div>

            {/* <div>
                        <T style={{textAlign:'right',margin:'0'}}>Ends on</T>
                        <T style={{textAlign:'right',fontSize:'0.85rem'}}>29 jun 10:00pm</T>
                    </div> */}
          </Flex>
        </Container>

        {/* <SwitchSelector
                onChange={onChange}
                options={options}
                initialSelectedIndex={initialSelectedIndex}
                backgroundColor={"#e5e5e5"}
                fontColor={"#02A95C"}
                style={{height:'0.2rem'}}
            /> */}


        

        {subgraphDetail ? <div
          style={{
            width: "100%",
            margin: "0 0 1rem 0",
            padding: "0 2rem",
          }}
        >
        

          <T style={{ margin: "0",textAlign:'left',margin:"0 0 0.5rem 0" }}>Disbursement Details</T>
       
          
          <Table>
            <TH>
              <Tr>
                <Hs style={{color:"#FFF"}}>Txn Hash</Hs>
                <Hs style={{color:"#FFF"}}>Date</Hs>
                <Hs style={{color:"#FFF"}}>Amount</Hs>
              </Tr>
            </TH>
          {subgraphDetail.disbursements.map((item, index) => {
            return <OneDisbursementItem data={item} key={index} />
          })}
        </Table>
        </div> : null}


        {subgraphDetail ? 
        <div
          style={{
            width: "100%",
            margin: "0 0 1rem 0",
            padding: "0 2rem",
          }}
        >
          <T style={{ margin: "0" ,margin:"0 0 0.5rem 0"}}>Donations Details (Latest #5)</T>
      
          <Table>
            <TH>
              <Tr>
                <Hs style={{color:"#FFF"}}>Txn Hash</Hs>
                <Hs style={{color:"#FFF"}}>Date</Hs>
                <Hs style={{color:"#FFF"}}>Amount</Hs>
                <Hs style={{color:"#FFF"}}>Donor</Hs>
              </Tr>
            </TH>

          {subgraphDetail.dontations.map((item, index) => {
          
            return <OneDonationItem data={item} key={index} />
            
          })}
          </Table>
         </div> 
        : null}

      <p target="_blank" href="www.google.com">
        Do you think this fundraiser is a fraud/scam? <a
          href="https://google.com"
          target="_blank" >
        Report.
        </a>
          </p>

      </Box1>

    
    // </div>
  );
};

export default DonationPanel;
