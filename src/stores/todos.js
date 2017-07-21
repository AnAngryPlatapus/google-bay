import { extendObservable, observable } from 'mobx'

/**
 * @class Todos
 */
export default class Todos {

    constructor(request, state = {}) {
        this.request = request
        extendObservable(this, {
            loading: false,
            items: observable.shallowArray([])
        }, state)
    }

    map(predicate) {
        return this.items.map(predicate)
    }

    add(params) {
        return this.request(`api/todos/add`, params).then(todos => {
                       extendObservable(this, todos)
                   })
    }

    remove(item) {
        console.warn('Removing', item._id)
        return this.request(`api/todos/remove`, { _id: item._id })
                   .then(() => {
                       this.items.remove(item)
                   })
    }

    browse() {
        return this.request(`api/todos`).then(items => {
            this.items = items
        }).catch(err => {
            console.warn('Not logged in:', err)
        })
    }
}
