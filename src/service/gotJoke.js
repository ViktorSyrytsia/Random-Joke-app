export default class gotJoke {

        constructor() {
                this._apiBase = "https://api.chucknorris.io/";
        }

        getResource = async (url) => {
                const res = await fetch(`${this._apiBase}${url}`);

                if (!res.ok) {
                        throw new Error(`Could not fetch ${url}. status ${res.status}`);
                }

                return await res.json();
        }

        getRandomJoke = async () => {
                const randomJoke = await this.getResource(`jokes/random`);
                return randomJoke
        }

        getCatagoryRandomJoke = async (catategory) => {
                const randomJoke = await this.getResource(`jokes/random?category=${catategory}`);
                return randomJoke
        }

        getAllCategorys = async () => {
                const categorys = await this.getResource(`jokes/categories`);
                return categorys
        }


        getAllFromSearch = async (query) => {
                const findedJokes = await this.getResource(`jokes/search?query=${query}`);
                return findedJokes;
        }

        // getCharacter = async (id) => {
        //         const character = await this.getResource(`/characters/${id}`);
        //         return this._transformCharacter(character)
        // }

        // getAllHouses = async () => {
        //         const res = await this.getResource(`/houses/`)
        //         return res.map(this._transformHouse)
        // }

        // getHouse = async (id) => {
        //         const house = await this.getResource(`/houses/${id}/`);
        //         return this._transformHouse(house);
        // }

        // getAllBooks = async () => {
        //         const res = await this.getResource(`/books/`)
        //         return res.map(this._transformBook)
        // }

        // getBook = async (id) => {
        //         const book = await this.getResource(`/books/${id}`);
        //         return this._transformBook(book)
        // }

        // isSet(data) {
        //         if (data) {
        //                 return data
        //         } else {
        //                 return 'no data :('
        //         }
        // }

        // _extractId = (item) => {
        //         const idRegExp = /\/([0-9]*)$/;
        //         return item.url.match(idRegExp)[1];
        // }

        // _transformCharacter(char) {
        //         return {
        //                 name: char.name,
        //                 gender: char.gender,
        //                 born: char.born,
        //                 died: char.died,
        //                 culture: char.culture
        //         }
        // }

        // _transformHouse(house) {
        //         return {
        //                 name: house.name,
        //                 region: house.region,
        //                 words: house.words,
        //                 titles: house.titles,
        //                 overlord: house.overlord,
        //                 ancestralWeapons: house.ancestralWeapons
        //         }
        // }

        // _transformBook(book) {
        //         return {
        //                 name: book.name,
        //                 numberOfPages: book.numberOfPages,
        //                 publiser: book.publiser,
        //                 released: book.released
        //         }
        // }

}