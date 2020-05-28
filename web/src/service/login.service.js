const login = async (email_id, password) => {
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
    const response = await fetch('http://localhost:4000/graphql', {
        method: 'POST',
        body: JSON.stringify(requestBody),
        headers: {
            'Content-Type': 'application/json'
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
module.exports = login;