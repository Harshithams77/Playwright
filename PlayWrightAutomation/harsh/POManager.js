const { GodotHomePage } = require('./GodotHomePage');
const { AssetLibraryPage } = require('./AssetLibraryPage');

class POManager {
    constructor(page) {
        this.page = page;
        this.godothomepage = new GodotHomePage(this.page);
        this.assetLibraryPage = new AssetLibraryPage(this.page);
    }
    getHomePage() {
        return this.godothomepage;
    }

    getLibraryPage() {
        return this.assetLibraryPage;
    }
}
module.exports = { POManager };