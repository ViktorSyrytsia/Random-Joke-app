import React from 'react'
import './Joke.scss';

export default function Joke({ joke }) {


        return (
                <div className="joke-card">
                        {(joke) ? (<div className="joke" key={joke.id} >{joke.value}</div>) :
                                (<div>No joke, sorry</div>)}

                </div>
        )


}
