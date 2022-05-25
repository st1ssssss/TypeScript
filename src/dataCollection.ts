export class DataCollection {
  city: string
  checkInDate: string
  checkOutDate: string
  maxPrice: number

  constructor(city: string, checkInDate: string, checkOutDate: string, maxPrice: number) {
    this.city = city,
      this.checkInDate = checkInDate,
      this.checkOutDate = checkOutDate,
      this.maxPrice = maxPrice
  }
}
