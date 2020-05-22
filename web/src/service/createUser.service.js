import store from '../stores/store';
const createUser = (userInfo) => {
  const storeToken = store.getState().login.token;
  console.log(`storeToken:${JSON.stringify(storeToken)}`);
  const requestBody = {
    query: `
          mutation{
            createUser(email_id:"patient@gmail.com",password:"p123",first_name:"Patient",last_name:"P",
            user_type:"P",dob:"1980-04-05",address:"Address 1",contact_no:"1111111111")
        }`

      //   query: `
      //   mutation{
      //     createUser(email_id:${userInfo.email_id},password:"p123",first_name:"Patient",last_name:"P",
      //     user_type:"P",dob:"1980-04-05",address:"Address 1",contact_no:"1111111111")
      // }`
  }
  return fetch('http://localhost:4000', {
    method: 'POST',
    body: JSON.stringify(requestBody),
    headers: {
      'Content-Type': 'application/json',
      'Authorization': storeToken
    }
  }).then(res => {
    console.log(`Response from UserService:${JSON.stringify(res)}`);

    if (res.status !== 200 && res.status !== 201) {
      throw new Error('Failed!');
    }
    return res.json();
  }).then(resData => {
    console.log(`Response:${JSON.stringify(resData.message)}`);
    return resData;
  }).catch(err => {
    console.log(err);
  });
}

export default createUser;