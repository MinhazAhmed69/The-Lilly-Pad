import React, { useState } from 'react';

const ReservationPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [guests, setGuests] = useState(1);
  const [reservationConfirmed, setReservationConfirmed] = useState(false);

  const handleReservation = (e) => {
    e.preventDefault();

    if (!name || !email || !phone || !date || !time) {
      alert('Please fill in all the required fields.');
      return;
    }

    setReservationConfirmed(true);
  };

  return (
    <div className="flex flex-col items-center justify-center p-8">
      <div className="max-w-4xl w-full">
        <h2 className="text-3xl font-bold text-center mb-8">Reserve Your Spot</h2>
        {reservationConfirmed ? (
          <div className="card glass w-full p-6 shadow-xl">
            <h3 className="text-lg font-semibold text-green-600 mb-4 text-center">
              Reservation Confirmed!
            </h3>
            <p className="text-gray-700 text-center">
              Thank you, <span className="font-bold">{name}</span>. Your reservation is confirmed for{' '}
              <span className="font-bold">{date}</span> at <span className="font-bold">{time}</span>.
            </p>
            <div className="flex justify-center mt-6">
              <button
                onClick={() => setReservationConfirmed(false)}
                className="btn btn-primary"
              >
                Make Another Reservation
              </button>
            </div>
          </div>
        ) : (
          <div className="card glass w-full p-6 shadow-xl">
            <form onSubmit={handleReservation}>
              <div className="form-control mb-4">
                <label htmlFor="name" className="label font-semibold text-lg">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="input input-bordered w-full"
                  placeholder="Enter your name"
                  required
                />
              </div>
              <div className="form-control mb-4">
                <label htmlFor="email" className="label font-semibold text-lg">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="input input-bordered w-full"
                  placeholder="Enter your email"
                  required
                />
              </div>
              <div className="form-control mb-4">
                <label htmlFor="phone" className="label font-semibold text-lg">
                  Phone
                </label>
                <input
                  type="tel"
                  id="phone"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="input input-bordered w-full"
                  placeholder="Enter your phone number"
                  required
                />
              </div>
              <div className="form-control mb-4">
                <label htmlFor="date" className="label font-semibold text-lg">
                  Date
                </label>
                <input
                  type="date"
                  id="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  className="input input-bordered w-full"
                  required
                />
              </div>
              <div className="form-control mb-4">
                <label htmlFor="time" className="label font-semibold text-lg">
                  Time
                </label>
                <input
                  type="time"
                  id="time"
                  value={time}
                  onChange={(e) => setTime(e.target.value)}
                  className="input input-bordered w-full"
                  required
                />
              </div>
              <div className="form-control mb-4">
                <label htmlFor="guests" className="label font-semibold text-lg">
                  Number of Guests
                </label>
                <input
                  type="number"
                  id="guests"
                  value={guests}
                  onChange={(e) => setGuests(e.target.value)}
                  className="input input-bordered w-full"
                  min="1"
                  max="20"
                  required
                />
              </div>
              <button
                type="submit"
                className="btn btn-primary w-full mt-4"
              >
                Confirm Reservation
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default ReservationPage;