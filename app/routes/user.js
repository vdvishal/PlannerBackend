const express = require('express');
const router = express.Router();
const userController = require("./../../app/controllers/userController");
const appConfig = require("./../../config/appConfig")

module.exports.setRouter = (app) => {

    let baseUrl = `${appConfig.apiVersion}/users`;

/**
     * @apiGroup users
     * @apiVersion  1.0.0
     * @api {post} /api/v1/users/signuo api for user signup.
     *
     * @apiParam {string} email email of the user. (body params) (required)
     * @apiParam {string} password password of the user. (body params) (required)
     * @apiParam {string} firstName First name of the user. (body params) (required)
     * @apiParam {string} lastName last name of the user. (body params) (required)
     * @apiParam {string} number mobile number of the user. (body params) (required)
     * @apiParam {string} countryCode country code name of the user. (body params) (required)
     * 
     *
     * @apiSuccess {object} myResponse shows error status, message, http status code, result.
     * 
     * @apiSuccessExample {object} Success-Response:
         {
            "error": false,
            "message": "User created",
            "status": 200,
            "data": {
                null
            }

        }
    */
    app.post(`${baseUrl}/signup`, userController.signUpFunction);

    /**
     * @apiGroup users
     * @apiVersion  1.0.0
     * @api {post} /api/v1/users/login api for user login.
     *
     * @apiParam {string} email email of the user. (body params) (required)
     * @apiParam {string} password password of the user. (body params) (required)
     *
     * @apiSuccess {object} myResponse shows error status, message, http status code, result.
     * 
     * @apiSuccessExample {object} Success-Response:
         {
            "error": false,
            "message": "Login Successful",
            "status": 200,
            "data": {
                "authToken": "eyJhbGciOiJIUertyuiopojhgfdwertyuVCJ9.MCwiZXhwIjoxNTIwNDI29tIiwibGFzdE5hbWUiE4In19.hAR744xIY9K53JWm1rQ2mc",
                "userDetails": {
                "mobileNumber": 2234435524,
                "email": "someone@mail.com",
                "lastName": "Sengar",
                "firstName": "Rishabh",
                "userId": "-E9zxTYA8"
            }

        }
    */

    // params: email, password.
    app.post(`${baseUrl}/login`, userController.loginFunction);

     /**
     * @apiGroup users
     * @apiVersion  1.0.0
     * @api {post} /api/v1/users/resetpassword to create token for password reset.
     *
     * @apiParam {string} email email of the user. (body) (required)
     *
     * @apiSuccess {object} myResponse shows error status, message, http status code, result.
     * 
     * @apiSuccessExample {object} Success-Response:
        {
            "error": false,
            "message": "Enter token to change the password",
            "status": 200,
            "data": null
        }
    */

   app.post(`${baseUrl}/resetpassword`, userController.forgotPassword);

   /**
* @apiGroup users
* @apiVersion  1.0.0
* @api {post} /api/v1/users/resetpassword/:token to reset password.
*
* @apiParam {string} email email of the user. (body) (required)
* @apiParam {string} password newpassword of the user. (body) (required)
* @apiParam {string} token token emailed to the user. (body) (required)
*
* @apiSuccess {object} myResponse shows error status, message, http status code, result.
* 
* @apiSuccessExample {object} Success-Response:
{
   "error": false,
   "message": "password successfully changed",
   "status": 200,
   "data": null
}
*/
app.post(`${baseUrl}/resetpassword/:token`, userController.changePassword);

  /**
* @apiGroup users
* @apiVersion  1.0.0
* @api {get} /api/v1/users/get/allusers to get all users.
*
*
* @apiSuccess {object} myResponse shows error status, message, http status code, result.
* 
* @apiSuccessExample {object} Success-Response:
{
    "error": false,
    "message": "All Users",
    "status": 200,
    "data": [
        {
            "createdOn": "2018-08-15T15:02:10.000Z",
            "mobileNumber": 0,
            "email": "String",
            "lastName": "String",
            "firstName": " String",
            "userId": "String"
        },
        ...
*/
app.get(`${baseUrl}/get/allusers`,userController.allUsers)



   /**
* @apiGroup users
* @apiVersion  1.0.0
* @api {get} /api/v1/users/get/req/userId to get user friend requests.
*
* @apiParam {string} userId userId of the user. (params) (required)

* @apiSuccess {object} myResponse shows error status, message, http status code, result.
* 
* @apiSuccessExample {object} Success-Response:
{
    "error": false,
    "message": "Request Found",
    "status": 200,
    "data": [
        {
            "createdOn": "2018-08-15T15:02:10.000Z",
            "mobileNumber": 0,
            "email": "String",
            "lastName": "String",
            "firstName": " String",
            "userId": "String"
        },
        ...
*/



}
