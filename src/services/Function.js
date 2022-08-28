
const shortex = (title) => {
    const short = title.split(" ")
    const newName = `${short[0]} ${short[1]}`
    return newName;
}

const quantityCount = (state , id) => {
const index = state.selectedItems.findIndex(item => item.id === id)
if(index === -1){
    return false
}
return state.selectedItems[index].quantity;
}

const isInCart = (state , id) => {
    const result = !!state.selectedItems.find(item => item.id === id)
    return result
}


export {shortex , quantityCount , isInCart}