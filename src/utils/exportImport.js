function exportData(jobApplications) {
  const JSONString = JSON.stringify(jobApplications)
  const blob = new Blob([JSONString], { type: 'application/json' })
  const url = URL.createObjectURL(blob)

  const link = document.createElement('a')
  link.href = url
  link.download = 'jobApplications.json'
  link.click()
}

function importData(file, onSuccess) {
  const reader = new FileReader()
  reader.onload = (event) => {
    const importedData = JSON.parse(event.target.result)
    onSuccess(importedData)
  }
  reader.readAsText(file)
}
export default exportData
export { importData }
