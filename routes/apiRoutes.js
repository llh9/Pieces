var db = require("../models");
const express = require("express");
const dotenv = require("dotenv");
dotenv.config();
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
const YOUR_DOMAIN = process.env.BASE_URL;
const endpointSecret = process.env.ENDPOINT_SECRET;

module.exports = function(app) {
  //IMAGES
  app.get("/api/images", function(req, res) {
    db.Image.find({}).then(function(dbImages) {
      res.json(dbImages);
    });
  });

  app.get("/api/images/:id", function(req, res) {
    db.Image.findById(req.params.id).then(function(dbImage) {
      res.json(dbImage);
    });
  });

  app.put("/api/images/:id", function(req, res) {
    db.Image.updateOne({ _id: req.params.id }, { rating: req.body.rating }).then(function(dbImage) {
      res.json(dbImage);
    });
  });

  //STRIPE
  app.post('/create-checkout-session', async (req, res) => {
    console.log(req.body);
    const session = await stripe.checkout.sessions.create({
      line_items: [
        {
          price_data: {
            currency: 'usd',
            product_data: {
              name: 'Painting',
            },
            unit_amount: 10000,
          },
          quantity: 1,
        },
      ],
      mode: 'payment',
      success_url: `${YOUR_DOMAIN}/success`,
      cancel_url: `${YOUR_DOMAIN}/cancel`,
    });
    res.redirect(303, session.url);
  });
  
  app.post('/webhook', express.raw({type: 'application/json'}), (request, res) => {
    const sig = request.headers['stripe-signature'];
    console.log('From WEBHOOK!!!!!!!!!!!!!!');
  
    let event;
  
    try {
      event = stripe.webhooks.constructEvent(request.body, sig, endpointSecret);
    } catch (err) {
      res.status(400).send(`Webhook Error: ${err.message}`);
      return;
    }
  
    // Handle the event
    switch (event.type) {
      case 'payment_intent.succeeded':
        const paymentIntent = event.data.object;
        console.log('From WEBHOOK!!!!!!!!!!!!!!payment_intent.succeeded');
        // Then define and call a function to handle the event payment_intent.succeeded
      break;
      // ... handle other event types
      default:
        console.log(`Unhandled event type ${event.type}`)
      ;
    }
  
    // Return a 200 res to acknowledge receipt of the event
    res.status(200).send();
  });
};