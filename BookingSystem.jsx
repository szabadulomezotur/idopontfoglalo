import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const initialSlots = [
  "10:00 - 11:00",
  "11:30 - 12:30",
  "13:00 - 14:00",
  "14:30 - 15:30",
  "16:00 - 17:00",
];

export default function BookingSystem() {
  const [bookedSlots, setBookedSlots] = useState([]);

  const handleBooking = (slot) => {
    if (!bookedSlots.includes(slot)) {
      setBookedSlots([...bookedSlots, slot]);
    }
  };

  return (
    <div className="p-4 max-w-md mx-auto">
      <h1 className="text-xl font-bold mb-4">Szabadulószoba Időpontfoglaló</h1>
      <div className="space-y-2">
        {initialSlots.map((slot) => (
          <Card key={slot} className="p-2">
            <CardContent className="flex justify-between items-center">
              <span>{slot}</span>
              <Button
                onClick={() => handleBooking(slot)}
                disabled={bookedSlots.includes(slot)}
                className={bookedSlots.includes(slot) ? "bg-gray-400" : "bg-blue-500"}
              >
                {bookedSlots.includes(slot) ? "Foglalt" : "Foglalás"}
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
