import React from 'react'
import Link from 'next/link'
import Swal from 'sweetalert2'


const ComingSoon = () => {

    const [days, setDays] = React.useState('');
    const [hours, setHours] = React.useState('');
    const [minutes, setMinutes] = React.useState('');
    const [seconds, setSeconds] = React.useState('');
    const [email, setEmail] = React.useState('');

    React.useEffect(() => {
        const interval = setInterval(() => { 
            commingSoonTime();
        }, 1000);
        return () => clearInterval(interval);
    }, [])

    const validateEmail = (email) => {
        return String(email)
          .toLowerCase()
          .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          );
      };

    const handleClick = (e) => {
        if (validateEmail(email)){
            Swal.fire({
                title: 'Success!',
                text: `We will notify you on ${email}`,
                icon: 'success',
                confirmButtonText: 'Cool'
              })
        } else {
            Swal.fire({
                title: 'Error!',
                text: `Please enter a valid email`,
                icon: 'error',
                confirmButtonText: 'Sure!'
              })
        }
    }

    const commingSoonTime = () => {
        let endTime = new Date("September 20, 2022 17:00:00 PDT");
        let endTimeParse = (Date.parse(endTime)) / 1000;
        let now = new Date();
        let nowParse = (Date.parse(now) / 1000);
        let timeLeft = endTimeParse - nowParse;
        let days = Math.floor(timeLeft / 86400); 
        let hours = Math.floor((timeLeft - (days * 86400)) / 3600);
        let minutes = Math.floor((timeLeft - (days * 86400) - (hours * 3600 )) / 60);
        let seconds = Math.floor((timeLeft - (days * 86400) - (hours * 3600) - (minutes * 60)));
        if (hours < "10") { hours = "0" + hours; }
        if (minutes < "10") { minutes = "0" + minutes; }
        if (seconds < "10") { seconds = "0" + seconds; }
        setDays(days);
        setHours(hours);
        setMinutes(minutes);
        setSeconds(seconds);
    }

    return (
        <>  
            <div className="coming-soon-area">
                <div className="container-fluid p-0">
                    <div className="row m-0">
                        <div className="col-lg-6 col-md-12 p-0">
                            <div className="coming-soon-content">
                                <div className="d-table">
                                    <div className="d-table-cell">
                                        <Link href="/">
                                            <a className="logo">
                                                <img src="/images/logo.png" alt="image" />
                                            </a>
                                        </Link>

                                        <h2>We Are Launching Soon</h2>

                                        <div id="timer" className="flex-wrap justify-content-center d-flex">
                                            <div id="days" className="align-items-center flex-column d-flex justify-content-center">
                                                {days} <span>Days</span>
                                            </div>
                                            <div id="hours" className="align-items-center flex-column d-flex justify-content-center">
                                                {hours} <span>Hours</span>
                                            </div>
                                            <div id="minutes" className="align-items-center flex-column d-flex justify-content-center">
                                                {minutes} <span>Minutes</span>
                                            </div>
                                            <div id="seconds" className="align-items-center flex-column d-flex justify-content-center">
                                                {seconds} <span>Seconds</span>
                                            </div>
                                        </div> 

                                        <form className="newsletter-form" onSubmit={e => e.preventDefault()}>
                                            <input 
                                                type="email" 
                                                className="input-newsletter"
                                                value={email}
                                                onChange = {(e) => setEmail(e.target.value)}
                                                placeholder="Enter your email" 
                                                name="EMAIL" required 
                                            />
                                            <button type="submit" className="default-btn" onClick={handleClick}>
                                                Subscribe <i className="ri-arrow-right-line"></i>
                                            </button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-6 col-md-12 p-0">
                            <div className="coming-soon-image">
                                <img src="/images/coming-soon.jpg" alt="image" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ComingSoon;