export function cloneDate(date: Date): Date;
export function addDays(date: Date, days: number): Date;

export interface IHotel {
  id: string,
  title: string,
  details: string,
  photos: string[],
  coordinates: number[],
  bookedDates: Date[],
  price: number
}

interface IFlat {
  photos: string[],
  totalPrice: number
  price: number
}

export const database: {
  id: string;
  title: string;
  details: string;
  photos: string[];
  coordinates: number[];
  bookedDates: Date[];
  price: number;
}[];
export const backendPort: 3040;
export const localStorageKey: "flat-rent-db";
export class FlatRentSdk {
  database: IHotel[];
  /**
   * Get flat by ID.
   *
   * @param {string} id Flat ID.
   * @returns {Promise<Object|null>} Flat.
   */
  get(id: string): Promise<object | null>;
  /**
   * Search for flats.
   *
   * @param {Object} parameters Search parameters
   * @param {string}parameters.city City name
   * @param {Date} parameters.checkInDate Check-in date
   * @param {Date} parameters.checkOutDate Check-out date
   * @param {number} [parameters.priceLimit] Max price for a night
   * @returns {Object[]} List of suitable flats.
   */
  search(parameters: {
    city: string;
    checkInDate: Date;
    checkOutDate: Date;
    priceLimit?: number;
  }): Promise<IHotel[] | Error>;
  /**
   * Book flat.
   *
   * @param {number} flatId
   * @param {Date} checkInDate
   * @param {Date} checkOutDate
   * @returns {number}
   */
  book(flatId: number, checkInDate: Date, checkOutDate: Date): number;
  _assertDatesAreCorrect(checkInDate: Date, checkOutDate: Date): void;
  _resetTime(date: Date): void;
  _calculateDifferenceInDays(startDate: Date, endDate: Date): number;
  _generateDateRange(from: Date, to: Date): Date[];
  _generateTransactionId: () => number;
  _areAllDatesAvailable(flat: IHotel, dateRange: Date[]): Date[];
  _formatFlatObject(flat: IHotel, nightNumber: number): IFlat;
  _readDatabase(): IHotel[];
  _writeDatabase(database: IHotel[]): void;
  _syncDatabase(database: IHotel[]): void;
}
