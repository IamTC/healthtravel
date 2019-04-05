import { Photo } from './photo';
import { Currency } from './currency';
import { Accreditation } from './accreditation';
import { Room } from './room';
import { Meal } from './meal';

export interface Hospital{
    name: string,
    address: string,
    photos: Photo[],
    email: string,
    contactNumbers: string[],
    fax?:string,
    website: string,
    highlights: string[],
    currency: Currency,
    accreditations: Accreditation[],
    rooms: Room[],
    meals: Meal[]
}