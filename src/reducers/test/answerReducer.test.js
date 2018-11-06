import { answerReducer } from "../answerReducer";

describe("answerReducer", () => {
  it("should return the initial state", () => {
    const expected = [];
    const result = answerReducer(undefined, []);
    expect(result).toEqual(expected);
  });

  it("should submit answers array", () => {
    const mockAnswersArray = [
      {answer: "Theresa May", correct: true},
      {answer: "Boris Johnson", correct: false},
      {answer: "David Cameron", correct: false},
      {answer: "Tony Blair", correct: false}
    ];

    const mockState = [];

    const expected = [
      {answer: "Theresa May", correct: true},
      {answer: "Boris Johnson", correct: false},
      {answer: "David Cameron", correct: false},
      {answer: "Tony Blair", correct: false}
    ];

    const action = {
      type: 'SUBMIT_ANSWERS',
      answers: mockAnswersArray
    };

    const result = answerReducer(mockState, action);
    expect(result).toEqual(expected);
  });
});
