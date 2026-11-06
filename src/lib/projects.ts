import { getCollection } from 'astro:content';
export const repo = 'https://github.com/killedbytesla/killedbytesla.github.io';
export async function projects() {
  const entries = await getCollection('projects');
  const ids = new Set<string>();
  for (const e of entries) { if (ids.has(e.id)) throw new Error(`Duplicate slug: ${e.id}`); ids.add(e.id); }
  return entries.sort((a,b) => b.data.end.localeCompare(a.data.end) || a.data.name.localeCompare(b.data.name));
}
export function dateLabel(value: string): string {
  if (value.length === 4) return value;
  const [year, month, day] = value.split('-').map(Number);
  return new Intl.DateTimeFormat('en', { month: 'short', year: 'numeric', ...(day ? { day: 'numeric' as const } : {}), timeZone: 'UTC' }).format(new Date(Date.UTC(year, month - 1, day || 1)));
}
export const statusClass = (status: string) => status === 'Announced wind-down' ? 'pending' : status === 'Absorbed brand' ? 'absorbed' : 'ended';
