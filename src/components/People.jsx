import React, { useState, useEffect } from "react";
import "./People.css";
import getData from "../utils/getData.js";

const People = () => {
    // state
    const [loaded, setLoaded] = useState(false);
    const [peopleObj, setPeopleObj] = useState();

    // get data
    useEffect(() => {
        getData('people/')
            .then((json) => {
                console.log(json);
                setPeopleObj(json);
                setLoaded(true);
            })
    }, []);

    // data not loaded yet
    if (!loaded) return (
        <h1>Loading people...</h1>
    )

    return (
        <>
            <h1>{peopleObj.title}</h1>
            <h3>{peopleObj.subTitle}</h3>
            <h3>Faculty</h3>
            <div className="peopleList">
                {peopleObj.faculty.map( (p) => [
                    <div key={p.email} className="peopleListItem">
                        <h3>{p.name}</h3>
                        <img src={p.imagePath} alt={"Headshot of " + p.name}/>
                    </div>
                ])}
            </div>
            <h3>Staff</h3>
            <div className="peopleList">
                {peopleObj.staff.map( (p) => [
                    <div key={p.email} className="peopleListItem">
                        <h3>{p.name}</h3>
                        <img src={p.imagePath} alt={"Headshot of " + p.name}/>
                    </div>
                ])}
            </div>
        </>
    )

}

export default People;