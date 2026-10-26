import { useId, useState } from 'react'
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
  const id = useId()

  const update = (field) => (e) =>
    setFormData({ ...formData, [field]: e.target.value })

  const handleSubmit = (e) => {
    e.preventDefault()
    const newEntry = {
      ...formData,
      jobTitle: formData.jobTitle.trim(),
      companyName: formData.companyName.trim(),
      postingLink: formData.postingLink.trim(),
      applicationLink: formData.applicationLink.trim(),
      id: crypto.randomUUID(),
    }
    setJobApplications((current) => [...current, newEntry])
    setFormData(INITIAL_FORM)
  }

  return (
    <form className="job-form" onSubmit={handleSubmit}>
      <h2>Add Application</h2>
      <div className="job-form__grid">
        <div className="form-group">
          <label htmlFor={`${id}-title`}>Job Title</label>
          <input
            id={`${id}-title`}
            value={formData.jobTitle}
            onChange={update('jobTitle')}
            placeholder="Software Engineer"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor={`${id}-company`}>Company</label>
          <input
            id={`${id}-company`}
            value={formData.companyName}
            onChange={update('companyName')}
            placeholder="Acme Corp"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor={`${id}-status`}>Status</label>
          <select
            id={`${id}-status`}
            value={formData.status}
            onChange={update('status')}
          >
            {STATUS_OPTIONS.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </select>
        </div>
        <div className="form-group">
          <label htmlFor={`${id}-date`}>Date Applied</label>
          <input
            id={`${id}-date`}
            type="date"
            value={formData.dateApplied}
            onChange={update('dateApplied')}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor={`${id}-posting`}>Posting Link</label>
          <input
            id={`${id}-posting`}
            type="url"
            value={formData.postingLink}
            onChange={update('postingLink')}
            placeholder="https://..."
          />
        </div>
        <div className="form-group">
          <label htmlFor={`${id}-application`}>Application Link</label>
          <input
            id={`${id}-application`}
            type="url"
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
