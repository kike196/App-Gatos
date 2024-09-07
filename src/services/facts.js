const URL_ENDPOINT_FACT = 'https://catfact.ninja/fact'

export function getRandomFact () {
    return fetch(URL_ENDPOINT_FACT)
        .then(response => response.json())
        .then(data => {
            const { fact } = data
            return fact
        })
}
