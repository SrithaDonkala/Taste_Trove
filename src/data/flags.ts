import { Question, Test } from "./types";

export const FlagTest: Test = {
  id: "id:test/flag",
  title: "Survey",
  testName: "flags",
  numOfQuestions: 5,
  duration: 10,
  image: {
    uri: "https://orders.co/static/ee091c236669a81bc30a25df8270ccdb/3c931/Unlocking-the-Potential-of-Guest-Feedback-Enhancing-Your-Restaurants-Reputation.png",
    alt: "Survey",
  },
};


export const flagQuestions: Question[] = [
  {
    id: "id:question/0",
    question: "How satisfied are you with our service?",
    options: [
      { id: "id:option/0", text: "Very Satisfied", isCorrect: false },
      { id: "id:option/1", text: "Satisfied", isCorrect: false },
      { id: "id:option/2", text: "Neutral", isCorrect: false },
      { id: "id:option/3", text: "Dissatisfied", isCorrect: false },
      { id: "id:option/4", text: "Very Dissatisfied", isCorrect: false },
    ],
    answerDescription:
      "Thank you for your feedback!",
    hint: "Your opinion helps us improve our product/service.",
  },
  {
    id: "id:question/1",
    question: "How likely are you to recommend our Food to others?",
    options: [
      { id: "id:option/5", text: "Very Likely", isCorrect: false },
      { id: "id:option/6", text: "Likely", isCorrect: false },
      { id: "id:option/7", text: "Neutral", isCorrect: false },
      { id: "id:option/8", text: "Unlikely", isCorrect: false },
      { id: "id:option/9", text: "Very Unlikely", isCorrect: false },
    ],
    answerDescription:
      "Thank you for your valuable input!",
    hint: "Your recommendation helps us reach more customers.",
  },
  {
    id: "id:question/2",
    question: "How would you rate the ease of use of our service?",
    options: [
      { id: "id:option/10", text: "Very Easy", isCorrect: false },
      { id: "id:option/11", text: "Easy", isCorrect: false },
      { id: "id:option/12", text: "Neutral", isCorrect: false },
      { id: "id:option/13", text: "Difficult", isCorrect: false },
      { id: "id:option/14", text: "Very Difficult", isCorrect: false },
    ],
    answerDescription:
      "Your feedback is greatly appreciated!",
    hint: "Ease of use is important for a positive user experience.",
  },
  {
    id: "id:question/3",
    question: "What features would you like to see improved in our service?",
    options: [
      { id: "id:option/15", text: "User Interface", isCorrect: false },
      { id: "id:option/16", text: "Performance", isCorrect: false },
      { id: "id:option/17", text: "Customer Support", isCorrect: false },
      { id: "id:option/18", text: "Additional Features", isCorrect: false },
      { id: "id:option/19", text: "Other", isCorrect: false },
    ],
    answerDescription:
      "Thank you for your suggestions!",
    hint: "Your feedback helps us prioritize improvements.",
  },
  {
    id: "id:question/4",
    question: "Overall, how satisfied are you with our customer service?",
    options: [
      { id: "id:option/20", text: "Very Satisfied", isCorrect: false },
      { id: "id:option/21", text: "Satisfied", isCorrect: false },
      { id: "id:option/22", text: "Neutral", isCorrect: false },
      { id: "id:option/23", text: "Dissatisfied", isCorrect: false },
      { id: "id:option/24", text: "Very Dissatisfied", isCorrect: false },
    ],
    answerDescription:
      "We appreciate your feedback on our customer service!",
    hint: "Your satisfaction with our service is important to us.",
  },
];
