export const isAllSelected = (attributes, selectedAttr) => {
    for (let item of attributes) {
        if (!selectedAttr[item.name]) {
            return false
        }
    }
    return true
}

