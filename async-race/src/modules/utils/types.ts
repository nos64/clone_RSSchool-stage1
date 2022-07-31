// HEADER - X-Total-Count - общее количество машин используется 
// в скобках гаража - общее количество авто
// 1. При запуске - Get Cars
// РеквестАнимейшн запускаем на время - расстояние / время distance /velocity

export interface GetCars {
  name: string,
  color: string,
  id: number
  _page?: number,
  _limit?: number
}

export interface GetCar {
  name: string,
  color: string,
  id: number
}

export interface CreateCar {
  name: string,
  color: string
}

export interface StartStopCar {
  velocity: number,
  distance: number
}

export interface GetWinners {
  _page?: number,
  _limit?: number,
  _sort?: ['id'|'wins'|'time'],
  _order?: ['ASC'|'DESC']
}

export interface CreateWinner {
  id: number,
  wins: number,
  time: number
}

export interface Headers {
  'X-Total-Count': number
}
