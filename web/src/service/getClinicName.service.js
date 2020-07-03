const getClinicName = async (clinic_name) => {
  // console.log(`clinic name:${clinic_name}`)
  // const storeToken = store.getState().login.token;
  const requestBody = {
    query: `
          query getClinicByName($clinic_name:String!)
          {
            getClinicByName(clinic_name:$clinic_name) {
              key
              id
            }
        }`,
    variables: {
      clinic_name: clinic_name
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

export default getClinicName;