import JobRow from './JobRow'

function JobTable({
  jobApplications,
  deleteJobApplication,
  updateJobApplication,
}) {
  return (
    <div className="job-table-container">
      <div className="job-table-header">
        <h2>Applications</h2>
        <span className="job-count">{jobApplications.length} total</span>
      </div>
      {jobApplications.length === 0 ? (
        <div className="empty-state">
          <p>No applications yet. Add one above to get started.</p>
        </div>
      ) : (
        <table className="job-table">
          <thead>
            <tr>
              <th>Job Title</th>
              <th>Company</th>
              <th>Status</th>
              <th>Date Applied</th>
              <th>Posting</th>
              <th>Application</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {jobApplications.map((job) => (
              <JobRow
                key={job.id}
                job={job}
                deleteJobApplication={deleteJobApplication}
                updateJobApplication={updateJobApplication}
              />
            ))}
          </tbody>
        </table>
      )}
    </div>
  )
}

export default JobTable
