import React, { useState, useEffect } from 'react';
import gotJoke from '../../service/gotJoke';
import Joke from '../Joke/Joke';

import './App.scss';



export default function App() {

        const someJoke = new gotJoke();

        const [joke, setJoke] = useState(null);

        const [categorys, setCategorys] = useState(null);

        const [searchValue, setSearchValue] = useState('');
        const [jokeArray, setJokeArray] = useState([]);

        const [jokeType, setJokeType] = useState('searchJoke');

        const getJoke = (jokeType) => {
                if (jokeType === 'randomJoke') {
                        onGotJoke()
                } else if (jokeType === 'categoryJoke') {
                        onGotCategoryJoke();

                } else if (jokeType === 'searchJoke') {
                        jokeSearching(searchValue)
                }
        }

        const onChangeJokeType = (type) => {
                if (type === 'categoryJoke') {
                        getAllCategorys();
                        setJokeType(type);
                }
                setJokeType(type);

        }


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
        setTimeout(
                useEffect(
                        () => {
                                onGotJoke();
                        },
                        []
                ), 2000
        )



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


        const blockCategory = (<div>
                {categorys && categorys.map((category, index) =>
                        (<button className="small-btn" key={index} onClick={() => onGotCategoryJoke(category)} >{category}</button>))}
        </div>);

        const blockSearch = (
                <div>
                        <input onChange={inputFunc} type="text" placeholder="Joke searching..."></input>
                        <button className="small-btn" onClick={() => jokeSearching(searchValue)} >Search</button>
                </div>
        )

        const searchArray = jokeArray.map((joke, index) => <Joke key={index} joke={joke} />)



        return (

                <div className="app">
                        <h1>Hey!</h1>
                        <h2>Let’s try to find a joke for you:</h2>
                        <div className="buttons-group">
                                <button className="button active" onClick={() => onChangeJokeType('randomJoke')}>Random Joke</button>
                                <button className="button " onClick={() => onChangeJokeType('categoryJoke')}>Category joke</button>
                                <button className="button " onClick={() => onChangeJokeType('searchJoke')}>Search joke</button>
                        </div>

                        {jokeType === 'randomJoke' ? (<div><button className="small-btn" onClick={() => getJoke(jokeType)} >Get a joke</button></div>) : null}
                        {jokeType === 'categoryJoke' ? blockCategory : null}
                        {jokeType === 'searchJoke' ? blockSearch : null}
                        {jokeType === 'searchJoke' ? searchArray : null}
                        <Joke joke={joke} />
                </div>

        );

}
