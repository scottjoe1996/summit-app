export interface School {
  id: string;
  name: string;
  totalPlayers: number;
  totalGames: number;
}

type ApiResponse<T> = { hasError: true } | { hasError: false; data: T };

export class SchoolsApi {
  public getSchools(): Promise<ApiResponse<School[]>> {
    return new Promise((result) =>
      setTimeout(() => result({ hasError: false, data: [{ id: '1', name: 'Gambling Degenerates', totalPlayers: 5, totalGames: 14 }] }), 500)
    );
  }
}
