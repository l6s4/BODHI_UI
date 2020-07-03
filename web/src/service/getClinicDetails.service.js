const getClinicDetails = async (clinic_id) => {
    console.log(`clinic id:${clinic_id}`)
    const requestBody = {
        query: `
          query getClinicById($clinic_id:String!)
          {
            getClinicById(clinic_id:$clinic_id) {
                _id,
                name,
                email_id,
                street,
                city,
                postcode ,
                contact_no,
                about,
                doctors{
                    _id,
                    first_name,
                    last_name,
                    joining_date,
                    address,
                    contact_no,
                    about,
                    schedule
                }
            }
        }`,
        variables: {
            clinic_id: clinic_id
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

export default getClinicDetails;