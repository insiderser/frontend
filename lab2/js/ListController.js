const listContainer = document.getElementById("listContainer")
const itemTemplate = document.getElementById("listItemTemplate")

/**
 * @param {ListItem} item
 * @param {number} index
 * @return {Node}
 */
function createDocumentForItem(item, index) {
    const itemDocument = itemTemplate.content.querySelector("li").cloneNode(true)
    itemDocument.id = item.id
    listContainer.insertBefore(itemDocument, listContainer.children[index])
    return itemDocument
}

/**
 * @param {ListItem} item
 * @param {number} index
 */
function showItem(item, index) {
    const itemDocument = createDocumentForItem(item, index)
    const titleDocuments = itemDocument.getElementsByClassName("itemTitle")
    const dateDocuments = itemDocument.getElementsByClassName("itemDate")
    const deleteButtons = itemDocument.getElementsByClassName("deleteButton")

    for (const titleDocument of titleDocuments) {
        titleDocument.textContent = item.title
    }
    for (const dateDocument of dateDocuments) {
        dateDocument.textContent = item.dateLastEdited.toLocaleString()
    }

    itemDocument.onclick = () => {
        onItemClicked(item)
    }
    for (const deleteButton of deleteButtons) {
        deleteButton.onclick = (e) => {
            deleteItemById(item.id)
            e.stopPropagation()
        }
    }
}

/**
 * @param {string} id
 */
function hideItemById(id) {
    document.getElementById(id)?.remove()
}

/**
 * @param {string|null} newSelectedId
 */
function updateSelectedListItem(newSelectedId) {
    const oldSelectedDocuments = listContainer.getElementsByClassName("active")
    for (const selected of oldSelectedDocuments) {
        selected.classList.remove("active")
    }

    if (newSelectedId !== null) {
        const newSelection = document.getElementById(newSelectedId)
        newSelection.classList.add("active")
    }
}
