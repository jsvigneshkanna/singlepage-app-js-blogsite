import AbstractView from './AbstractView.js'

export default class extends AbstractView {
    constructor () {
        super();
        this.setTitle('Vignesh Kanna - Blogs');
    }
    async getHtml() {
        return`<p>This is blog views!!!</p>`
    }
}