const g = require('ger')

const esm = new g.MemESM()

const ger = new g.GER(esm);

let date = new Date()

class InteractEvent {
    constructor() {
        this.namespace = 'post',
        this.person = `${userID}`,
        this.action = ['like','repost','share']
        this.thing = tags
        this.expires_at = date
    }
}