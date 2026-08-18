function JobRow({ job, deleteJobApplication }) {
  return (
    <tr>
      <td>{job.jobTitle}</td>
      <td>{job.companyName}</td>
      <td>{job.status}</td>
      <td>{job.dateApplied}</td>
      <td>
        <a href={job.postingLink} target="_blank" rel="noopener noreferrer">
          Link
        </a>
      </td>
      <td>
        <a href={job.applicationLink} target="_blank" rel="noopener noreferrer">
          Link
        </a>
      </td>
      <td>
        <button onClick={() => deleteJobApplication(job.id)}>Delete</button>
      </td>
    </tr>
  )
}

export default JobRow
