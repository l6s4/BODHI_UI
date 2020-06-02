import store from '../stores/store';
const createUser = async (userInfo) => {
  const storeToken = store.getState().login.token;
  const requestBody = {
    query: `
          mutation CreateUser($email_id:String!,$password:String!,$first_name:String!,$last_name:String!,$user_type:String!,$dob:String!,
            $address:String!,$contact_no:String!,$clinic_id:String)
          {
            createUser(createUserInput:{email_id:$email_id,password:$password,first_name:$first_name,last_name:$last_name,
            user_type:$user_type,dob:$dob,address:$address,contact_no:$contact_no,clinic_id:$clinic_id}) {
              email_id
              user_type
            }
        }`,
    variables: {
      email_id: userInfo.email_id,
      password: userInfo.password,
      first_name: userInfo.first_name,
      last_name: userInfo.last_name,
      user_type: userInfo.user_type,
      dob: userInfo.dob,
      address: userInfo.address,
      contact_no: userInfo.contact_no,
      clinic_id: userInfo.clinic_id
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

export default createUser;