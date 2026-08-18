import JobForm from './components/JobForm'
import JobTable from './components/JobTable'
import useLocalStorage from './hooks/useLocalStorage'

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
      <JobForm setJobApplications={setJobApplications} />
      <JobTable
        jobApplications={jobApplications}
        deleteJobApplication={deleteJobApplication}
      />
    </div>
  )
}
export default App
