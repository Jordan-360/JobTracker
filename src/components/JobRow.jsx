import { useState } from 'react'
import StatusBadge from './StatusBadge'
import { STATUS_OPTIONS } from '../data/statusOptions'
import formatDate from '../utils/formatDate'

function JobRow({ job, deleteJobApplication, updateJobApplication }) {
  const [isEditing, setIsEditing] = useState(false)
  const [editData, setEditData] = useState(job)

  const update = (field) => (e) =>
    setEditData({ ...editData, [field]: e.target.value })

  const canSave =
    editData.jobTitle.trim() !== '' && editData.companyName.trim() !== ''

  const handleEdit = () => {
    setEditData(job)
    setIsEditing(true)
  }

  const handleSave = () => {
    updateJobApplication({
      ...editData,
      jobTitle: editData.jobTitle.trim(),
      companyName: editData.companyName.trim(),
      postingLink: editData.postingLink.trim(),
      applicationLink: editData.applicationLink.trim(),
    })
    setIsEditing(false)
  }

  const handleCancel = () => {
    setEditData(job)
    setIsEditing(false)
  }

  const handleDelete = () => {
    const label = [job.jobTitle, job.companyName].filter(Boolean).join(' at ')
    if (window.confirm(`Delete "${label || 'this application'}"?`)) {
      deleteJobApplication(job.id)
    }
  }

  if (isEditing) {
    return (
      <tr className="job-row--editing">
        <td>
          <input
            className="cell-input"
            aria-label="Job title"
            value={editData.jobTitle}
            onChange={update('jobTitle')}
          />
        </td>
        <td>
          <input
            className="cell-input"
            aria-label="Company"
            value={editData.companyName}
            onChange={update('companyName')}
          />
        </td>
        <td>
          <select
            className="cell-input"
            aria-label="Status"
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
            aria-label="Date applied"
            type="date"
            value={editData.dateApplied}
            onChange={update('dateApplied')}
          />
        </td>
        <td>
          <input
            className="cell-input"
            aria-label="Posting link"
            type="url"
            value={editData.postingLink}
            onChange={update('postingLink')}
          />
        </td>
        <td>
          <input
            className="cell-input"
            aria-label="Application link"
            type="url"
            value={editData.applicationLink}
            onChange={update('applicationLink')}
          />
        </td>
        <td>
          <div className="cell-actions">
            <button
              type="button"
              className="btn btn--primary btn--sm"
              onClick={handleSave}
              disabled={!canSave}
            >
              Save
            </button>
            <button
              type="button"
              className="btn btn--secondary btn--sm"
              onClick={handleCancel}
            >
              Cancel
            </button>
          </div>
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
      <td className="cell-muted">
        {job.dateApplied ? (
          <time dateTime={job.dateApplied}>{formatDate(job.dateApplied)}</time>
        ) : (
          '—'
        )}
      </td>
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
      <td>
        <div className="cell-actions">
          <button
            type="button"
            className="btn btn--secondary btn--sm"
            onClick={handleEdit}
          >
            Edit
          </button>
          <button
            type="button"
            className="btn btn--danger btn--sm"
            onClick={handleDelete}
          >
            Delete
          </button>
        </div>
      </td>
    </tr>
  )
}

export default JobRow
