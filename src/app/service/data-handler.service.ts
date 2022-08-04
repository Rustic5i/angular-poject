import {Injectable} from '@angular/core';
import {Category} from "../model/Category";
import {TestData} from "../data/TestData";
import {Task} from "../model/Task";
import {Subject} from "rxjs";

@Injectable({
  providedIn: 'root' //облость доступа будет начиная с корня
})
export class DataHandlerService {

  tasksSubject = new Subject<Task[]>()

  constructor() {
  }

  getCategories(): Category[] {
    return TestData.categories;
  }

  fillTasks(): void {
    this.tasksSubject.next(TestData.tasks);
  }

  fillTasksByCategories(category: Category): void {
    const tasks = TestData.tasks.filter(task => task.category === category);
    this.tasksSubject.next(tasks);
  }
}
