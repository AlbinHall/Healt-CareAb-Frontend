import { useState } from "react";
import { useAuth } from "../hooks/useAuth";
import React from 'react'
import axios from "axios";

export default function Feedback() {
    const [selectedAppointment, setSelectedAppointment] = useState('');
    const [comment, setComment] = useState('');
    const [rating, setRating] = useState(1);

    //const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

    // const response = await axios.get(`${API_BASE_URL}/Appointments`, {
    //     withCredentials: true,
    //   });

    // console.log("API RESPONSE: " + JSON.stringify(response.data));

    const appointments = [
        { id: '1', title: 'Läkarbesök - Karl Johansson - 2025-01-07' },
        { id: '2', title: 'Läkarbesök - Robert Grym - 2025-01-14' },
        { id: '3', title: 'Läkarbesök - Rickard Palm - 2025-02-11' },
      ];

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(selectedAppointment, comment, rating);
    }

    return (
        <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
            <h1 className="text-2xl font-bold mb-6 text-center">Leave Feedback</h1>
            <form onSubmit={handleSubmit}>
                {/* Dropdown for selecting an appointment */}
                <div className="mb-4">
                    <label htmlFor="appointment" className="block text-sm font-medium text-gray-700">
                        Select Appointment
                    </label>
                    <select
                        id="appointment"
                        value={selectedAppointment}
                        onChange={(e) => setSelectedAppointment(e.target.value)}
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                        required
                    >
                        <option value="" disabled>
                            Choose an appointment
                        </option>
                        {appointments.map((appointment) => (
                            <option key={appointment.id} value={appointment.id}>
                                {appointment.title}
                            </option>
                        ))}
                    </select>
                </div>

                {/* Input for comments */}
                <div className="mb-4">
                    <label htmlFor="comment" className="block text-sm font-medium text-gray-700">
                        Your Comment
                    </label>
                    <textarea
                        id="comment"
                        value={comment}
                        onChange={(e) => setComment(e.target.value)}
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                        rows="4"
                        placeholder="Enter your feedback here..."
                        required
                    />
                </div>

                {/* Rating input (1-5) */}
                <div className="mb-6">
                    <label htmlFor="rating" className="block text-sm font-medium text-gray-700">
                        Rating (1-5)
                    </label>
                    <input
                        type="number"
                        id="rating"
                        value={rating}
                        onChange={(e) => {
                            const value = Math.min(Math.max(parseInt(e.target.value, 10), 1), 5); // Ensure rating is between 1 and 5
                            setRating(value || 1);
                        }}
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                        min="1"
                        max="5"
                        required
                    />
                </div>

                {/* Submit button */}
                <button
                    type="submit"
                    className="w-full px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                >
                    Submit Feedback
                </button>
            </form>
        </div>
    );
}

