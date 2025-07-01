const addToLocalStorage=()=>{
    localStorage.setItem('name', 'Selina Islam');
    localStorage.setItem('age', '25')
}

const addToSessionStorage=()=>{
    sessionStorage.setItem('javascript', 'is a  programming language.')
}

const deleteFromLocalStorage=()=>{
    localStorage.removeItem('name')
}

const deleteFromSessionStorage=()=>{
    sessionStorage.removeItem('javascript')
}

const getDataLocalStorage=()=>{
    console.log(localStorage.getItem('name'))
}

const clearLocalSorage=()=>{
    localStorage.clear()
}