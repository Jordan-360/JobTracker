import { useState } from 'react'
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
  const [notice, setNotice] = useState(null)

  const deleteJobApplication = (jobId) => {
    setJobApplications((current) => current.filter((job) => job.id !== jobId))
  }

  const updateJobApplication = (updatedJob) => {
    setJobApplications((current) =>
      current.map((job) => (job.id === updatedJob.id ? updatedJob : job))
    )
  }

  const handleImport = () => {
    const fileInput = document.createElement('input')
    fileInput.type = 'file'
    fileInput.accept = 'application/json,.json'
    fileInput.onchange = (event) => {
      const file = event.target.files[0]
      if (!file) return

      importData(
        file,
        (importedData) => {
          const confirmed =
            jobApplications.length === 0 ||
            window.confirm(
              `Replace your ${jobApplications.length} current application(s) with ${importedData.length} from "${file.name}"?`
            )
          if (!confirmed) return

          setJobApplications(importedData)
          setNotice({
            type: 'success',
            message: `Imported ${importedData.length} application(s).`,
          })
        },
        (message) => setNotice({ type: 'error', message })
      )
    }
    fileInput.click()
  }

  return (
    <main className="app">
      <header className="app-header">
        <div>
          <h1>Job Tracker</h1>
          <p>Track your job applications in one place</p>
        </div>
        <div className="app-actions">
          <button
            type="button"
            className="btn btn--secondary"
            onClick={() => exportData(jobApplications)}
            disabled={jobApplications.length === 0}
          >
            Export
          </button>
          <button
            type="button"
            className="btn btn--secondary"
            onClick={handleImport}
          >
            Import
          </button>
        </div>
      </header>

      {notice && (
        <div
          className={`notice notice--${notice.type}`}
          role={notice.type === 'error' ? 'alert' : 'status'}
        >
          <span>{notice.message}</span>
          <button
            type="button"
            className="notice__close"
            onClick={() => setNotice(null)}
            aria-label="Dismiss message"
          >
            ×
          </button>
        </div>
      )}

      <JobForm setJobApplications={setJobApplications} />
      <JobTable
        jobApplications={jobApplications}
        deleteJobApplication={deleteJobApplication}
        updateJobApplication={updateJobApplication}
      />
    </main>
  )
}

export default App
