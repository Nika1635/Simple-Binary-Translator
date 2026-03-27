let binaryInputElemnt = document.getElementById("binaryInput")
let binaryElement = document.getElementById("binaryText")
let translateBinary = document.getElementById("translateBinary")

let binaryText = ''
let binaryChunks = binaryText.split(" ")

binaryInputElemnt.addEventListener("input", (e) => {
    binaryText = e.target.value
    binaryChunks = binaryText.split(" ")
})

translateBinary.addEventListener('click', async (e) => {
    let binaryChunksFilter = binaryChunks.filter(item => item.split("").every(char => char === "0" || char === "1") && item.length === 8)
    let stringDecimal = ""
    let character = ""
    binaryChunksFilter.map(item => {
            let decimal = parseInt(item, 2)
            stringDecimal += decimal.toString() + " "
            character += String.fromCharCode(decimal)
            console.log(item)
    })

    stringDecimal.trim()

    binaryElement.innerText = `binary: ${binaryChunksFilter} decimals: ${stringDecimal} characters: ${character}`
})