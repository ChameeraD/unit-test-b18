

// Matching 2 values
test("two plus two is four", () => {
  expect(2 + 2).toBe(4);
});

// Testing for NULL
test("null", () => {
  const n = null;
  expect(n).toBeNull();
});

// Numbers
test("two plus two", () => {
  const value = 2 + 2;
  expect(value).toBeGreaterThan(3);
  expect(value).toBeGreaterThanOrEqual(3.5);
  expect(value).toBeLessThan(5);
  expect(value).toBeLessThanOrEqual(4.5);

  expect(value).toBe(4);
  expect(value).toEqual(4);
});

// Pattern Matching with String
test('Chack for 18 in Bactch18', () => {
  expect("Batch18").toMatch(/18/);
});


// Finding an item in an array
const subjectList = [
  "DIP",
  "DB",
  "JAVA",
  "DSA",
  "NLP",
];

test("the sublect list has DB on it", () => {
  expect(subjectList).toContain("DB");
});
