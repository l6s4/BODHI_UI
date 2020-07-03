const getSchedule = async (clinic_id, given_date) => {
    console.log(`given date:${given_date}`)
    // const storeToken = store.getState().login.token;
    const requestBody = {
        query: `
          query getSchedule($clinic_id:String!,$given_date:String!)
          {
            getSchedule(clinic_id:$clinic_id,given_date:$given_date) {
              time_slot,
              doctor_id
            }
        }`,
        variables: {
            clinic_id: clinic_id,
            given_date: given_date
        }
    };
    const response = await fetch('http://localhost:4000/graphql', {
        method: 'POST',
        body: JSON.stringify(requestBody),
        headers: {
            'Content-Type': 'application/json',
            'Authorization': ''
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

export default getSchedule;