import * as React from "react";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";
import Button from "@mui/material/Button";
import { Box } from "@mui/system";
import { useWallet } from "use-wallet";
import Web3 from "web3";
import config from "../../config";
import IERC20 from "../../config/abi/IERC20.json";
import { toast } from "react-hot-toast";
import CampaignAbi from "../../config/abi/CampaingABI.json";
// import { Button } from "../../../components/Navbar/Navbar";

export default function DonationModal({ fundraiser, open, setOpen }) {
  const wallet = useWallet();
  const [balance, setBalance] = React.useState(0);
  const [isApproved, setApproved] = React.useState(false);
  const [isLoading, setLoading] = React.useState(false);
  const [isLoadingData, setLoadingData] = React.useState(false);
  const [tokenContract, setTokenContract] = React.useState();
  const [decimals, setDecimals] = React.useState(18);

  const [inputAmount, setInputAmount] = React.useState("0");
  const [campaignContract, setCampaignContract] = React.useState();
  const loadContractData = async () => {
    setLoadingData(true);

    const web3 = new Web3(wallet.ethereum);

    const _campaignContract = new web3.eth.Contract(
      CampaignAbi,
      fundraiser.contract_address
    );
    const baseTokenAddress = await _campaignContract.methods.baseToken().call();
    const _tokenContract = new web3.eth.Contract(IERC20, baseTokenAddress);
    setTokenContract(_tokenContract);
    setCampaignContract(_campaignContract);
    const balance = await _tokenContract.methods
      .balanceOf(wallet.account)
      .call();
    const allowance = await _tokenContract.methods
      .allowance(wallet.account, fundraiser.contract_address)
      .call();
    const decimals = await _tokenContract.methods.decimals().call();
    setDecimals(decimals);
    setApproved(Number(allowance) > 0);
    setBalance(Number(balance) / 10 ** Number(decimals));

    setLoadingData(false);
  };
  React.useEffect(() => {
    if (wallet.account) {
      loadContractData();
    }
  }, [wallet.account]);

  React.useEffect(() => {
    wallet.connect();
  }, []);

  const validateDontation = () => {
    if (!Number(inputAmount) || Number(inputAmount) > Number(balance)) {
      toast.error("Please input a valid amount");
      return false;
    }

    return true;
  };
  const handleDonate = async () => {
    const isValid = validateDontation();

    if (!isValid) {
      return;
    }

    setLoading(true)

    try {
      const amount =( Number(inputAmount) * 10 ** Number(decimals)).toString();
      await campaignContract.methods
      .participate(amount)
      .send({ from: wallet.account });
      toast.success("Successfully Donated");
      setOpen(false)
    } catch (err) {
      console.log({err})
    }
    setLoading(false)
  };

  const handleApproval = async () => {
    setLoading(true);
    try {
      console.log("ssasaas", wallet.account, fundraiser.contract_address);
      await tokenContract.methods
        .approve(
          fundraiser.contract_address,
          "115792089237316195423570985008687907853269984665640564039457584007913129639935"
        )
        .send({ from: wallet.account });
      toast.success("Contract Successfully Approved");

      await loadContractData();
    } catch (err) {
      console.log({ err });
    }

    setLoading(false);
  };
  const renderButton = () => {
    let text = "";
    let onClick = "";

    if (wallet.account) {
      if (isApproved) {
        text = "Donate";
        onClick = handleDonate;
      } else {
        text = "Approve Contract";
        onClick = handleApproval;
      }
    } else {
      text = "Connect Wallet";
      onClick = wallet.connect;
    }

    return (
      <Button
        disabled={isLoading}
        onClick={() => {
          onClick();
        }}
        style={{
          width: "100%",
          marginTop: 10,
          marginBottom: 10,
          background: "#2D7B43",
          color: "#fff",
          alignContent: "center",
          justifyContent: "center",
          textAlign: "center",
          alignItems: "center",
          alignSelf: "center",
        }}
      >
        {isLoading ? "Loading" : text}
      </Button>
    );
  };
  return (
    <div>
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={open}
        // onClick={handleClose}
      >
        {isLoadingData ? (
          <CircularProgress />
        ) : (
          <Box bgcolor={"#fff"} width="30%" padding={5} borderRadius={5}>
            <h2 style={{ color: "black" }}>Donate</h2>
            <hr />
            <input
              type="number"
              value={inputAmount}
              placeholder="Enter Donation Amount"
              onChange={(t) => {
                setInputAmount(t.target.value);
                // setData({ ...data, firstName: t.target.value });
              }}
              className="input1"
              style={{
                height: "3.75rem",
                marginTop: 10,
                width: "100%",
                border: "1px solid rgba(0,0,0,0.2)",
                borderRadius: "0.75rem",
                // width: "45%",
              }}
            />
            {wallet.account && (
              <span style={{ color: "black", width: "100%" }}>
                Balance : {balance} USDT
              </span>
            )}
            <br />
            {renderButton()}
            <Button
              disabled={isLoading}
              onClick={() => {
                setOpen(false);
              }}
              style={{
                width: "100%",
                background: "red",
                color: "#fff",
                alignContent: "center",
                justifyContent: "center",
                textAlign: "center",
                alignItems: "center",
                alignSelf: "center",
              }}
            >
              Cancel
            </Button>
            ;
          </Box>
        )}
      </Backdrop>
    </div>
  );
}
