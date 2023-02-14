import ApolloClient, { gql } from 'apollo-boost';

const client = new ApolloClient({
    uri: 'https://api.thegraph.com/subgraphs/name/shahzeb8285/donor-platfrom',
});






export const getFundraiserDetails = async (address) => {

    const resp = await client.query({
        query: gql`
   query Fundraiser ($address:ID){
  
  campaigns(where:{id:$address}){
  id
    totalPaid
    totalRaised
    disbursements{
    createdAt
    amount
    id
    
  }
    dontations(first:5){
      id
      createdAt
      amount
      donor
    }
}

}
    `,
        variables: {
            address
        }
    })



    return resp.data.campaigns[0]
}


