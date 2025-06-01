import React, { useState } from "react";

export const Calendar = () => {
  const [selectedDate, setSelectedDate] = useState("");

  return (
    <div className="bg-white p-4 rounded shadow w-fit">
      <label className="block mb-2 text-sm font-medium">Select Date</label>
      <input
        type="date"
        value={selectedDate}
        onChange={(e) => setSelectedDate(e.target.value)}
        className="border px-3 py-2 rounded"
      />
    </div>
  );
};
