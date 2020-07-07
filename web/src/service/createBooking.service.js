import store from '../stores/store';
const createBooking = async (bookingInfo) => {
    // console.log(`booking info:${JSON.stringify(bookingInfo)}`);
    const storeToken = store.getState().login.token;
    const requestBody = {
        query: `
          mutation CreateBooking($patient_email_id:String!,$clinic_id:String!,$doctor_id:String!,$time_slot:String!,$status:String!)
          {
            createBooking(createBookingInput:{patient_email_id:$patient_email_id,clinic_id:$clinic_id,doctor_id:$doctor_id,time_slot:$time_slot,status:$status}) {
              bookedStatus
            }
        }`,
        variables: {
            patient_email_id: bookingInfo.patient_email_id,
            clinic_id: bookingInfo.clinic_id,
            doctor_id: bookingInfo.doctor_id,
            time_slot: bookingInfo.time_slot,
            status: bookingInfo.status
        }
    };
    console.log(`body:${JSON.stringify(requestBody)}`);
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
    console.log(`response:${resData}`);
    return resData;
}

export default createBooking;