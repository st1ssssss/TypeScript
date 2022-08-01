import { User } from './userClass.js';
import { FavouriteAmount } from './favouriteAmountClass.js';
export declare const localStorageSetter: () => void;
export declare const getUserData: (value: unknown) => User;
export declare const favouriteAmountSetter: () => string;
export declare const getFavouriteAmount: (value: unknown) => FavouriteAmount;
