export class DataCollection {
  city: string
  checkInDate: Date
  checkOutDate: Date
  maxPrice: number

  constructor(city: string, checkInDate: Date, checkOutDate: Date, maxPrice: number) {
    this.city = city,
      this.checkInDate = checkInDate,
      this.checkOutDate = checkOutDate,
      this.maxPrice = maxPrice
  }
}
