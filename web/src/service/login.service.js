const login = (email_id, password) => {
  const requestBody = {
    query: `
        mutation Login($email_id:String!,$password:String!) {
            login(loginInput:{email_id:$email_id,password:$password}) {
              token
              email_id
              first_name
              last_name
            }
        }`,
    variables: {
      email_id: email_id,
      password: password
    }
  };
  return fetch('http://localhost:4000/graphql', {
    method: 'POST',
    body: JSON.stringify(requestBody),
    headers: {
      'Content-Type': 'application/json'
    }
  }).then(res => {
    if (res.status !== 200 && res.status !== 201) {
      throw new Error('Failed!');
    }
    return res.json();
  }).then(resData => {
    //console.log(`Response:${JSON.stringify(resData.data.login.email_id)}`);
    localStorage.setItem("token", resData.data.login.token);
    return resData.data.login;
  }).catch(err => {
    console.log(err);
  });
}

module.exports = login;