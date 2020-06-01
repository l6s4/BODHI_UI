import store from '../stores/store';
const userProfile = async (email_id) => {
  const storeToken = store.getState().login.token;
  //console.log(`email_id:${email_id}>>>>${storeToken}`);
  const requestBody = {
    query: `
          query getUserByEmail($email_id:String!)
          {
            getUserByEmail(email_id:$email_id) {
              email_id
              first_name
              last_name
              password
              dob
              address
              contact_no
            }
        }`,
    variables: {
      email_id: email_id
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

export default userProfile;