import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  gql,
} from "@apollo/client";
import config from "../config";
import { getApolloClient } from "./client";

export const SIGNUPQUERY = gql(`
mutation signup(
    $email: String,
    $password: String!,
    $name: String,
    $mobile_number: String,
    $country: String,
    $selfie: String,
    $date_of_birth:DateTime
){
  signup(
    data:{
      country:$country,
      email:$email,
      mobile_number:$mobile_number,
      date_of_birth:$date_of_birth
      name:$name,
      selfie:$selfie,
      password:$password
    }){
    accessToken
    refreshToken
    
  }
}`);

export const LoginQuery = gql(`
mutation login(
    $email: String!,
    $password: String!,
   
){
  login(
    data:{
      email:$email,
      password:$password,
    }){
    accessToken
    refreshToken
    
  }
}`);

export const CreateFundRaisers = gql(`
mutation CreateCampaign($benificiary:String!,$category:String!,
  $featuredImage:String!,$firstName:String!,$fundraiserName:String!,$fundraiserDescription:String!,
  $supportingDocuments:FundRaiserCreatesupportingDocumentsInput,
  $contract_address:String!,
    $goalAmount:Int!,
  $lastName:String!){
    createOneCampaign(
    data:{
   	
    	benificiary:$benificiary,
      category:$category,
      featuredImage:$featuredImage,
      firstName:$firstName,
      contract_address:$contract_address,
      fundraiserName:$fundraiserName,
      fundraiserDescription:$fundraiserDescription,
      goalAmount:$goalAmount,
      lastName:$lastName,
      supportingDocuments:$supportingDocuments

    }){
  
    id
  
  }
}`);

// # fundraisers(where:{fundraisers_status:{equals:APPROVED}}){

export const ChangePassword = gql(`
  mutation UpdatePassoword($newPassword:String,$id:String){
    updateUser(where:{id:$id},
      data:{password:{set:$newPassword}}){
      id
      
    }
  }
`)

  export const GetAllFundraisers = gql(`
query FundRaisers{
  fundraisers(where:{fundraisers_status:{equals:APPROVED}}){

benificiary
 category
 contract_address
 createdAt
 createdBy{
   name
   selfie
   
 }
 featuredImage
 firstName
 fundraiserDescription
 fundraiserName
 fundraisers_status
 goalAmount
 id
 lastName
 supportingDocuments
 updatedAt
 userId
   
 }
 }`);



export const GetUser = gql(`
query me{
 me{
id
country

date_of_birth
email

  fundraisers{
    goalAmount
    featuredImage
    fundraiserName
    fundraisers_status
    fundraiserDescription
    id
  }
isVerified
kyc_status
mobile_number
name
selfie


}
}
  `);

const client = getApolloClient();

export default client;
