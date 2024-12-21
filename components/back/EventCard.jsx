
import { useState } from 'react';

function EventCard() {
  const [isLoading, setIsLoading] = useState(false);

  // Dummy event data
  const event = {
    thumbnail: '/default-thumbnail.jpg',
    title: 'Sample Event Title',
    description: 'This is a short description of the event.',
    date: '2024-12-25',
    time: '18:00',
    capacity: 50,
    registrationFee: 200,
    _id: '12345',
  };

  return (
    <div className="w-[250px] h-[350px] bg-white border-2 border-[#323232] rounded-[5px] shadow-[4px_4px_#323232] flex flex-col justify-start p-[20px] gap-[10px] hover:scale-105 duration-200">
      <div className="transition-all duration-500 flex justify-center">
        {/* Card Image with fixed size */}
        <div className="w-full h-[120px] relative border-2 rounded-md border-black bg-gradient-to-t from-transparent to-[rgba(0,0,0,0.3)]">
          <img
            src={event.thumbnail}
            alt={event.title}
            className="w-full h-full object-cover rounded-md"
          />
        </div>
      </div>

      <div className="flex flex-col items-center">
        <h3 className="text-[20px] font-bold text-black hover:text-[#1d4ed8] transition-colors duration-300">
          {event.title}
        </h3>
        <p className="text-[14px] max-w-[200px] font-normal text-[#4a4a4a] truncate">
          {event.description}
        </p>

        <div className="mt-[10px] text-[14px] text-[#323232] flex flex-col items-center gap-[5px]">
          <p className="text-sm">
            <strong className="text-[#000000]">Date:</strong>{' '}
            <span className="text-black">
              {new Date(event.date).toLocaleDateString()}
            </span>
          </p>
          <p className="text-sm">
            <strong className="text-[#000000]">Registration Fee:</strong>{' '}
            <span className="text-black">
              {event.registrationFee ? `₹${event.registrationFee}` : 'Free'}
            </span>
          </p>
          <p className="text-sm">
            <strong className="text-[#000000]">Slots Remaining:</strong>{' '}
            <span className="text-black">{event.capacity} slots</span>
          </p>
        </div>
      </div>

      {/* Footer with Action Buttons */}
      <div className="flex gap-2 justify-between">
        <a
          to={`/events/${event._id}`}
          className="text-xs py-[8px] px-[10px] w-full bg-black text-white font-medium text-center rounded-[5px] hover:bg-white hover:text-black border-2 border-black transition-colors duration-300"
        >
          View Details
        </a>
        
      </div>
    </div>
  );
}

export default EventCard;
