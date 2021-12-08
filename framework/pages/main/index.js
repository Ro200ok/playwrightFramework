class MainPage {
    constructor(page) {
        this.page = page
    }

    async clickLink () {
       await this.page.click('a') 
    }
}

module.exports = {
    MainPage
}