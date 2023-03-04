import moment from "moment";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

const Container = styled.div`
  margin: 4rem 2rem 2rem 2rem;

  @media only screen and (max-width: 768px) {
    margin: 2rem;
  }
`;

const Input = styled.input`
  width: 25rem;
  padding: 0 0 0 1rem;

  @media only screen and (max-width: 768px) {
    width: 80%;
  }
`;
const Second = styled.div`
  @media only screen and (max-width: 920px) {
    margin: 2rem 0 0 0;
  }
`;
const T = styled.p`
  color: #fff;
  font-weight: 500;
  font-size: 1.2rem;
  margin-bottom: 2rem;
  // text-align: center;
  //width: 20rem;

  @media only screen and (max-width: 768px) {
    font-weight: 510;
    font-size: 1rem;
  }
`;

const Flex = styled.div`
  display: flex;
  width: 90%;
  align-items: center;
  justify-content: space-between;
  margin: 2.5rem 0;

  @media only screen and (max-width: 1250px) {
    width: 100%;
  }

  @media only screen and (max-width: 920px) {
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    //background: red;
  }
`;


const ProfileForm = () => {

  const [saveButtonShow, setSaveButtonShow] = useState(false);

  const Button = styled.button`
    background-color: ${saveButtonShow ? 'rgba(2, 169, 92, 1)' : 'grey' };
    border: none;
    border-radius: 2rem;
    padding: 0 1.5rem;
    color: #FFF;
    font-size: 1.2rem;
    height: 3.5rem;
    cursor: pointer;
    display: grid;
    place-items: center;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
`

  const user = useSelector((state) => state.user.user);
  const [data, setData] = useState({
    name: "",
    email: "",
    mobile_number: "",
    date_of_birth: "",
    country: "",
  });
 

  useEffect(() => {
    if (user) {
      setData({ ...user })
      console.log("mobile,",user.mobile_number)
    }
  },[user])


  return (
    <Container>
      <div>
        <T
          style={{
            margin: "0 0 0 0",
            fontSize: "1.5rem",
            color: "#000",
          }}
        >
          Full Name
        </T>
        <input
          type="text"
          placeholder="John Michael"
          className="input1"
          value={data.name}
          onChange={(e) => {
            setData({ ...data, name: e.target.value });
            setSaveButtonShow(true)
          }}
          style={{
            height: "4rem",
            border: "1px solid rgba(0,0,0,0.2)",
            borderRadius: "0.5rem",
            width: "80%",
            margin: "0.5rem 0 0 0",
            padding:"0 0 0 1rem",
          }}
        />
      </div>

      <Flex>
        <div>
          <T
            style={{
              margin: "0 0 0 0",
              fontSize: "1.5rem",
              color: "#000",
            }}
          >
            E-mail
          </T>
          <Input
            type="e-mail"
            placeholder="xyz@gmail.com"
            className="input1"
            value={data.email}
            onChange={(e) => {
              setData({ ...data, email: e.target.value });
              setSaveButtonShow(true)
            }}
            style={{
              height: "4rem",
              border: "1px solid rgba(0,0,0,0.2)",
              borderRadius: "0.5rem",
              margin: "0.5rem 0 0 0",
            }}
          />
        </div>
        <Second>
          <T
            style={{
              margin: "0 0 0 0",
              fontSize: "1.5rem",
              color: "#000",
            }}
          >
            Date Of Birth
          </T>
          <Input
            type="text"
            placeholder="01/12/23"
            className="input1"
            value={moment(data.date_of_birth).format("DD-MMM-YYYY")}
            onChange={(e) => {
              setData({ ...data, date_of_birth: e.target.value });
              setSaveButtonShow(true)
            }}
            style={{
              height: "4rem",
              border: "1px solid rgba(0,0,0,0.2)",
              borderRadius: "0.5rem",
              margin: "0.5rem 0 0 0",
            }}
          />
        </Second>
      </Flex>

      <Flex>
        <div>
          <T
            style={{
              margin: "0 0 0 0",
              fontSize: "1.5rem",
              color: "#000",
            }}
          >
            Phone Number
          </T>
          <Input
            type="tel"
            placeholder="9001-111"
            className="input1"
            value={data.mobile_number}
            onChange={(e) => {
              setData({ ...data, mobile_number: e.target.value });
              setSaveButtonShow(true)
            }}
            style={{
              height: "4rem",
              border: "1px solid rgba(0,0,0,0.2)",
              borderRadius: "0.5rem",
              margin: "0.5rem 0 0 0",
            }}
          />
        </div>
        <Second>
          <T
            style={{
              margin: "0 0 0 0",
              fontSize: "1.5rem",
              color: "#000",
            }}
          >
            Country
          </T>
          <Input
            type="text"
            placeholder="USA"
            className="input1"
            value={data.country}
            onChange={(e) => {
              setData({ ...data, country: e.target.value });
              setSaveButtonShow(true)
            }}
            style={{
              height: "4rem",
              border: "1px solid rgba(0,0,0,0.2)",
              borderRadius: "0.5rem",
              margin: "0.5rem 0 0 0",
            }}
          />
        </Second>

      </Flex>

      <Flex>

        {/* <Button
          onClick={async() => {
            await localStorage.clear()
            window.location.href = "/"
          }}
          style={{
            background: "Red",
            width:"48%"
          }}
        >
          Logout
        </Button> */}

        
          <Button
          style={{
            width:"48%"
          }}
          disabled
          >
            Save
          </Button> 
      
        

      </Flex>

    </Container>
  );
};

export default ProfileForm;
