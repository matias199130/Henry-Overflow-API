require('dotenv').config();
const { Router } = require('express');
const { payment, createOrder, captureOrder, cancelOrder } = require('../controllers/payment');
const router = Router();


router.post('/create-order', createOrder );
router.get('/capture-order', captureOrder);
router.get('/cancel-order', cancelOrder);

module.exports = router