export function matchesProject(project, search, category, status) {
  return (!search.trim() || project.search.includes(search.trim().toLowerCase())) && (!category || category === project.category) && (!status || status === project.status);
}
