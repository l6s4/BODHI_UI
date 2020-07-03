const getSchedule = async (doctor_id) => {
    // console.log(`clinic name:${doctor_id}`)
    // const storeToken = store.getState().login.token;
    const requestBody = {
        query: `
          query getSchedule($doctor_id:String!)
          {
            getSchedule(doctor_id:$doctor_id) {
              time_slot
            }
        }`,
        variables: {
            doctor_id: doctor_id
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