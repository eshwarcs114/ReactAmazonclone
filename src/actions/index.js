export 
const orderAdd = (payload) => {
    console.log(payload,'this is order add')
    return{
        type : "ADD",
        basketProduct : payload
    }
};

export const removeOrder = (payload) => {
    console.log(payload)
    return{
        type : "REMOVE",
        basketProduct : payload
        
    }
};

export const addUser = (payload) => {
    return{
        type : "ADDUSER",
        User : payload,
    }
};




// export const orderMinus = () => {
//     return{
//         type : "MINUS"
//     }
//     };

