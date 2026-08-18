import JobRow from './JobRow'

function JobTable({ jobApplications, deleteJobApplication }) {
  return (
    <table>
      <thead>
        <tr>
          <th>Job Title</th>
          <th>Company</th>
          <th>Status</th>
          <th>Date Applied</th>
          <th>Posting Link</th>
          <th>Application Link</th>
        </tr>
      </thead>
      <tbody>
        {jobApplications.map((job) => (
          <JobRow
            key={job.id}
            job={job}
            deleteJobApplication={deleteJobApplication}
          />
        ))}
      </tbody>
    </table>
  )
}
export default JobTable
