import { TaskCategory } from '../types';

export const tasks: TaskCategory[] = [
  {
    id: 1,
    category: "Огневая подготовка",
    tasks: [
      { id: 1, name: "Сборка магазина АК", points: 20, category: "Огневая подготовка" , status: 'available' },
      { id: 2, name: "Разборка Калаша (неполная)", points: 30, category: "Огневая подготовка", status: 'available'  },
      { id: 3, name: "Сборка Калаша (неполная)", points: 40, category: "Огневая подготовка" , status: 'available' }
    ]
  },
  {
    id: 2,
    category: "Строевая подготовка",
    tasks: [
      { id: 4, name: "Повороты 180 (Налево/Направо)", points: 20, category: "Строевая подготовка" , status: 'available' },
      { id: 5, name: 'Команды "Равняйсь!", "Смирно"', points: 30, category: "Строевая подготовка" , status: 'available' },
      { id: 6, name: "Движение строевым шагом (10м)", points: 40, category: "Строевая подготовка" , status: 'available' },
      { id: 7, name: 'Выполнение элемента с докладом "Здравие желаю..."', points: 50, category: "Строевая подготовка" , status: 'available' },
      { id: 8, name: 'Команда "Разойдись!" (сход строя)', points: 60, category: "Строевая подготовка" , status: 'available' }
    ]
  },
  {
    id: 3,
    category: "Тактическая подготовка",
    tasks: [
      { id: 9, name: "Перевязывание раны", points: 20, category: "Тактическая подготовка" , status: 'available' },
      { id: 10, name: "Чтение карты (определить объект)", points: 30, category: "Тактическая подготовка" , status: 'available' },
      { id: 11, name: "Перенос раненого (2 чел.)", points: 40, category: "Тактическая подготовка", status: 'available' },
      { id: 12, name: 'Обойти "ловушки" (паутина)', points: 50, category: "Тактическая подготовка" , status: 'available' },
      { id: 13, name: "Расшифровать донесение и нанести объект на карту", points: 60, category: "Тактическая подготовка" , status: 'available' }
    ]
  },
  {
    id: 4,
    category: "Физическая подготовка",
    tasks: [
      { id: 14, name: "10 приседаний", points: 20, category: "Физическая подготовка" , status: 'available' },
      { id: 15, name: "10 отжиманий", points: 30, category: "Физическая подготовка" , status: 'available' },
      { id: 16, name: "Планка (45 сек.)", points: 40, category: "Физическая подготовка" , status: 'available' },
      { id: 17, name: '5 отжиманий "алмазным" хватом', points: 50, category: "Физическая подготовка" , status: 'available' },
      { id: 18, name: "Комбинация: присед + отжим + планка", points: 60, category: "Физическая подготовка" , status: 'available' }
    ]
  },
  {
    id: 5,
    category: "Специальные задания",
    tasks: [
      { id: 19, name: "Назвать 3 рода войск", points: 20, category: "Специальные задания" , status: 'available' },
      { id: 20, name: "Синхронные приседания (3 чел.)", points: 30, category: "Специальные задания" , status: 'available' },
      { id: 21, name: 'Метание "гранаты" в цель', points: 40, category: "Специальные задания" , status: 'available' },
      { id: 22, name: "Спеть военную песню (1 куплет)", points: 50, category: "Специальные задания" , status: 'available' },
      { id: 23, name: "Игра", points: 60, category: "Специальные задания" , status: 'available' }
    ]
  }
];