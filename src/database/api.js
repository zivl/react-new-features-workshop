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
    }
}
 */
let kids = [
  {
    id: '123',
    name: 'Ziv Levy',
    parentA: {
      name: 'Angelina'
    },
    parentB: {
      name: 'Brad'
    }
  },
  {
    id: '456',
    name: 'Assaf Gannor',
    parentA: {
      name: 'Jennifer'
    },
    parentB: {
      name: 'Like Mike'
    }
  },
  {
    id: '789',
    name: 'Yael Zaritsky',
    parentA: {
      name: 'Monica'
    },
    parentB: {
      name: 'Chandler'
    }
  }
]

const getChildrenList = () => [...kids]
const addChild = child => kids.push(child)
const removeChild = id => (kids = kids.filter(k => k.id !== id))
const updateChildInfo = child => {
  kids = kids.filter(k => k.id !== child.id)
  kids.push(child)
}
const resetList = () => (kids = [])

export const API = {
  getChildrenList,
  addChild,
  removeChild,
  updateChildInfo,
  resetList
}
