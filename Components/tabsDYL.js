class TabLink {
    constructor(tabElement) {
        this.tabElement = tabElement;
        // console.log(this.tabElement);
        this.tabData = this.tabElement.dataset.tab;

    }
}

let tabs = document.querySelectorAll('.tab').forEach(eachTab => new TabLink(eachTab));