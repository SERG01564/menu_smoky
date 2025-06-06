import { Category, Product } from '../types';

export const categories: Category[] = [
  {
    id: 1,
    name: 'Лимонады',
    description: 'Освежающие напитки с натуральными ингредиентами'
  },
  {
    id: 2,
    name: 'Коктейли',
    description: 'Авторские коктейли от нашего бармена'
  },
  {
    id: 3,
    name: 'Алкогольные',
    description: 'Крепкие напитки и вина'
  },
  {
    id: 4,
    name: 'Безалкогольные',
    description: 'Напитки без содержания алкоголя'
  }
];

export const products: Product[] = [
  {
    id: 1,
    name: 'Мохито',
    description: 'Классический коктейль с мятой и лаймом',
    fullDescription: 'Освежающий коктейль с белым ромом, свежей мятой, лаймом и сахаром',
    price: 450,
    ingredients: ['Белый ром', 'Свежая мята', 'Лайм', 'Сахар', 'Содовая'],
    category: 'Коктейли'
  },
  {
    id: 2,
    name: 'Лимонный лимонад',
    description: 'Домашний лимонад с мятой',
    fullDescription: 'Освежающий лимонад с лимоном, мятой и медом',
    price: 250,
    ingredients: ['Лимон', 'Мята', 'Мед', 'Вода'],
    category: 'Лимонады'
  },
  {
    id: 3,
    name: 'Виски Кола',
    description: 'Классический микс с виски',
    fullDescription: 'Смесь виски и колы со льдом',
    price: 350,
    ingredients: ['Виски', 'Кола', 'Лед'],
    category: 'Алкогольные'
  },
  {
    id: 4,
    name: 'Морс',
    description: 'Ягодный морс',
    fullDescription: 'Натуральный морс из сезонных ягод',
    price: 200,
    ingredients: ['Ягоды', 'Вода', 'Сахар'],
    category: 'Безалкогольные'
  }
]; 