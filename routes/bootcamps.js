const express = require("express");
const { getBootCamps,
        getBootCamp,
        createBootCamp,
        updateBootCamp,
        deleteBootcamp,
        getBootcampsInRadius,
        bootcampPhotoUpload
} = require("../controllers/bootcamps");

const Bootcamp = require("../models/Bootcamps");
const advancedResults = require("../middleware/advancedResults");

// Include other resource routers
const courseRouter = require("./courses");

const router = express.Router();

const { protect } = require("../middleware/auth");

// Re-route into other resource routers
router.use(":/bootcampId/courses", courseRouter);

router.route('/radius/:zipcode/:distance').get(getBootcampsInRadius);

router.route("/:id/photo").put(protect, bootcampPhotoUpload);

 router
 .route("/")
 .get(advancedResults(Bootcamp, "courses"), getBootCamps)
 .post(protect, createBootCamp)

 router
 .route("/:id")
 .get(getBootCamp)
 .put(updateBootCamp)
 .delete(protect, deleteBootcamp);

module.exports = router;