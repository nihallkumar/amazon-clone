const functions = require("firebase-functions");
const express = require("express")
// const cors = require('cors');
const stripe = require("stripe")('sk_test_51Kcum0SCjUB7mLThnO9x2U4HFEIkDn20dQBHg13w7sbsbRk6eTlOc7M4GP0H5R5f9PZMo7TpRZ5rHQh4G33aRLTl00u320De4g')

// API

// -App Config
const app = express();

// -Middlewares
const cors = require('cors');
const corsOptions = {
    origin: 'http://localhost:3000',
    credentials: true,            //access-control-allow-credentials:true
    optionSuccessStatus: 200
}
app.use(cors(corsOptions));
// app.use(cors({origin: true}));

// -API Routes
app.get('/', (request, response) => response.status(200).send("Hello World"));

app.post("/payments/create", async (request, response) => {
    const total = request.query.total;
    console.log("payment request recieved for this amount >>>> ", total);

    const paymentIntent = await stripe.paymentIntents.create({
        amount: total,
        currency: "INR",
    });

    response.status(201).send({
        clientSecret: paymentIntent.client_secret,
    });
});

// -Listen Command
exports.api = functions.https.onRequest(app);

// example endpoint
// http://localhost:5001/clone-cb63d/us-central1/api