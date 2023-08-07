import Header from './header'
import React, { useEffect, useState } from 'react';

export default function TestPage(){
    const [data, setData] = useState([]);

    useEffect(() =>{
        fetch('http://localhost:8000/menuitem/64d004943eac243b948e7cb6')
        .then((response) => {
            if(!response.ok){
                throw new Error('error in testPage.js')
            }
            return response.json();
        })
        .then((data) =>{
            setData(data);
        })
        .catch((error) => {
            console.error(`Error in testPage.js: ${error}`)
        })
    }, []);


    return(
        <div>
            <Header />
            <div>
                {data.map((item)=>(
                    <h1 key={item._id}>
                        {item.Name}
                    </h1>
                ))}
            </div>
        </div>
    );
}