const express = require("express");
const database = require("../Database/dbConnect");
const jwt = require("jsonwebtoken");

const visastatus = express.Router();

visastatus.post("/alerts", (req, res) => {
  const country = req.body.country;
  const city = req.body.city;
  const visa_type = req.body.visa_type;
  const status = req.body.status;
  try {
    const checkVisa = `SELECT * FROM visa_alerts WHERE country='${country}' AND visa_type='${visa_type}' AND delete_at='0'`;
    database.query(checkVisa, (error, results) => {
      if (error) {
        res.json({
          success: false,
          message: "DB Error",
          error,
        });
      } else {
        if (results.length === 0) {
          //add
          const addDetails = `INSERT INTO visa_alerts (country, city, visa_type, status) VALUES ('${country}','${city}', '${visa_type}','${status}')`;
          database.query(addDetails, (error, results) => {
            if (error) {
              res.json({
                success: false,
                message: "DB Error",
                error,
              });
            } else {
              //visa data insert
              res.json({
                success: true,
                message: "Data Added Successfully",
              });
            }
          });
        } else {
          //already data is there
          res.json({
            success: false,
            message: "Data Already existed",
          });
        }
      }
    });
  } catch (error) {
    res.json({
      success: false,
      message: "Server Error",
      error,
    });
  }
});

visastatus.get("/alerts", (req, res) => {
  try {
    const getVisaData = `SELECT * FROM visa_alerts WHERE delete_at='0'`;
    database.query(getVisaData, (error, results) => {
      if (error) {
        res.json({
          success: false,
          message: "DB Error",
          error,
        });
      } else {
        res.json({
          success: true,
          results,
        });
      }
    });
  } catch (error) {
    res.json({
      success: false,
      message: "Server Error",
      error,
    });
  }
});

visastatus.get("/alerts/:id", (req, res) => {
  const id = req.params.id;
  try {
    const getVechileData = `SELECT * FROM visa_alerts WHERE id='${id}' AND delete_at='0'`;
    database.query(getVechileData, (error, results) => {
      if (error) {
        res.json({
          success: false,
          message: "DB Error",
          error,
        });
      } else {
        res.json({
          success: true,
          results,
        });
      }
    });
  } catch (error) {
    res.json({
      success: false,
      message: "Server Error",
      error,
    });
  }
});

visastatus.put("/alerts/:id", (req, res) => {
  const country = req.body.country;
  const city = req.body.city;
  const visa_type = req.body.visa_type;
  const status = req.body.status;
  const id = req.params.id;
  try {
    const updatevisadata = `UPDATE visa_alerts SET 
    country='${country}',
    city='${city}',
    visa_type='${visa_type}',
    status='${status}'
    WHERE id = ${id}`;

    database.query(updatevisadata, (error, results) => {
      if (error) {
        res.json({
          success: false,
          message: "DB Error",
          error,
        });
      } else {
        res.json({
          success: true,
          message: "data updated successfully",
          results,
        });
      }
    });
  } catch (error) {
    res.json({
      success: false,
      message: "Server Error",
      error,
    });
  }
});

visastatus.delete("/deleteVisa/:id", (req, res) => {
  const id = req.params.id;
  try {
    const deleteVisa = `UPDATE visa_alerts SET delete_at='1' WHERE id ='${id}'`;
    database.query(deleteVisa, (error, results) => {
      if (error) {
        res.json({
          success: false,
          message: "DB Error",
          error,
        });
      } else {
        res.json({
          success: true,
          message: "data deleted successfully",
          results,
        });
      }
    });
  } catch (error) {
    res.json({
      success: false,
      message: "Server Error",
      error,
    });
  }
});

module.exports = visastatus;
