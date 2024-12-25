import React, { useState } from 'react';

const ReservationPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [guests, setGuests] = useState(1);
  const [tableNumber, setTableNumber] = useState('');
  const [reservationConfirmed, setReservationConfirmed] = useState(false);
  const [showTableGrid, setShowTableGrid] = useState(false); // State to control visibility of the table grid
  const [selectedTable, setSelectedTable] = useState(null); // State to store the selected table

  // Mock data for taken tables (you can expand this based on your requirements)
  const takenTables = [2, 4, 6, 8]; // These are taken table numbers
  const totalTables = 10; // Total number of tables

  const handleReservation = (e) => {
    e.preventDefault();

    if (!name || !email || !phone || !date || !time || guests < 1 || !selectedTable) {
      alert('Please fill in all the required fields and ensure valid input.');
      return;
    }

    setTableNumber(selectedTable); // Set the selected table number
    setReservationConfirmed(true);
  };

  const resetForm = () => {
    setName('');
    setEmail('');
    setPhone('');
    setDate('');
    setTime('');
    setGuests(1);
    setTableNumber('');
    setSelectedTable(null); // Reset the selected table
    setReservationConfirmed(false);
  };

  // Get available tables (tables not in the takenTables list)
  const availableTables = Array.from({ length: totalTables }, (_, index) => {
    const tableNum = index + 1;
    return takenTables.includes(tableNum) ? null : tableNum; // Skip taken tables
  }).filter(Boolean); // Remove null values

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
              <span className="font-bold">{date}</span> at <span className="font-bold">{time}</span> for{' '}
              <span className="font-bold">{guests}</span> guest(s) at Table No.{' '}
              <span className="font-bold">{tableNumber}</span>.
            </p>
            <div className="flex justify-center mt-6">
              <button onClick={resetForm} className="btn btn-primary">
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
                  onChange={(e) => setGuests(Math.max(1, e.target.value))}
                  className="input input-bordered w-full"
                  min="1"
                  max="20"
                  required
                />
              </div>

              {/* Toggle Button for Table Grid */}
              <button
                type="button"
                onClick={() => setShowTableGrid(!showTableGrid)}
                className="btn btn-primary w-full mb-4"
              >
                {showTableGrid ? 'Hide Table Selection' : 'Select a Table'}
              </button>

              {/* Table Grid */}
              {showTableGrid && (
                <div className="form-control mb-4">
                  <label htmlFor="tableNumber" className="label font-semibold text-lg">
                    Choose Table
                  </label>
                  <div className="flex justify-between mb-4">
                    {/* Grid-like display of table numbers */}
                    {[...Array(totalTables)].map((_, index) => {
                      const tableNum = index + 1;
                      const isTaken = takenTables.includes(tableNum);
                      return (
                        <div
                          key={tableNum}
                          className={`flex justify-center items-center w-16 h-16 border-2 rounded-md mx-2 ${
                            isTaken
                              ? 'bg-gray-400 text-gray-700'
                              : 'bg-green-500 text-white cursor-pointer hover:bg-green-600'
                          }`}
                        >
                          {isTaken ? (
                            <span className="text-sm">Taken</span>
                          ) : (
                            <span
                              className="text-lg"
                              onClick={() => {
                                setSelectedTable(tableNum); // Set the selected table
                                setTableNumber(tableNum); // Optionally update the reservation with selected table
                              }}
                            >
                              {tableNum}
                            </span>
                          )}
                        </div>
                      );
                    })}
                  </div>
                  {/* Display the selected table */}
                  {selectedTable && (
                    <div className="text-center text-lg mt-2">
                      You have selected Table No. <span className="font-bold">{selectedTable}</span>
                    </div>
                  )}
                </div>
              )}

              <button type="submit" className="btn btn-primary w-full mt-4">
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