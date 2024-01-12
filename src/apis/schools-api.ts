export interface School {
  id: string;
  name: string;
  totalPlayers: number;
  totalGames: number;
}

export type ApiResponse<T> = { hasError: true } | { hasError: false; data: T };

export class SchoolsApi {
  public getSchools(): Promise<ApiResponse<School[]>> {
    return new Promise((result) =>
      setTimeout(() => result({ hasError: false, data: [{ id: '1', name: 'Gambling Degenerates', totalPlayers: 5, totalGames: 14 }] }), 500)
    );
  }

  public createSchool(name: string, admin: string, players: string[]): Promise<ApiResponse<string>> {
    console.log(name, admin, players);
    return new Promise((result) => setTimeout(() => result({ hasError: false, data: '2' }), 500));
  }
}
