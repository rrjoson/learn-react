export function selectRepository(repository) {
  console.log('A repository has been selected:', repository);
  return {
    type: 'REPOSITORY_SELECTED',
    payload: repository,
  }
}