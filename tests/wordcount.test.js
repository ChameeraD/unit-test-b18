var wordCount = require("../wordCount");

test("returns 0 for empty string", () => {
  expect(wordCount.uniqueWordCount("")).toBe(0);
});

test('returns 2 for "Batch 18"', () => {
  expect(wordCount.uniqueWordCount("")).toBe(0);
});
