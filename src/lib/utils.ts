export function getTextColor(hex: string) {
    const red = parseInt(hex.substring(1, 3), 16)
    const green = parseInt(hex.substring(3, 5), 16)
    const blue = parseInt(hex.substring(5, 7), 16)
    const brightness = ((red * 299) + (green * 587) + (blue * 114)) / 1000
    return (brightness >= 128) ? 'black' : 'white'
}

export function getInitials(name: string) {
    const names = name.split(' ')
    let initials = ''
    names.forEach(n => {
        if (n.length > 0) {
            initials += n[0]
        }
    })
    if (initials.length > 2) {
        initials = initials[0] + initials[initials.length - 1]
    }
    return initials
}