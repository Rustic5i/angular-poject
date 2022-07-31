import {Category} from "../model/Category";
import {Priority} from "../model/Priority";
import {Task} from "../model/Task";

export class TestData {

  static categories: Category[] = [
    {id: 1, title: 'Работа'},
    {id: 2, title: 'Семья'},
    {id: 3, title: 'Учеба'},
    {id: 4, title: 'Отдых'},
    {id: 5, title: 'Спорт'},
    {id: 6, title: 'Еда'},
    {id: 7, title: 'Финансы'},
    {id: 8, title: 'Гаджеты'},
    {id: 9, title: 'Здоровье'},
    {id: 10, title: 'Автомоболь'},
  ];

  static priority: Priority[] = [
    {id: 1, title: "Низкий", color: "#e5e5e5"},
    {id: 2, title: "Средний", color: "#E8933DFF"},
    {id: 3, title: "Высокий", color: "#E845C5FF"},
    {id: 4, title: "Очень срочно", color: "#C51111FF"},
  ];

  static task: Task[] = [
    {
      id: 1,
      title: "Залить бензин полный бак",
      priority: TestData.priority[2],
      completed: false,
      category: TestData.categories[9],
      date: new Date('2019-04-10')
    },
    {
      id: 2,
      title: "Пробежать 100км",
      priority: TestData.priority[0],
      completed: true,
      category: TestData.categories[4]
    },
    {
      id: 3,
      title: "Организовать детский праздник",
      completed: false
    },
    {
      id: 4,
      title: "Купить продукты",
      priority: TestData.priority[2],
      completed: false,
      category: TestData.categories[5],
      date: new Date('2019-04-10')
    },
  ];
}
