// Attendance Routes
const express = require('express');
const router = express.Router();
const attendanceController = require('../controllers/attendance.controller');

router.post('/', attendanceController.recordAttendance);
router.get('/event/:eventId', attendanceController.getAttendance);
router.get('/stats/:eventId', attendanceController.getAttendanceStats);

module.exports = router;
