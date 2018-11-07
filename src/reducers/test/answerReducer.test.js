import { answerReducer } from "../answerReducer";

describe("answerReducer", () => {
  it("should return the initial state", () => {
    const expected = [];
    const result = answerReducer(undefined, []);
    expect(result).toEqual(expected);
  });

  it("should add answers to array", () => {
    const mockAnswer = true;
      

    const mockState = [];

    const expected = [true];

    const action = {
      type: 'SUBMIT_ANSWERS',
      answers: mockAnswer
    };

    const result = answerReducer(mockState, action);
    expect(result).toEqual(expected);
  });
});
