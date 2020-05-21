export const loginFetch = (email, password) => {
    const requestBody = {
        query: `
        mutation{
            login(email_id:"${email}",password:"${password}")
        }`
    }
    return dispatch => {
        return fetch('http://localhost:4000', {
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
            console.log(`Response:${JSON.stringify(resData.data.login)}`);
            localStorage.setItem("token", resData.data.login);
            console.log(`Localstorage:${localStorage.getItem("token")}`)
        }).catch(err => {
            console.log(err);
        });
    }
}



export default loginFetch;