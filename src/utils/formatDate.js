// Formats an ISO date string ("2026-08-14") for display ("Aug 14, 2026").
// Parsed as a local date on purpose: `new Date('2026-08-14')` is treated as
// UTC midnight, which shows as the previous day in timezones behind UTC.
function formatDate(isoDate) {
  const [year, month, day] = isoDate.split('-').map(Number)
  if (!year || !month || !day) return isoDate

  return new Date(year, month - 1, day).toLocaleDateString(undefined, {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  })
}

export default formatDate
