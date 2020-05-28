import React, { useState } from 'react';
import gotJoke from '../../service/gotJoke';
import Joke from '../Joke/Joke';

import './App.scss';



export default function App() {

        const someJoke = new gotJoke();

        const [joke, setJoke] = useState(null);

        const [categorys, setCategorys] = useState(null);

        const [searchValue, setSearchValue] = useState('');
        const [jokeArray, setJokeArray] = useState([]);



        const getAllCategorys = () => {
                someJoke.getAllCategorys()
                        .then((categorys) => {
                                setCategorys(categorys);

                        })
                        .catch((error) => {
                                console.log(error);

                        })
        }

        const jokeSearching = (query) => {
                someJoke.getAllFromSearch(query)
                        .then((jokes) => {
                                setJokeArray(jokes.result);

                        })
                        .catch((error) => {
                                console.log(error);

                        })
        }


        const onGotJoke = () => {
                someJoke.getRandomJoke()
                        .then((joke) => {
                                setJoke(joke);

                        })
                        .catch((error) => {
                                console.log(error);

                        })
        }


        const onGotCategoryJoke = (category) => {
                someJoke.getCatagoryRandomJoke(category)
                        .then((joke) => {
                                setJoke(joke);

                        })
                        .catch((error) => {
                                console.log(error);

                        })
        }

        const inputFunc = (e) => {
                setSearchValue(e.target.value);
                console.log(searchValue);
        }



        return (

                <div className="app">
                        <h1>Hey!</h1>
                        <h2>Let’s try to find a joke for you:</h2>
                        <div>
                                <button onClick={onGotJoke} >Get a joke</button>
                        </div>
                        <div>
                                <button onClick={getAllCategorys} >Get all categorys</button>
                                <div>
                                        {categorys && categorys.map((category, index) =>
                                                (<button key={index} onClick={() => onGotCategoryJoke(category)} >{category}</button>))}
                                </div>
                        </div>
                        <div>
                                <input onChange={inputFunc} type="text" placeholder="Joke searching..."></input>
                                <button onClick={() => jokeSearching(searchValue)} >Search</button>
                        </div>
                        {jokeArray.map(joke => <Joke key={Math.random() * 1000} joke={joke} />)}
                        <Joke joke={joke} />



                </div>

        );

}
