const router = require("express").Router();
const pool = require("../db");
const authorization = require("../middleware/authorization");

// Get user info with jwt token passed in
router.get("/", authorization, async (req, res) => {
  try {
    const user = await pool.query(
      "SELECT email, phoneNumber, firstName, lastName, membershipTier, to_char(membershipPurchaseDate,'dd/mm/yyyy'), street, city, cstate, zip FROM member WHERE uid = $1",
      [req.user]
    );

    res.json(user.rows[0]);
  } catch (err) {
    console.error(err.message);
    res.status(500).json("Server error");
  }
});

// Get admin info with jwt passed in
router.get("/admin", authorization, async (req, res) => {
  try {
    const user = await pool.query(
      "SELECT email, phoneNumber, firstName, lastName, to_char(dateOfBirth,'dd/mm/yyyy'), street, city, cstate, zip FROM employee WHERE ssn = $1",
      [req.user]
    );

    res.json(user.rows[0]);
  } catch (err) {
    console.error(err.message);
    res.status(500).json("Server error");
  }
});

// Get employee type with jwt passed in
router.get("/admintype", authorization, async (req, res) => {
  try {
    const manager = await pool.query("SELECT * FROM manager WHERE m_ssn = $1", [
      req.user,
    ]);
    const trainer = await pool.query(
      "SELECT * FROM personaltrainer WHERE pt_ssn = $1",
      [req.user]
    );
    if (manager.rows.length > 0) {
      res.json("Manager");
    } else if (trainer.rows.length > 0) {
      res.json("Personal Trainer");
    } else {
      res.json("Employee");
    }
  } catch (err) {
    console.error(err.message);
    res.status(500).json("Server error");
  }
});

// Get Gym locations
router.get("/locations", async (req, res) => {
  try {
    const locations = await pool.query("SELECT * FROM gym");

    res.json(locations.rows);
  } catch (err) {
    console.error(err.message);
    res.status(500).json("Server error");
  }
});

// Get bookable bookings
router.get("/bookings", async (req, res) => {
  try {
    const bookings = await pool.query(
      "SELECT bid, gname, to_char(scheduledOn,'dd/mm/yyyy'), btype FROM workoutBookings, gym WHERE m_id IS NULL AND g_id = gym_id"
    );
    res.json(bookings.rows);
  } catch (err) {
    console.error(err.message);
    res.status(500).json("Server error");
  }
});

// Get machines
router.get("/machines", async (req, res) => {
  try {
    const machines = await pool.query(
      "SELECT serialNumber, gname, condition, mtype FROM machine, gym WHERE gid = gym_id"
    );
    res.json(machines.rows);
  } catch (err) {
    console.error(err.message);
    res.status(500).json("Server error");
  }
});

// Get all of user bookings with jwt passed in
router.get("/mybookings", authorization, async (req, res) => {
  try {
    const bookings = await pool.query(
      "SELECT bid, gname, to_char(scheduledOn,'dd/mm/yyyy'), btype FROM workoutBookings, gym WHERE m_id = $1 AND g_id = gym_id",
      [req.user]
    );

    res.json(bookings.rows);
  } catch (err) {
    console.error(err.message);
    res.status(500).json("Server error");
  }
});

// Book a group workout
router.post("/createbooking", authorization, async (req, res) => {
  try {
    const existingbooking = await pool.query(
      "SELECT g_id, scheduledOn, btype FROM workoutBookings WHERE bid = $1",
      [req.body.bk]
    );

    const bookings = await pool.query(
      "INSERT INTO workoutBookings (m_id, g_id, scheduledOn, btype) VALUES ( $1, $2, $3, $4)",
      [
        req.user,
        existingbooking.rows[0].g_id,
        existingbooking.rows[0].scheduledon,
        existingbooking.rows[0].btype,
      ]
    );

    res.json(true);
  } catch (err) {
    console.error(err.message);
    res.status(500).json("Server error");
  }
});

// Deletes booking from table
router.delete("/deletebooking", authorization, async (req, res) => {
  try {
    const bookings = await pool.query(
      "DELETE FROM workoutBookings WHERE bid = $1 AND m_id = $2",
      [req.body.bk, req.user]
    );

    res.json(true);
  } catch (err) {
    console.error(err.message);
    res.status(500).json("Server error");
  }
});

// Deletes bookable workout from table
router.delete("/deleteworkout", authorization, async (req, res) => {
  try {
    const bookings = await pool.query(
      "DELETE FROM workoutBookings WHERE bid = $1",
      [req.body.bk]
    );

    res.json(true);
  } catch (err) {
    console.error(err.message);
    res.status(500).json("Server error");
  }
});

// Deletes a machine with serial number
router.delete("/deletemachine", authorization, async (req, res) => {
  try {
    const bookings = await pool.query(
      "DELETE FROM machine WHERE serialNumber = $1",
      [req.body.machine]
    );

    res.json(true);
  } catch (err) {
    console.error(err.message);
    res.status(500).json("Server error");
  }
});

// create a group workout as admin
router.post("/createworkout", authorization, async (req, res) => {
  try {
    const bookings = await pool.query(
      "INSERT INTO workoutBookings ( g_id, scheduledOn, btype) VALUES ( $1, TO_DATE($2, 'DD/MM/YYYY'), $3)",
      [req.body.id, req.body.scheduledon, req.body.btype]
    );

    res.json(true);
  } catch (err) {
    console.error(err.message);
    res.status(500).json("Server error");
  }
});

// add a machine to database as admin
router.post("/createmachine", authorization, async (req, res) => {
  try {
    const machines = await pool.query(
      "INSERT INTO machine (serialNumber, mtype, condition, gid) VALUES ( $1, $2, $3, $4)",
      [req.body.serialnumber, req.body.mtype, req.body.condition, req.body.id]
    );

    res.json(true);
  } catch (err) {
    console.error(err.message);
    res.status(500).json("Server error");
  }
});

// Check into a gym
router.put("/checkin", authorization, async (req, res) => {
  try {
    const gymlocation = await pool.query(
      "UPDATE gym SET occupancy = occupancy + 1 WHERE gym_id = $1",
      [req.body.gid]
    );

    res.json(true);
  } catch (err) {
    console.error(err.message);
    res.status(500).json("Server error");
  }
});

// Check out of a gym
router.put("/checkout", authorization, async (req, res) => {
  try {
    const gymlocation = await pool.query(
      "UPDATE gym SET occupancy = occupancy - 1 WHERE gym_id = $1",
      [req.body.gid]
    );

    res.json(true);
  } catch (err) {
    console.error(err.message);
    res.status(500).json("Server error");
  }
});

module.exports = router;
