let binaryInputElemnt = document.getElementById("binaryInput")
let binaryElement = document.getElementById("binaryText")
let translateBinary = document.getElementById("translateBinary")

let binaryText = '213123 13213123'
let binaryChunks = binaryText.split(" ")

binaryInputElemnt.addEventListener("input", (e) => {
    binaryText = e.target.value
    binaryChunks = binaryText.split(" ")
})

translateBinary.addEventListener('click', async (e) => {
    let binaryChunksFilter = binaryChunks.filter(item => item.split("").every(char => char === "0" || char === "1"))

    binaryChunks.map(item => {
        if(item.length === 8){
            console.log(binaryChunksFilter)
        } else{
            return alert("one byte should be 8 character")
        }
    })
})