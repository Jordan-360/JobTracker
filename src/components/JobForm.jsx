import { STATUS_OPTIONS } from '../data/statusOptions'
import { useState } from 'react'

function JobForm({ setJobApplications }) {
  const [formData, setFormData] = useState({
    jobTitle: '',
    companyName: '',
    status: 'Applied',
    dateApplied: '',
    applicationLink: '',
    postingLink: '',
  })

  const handleSubmit = (e) => {
    e.preventDefault()

    const newEntry = {
      ...formData,
      id: crypto.randomUUID(),
    }

    setJobApplications((currentJobApplications) => [
      ...currentJobApplications,
      newEntry,
    ])
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        value={formData.jobTitle}
        onChange={(e) => setFormData({ ...formData, jobTitle: e.target.value })}
      />
      <input
        value={formData.companyName}
        onChange={(e) =>
          setFormData({ ...formData, companyName: e.target.value })
        }
      />
      <select
        value={formData.status}
        onChange={(e) => setFormData({ ...formData, status: e.target.value })}
      >
        {STATUS_OPTIONS.map((status) => (
          <option key={status} value={status}>
            {status}
          </option>
        ))}
      </select>
      <input
        value={formData.dateApplied}
        onChange={(e) =>
          setFormData({ ...formData, dateApplied: e.target.value })
        }
      />
      <input
        value={formData.applicationLink}
        onChange={(e) =>
          setFormData({ ...formData, applicationLink: e.target.value })
        }
      />
      <input
        value={formData.postingLink}
        onChange={(e) =>
          setFormData({ ...formData, postingLink: e.target.value })
        }
      />
      <button type="submit">Add Application</button>
    </form>
  )
}
export default JobForm
