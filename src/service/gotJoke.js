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


}