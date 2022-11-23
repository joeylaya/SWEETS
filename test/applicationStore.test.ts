import { expect, test } from 'vitest';

const applicationStore = useApplicationStore()
test('getApplicationsByAlgorithms', () => {
  const result = applicationStore.getApplicationsByAlgorithms(1)
  // expect(result).toBe()
})
