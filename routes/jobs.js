const express = require('express')
const router = express.Router()
const testUser = require('../middleware/testUser')

const {
  getAllJobs,
  getJob,
  createJob,
  updateJob,
  deleteJob,
  showStats,
} = require('../controllers/jobs')
router.route('/stats').get(showStats)

router.route('/').get(getAllJobs).post(createJob)
router
  .route('/:id')
  .get(getJob)
  .patch(testUser, updateJob)
  .delete(testUser, deleteJob)

module.exports = router
