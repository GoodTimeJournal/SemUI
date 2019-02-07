class TabLink {
    constructor(tabElement) {
        this.tabElement = tabElement;
        // console.log(this.tabElement);
        this.tabData = this.tabElement.dataset.tab;
        // console.log(this.tabData);
        this.cards = document.querySelectorAll(`.card[data-tab='${this.tabData}']`);
        // console.log(this.cards);
        // this.tabItem = new TabItem(this.cards);
        this.cards = Array.from(this.cards).map(allCards => new TabItem(allCards));
        this.tabElement.addEventListener('click', () => this.selectTab());

    }
    // methods
    selectTab() {
        const tabs = document.querySelectorAll('.tab');
        tabs.forEach(eachTab => eachTab.classList.remove('active-tab'));
        const cards = document.querySelectorAll('.card');
        cards.forEach(eachCard => eachCard.style.display = 'none');
        this.tabElement.classList.add('active-tab');
        this.cards.forEach(card => card.selectCards());
    }
}

class TabItem {
    constructor(cardElement) {
        this.cardElement = cardElement;
        // console.log(this.cardElement);
    }
    // methods
    selectCards() {
        this.cardElement.style.display = 'flex';
    }
}

let tabs = document.querySelectorAll('.tab').forEach(eachTab => new TabLink(eachTab));


