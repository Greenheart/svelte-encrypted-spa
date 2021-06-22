function getRandomItem<T>(items: T[] = []): T {
    return items[Math.floor(Math.random() * items.length)]
}

export default getRandomItem
