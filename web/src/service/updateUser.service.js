import store from '../stores/store';
const updateUser = async (userInfo) => {
  const storeToken = store.getState().login.token;
  const requestBody = {
    query: `
          mutation UpdateUser($email_id:String!,$password:String!,$first_name:String!,$last_name:String!,$dob:String!,
            $address:String!,$contact_no:String!)
          {
            updateUser(updateUserInput:{email_id:$email_id,password:$password,first_name:$first_name,last_name:$last_name,
            dob:$dob,address:$address,contact_no:$contact_no}){
              updated
            }
        }`,
    variables: {
      email_id: userInfo.email_id,
      password: userInfo.password,
      first_name: userInfo.first_name,
      last_name: userInfo.last_name,
      dob: userInfo.dob,
      address: userInfo.address,
      contact_no: userInfo.contact_no
    }
  };
  const response = await fetch('http://localhost:4000/graphql', {
    method: 'POST',
    body: JSON.stringify(requestBody),
    headers: {
      'Content-Type': 'application/json',
      'Authorization': storeToken
    }
  }).then(throwOnFailure)
  return response.json();
}
async function throwOnFailure(resData) {
  if (resData.status !== 200 && resData.status !== 201) {
    const error = await resData.json();
    throw new Error(error.errors[ 0 ].message);
  }
  return resData;
}

export default updateUser;