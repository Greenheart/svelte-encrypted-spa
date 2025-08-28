const backgroundColors = {
    default: ['bg-gray-900'],
    gradient: 'bg-linear-to-r from-gray-800 via-green-900 to-gray-800'.split(
        ' ',
    ),
}

let background = $state<{ current: keyof typeof backgroundColors }>({
    current: 'default',
})

export function toggle() {
    document.body.classList.remove(...backgroundColors[background.current])

    background.current =
        background.current === 'default' ? 'gradient' : 'default'

    document.body.classList.add(...backgroundColors[background.current])
}
