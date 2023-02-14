import { useMutation } from "@apollo/client";
import { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { CreateFundRaisers } from "../../apollo";
import { uploadFile } from "../../utils/upload";
import Fourm from "./Fourm";
import FourmPage1 from "./FourmPage1";
import FourmPage2 from "./FourmPage2";
import FourmPage3 from "./FourmPage3";
import FourmPage4 from "./FourmPage4";
import FourmPage5 from "./FourmPage5";
import FourmPage6 from "./FourmPage6";
import FourmPage7 from "./FourmPage7";

const CreateCampaign = () => {
  const [index, setIndex] = useState(0);
  const [data, setData] = useState({});
  const [isLoading, setLoading] = useState(false);
  const [createCampaign, { loading, error }] = useMutation(CreateFundRaisers);

  useEffect(() => {
    console.log({ data });
  }, [data]);

  const handleSubmitForm = async (payload) => {
    console.log({ payload });
    setLoading(true);
    try {
      const featuredImage = await uploadFile(payload.featuredImage);

      const info = {
        ...payload,
        featuredImage,
        goalAmount: Number(payload.goalAmount),
        supportingDocuments: { set: payload.supportingDocuments[0] },
        contract_address:payload.contract_address
      };

      console.log("3212s2sdsdsdsd", info);

      const resp = await createCampaign({
        variables: {
          ...info,
        },
      });
      setIndex(index + 1);
      toast.success("Campaign has been submitted for review");
      console.log("createeee", resp);
      setIndex(index + 1);

      setData(info)

    } catch (err) {
      console.log("wsdsdsdd", err);
      console.error("handleSubmitForm", err);
    }
    setLoading(false);
  };
  return (
    <>
      <Fourm
        hide={index != 0}
        onNext={(_data) => {
          setData({ ...data, ..._data });
          setIndex(index + 1);
        }}
        // onBack={() => {
        //   setIndex(index - 1);
        // }}
      />
      <FourmPage1
        hide={index != 1}
        onNext={(_data) => {
          setData({ ...data, ..._data });
          setIndex(index + 1);
        }}
        onBack={() => {
          setIndex(index - 1);
        }}
      />
      <FourmPage2
        hide={index != 2}
        onNext={(_data) => {
          setData({ ...data, ..._data });
          setIndex(index + 1);
        }}
        onBack={() => {
          setIndex(index - 1);
        }}
      />
      <FourmPage3
        hide={index != 3}
        onNext={(_data) => {
          setData({ ...data, ..._data });
          setIndex(index + 1);
        }}
        onBack={() => {
          setIndex(index - 1);
        }}
      />
      <FourmPage4
        hide={index != 4}
        onNext={(_data) => {
          setData({ ...data, ..._data });
          setIndex(index + 1);
        }}
        onBack={() => {
          setIndex(index - 1);
        }}
      />
      <FourmPage5
        hide={index != 5}
        onNext={(_data) => {
          setData({ ...data, ..._data });
          setIndex(index + 1);
        
        }}
        onBack={() => {
          setIndex(index - 1);
        }}
      />

      <FourmPage6
        hide={index != 6}
        data={data}
        onNext={(_data) => {
          setData({ ...data, ..._data });
          
          handleSubmitForm({ ...data, ..._data });

          console.log("ASaq s",_data)
        }}
        onBack={() => {
          setIndex(index - 1);
        }}
      />
      <FourmPage7
        hide={index != 7}
        onNext={(_data) => {
          setData({ ...data, ..._data });
        }}
        onBack={() => {
          setIndex(index - 1);
        }}
      />
    </>
  );
};

export default CreateCampaign;
