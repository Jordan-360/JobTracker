import JobForm from './components/JobForm'
import JobTable from './components/JobTable'
import useLocalStorage from './hooks/useLocalStorage'
import exportData, { importData } from './utils/exportImport'

function App() {
  const [jobApplications, setJobApplications] = useLocalStorage(
    'jobApplications',
    []
  )

  const deleteJobApplication = (jobId) => {
    setJobApplications(jobApplications.filter((job) => job.id !== jobId))
  }

  return (
    <div>
      <button onClick={() => exportData(jobApplications)}>
        Export Job Application List Data
      </button>
      <button
        onClick={() => {
          const fileInput = document.createElement('input')
          fileInput.type = 'file'
          fileInput.accept = 'application/json'
          fileInput.onchange = (event) => {
            importData(event.target.files[0], (importedData) => {
              setJobApplications(importedData)
            })
          }
          fileInput.click()
        }}
      >
        Import Job Application List Data
      </button>
      <JobForm setJobApplications={setJobApplications} />
      <JobTable
        jobApplications={jobApplications}
        deleteJobApplication={deleteJobApplication}
      />
    </div>
  )
}
export default App
