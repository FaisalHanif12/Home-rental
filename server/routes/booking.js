const router = require("express").Router();
const Booking = require("../models/Booking");

/* CREATE BOOKING */
router.post("/create", async (req, res) => {
  try {
    // Extracting data from request body
    const { customerId, hostId, listingId, startDate, endDate, totalPrice } = req.body;

    // Creating a new booking instance
    const newBooking = new Booking({ customerId, hostId, listingId, startDate, endDate, totalPrice });
    
    // Save the booking to the database
    await newBooking.save();

    // Logging the new booking creation
    console.log("New booking created:", newBooking);

    res.status(200).json(newBooking);
  } catch (err) {
    console.log(err);
    res.status(400).json({ message: "Fail to create a new Booking!", error: err.message });
  }
});

module.exports = router;
