import { STATUS_OPTIONS } from '../data/statusOptions'

function exportData(jobApplications) {
  const JSONString = JSON.stringify(jobApplications, null, 2)
  const blob = new Blob([JSONString], { type: 'application/json' })
  const url = URL.createObjectURL(blob)
  const today = new Date().toISOString().slice(0, 10)

  const link = document.createElement('a')
  link.href = url
  link.download = `jobApplications-${today}.json`
  link.click()
  // Release the blob once the browser has started the download
  setTimeout(() => URL.revokeObjectURL(url), 0)
}

// Coerces one imported entry into the expected data shape, or returns null
// if it isn't a usable job entry.
function normalizeJob(entry) {
  if (!entry || typeof entry !== 'object') return null

  const asString = (value) => (typeof value === 'string' ? value : '')

  return {
    id: asString(entry.id) || crypto.randomUUID(),
    jobTitle: asString(entry.jobTitle),
    companyName: asString(entry.companyName),
    status: STATUS_OPTIONS.includes(entry.status)
      ? entry.status
      : STATUS_OPTIONS[0],
    dateApplied: asString(entry.dateApplied),
    postingLink: asString(entry.postingLink),
    applicationLink: asString(entry.applicationLink),
  }
}

function importData(file, onSuccess, onError) {
  const reader = new FileReader()
  reader.onload = (event) => {
    let parsed
    try {
      parsed = JSON.parse(event.target.result)
    } catch {
      onError('That file is not valid JSON.')
      return
    }

    if (!Array.isArray(parsed)) {
      onError('Expected a list of job applications.')
      return
    }

    const jobs = parsed.map(normalizeJob).filter(Boolean)
    if (jobs.length !== parsed.length) {
      onError('Some entries in that file are not valid job applications.')
      return
    }

    onSuccess(jobs)
  }
  reader.onerror = () => onError('Could not read that file.')
  reader.readAsText(file)
}

export default exportData
export { importData }
