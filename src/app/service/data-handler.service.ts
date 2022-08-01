import {Injectable} from '@angular/core';
import {Category} from "../model/Category";
import {TestData} from "../data/TestData";

@Injectable({
  providedIn: 'root' //облость доступа будет начиная с корня
})
export class DataHandlerService {

  constructor() {
  }

  getCategories(): Category[] {
    return TestData.categories;
  }
}
