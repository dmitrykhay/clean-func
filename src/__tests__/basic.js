import healthStatus from '../index';

test.each([
  ['healthy', { name: 'Маг', health: 90 }],
  ['wounded', { name: 'Лучник', health: 40 }],
  ['critical', { name: 'Мечник', health: 0 }],
])('healthStatus %s', (expected, personObject) => {
  expect(healthStatus(personObject)).toBe(expected);
});
