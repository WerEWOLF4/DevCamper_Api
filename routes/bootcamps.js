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

// Include other resource routers
const courseRouter = require("./courses");
const reviewRouter = require("./reviews");


const router = express.Router();

const advancedResults = require("../middleware/advancedResults");
const { protect, authorize } = require("../middleware/auth");

// Re-route into other resource routers
router.use(":/bootcampId/courses", courseRouter);
router.use(":/bootcampId/reviews", reviewRouter);


router.route('/radius/:zipcode/:distance').get(getBootcampsInRadius);

router.route("/:id/photo").put(protect, authorize("publisher", "admin") , bootcampPhotoUpload);

 router
 .route("/")
 .get(advancedResults(Bootcamp, "courses"), getBootCamps)
 .post(protect, authorize("publisher", "admin") ,createBootCamp)

 router
 .route("/:id")
 .get(getBootCamp)
 .put(protect, authorize("publisher", "admin"), updateBootCamp)
 .delete(protect, authorize("publisher", "admin"), deleteBootcamp);

module.exports = router;