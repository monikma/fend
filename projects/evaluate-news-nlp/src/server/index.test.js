const index = require('./index');

test('the server response should be converted correctly', () => {
  expect(index.convertServerResponse("text", {"polarity": "good", "subjectivity": "stupid"}).message).toBe(
      "The text \"text\" is stupid and good."
  )
})