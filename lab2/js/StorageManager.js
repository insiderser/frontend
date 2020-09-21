/**
 * @param {string} id
 * @return {ListItem}
 */
function getItemById(id) {
    const value = localStorage.getItem(id)
    return JSON.parse(value, (key, value) => {
        if (key.startsWith("date")) {
            return new Date(value)
        }
        return value
    })
}

/**
 * @return {[ListItem]}
 */
function getAllItems() {
    const result = []
    for (let i = 0; i < localStorage.length; i++) {
        const id = localStorage.key(i)
        const item = getItemById(id)
        result.push(item)
    }
    return result
}

/**
 * @param {ListItem} item
 */
function saveItem(item) {
    const value = JSON.stringify(item)
    localStorage.setItem(item.id, value)
    onItemUpdated(item)
}

/**
 * @param {string} id
 */
function deleteItemById(id) {
    localStorage.removeItem(id)
    onItemDeleted(id)
}
