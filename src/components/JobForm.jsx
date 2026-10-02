import { useState } from 'react'
import { STATUS_OPTIONS } from '../data/statusOptions'

const INITIAL_FORM = {
  jobTitle: '',
  companyName: '',
  status: 'Applied',
  dateApplied: '',
  postingLink: '',
  applicationLink: '',
}

function JobForm({ setJobApplications }) {
  const [formData, setFormData] = useState(INITIAL_FORM)

  const update = (field) => (e) =>
    setFormData({ ...formData, [field]: e.target.value })

  const handleSubmit = (e) => {
    e.preventDefault()
    const newEntry = { ...formData, id: crypto.randomUUID() }
    setJobApplications((current) => [...current, newEntry])
    setFormData(INITIAL_FORM)
  }

  return (
    <form className="job-form" onSubmit={handleSubmit}>
      <h2>Add Application</h2>
      <div className="job-form__grid">
        <div className="form-group">
          <label>Job Title</label>
          <input
            value={formData.jobTitle}
            onChange={update('jobTitle')}
            placeholder="Software Engineer"
          />
        </div>
        <div className="form-group">
          <label>Company</label>
          <input
            value={formData.companyName}
            onChange={update('companyName')}
            placeholder="Acme Corp"
          />
        </div>
        <div className="form-group">
          <label>Status</label>
          <select value={formData.status} onChange={update('status')}>
            {STATUS_OPTIONS.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </select>
        </div>
        <div className="form-group">
          <label>Date Applied</label>
          <input
            type="date"
            value={formData.dateApplied}
            onChange={update('dateApplied')}
          />
        </div>
        <div className="form-group">
          <label>Posting Link</label>
          <input
            value={formData.postingLink}
            onChange={update('postingLink')}
            placeholder="https://..."
          />
        </div>
        <div className="form-group">
          <label>Application Link</label>
          <input
            value={formData.applicationLink}
            onChange={update('applicationLink')}
            placeholder="https://..."
          />
        </div>
      </div>
      <button className="btn btn--primary" type="submit">
        Add Application
      </button>
    </form>
  )
}

export default JobForm
