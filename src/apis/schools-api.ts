export interface SchoolOverview {
  id: string;
  name: string;
  totalPlayers: number;
  totalGames: number;
}

type Currency = 'GBP';

interface Transaction {
  amount: number;
  currency: Currency;
}

interface PlayerStats {
  username: string;
  buyIn: Transaction;
  cashOut: Transaction;
}

interface Game {
  id: string;
  date: Date;
  playerStats: PlayerStats[];
}

export interface School {
  id: string;
  name: string;
  players: string[];
  games: Game[];
}

export type ApiResponse<T> = { hasError: true } | { hasError: false; data: T };

// TODO: implement real schools api
export class SchoolsApi {
  public getSchools(): Promise<ApiResponse<SchoolOverview[]>> {
    return new Promise((result) =>
      setTimeout(() => result({ hasError: false, data: [{ id: '1', name: 'Gambling Degenerates', totalPlayers: 5, totalGames: 14 }] }), 500)
    );
  }

  public getSchool(schoolId: string): Promise<ApiResponse<School>> {
    console.log(schoolId);
    return new Promise((result) =>
      setTimeout(
        () =>
          result({
            hasError: false,
            data: {
              id: '1',
              name: 'Gambling Degenerates',
              players: ['user1@test.com', 'user2@test.com', 'user3@test.com', 'user4@test.com', 'user5@test.com'],
              games: [
                {
                  id: '2',
                  date: new Date(),
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
                  date: new Date(),
                  playerStats: [
                    { username: 'user1@test.com', buyIn: { currency: 'GBP', amount: 10 }, cashOut: { currency: 'GBP', amount: 15 } },
                    { username: 'user2@test.com', buyIn: { currency: 'GBP', amount: 5 }, cashOut: { currency: 'GBP', amount: 0 } },
                    { username: 'user3@test.com', buyIn: { currency: 'GBP', amount: 10 }, cashOut: { currency: 'GBP', amount: 5 } },
                    { username: 'user5@test.com', buyIn: { currency: 'GBP', amount: 5 }, cashOut: { currency: 'GBP', amount: 10 } }
                  ]
                },
                {
                  id: '4',
                  date: new Date(),
                  playerStats: [
                    { username: 'user1@test.com', buyIn: { currency: 'GBP', amount: 5 }, cashOut: { currency: 'GBP', amount: 5 } },
                    { username: 'user2@test.com', buyIn: { currency: 'GBP', amount: 15 }, cashOut: { currency: 'GBP', amount: 10 } },
                    { username: 'user4@test.com', buyIn: { currency: 'GBP', amount: 5 }, cashOut: { currency: 'GBP', amount: 7.5 } },
                    { username: 'user5@test.com', buyIn: { currency: 'GBP', amount: 10 }, cashOut: { currency: 'GBP', amount: 12.5 } }
                  ]
                }
              ]
            }
          }),
        500
      )
    );
  }

  public createSchool(name: string, organiser: string, players: string[]): Promise<ApiResponse<string>> {
    console.log(name, organiser, players);
    return new Promise((result) => setTimeout(() => result({ hasError: false, data: '2' }), 500));
  }
}
