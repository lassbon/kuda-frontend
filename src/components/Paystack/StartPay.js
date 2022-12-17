// import { usePaystackPayment } from 'react-paystack'

// const StartPay = ({email, amount}) => {

//     console.log("here")
//     const config = {

//         email: email,
//         amount: amount,
//         publicKey: 'pk_test_4f8aeda3476ce6a694520d945d75ba6da6445de1',
//     };
    
//     // you can call this function anything
//     const onSuccess = (reference) => {
//       // Implementation for whatever you want to do with reference and after success call.
//       console.log(reference);
//     };
    
//     // you can call this function anything
//     const onClose = () => {
//       // implementation for  whatever you want to do when the Paystack dialog closed.
//       console.log('closed')
//     }

//     const initializePayment = usePaystackPayment(config);
//     return  initializePayment(onSuccess, onClose)
            
// };


// export default StartPay