/**
 * @return {string}
 */
function generateId() {
    const values = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"
    const result = []
    for (let i = 0; i < 16; i++) {
        const position = Math.round(Math.random() * (values.length - 1))
        const c = values.charAt(position)
        result.push(c)
    }
    return result.join("")
}
