const notify = msg => console.info(msg)

const notifyParent = (child, message) => {
    notify(`Hello ${child.parentA.name}, ${message}`)
    notify(`Hello ${child.parentB.name}, ${message}`)
}

const notifyParentMissingChild = child =>
    notifyParent(child, 'Your kid is missing!')

const notifyDayCareManager = message =>
    notify(`Dear Manager, ${message}`)

const notifyDayCareStaff = message =>
    notify(`Day Care Staff, ${message}`)

export const notifications = {
    // notify parent on missing child
    notifyParentMissingChild,
    // notify parent on general issue such as "bring a new blanket", "kid has kinim"
    notifyParent,
    notifyDayCareManager,
    notifyDayCareStaff,
}
