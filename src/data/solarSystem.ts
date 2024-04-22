import { Question, Test } from "./types";

export const SolarSystemTest: Test = {
  id: "id:test/solar-system",
  title: "Mono Dish",
  testName: "solarSystem",
  numOfQuestions: 5,
  duration: 10,
  image: {
    uri: "https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg",
    alt: "Mono Dish",
  },
};

export const solarSystemQuestions: Question[] = [
  {
    id: "id:question/10",
    question: "Which combination of food items is commonly used to make a classic peanut butter and jelly sandwich?",
    options: [
      { id: "id:option/40", text: "Ham and cheese", isCorrect: false },
      { id: "id:option/41", text: "Peanut butter and banana", isCorrect: false },
      { id: "id:option/42", text: "Peanut butter and jelly", isCorrect: true },
      { id: "id:option/43", text: "Tuna and mayo", isCorrect: false },
    ],
    answerDescription:
      "Correct! A classic peanut butter and jelly sandwich is made with peanut butter and jelly.",
    hint: "These two ingredients are spread between slices of bread.",
  },
  {
    id: "id:question/11",
    question: "Which combination of ingredients is commonly used in a Margherita pizza?",
    options: [
      { id: "id:option/44", text: "Pepperoni and sausage", isCorrect: false },
      { id: "id:option/45", text: "Tomato sauce and cheese", isCorrect: false },
      { id: "id:option/46", text: "Tomato, mozzarella, and basil", isCorrect: true },
      { id: "id:option/47", text: "Pineapple and ham", isCorrect: false },
    ],
    answerDescription: "Correct! A Margherita pizza typically includes tomato, mozzarella, and basil.",
    hint: "It's named after an Italian queen.",
  },
  {
    id: "id:question/12",
    question: "Which combination of ingredients is commonly used in a Caesar salad?",
    options: [
      { id: "id:option/48", text: "Lettuce and ranch dressing", isCorrect: false },
      { id: "id:option/49", text: "Lettuce and vinaigrette dressing", isCorrect: false },
      { id: "id:option/50", text: "Lettuce, croutons, and Caesar dressing", isCorrect: true },
      { id: "id:option/51", text: "Lettuce and thousand island dressing", isCorrect: false },
    ],
    answerDescription:
      "Correct! A Caesar salad typically includes lettuce, croutons, and Caesar dressing.",
    hint: "It's named after a famous Roman general.",
  },
  {
    id: "id:question/14",
    question:
      "Which dish is often considered the national dish of Thailand?",
    options: [
      { id: "id:option/56", text: "Burger", isCorrect: false },
      { id: "id:option/57", text: "Pad Thai", isCorrect: true },
      { id: "id:option/58", text: "Pizza", isCorrect: false },
      { id: "id:option/59", text: "Sushi", isCorrect: false },
    ],
    answerDescription:
      "Correct! Pad Thai is often considered the national dish of Thailand.",
    hint: "It is a stir-fried noodle dish commonly made with shrimp, chicken, or tofu.",
  },
  {
    id: "id:question/15",
    question:
      "Which dish is often considered a symbol of American fast food culture?",
    options: [
      { id: "id:option/60", text: "Sushi", isCorrect: false },
      { id: "id:option/61", text: "Burger", isCorrect: true },
      { id: "id:option/62", text: "Tacos", isCorrect: false },
      { id: "id:option/63", text: "Pizza", isCorrect: false },
    ],
    answerDescription:
      "Correct! Burger is often considered a symbol of American fast food culture.",
    hint: "It typically consists of a cooked patty of ground meat served in a sliced bun.",
  },
];