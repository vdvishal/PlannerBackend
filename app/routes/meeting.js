const express = require('express');
const router = express.Router();
const meetingController = require("../controllers/meetingController");
const appConfig = require("./../../config/appConfig")

module.exports.setRouter = (app) => {

    let baseUrl = `${appConfig.apiVersion}/meeting`
    
    app.post(`${baseUrl}/create`, meetingController.createMeeting);

    app.post(`${baseUrl}/edit/:id`, meetingController.editMeeting);

    app.post(`${baseUrl}/delete`, meetingController.deleteMeeting);

    app.get(`${baseUrl}/allmeetings`, meetingController.getAllMeeting);

}