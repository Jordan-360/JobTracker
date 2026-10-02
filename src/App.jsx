import JobForm from './components/JobForm'
import JobTable from './components/JobTable'
import useLocalStorage from './hooks/useLocalStorage'
import exportData, { importData } from './utils/exportImport'
import './App.css'

function App() {
  const [jobApplications, setJobApplications] = useLocalStorage(
    'jobApplications',
    []
  )

  const deleteJobApplication = (jobId) => {
    setJobApplications(jobApplications.filter((job) => job.id !== jobId))
  }

  const updateJobApplication = (updatedJob) => {
    setJobApplications(
      jobApplications.map((job) =>
        job.id === updatedJob.id ? updatedJob : job
      )
    )
  }

  const handleImport = () => {
    const fileInput = document.createElement('input')
    fileInput.type = 'file'
    fileInput.accept = 'application/json'
    fileInput.onchange = (event) => {
      importData(event.target.files[0], (importedData) => {
        setJobApplications(importedData)
      })
    }
    fileInput.click()
  }

  return (
    <div className="app">
      <div className="app-header">
        <h1>Job Tracker</h1>
        <p>Track your job applications in one place</p>
      </div>
      <div className="app-actions">
        <button
          className="btn btn--secondary"
          onClick={() => exportData(jobApplications)}
        >
          Export
        </button>
        <button className="btn btn--secondary" onClick={handleImport}>
          Import
        </button>
      </div>
      <JobForm setJobApplications={setJobApplications} />
      <JobTable
        jobApplications={jobApplications}
        deleteJobApplication={deleteJobApplication}
        updateJobApplication={updateJobApplication}
      />
    </div>
  )
}

export default App
