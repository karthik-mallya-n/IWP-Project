import "./header.css"
import { DateRange } from 'react-date-range';
import { useState } from 'react';
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { format } from 'date-fns'

export default function Header(props) {

    const [openDate, setOpenDate] = useState(false)

    const [state, setState] = useState([
        {
            startDate: new Date(),
            endDate: new Date(),
            key: 'selection'
        }
    ]);
    const [openOptions, setOpenOptions] = useState(false);
    const [options, setOptions] = useState({
        adult: 1,
        children: 0,
        room: 1
    })

    const handleOption = (name, operation) => {
        setOptions((prev) => {
          return {
            ...prev,
            [name]: operation === "i" ? options[name] + 1 : options[name] - 1,
          };
        });
      };

    return (
        <div>
            <div className="header">
                <div className="headerContainer">
                    <div className="headerList ">
                        <div className="headerListItems active">
                            <span>Stays</span>
                        </div>
                        <div className="headerListItems">
                            <span>Flights </span>
                        </div>
                        <div className="headerListItems">
                            <span>Car Rentals</span>
                        </div>
                        <div className="headerListItems">
                            <span>Attractions</span>
                        </div>
                        <div className="headerListItems">
                            <span>Taxi</span>
                        </div>
                    </div>
                    {props.type!=="list" &&
                        <><h1 className="headertitle">A lifetime of discounts ? Its Genius</h1>
                    <p className="headerDesc">
                        Get rewareded for your travels - unlock instant savings of 10% or more with a free booking account
                    </p>
                    <button className="headerButton"> Sign In / Register</button>
                    <div className="headerSearch">
                        <div className="headerSearchItem">
                            <input type="text" placeholder="Where are you going?" className="headerSearchInput" />
                        </div>
                        <div className="headerSearchItem">
                            <span onClick={() => setOpenDate(!openDate)} className="headetSearchtext">{`${format(state[0].startDate, "mm/dd/yyyy")} to ${format(state[0].endDate, "mm/dd/yyyy")}`}</span>

                            {openDate && <DateRange
                                editableDateInputs={true}
                                onChange={item => setState([item.selection])}
                                moveRangeOnFirstSelection={false}
                                ranges={state}
                                className="date"
                            />}                </div>
                        <div className="headerSearchItem">
                            <span onClick={() =>setOpenOptions(!openOptions)} className="headetSearchtext">{`${options.adult} . adult ${options.children} . children ${options.room} . room`} </span>
                            {openOptions && <div className="options">
                                <div className="optionItem">
                                    <span className="optionText">Adult</span>
                                    <div className="optionCounter">
                                        <button
                                            disabled={options.adult <= 1}
                                            className="optionCounterButton"
                                            onClick={() => handleOption("adult", "d")}
                                        >
                                            -
                                        </button>
                                        <span className="optionCounterNumber">
                                            {options.adult}
                                        </span>
                                        <button
                                            className="optionCounterButton"
                                            onClick={() => handleOption("adult", "i")}
                                        >
                                            +
                                        </button>
                                    </div>
                                </div>
                                <div className="optionItem">
                                    <span className="optionText">Children</span>
                                    <div className="optionCounter">
                                        <button
                                            disabled={options.children <= 0}
                                            className="optionCounterButton"
                                            onClick={() => handleOption("children", "d")}
                                        >
                                            -
                                        </button>
                                        <span className="optionCounterNumber">
                                            {options.children}
                                        </span>
                                        <button
                                            className="optionCounterButton"
                                            onClick={() => handleOption("children", "i")}
                                        >
                                            +
                                        </button>
                                    </div>
                                </div>
                                <div className="optionItem">
                                    <span className="optionText">Room</span>
                                    <div className="optionCounter">
                                        <button
                                            disabled={options.room <= 1}
                                            className="optionCounterButton"
                                            onClick={() => handleOption("room", "d")}
                                        >
                                            -
                                        </button>
                                        <span className="optionCounterNumber">
                                            {options.room}
                                        </span>
                                        <button
                                            className="optionCounterButton"
                                            onClick={() => handleOption("room", "i")}
                                        >
                                            +
                                        </button>
                                    </div>
                                </div>
                            </div>}
                        </div>
                        <div className="headerSearchItem">
                            <button className="headerButton"> Search</button>
                        </div>

                    </div></>}
                </div>
            </div>
        </div>
    )
}
