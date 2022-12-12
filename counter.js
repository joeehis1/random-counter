const root = document.querySelector('.root')

root.innerHTML = `
    <h1>Random Counter</h1>
    <h2 id="count-el" style="text-align: center"></h2>
    <button class="btn btn-green" id="increment-btn" >Increment</button>
    <button class="btn btn-red" id="save-btn">Save</button>
    <p id="show-count"></p>
`

const h2 = root.querySelector('#count-el')


const incrementBtn = root.querySelector('#increment-btn')

const saveBtn = root.querySelector('#save-btn')
const para = root.querySelector('#show-count')


saveBtn.addEventListener('click', save)
incrementBtn.addEventListener('click', increment)

let count = 0
h2.textContent = count
const currCount = []

para.innerHTML = `Previous Entries: ${render(currCount)}`
function increment() {
    count++
    h2.textContent = count

}

function save() {
    currCount.push(count)
    count = 0
    h2.textContent = count
    para.innerHTML = `Previous Entries: ${render(currCount)}`

}

function render(arr) {
    let str = ''
    arr.forEach((element, index) => {
        str += `${index === arr.length - 1 ? element : `${element} - `}`
    });
    return str
}