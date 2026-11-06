export const statuses = ['Discontinued', 'Cancelled', 'Announced wind-down', 'Absorbed brand'];
export const categories = ['Vehicles', 'Energy', 'Infrastructure', 'Accessories', 'Businesses'];
export function validDate(value) {
  if (!/^\d{4}(-\d{2})?(-\d{2})?$/.test(value)) return false;
  const parts = value.split('-').map(Number);
  if (parts[0] < 2000 || parts[0] > 2100) return false;
  if (parts.length > 1 && (parts[1] < 1 || parts[1] > 12)) return false;
  return parts.length < 3 || (parts[2] >= 1 && parts[2] <= new Date(Date.UTC(parts[0], parts[1], 0)).getUTCDate());
}
export function validateProject(data) {
  const errors = [];
  for (const key of ['start', 'end', 'lastVerified']) if (!validDate(data[key])) errors.push(`Invalid ${key}`);
  if (!/^\d{4}-\d{2}-\d{2}$/.test(data.lastVerified)) errors.push('lastVerified needs a full date');
  if (data.start > data.end) errors.push('End precedes start');
  if (data.status !== 'Announced wind-down' && data.end > data.lastVerified) errors.push('Completed ending is in the future');
  if (data.status === 'Announced wind-down' && !data.announcementDate) errors.push('Wind-down needs announcementDate');
  if (data.announcementDate && (!validDate(data.announcementDate) || data.announcementDate > data.lastVerified)) errors.push('Invalid announcementDate');
  if (!data.sources?.some(s => s.supports === 'ending')) errors.push('An ending source is required');
  if (!data.sources?.some(s => s.supports === 'start')) errors.push('A start source is required');
  return errors;
}
