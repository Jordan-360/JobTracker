import { useState } from 'react'
import StatusBadge from './StatusBadge'
import { STATUS_OPTIONS } from '../data/statusOptions'

function JobRow({ job, deleteJobApplication, updateJobApplication }) {
  const [isEditing, setIsEditing] = useState(false)
  const [editData, setEditData] = useState(job)

  const update = (field) => (e) =>
    setEditData({ ...editData, [field]: e.target.value })

  const handleEdit = () => {
    setEditData(job)
    setIsEditing(true)
  }

  const handleSave = () => {
    updateJobApplication(editData)
    setIsEditing(false)
  }

  const handleCancel = () => {
    setEditData(job)
    setIsEditing(false)
  }

  if (isEditing) {
    return (
      <tr className="job-row--editing">
        <td>
          <input
            className="cell-input"
            value={editData.jobTitle}
            onChange={update('jobTitle')}
          />
        </td>
        <td>
          <input
            className="cell-input"
            value={editData.companyName}
            onChange={update('companyName')}
          />
        </td>
        <td>
          <select
            className="cell-input"
            value={editData.status}
            onChange={update('status')}
          >
            {STATUS_OPTIONS.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </select>
        </td>
        <td>
          <input
            className="cell-input"
            type="date"
            value={editData.dateApplied}
            onChange={update('dateApplied')}
          />
        </td>
        <td>
          <input
            className="cell-input"
            value={editData.postingLink}
            onChange={update('postingLink')}
          />
        </td>
        <td>
          <input
            className="cell-input"
            value={editData.applicationLink}
            onChange={update('applicationLink')}
          />
        </td>
        <td className="cell-actions">
          <button className="btn btn--primary btn--sm" onClick={handleSave}>
            Save
          </button>
          <button className="btn btn--secondary btn--sm" onClick={handleCancel}>
            Cancel
          </button>
        </td>
      </tr>
    )
  }

  return (
    <tr>
      <td className="cell-title">{job.jobTitle}</td>
      <td>{job.companyName}</td>
      <td>
        <StatusBadge status={job.status} />
      </td>
      <td className="cell-muted">{job.dateApplied}</td>
      <td>
        {job.postingLink ? (
          <a href={job.postingLink} target="_blank" rel="noopener noreferrer">
            View
          </a>
        ) : (
          '—'
        )}
      </td>
      <td>
        {job.applicationLink ? (
          <a
            href={job.applicationLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            View
          </a>
        ) : (
          '—'
        )}
      </td>
      <td className="cell-actions">
        <button className="btn btn--secondary btn--sm" onClick={handleEdit}>
          Edit
        </button>
        <button
          className="btn btn--danger btn--sm"
          onClick={() => deleteJobApplication(job.id)}
        >
          Delete
        </button>
      </td>
    </tr>
  )
}

export default JobRow
