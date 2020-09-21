function displayAllItems() {
    const items = getAllItems()
    items.sort((a, b) => b.dateLastEdited - a.dateLastEdited)
    items.forEach((item, index) => showItem(item, index))
}

/**
 * @param {ListItem} item
 */
function onItemClicked(item) {
    navigateTo(item)
}

/**
 * @param {ListItem} item
 */
function onItemUpdated(item) {
    hideItemById(item.id)
    showItem(item, /*index=*/ 0)
}

/**
 * @param {string} id
 */
function onItemDeleted(id) {
    hideItemById(id)

    if (getSelectedItemId() === id) {
        navigateTo(null)
    }
}

(function () {
    const addButton = document.getElementById("addButton")
    addButton.onclick = () => {
        navigateTo(null)
    }
})()

displayAllItems()
updateDisplayedItem()
