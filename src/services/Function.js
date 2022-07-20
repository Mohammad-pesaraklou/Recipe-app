const shorten = (title) => {
    const short = title.split(" ")
    const newName = `${short[0]} ${short[1]} ${short[2]} ${short[3]} ${short[4]} ${short[5]} ${short[6]} ${short[7]} ${short[8]}`
    return newName;
}

const shortex = (title) => {
    const short = title.split(" ")
    const newName = `${short[0]} ${short[1]}`
    return newName;
}

export {shorten , shortex}