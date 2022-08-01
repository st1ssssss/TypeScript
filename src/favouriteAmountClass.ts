export class FavouriteItem {
  id: number
  userId: number
  title: string
  constructor(id?: number, userId?: number, title?: string) {
    this.id = id,
    this.userId = userId,
    this.title = title
  }
}

export class FavouriteAmount {
  number: number
  constructor(number?: number) {
    this.number = number
  }
}
