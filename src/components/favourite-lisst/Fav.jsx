import React, { useState, useEffect } from 'react';

import './Fav.scss';

const Fav = ({ onChange }) => {

        const [favArr, setFavArr] = useState([]);

        useEffect(
                () => {
                        const list = localStorage;
                        const renderArray = [];
                        for (const key in list) {
                                if (typeof list[key] === 'string') {
                                        renderArray.push({ key: key, joke: list[key] });
                                }
                        }
                        setFavArr(renderArray);

                },
                [onChange]
        )

        const deleteJoke = (key) => {
                localStorage.removeItem(key);
                const list = localStorage;
                const renderArray = [];
                for (const key in list) {
                        if (typeof list[key] === 'string') {
                                renderArray.push({ key: key, joke: list[key] });
                        }
                }
                setFavArr(renderArray);

        }



        return (
                <ul className="favourite-list">
                        {favArr.map((item) => (<li
                                className="fav-list-item"
                                key={item.key}>
                                {item.joke}
                                <button
                                        className="del-fav-btn"
                                        onClick={() => deleteJoke(item.key)}>del
                        </button>
                        </li>))}
                </ul>
        )
}

export default Fav
