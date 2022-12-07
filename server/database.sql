CREATE DATABASE gym-manager;

CREATE TABLE member(
    uid uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
    email VARCHAR(30) NOT NULL,
    phoneNumber VARCHAR(12) NOT NULL,
    firstName VARCHAR(20) NOT NULL,
    lastName VARCHAR(20) NOT NULL,
    cardNumber VARCHAR(16) NOT NULL,
    passwordHash VARCHAR(255) NOT NULL,
    membershipTier VARCHAR(10) NOT NULL,
    membershipPurchaseDate DATE NOT NULL,
    street VARCHAR(30) NOT NULL,
    city VARCHAR(15) NOT NULL,
    cstate VARCHAR(15) NOT NULL,
    zip VARCHAR(6) NOT NULL
);



CREATE TABLE gym(
    gym_id SERIAL PRIMARY KEY,
    gname VARCHAR(255) NOT NULL,
    gaddress VARCHAR(255) NOT NULL,
    occupancy integer NOT NULL
);

CREATE TABLE machine(
    serialNumber CHAR(9) PRIMARY KEY,
    mtype VARCHAR(255) NOT NULL,
    condition VARCHAR(255) NOT NULL,
    gid integer NOT NULL,
    FOREIGN KEY (gid) REFERENCES gym(gym_id)
);

CREATE TABLE employee(
    ssn CHAR(9) PRIMARY KEY,
    email VARCHAR(30) NOT NULL,
    passwordHash VARCHAR(255) NOT NULL,
    phoneNumber VARCHAR(12) NOT NULL,
    firstName VARCHAR(20) NOT NULL,
    lastName VARCHAR(20) NOT NULL,
    payrollInformation VARCHAR(30) NOT NULL,
    hourlyRate DECIMAL(3,2) NOT NULL,
    earningsToDate DECIMAL(10,2) NOT NULL,
    dateOfBirth DATE NOT NULL,
    street VARCHAR(30) NOT NULL,
    city VARCHAR(15) NOT NULL,
    cstate VARCHAR(15) NOT NULL,
    zip VARCHAR(6) NOT NULL   
);

CREATE TABLE workoutBookings (
    bid SERIAL PRIMARY KEY,
    m_id uuid,
    g_id integer NOT NULL,
    scheduledOn DATE NOT NULL,
    btype VARCHAR(255) NOT NULL,
    FOREIGN KEY (m_id) REFERENCES member(uid),
    FOREIGN KEY (g_id) REFERENCES gym(gym_id) );

CREATE TABLE manager
(m_ssn CHAR(9) NOT NULL,
PRIMARY KEY (m_ssn),
FOREIGN KEY (m_ssn) REFERENCES employee(ssn) );

CREATE TABLE personaltrainer
(pt_ssn CHAR(9) NOT NULL,
expertise VARCHAR(255) NOT NULL,
PRIMARY KEY (pt_ssn),
FOREIGN KEY (pt_ssn) REFERENCES employee(ssn) );