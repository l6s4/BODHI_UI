import store from '../stores/store';
const createUser = (userInfo) => {
  const storeToken = store.getState().login.token;
  console.log(`storeToken:${JSON.stringify(storeToken)}`);
  console.log(`userInfo:${userInfo}`);
  const requestBody = {
    query: `
          mutation CreateUser($email_id:String!,$password:String!,$first_name:String!,$last_name:String!,$user_type:String!,$dob:String!,
            $address:String!,$contact_no:String!,$clinic_id:String!)
          {
            createUser(createUserInput:{email_id:$email_id,password:$password,first_name:$first_name,last_name:$last_name,
            user_type:$user_type,dob:$dob,address:$address,contact_no:$contact_no,clinic_id:$clinic_id}) {
              status
              email_id
              user_type
              message
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
  return fetch('http://localhost:4000/graphql', {
    method: 'POST',
    body: JSON.stringify(requestBody),
    headers: {
      'Content-Type': 'application/json',
      'Authorization': storeToken
    }
  }).then(res => {
    return res.json();
  }).then(resData => {
    if (resData.data.createUser.message)
      throw new Error(resData.data.createUser.message);
    return resData.data.createUser;
  }).catch(err => {
    console.log(err);
    throw err;
  });
}

export default createUser;