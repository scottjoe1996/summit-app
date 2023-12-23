interface School {
  id: string;
  name: string;
  totalPlayers: number;
  totalGames: number;
}

export class SchoolsApi {
  public getSchools(): Promise<School[]> {
    return Promise.resolve([{ id: '1', name: 'Gambling Degenerates', totalPlayers: 5, totalGames: 14 }]);
  }
}
