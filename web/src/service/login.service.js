const login = (email_id, password) => {
  const requestBody = {
    query: `
        mutation Login($email_id:String!,$password:String!) {
            login(loginInput:{email_id:$email_id,password:$password}) {
              token
              email_id
              first_name
              last_name
              status
              message
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
    return res.json();
  }).then(resData => {
    if (resData.data.login.status === 500)
      throw new Error(resData.data.login.message);
    return resData.data.login;
  }).catch(err => {
    console.log(err);
    throw err;
  });
}

module.exports = login;