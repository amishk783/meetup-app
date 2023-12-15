const express = require("express");
const router = express.Router();
const meetupController = require("../Controllers/meetup");
const upload = require("../middleware/multer")

router.post("/add-meetup",upload.single('image'),meetupController.postMeetup);
router.get("/get-meetup", meetupController.getAllMeetup);

module.exports = router;