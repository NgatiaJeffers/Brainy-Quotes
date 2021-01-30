export class Quote {
    showQuote: boolean;

    constructor(
        public text: string,
        public author: string,
        public date: Date,
        public vote: number
        ) {
        this.showQuote = false;
    }
}
