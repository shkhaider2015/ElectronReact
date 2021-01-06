

export const getDate = () => {
    var date = new Date();
    console.log("getDate : ", date.getDate())
    console.log("getMonth : ", date.getMonth())
    console.log("getYear : ", date.getFullYear())
    var dd = `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`

    return dd

}

export const getDateFromMillis = (milis) => {
    var date = new Date(milis)
    var dd = `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`

    return dd;

}

export const getReferenceNumber = (cnic) => 
{
    var data = cnic.replace(/-/g, "");
    data = data.slice(0, 7);
    return data
}

