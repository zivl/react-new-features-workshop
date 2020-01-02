import { API } from './api'
const child = {
    id: '123',
    name: 'Ziv',
    parentA: {
        id: '456',
        name: 'Sigalit',
        phone: '054-1234567',
    },
    parentB: {
        id: '789',
        name: 'Uri',
        phone: '054-1234567',
    },
    profilePicture: 'some_url'
}

describe('api test', function () {
    beforeEach(API.resetList)

    it('add child to list', function () {
        API.addChild(child)
        expect(API.getChildrenList()).toHaveLength(1)
    })

    it('remove child by id', function () {
        API.addChild(child)
        API.removeChild(child.id)
        expect(API.getChildrenList()).toHaveLength(0)
    })

    it('update child info', function () {
        API.addChild(child)
        API.updateChildInfo({ ...child, name: 'Guy' })
        expect(API.getChildrenList()[0].name).toEqual('Guy')
    })
})
