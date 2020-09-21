/**
 * @param {ListItem|null} item
 */
function navigateTo(item) {
    if (item) {
        history.pushState({id: item.id}, item.title, "?id=" + item.id)
    } else {
        history.pushState({}, "Create note", "?id=")
    }
    updateDisplayedItem()
}

/**
 * @return {string|null}
 */
function getSelectedItemId() {
    const currentUrl = new URL(location.href)
    const id = currentUrl.searchParams.get("id")
    return id?.length > 0 ? id : null
}

function updateDisplayedItem() {
    const currentId = getSelectedItemId()
    if (currentId) {
        const item = getItemById(currentId)
        if (item) {
            setPageTitle(item.title)
            setNoteContent(item)
            updateSelectedListItem(currentId)
        } else {
            navigateTo(null)
        }
    } else {
        setPageTitle("Create note")
        createNewNote()
        updateSelectedListItem(null)
    }
}

function setPageTitle(newTitle) {
    document.title = newTitle + " | Notepad"
}

addEventListener("popstate", updateDisplayedItem)
