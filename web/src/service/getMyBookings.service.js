import store from '../stores/store';
const getMyBookings = async (email_id) => {
    console.log(`email_id:${email_id}`)
    const storeToken = store.getState().login.token;
    const requestBody = {
        query: `
          query getMyBookings($email_id:String!)
          {
            getMyBookings(email_id:$email_id) {
              clinic_name,
              doctor_name,
              time_slot,
              status
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

export default getMyBookings;