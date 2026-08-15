import { useState } from 'react'
import JobForm from './components/JobForm'
import JobTable from './components/JobTable'

function App() {
  const [jobApplications, setJobApplications] = useState([])

  return (
    <div>
      <JobForm setJobApplications={setJobApplications} />
      <JobTable jobApplications={jobApplications} />
    </div>
  )
}
export default App
