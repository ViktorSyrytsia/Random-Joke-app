import React from 'react'
import './Joke.scss';

export default function Joke({ joke, onChangeFavArr }) {



        const favButton = (<button onClick={() => onAddToFav(joke)} className="favBtn"><i className="fa fa-heart"></i></button>)

        const onAddToFav = (joke) => {
                localStorage.setItem(joke.id, joke.value);
                onChangeFavArr();
        }


        return (
                <div className="joke-card">
                        {joke ? favButton : null}
                        {(joke) ? (<div className="joke" key={joke.id} >{joke.value}</div>) :
                                (<div>No joke, sorry</div>)}

                </div>
        )


}
