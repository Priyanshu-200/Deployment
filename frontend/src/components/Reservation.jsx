import React, { useState } from 'react';
import { HiOutlineArrowNarrowRight } from 'react-icons/hi';
import axios from 'axios';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const Reservation = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [date, setDate] = useState("");
    const [time, setTime] = useState("");
    const [phone, setPhone] = useState("");
    const navigate = useNavigate();

    const handleReservation = async (e) => {
        e.preventDefault();
        try {
            const { data } = await axios.post(
                "https://sontake-nodejs.onrender.com/api/v1/reservation/send",  // Use http if https is not configured
                { firstName, lastName, email, phone, date, time },
                {
                    headers: {
                        "Content-Type": "application/json"
                    },
                    withCredentials: true
                }
            );
            toast.success(data.message);
            setFirstName("");
            setLastName("");
            setPhone("");
            setEmail("");
            setTime("");
            setDate("");
            navigate("/success");
        } catch (error) {
            const errorMessage = error.response?.data?.message || "An error occurred";
            toast.error(errorMessage);
        }
    }

    return (
        <section className='reservation' id='reservation'>
            <div className="container">
                <div className="banner">
                    <img src="/reservation.png" alt="res" />
                </div>
                <div className="banner">
                    <div className="reservation_form_box">
                        <h1>MAKE A RESERVATION</h1>
                        <p>For Further Questions, Please Call</p>
                        <form>
                            <div>
                                <input 
                                    type="text" 
                                    placeholder='First Name' 
                                    name='firstName' 
                                    value={firstName} 
                                    onChange={(e) => setFirstName(e.target.value)} 
                                />
                                <input 
                                    type="text" 
                                    placeholder='Last Name' 
                                    name='lastName' 
                                    value={lastName} 
                                    onChange={(e) => setLastName(e.target.value)} 
                                />
                            </div>
                            <div>
                                <input 
                                    type="date" 
                                    placeholder='Date' 
                                    name='date' 
                                    value={date} 
                                    onChange={(e) => setDate(e.target.value)} 
                                />
                                <input 
                                    type="time" 
                                    placeholder='Time' 
                                    name='time' 
                                    value={time} 
                                    onChange={(e) => setTime(e.target.value)} 
                                />
                            </div>
                            <div>
                                <input 
                                    type="email" 
                                    placeholder='Email' 
                                    name='email' 
                                    className='email_tag' 
                                    value={email} 
                                    onChange={(e) => setEmail(e.target.value)} 
                                />
                                <input 
                                    type="text" 
                                    placeholder='Phone' 
                                    name='phone'  
                                    value={phone} 
                                    onChange={(e) => setPhone(e.target.value)} 
                                />
                            </div>
                            <button type='submit' onClick={handleReservation}>
                                RESERVE NOW{" "}
                                <span>
                                    <HiOutlineArrowNarrowRight/>
                                </span>
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Reservation;
