import { expect, test, describe } from 'vitest';

import { School } from '../../apis/schools-api';

import { formatSchoolGraphData } from './school-data-formatter';

const TEST_SCHOOL: School = {
  id: '1',
  name: 'Gambling Degenerates',
  players: ['user1@test.com', 'user2@test.com', 'user3@test.com', 'user4@test.com', 'user5@test.com', 'user6@test.com'],
  games: [
    {
      id: '2',
      date: new Date(2024, 2, 7),
      playerStats: [
        { username: 'user1@test.com', buyIn: { currency: 'GBP', amount: 5 }, cashOut: { currency: 'GBP', amount: 10 } },
        { username: 'user2@test.com', buyIn: { currency: 'GBP', amount: 15 }, cashOut: { currency: 'GBP', amount: 0 } },
        { username: 'user3@test.com', buyIn: { currency: 'GBP', amount: 10 }, cashOut: { currency: 'GBP', amount: 15 } },
        { username: 'user4@test.com', buyIn: { currency: 'GBP', amount: 5 }, cashOut: { currency: 'GBP', amount: 0 } },
        { username: 'user5@test.com', buyIn: { currency: 'GBP', amount: 5 }, cashOut: { currency: 'GBP', amount: 10 } }
      ]
    },
    {
      id: '3',
      date: new Date(2024, 2, 14),
      playerStats: [
        { username: 'user1@test.com', buyIn: { currency: 'GBP', amount: 10 }, cashOut: { currency: 'GBP', amount: 15 } },
        { username: 'user2@test.com', buyIn: { currency: 'GBP', amount: 5 }, cashOut: { currency: 'GBP', amount: 0 } },
        { username: 'user3@test.com', buyIn: { currency: 'GBP', amount: 10 }, cashOut: { currency: 'GBP', amount: 5 } },
        { username: 'user5@test.com', buyIn: { currency: 'GBP', amount: 5 }, cashOut: { currency: 'GBP', amount: 10 } }
      ]
    },
    {
      id: '4',
      date: new Date(2024, 2, 21),
      playerStats: [
        { username: 'user1@test.com', buyIn: { currency: 'GBP', amount: 5 }, cashOut: { currency: 'GBP', amount: 5 } },
        { username: 'user2@test.com', buyIn: { currency: 'GBP', amount: 15 }, cashOut: { currency: 'GBP', amount: 10 } },
        { username: 'user4@test.com', buyIn: { currency: 'GBP', amount: 5 }, cashOut: { currency: 'GBP', amount: 7.5 } },
        { username: 'user5@test.com', buyIn: { currency: 'GBP', amount: 10 }, cashOut: { currency: 'GBP', amount: 12.5 } }
      ]
    }
  ]
};

describe('formatSchoolGraphData', () => {
  test('should return correctly formatted data for each user', () => {
    const result = formatSchoolGraphData(TEST_SCHOOL);

    expect(result.dates).toEqual(['07/03/2024', '14/03/2024', '21/03/2024']);
    expect(result.dataPoints).toEqual([
      { data: [5, 5, 0], label: 'user1@test.com', curve: 'linear' },
      { data: [-15, -5, -5], label: 'user2@test.com', curve: 'linear' },
      { data: [5, -5, null], label: 'user3@test.com', curve: 'linear' },
      { data: [-5, null, 2.5], label: 'user4@test.com', curve: 'linear' },
      { data: [5, 5, 2.5], label: 'user5@test.com', curve: 'linear' },
      { data: [null, null, null], label: 'user6@test.com', curve: 'linear' }
    ]);
  });

  test('should return no data points as no games have been played', () => {
    const result = formatSchoolGraphData({
      players: ['user1@test.com', 'user2@test.com', 'user3@test.com'],
      games: []
    });

    expect(result.dates).toEqual([]);
    expect(result.dataPoints).toEqual([]);
  });
});
