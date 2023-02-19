"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.SIGNUPQUERY = exports.LoginQuery = exports.GetUser = exports.GetAllFundraisers = exports.CreateFundRaisers = exports.ChangePassword = void 0;
var _client = require("@apollo/client");
var _config = _interopRequireDefault(require("../config"));
var _client2 = require("./client");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var SIGNUPQUERY = (0, _client.gql)("\nmutation signup(\n    $email: String,\n    $password: String!,\n    $name: String,\n    $mobile_number: String,\n    $country: String,\n    $selfie: String,\n    $date_of_birth:DateTime\n){\n  signup(\n    data:{\n      country:$country,\n      email:$email,\n      mobile_number:$mobile_number,\n      date_of_birth:$date_of_birth\n      name:$name,\n      selfie:$selfie,\n      password:$password\n    }){\n    accessToken\n    refreshToken\n    \n  }\n}");
exports.SIGNUPQUERY = SIGNUPQUERY;
var LoginQuery = (0, _client.gql)("\nmutation login(\n    $email: String!,\n    $password: String!,\n   \n){\n  login(\n    data:{\n      email:$email,\n      password:$password,\n    }){\n    accessToken\n    refreshToken\n    \n  }\n}");
exports.LoginQuery = LoginQuery;
var CreateFundRaisers = (0, _client.gql)("\nmutation CreateCampaign($benificiary:String!,$category:String!,\n  $featuredImage:String!,$firstName:String!,$fundraiserName:String!,$fundraiserDescription:String!,\n  $supportingDocuments:FundRaiserCreatesupportingDocumentsInput,\n  $contract_address:String!,\n    $goalAmount:Int!,\n  $lastName:String!){\n    createOneCampaign(\n    data:{\n   \t\n    \tbenificiary:$benificiary,\n      category:$category,\n      featuredImage:$featuredImage,\n      firstName:$firstName,\n      contract_address:$contract_address,\n      fundraiserName:$fundraiserName,\n      fundraiserDescription:$fundraiserDescription,\n      goalAmount:$goalAmount,\n      lastName:$lastName,\n      supportingDocuments:$supportingDocuments\n\n    }){\n  \n    id\n  \n  }\n}");

// # fundraisers(where:{fundraisers_status:{equals:APPROVED}}){
exports.CreateFundRaisers = CreateFundRaisers;
var ChangePassword = (0, _client.gql)("\n  mutation UpdatePassoword($newPassword:String,$id:String){\n    updateUser(where:{id:$id},\n      data:{password:{set:$newPassword}}){\n      id\n      \n    }\n  }\n");
exports.ChangePassword = ChangePassword;
var GetAllFundraisers = (0, _client.gql)("\nquery FundRaisers{\n  fundraisers(where:{fundraisers_status:{equals:APPROVED}}){\n\nbenificiary\n category\n contract_address\n createdAt\n createdBy{\n   name\n   selfie\n   \n }\n featuredImage\n firstName\n fundraiserDescription\n fundraiserName\n fundraisers_status\n goalAmount\n id\n lastName\n supportingDocuments\n updatedAt\n userId\n   \n }\n }");
exports.GetAllFundraisers = GetAllFundraisers;
var GetUser = (0, _client.gql)("\nquery me{\n me{\nid\ncountry\n\ndate_of_birth\nemail\n\n  fundraisers{\n    goalAmount\n    featuredImage\n    fundraiserName\n    fundraisers_status\n    fundraiserDescription\n    id\n  }\nisVerified\nkyc_status\nmobile_number\nname\nselfie\n\n\n}\n}\n  ");
exports.GetUser = GetUser;
var client = (0, _client2.getApolloClient)();
var _default = client;
exports.default = _default;