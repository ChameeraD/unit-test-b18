var wordCount = require('../wordCount');

test('returns word count 3', ()=>{
    expect(wordCount.uniqueWordCount("Unit Test Example")).toBe(3);
});

test('returns word count 3', ()=>{
    expect(wordCount.uniqueWordCount()).toBe(0);
});

test('returns word count 3', ()=>{
    expect(wordCount.uniqueWordCount('')).toBe(0);
});