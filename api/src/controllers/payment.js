 
const axios = require('axios');
 require('dotenv').config();
 const {PAYPAL_API, CLIENT, SECRET} = process.env;

 const createOrder = async(req, res, next) => {
   try {
    const order = {
        intent: "CAPTURE",
        purchase_units: [
            {
                amount: {
                    currency_code: "USD",
                    value: '5'
                },
                description: "Donación"
            }
        ],
        application_context: {
            brand_name: "HenryOverflow",
            landing_page: "LOGIN",
            user_action: "PAY_NOW",
            return_url: "http://localhost:3001/payment/capture-order",
            cancel_url: "http://localhost:3001/payment/cancel-order"
        }
    }

   const params = new URLSearchParams()
   params.append("grant_type", "client_credentials")

   const {data: {access_token}} = await axios.post(`${PAYPAL_API}/v1/oauth2/token`, params, {
       headers: {
         'Content-Type': 'application/x-www-form-urlencoded'
       },
       auth:{//Para enviar una autenticacion basica
            username: CLIENT,
             password: SECRET
         }
   })
   //console.log(access_token);
    const response =await axios.post(`${PAYPAL_API}/v2/checkout/orders`, order, {
        // auth:{//Para enviar una autenticacion basica
        //     username: CLIENT,
        //     password: SECRET
        // }
        headers:{
            Authorization: `Bearer ${access_token}`
        }
    })
    console.log(response.data)
     res.send(response.data)
   } catch (error) {
       next(error)
   }
   
 }

 const captureOrder = async(req, res) => {

    const {token, PayerID} = req.query;

    const response = await axios.post(`${PAYPAL_API}/v2/checkout/orders/${token}/capture`, {}, {
        auth: {
            username: CLIENT,
             password: SECRET
        }
    })  
    console.log(response.data) 
     res.send("Capturing order")
 }

 const cancelOrder = (req, res) => {
     res.send('Canceling order')
 }

module.exports = {
    createOrder, 
    captureOrder,
    cancelOrder
}