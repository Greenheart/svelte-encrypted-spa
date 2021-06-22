import type { Writable, Readable } from 'svelte/store'

import * as allStores from './stores'

type Stores = {
    [key: string]: Writable<any> | Readable<any>
}

let stores: Stores = {}

export function registerStore(
    id: string,
    store: Writable<any> | Readable<any>,
) {
    stores[id] = store
}

// Register all stores automatically for HMR
Object.entries(allStores).forEach(([id, store]) => registerStore(id, store))

// preserve the store across HMR updates
if (import.meta.hot) {
    if (import.meta.hot.data.stores) {
        stores = import.meta.hot?.data.stores
    }
    import.meta.hot.accept()
    import.meta.hot.dispose(() => {
        import.meta.hot.data.stores = stores
    })
}
