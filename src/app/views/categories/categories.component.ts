import {Component, OnInit} from '@angular/core';
import {DataHandlerService} from "../../service/data-handler.service";
import {Category} from "../../model/Category";

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  categories: Category[] = []; // TypeScript 2.7 включает строгую проверку классов,
                               // где все свойства должны быть инициализированы в конструкторе
                               // или при обьявлении переменной
                               // Обходной путь — добавить !постфикс к имени переменной:

  constructor(private dataHandler: DataHandlerService) {
  }

  /**
   * Метод вызываеться после инциализации компонента
   */
  ngOnInit(): void {
    this.dataHandler.categoriesSubject.subscribe(categories => this.categories = categories);
  }

  showTasksByCategory(category: Category) {
    this.dataHandler.fillTasksByCategories(category);
  }
}
