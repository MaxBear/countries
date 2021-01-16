export const convertArea = (sqkm) => {    
    return sqkm===null ?  sqkm : Math.floor(sqkm * 0.621371 * 0.621371)
}

export const formatPopulation = (population) => {
    return population===null ? population : (population / 1000000).toFixed(1)
}
