const router = require("express").Router();
const { genSalt, hash, compare } = require("bcrypt");
const pool = require("../db");
const jwtGenerator = require("../utils/jwtGenerator");
const authorization = require("../middleware/authorization");

router.post("/register", async (req, res) => {
  try {
    const {
      firstName,
      lastName,
      email,
      password,
      phoneNumber,
      cardNumber,
      membershipTier,
      street,
      city,
      state,
      zip,
    } = req.body;

    const user = await pool.query("SELECT * FROM member WHERE email = $1", [
      email,
    ]);
    if (user.rows.length !== 0) {
      return res.status(401).send("User already exists.");
    }
    const currentDate = new Date();

    const saltRound = 10;
    const salt = await genSalt(saltRound);
    const bcryptPassword = await hash(password, salt);

    const newUser = await pool.query(
      "INSERT INTO member (firstName,lastName,email,passwordHash,phoneNumber,cardNumber,membershipTier,membershipPurchaseDate,street,city,cstate,zip) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12) RETURNING *",
      [
        firstName,
        lastName,
        email,
        bcryptPassword,
        phoneNumber,
        cardNumber,
        membershipTier,
        currentDate,
        street,
        city,
        state,
        zip,
      ]
    );

    const token = jwtGenerator(newUser.rows[0].uid);
    res.json({ token });
  } catch (err) {
    console.log(err.message);
    res.status(500).send("Server Error");
  }
});

router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await pool.query("SELECT * FROM member WHERE email = $1", [
      email,
    ]);

    if (user.rows.length === 0) {
      return res.status(401).send("Password or email is incorrect.");
    }

    const validPassword = await compare(password, user.rows[0].passwordhash);

    if (!validPassword) {
      return res.status(401).json("Password or email is incorrect.");
    }

    const token = jwtGenerator(user.rows[0].uid);
    res.json({ token });
  } catch (err) {
    console.log(err.message);
    res.status(500).send("Server Error");
  }
});

router.post("/adminlogin", async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await pool.query("SELECT * FROM employee WHERE email = $1", [
      email,
    ]);

    if (user.rows.length === 0) {
      return res.status(401).send("Password or email is incorrect.");
    }

    const validPassword = await compare(password, user.rows[0].passwordhash);

    if (!validPassword) {
      return res.status(401).json("Password or email is incorrect.");
    }

    const token = jwtGenerator(user.rows[0].ssn);
    res.json({ token });
  } catch (err) {
    console.log(err.message);
    res.status(500).send("Server Error");
  }
});

router.post("/adminregister", async (req, res) => {
  try {
    const {
      ssn,
      email,
      password,
      phoneNumber,
      firstName,
      lastName,
      payrollInformation,
      hourlyRate,
      earningsToDate,
      street,
      city,
      state,
      zip,
    } = req.body;

    const birthDate = new Date("1998-04-13");

    const saltRound = 10;
    const salt = await genSalt(saltRound);
    const bcryptPassword = await hash(password, salt);

    const newUser = await pool.query(
      "INSERT INTO employee (ssn, email, passwordHash, phoneNumber, firstName, lastName, payrollInformation, hourlyRate, earningsToDate, dateOfBirth, street,city,cstate,zip) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14) RETURNING *",
      [
        ssn,
        email,
        bcryptPassword,
        phoneNumber,
        firstName,
        lastName,
        payrollInformation,
        hourlyRate,
        earningsToDate,
        birthDate,
        street,
        city,
        state,
        zip,
      ]
    );

    const token = jwtGenerator(newUser.rows[0].ssn);
    res.json({ token });
  } catch (err) {
    console.log(err.message);
    res.status(500).send("Server Error");
  }
});

router.get("/is-verify", authorization, async (req, res) => {
  try {
    res.json(true);
  } catch (err) {
    console.log(err.message);
    res.status(500).send("Server Error");
  }
});

router.get("/user-type", authorization, async (req, res) => {
  try {
    const employee = await pool.query("SELECT * FROM employee WHERE ssn = $1", [
      req.user,
    ]);
    if (employee.rowCount > 0) {
      res.json("employee");
    } else {
      res.json("member");
    }
  } catch (err) {
    console.log(err.message);
    res.status(500).send("Server Error");
  }
});

module.exports = router;
