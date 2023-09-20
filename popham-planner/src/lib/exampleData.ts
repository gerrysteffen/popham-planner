import type { Recipe, Restaurant } from './types/types';

type ExampleData = {
  recipes: Recipe[];
  restaurants: Restaurant[];
};

const exampleData: ExampleData = {
  recipes: [
    {
      id: '1',
      name: 'Spaghetti Bolognese',
      image_url: 'https://www.marionskitchen.com/wp-content/uploads/2022/11/15-Minute-Bolognese-02.jpg'
    },
    {
      id: '2',
      name: 'Schnitzel',
      image_url: 'https://www.daringgourmet.com/wp-content/uploads/2014/03/Schnitzel-5.jpg'
    },
  ],
  restaurants: [
    {
      id: '1',
      name: 'Schnitzel Forever',
      image_url:
        'https://lh3.googleusercontent.com/p/AF1QipOSlRyfRmpAQKCFXSpuhQX1LRa9kUhfRFFD3wza=s1360-w1360-h1020',
    },
    {
      id: '2',
      name: 'Tanakatsu',
      image_url:
        'https://lh3.googleusercontent.com/p/AF1QipPbEvWvLzSASprtufXgI0fezCl6AckcVMKAFBJ-=s1360-w1360-h1020',
    },
    {
      id: '3',
      name: 'Afghan Kitchen',
      image_url:
        'https://lh3.googleusercontent.com/p/AF1QipPOdueZF-rCuY5_UHXD2B5H3i_RT4p3s58IUEsJ=s1360-w1360-h1020',
    },
  ],
};

export default exampleData;
