// helper functions
export function categoryElectronics(data) {
    return data.filter(item=>{
        return item.category==='electronics';
    })
}

export function categoryMenClothing(data) {
    return data.filter(item=>{
        return item.category==='men clothing';
    })
}
export function categoryWomenClothing(data) {
    return data.filter(item=>{
        return item.category==='women clothing';
    })
}
export function categoryJewelery(data) {
    return data.filter(item=>{
        return item.category==='jewelery';
    })
}


