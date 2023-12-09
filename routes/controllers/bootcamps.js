// @desc    Get all bootcamps
// @route   GET /api/v1/bootcamps
// @access  Public
exports.getBootCamps = (req, res, next) => {
    res.status(200).json({ success: true, msg: "Show all bootcamps"});
};

// @desc    Get a bootcamp
// @route   GET /api/v1/bootcamps/:id
// @access  Public
exports.getBootCamp = (req, res, next) => {
    res.status(200).json({ success: true, msg: `Show a bootcamp ${req.params.id}`});
};

// @desc    Create new bootcamp
// @route   POST /api/v1/bootcamps
// @access  Private
exports.createBootCamp = (req, res, next) => {
    res.status(200).json({ success: true, msg: "Create New Bootcamp"});
};

// @desc    Update bootcamp
// @route   PUT /api/v1/bootcamps/:id
// @access  Private
exports.updateBootCamp = (req, res, next) => {
    res.status(200).json({ success: true, msg: `Update bootcamp ${req.params.id}`});
};

// @desc    Delete bootcamp
// @route   DELETE /api/v1/bootcamps/:id
// @access  Private
exports.deletetBootCamp = (req, res, next) => {
    res.status(200).json({ success: true, msg: `Delete bootcamp ${req.params.id}`});
};
