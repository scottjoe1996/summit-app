export interface School {
  id: string;
  name: string;
  totalPlayers: number;
  totalGames: number;
}

export type ApiResponse<T> = { hasError: true } | { hasError: false; data: T };

// TODO: implement real schools api
export class SchoolsApi {
  public getSchools(): Promise<ApiResponse<School[]>> {
    return new Promise((result) =>
      setTimeout(() => result({ hasError: false, data: [{ id: '1', name: 'Gambling Degenerates', totalPlayers: 5, totalGames: 14 }] }), 500)
    );
  }

  public createSchool(name: string, organiser: string, players: string[]): Promise<ApiResponse<string>> {
    console.log(name, organiser, players);
    return new Promise((result) => setTimeout(() => result({ hasError: false, data: '2' }), 500));
  }
}
