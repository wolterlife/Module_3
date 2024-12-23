// https://www.codewars.com/kata/5a353a478f27f244a1000076

async function sayJoke(apiUrl, jokeId) {
  const response = await fetch(apiUrl);
  const json = await response.json();

  if (!json.hasOwnProperty('jokes')) throw new Error(`No jokes at url: ${apiUrl}`)

  const joke = json.jokes.find(function (joke) {
    return joke.id === jokeId
  })

  if (!joke) throw new Error(`No jokes found id: ${jokeId}`)

  return {
    saySetup: () => joke.setup,
    sayPunchLine: () => joke.punchLine,
  }
}