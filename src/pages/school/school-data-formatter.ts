import { School } from '../../apis/schools-api';

interface PlayerWinningsDataPoints {
  curve: 'linear';
  data: (number | null)[];
  label: string;
}

export interface SchoolGraphData {
  dates: string[];
  dataPoints: PlayerWinningsDataPoints[];
}

export const formatSchoolGraphData = (school: Pick<School, 'games' | 'players'>): SchoolGraphData => {
  const dates: string[] = [];
  const playerToWinningsPerGameMap = new Map<string, (number | null)[]>();

  school.games.forEach((game) => {
    dates.push(game.date.toLocaleDateString());

    school.players.forEach((player) => {
      const playerStat = game.playerStats.find((playerStat) => playerStat.username === player);

      if (playerStat) {
        addPlayerWinnings(player, playerStat.cashOut.amount - playerStat.buyIn.amount, playerToWinningsPerGameMap);
      } else {
        addPlayerWinnings(player, null, playerToWinningsPerGameMap);
      }
    });
  });

  const playerWinningsDataPoints: PlayerWinningsDataPoints[] = [];

  playerToWinningsPerGameMap.forEach((dataPoints, player) => {
    playerWinningsDataPoints.push({ label: player, data: dataPoints, curve: 'linear' });
  });

  return { dates, dataPoints: playerWinningsDataPoints };
};

const addPlayerWinnings = (player: string, newWinningsDataPoint: number | null, playerToWinningsPerGameMap: Map<string, (number | null)[]>): void => {
  const existingPlayerData = playerToWinningsPerGameMap.get(player);

  if (existingPlayerData) {
    playerToWinningsPerGameMap.set(player, [...existingPlayerData, newWinningsDataPoint]);
  } else {
    playerToWinningsPerGameMap.set(player, [newWinningsDataPoint]);
  }
};
