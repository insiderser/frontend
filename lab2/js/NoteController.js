const titleInput = document.getElementById("titleInput")
const contentInput = document.getElementById("contentInput")

/**
 * @param {ListItem} note
 */
function setNoteContent(note) {
    titleInput.value = note.title
    contentInput.value = note.content
}

function createNewNote() {
    titleInput.value = ""
    contentInput.value = ""
}

function saveNote() {
    const selectedId = getSelectedItemId()
    const id = selectedId ? selectedId : generateId()
    const title = titleInput.value
    const content = contentInput.value
    const date = new Date()
    const newItem = new ListItem(id, title, content, date)

    saveItem(newItem)
    navigateTo(newItem)
}

titleInput.onchange = saveNote
contentInput.onchange = saveNote
