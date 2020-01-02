let kids = []
/**
 * Child Type
const Child = {
    id,
    name,
    parentA: {
        id,
        name,
        phone,
    },
    parentB: {
        id,
        name,
        phone,
    },
    profilePicture,
}
 */
const getChildrenList = () => [...kids]
const addChild = child => kids.push(child)
const removeChild = id => kids = kids.filter(k => k.id !== id)
const updateChildInfo = child => {
    kids = kids.filter(k => k.id !== child.id)
    kids.push(child)
}
const resetList = () => kids = []

export const API = {
    getChildrenList,
    addChild,
    removeChild,
    updateChildInfo,
    resetList
}
