require('dotenv').config()

const mockData = require('./MOCK_DATA.json')
const Job = require('./models/job')
const connectDB = require('./db/connect')

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI)
    await Job.deleteMany()
    await Job.create(mockData)
    console.log('success!!')
    process.exit(0)
  } catch (error) {
    console.log(error)
    process.exit(1)
  }
}
start()
