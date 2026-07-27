import React, { useState, useRef, useEffect } from "react";

interface AvailabilityBarProps {
  initialCheckIn?: string;
  initialCheckOut?: string;
  initialAdults?: number;
  initialChildren?: number;
  onCheck: (
    checkIn: string,
    checkOut: string,
    adults: number,
    children: number,
  ) => void;
}

const AvailabilityBar: React.FC<AvailabilityBarProps> = ({
  initialCheckIn,
  initialCheckOut,
  initialAdults = 1,
  initialChildren = 0,
  onCheck,
}) => {
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const parseDate = (dateStr?: string) =>
    dateStr && dateStr.trim() !== "" ? new Date(dateStr) : null;

  const [startDate, setStartDate] = useState<Date | null>(
    parseDate(initialCheckIn),
  );
  const [endDate, setEndDate] = useState<Date | null>(
    parseDate(initialCheckOut),
  );

  const [adults, setAdults] = useState(initialAdults);
  const [children, setChildren] = useState(initialChildren);
  const calendarRef = useRef<HTMLDivElement>(null);

  const today = new Date();
  today.setHours(0, 0, 0, 0);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        calendarRef.current &&
        !calendarRef.current.contains(event.target as Node)
      ) {
        setIsCalendarOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const formatDate = (date: Date | null) => {
    if (!date) return "";
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  };

  const handleSearch = () => {
    setError(null);

    if (!startDate) {
      setError("Please select a check-in date.");
      return;
    }
    if (!endDate) {
      setError("Please select a check-out date.");
      return;
    }
    if (endDate <= startDate) {
      setError("Check-out date must be after check-in date.");
      return;
    }
    if (adults < 1) {
      setError("At least 1 adult is required.");
      return;
    }

    onCheck(formatDate(startDate), formatDate(endDate), adults, children);
  };

  const getDaysInMonth = (year: number, month: number) =>
    new Date(year, month + 1, 0).getDate();
  const getFirstDayOfMonth = (year: number, month: number) =>
    new Date(year, month, 1).getDay();

  const MonthCalendar = ({
    year,
    month,
    title,
  }: {
    year: number;
    month: number;
    title: string;
  }) => {
    const days = getDaysInMonth(year, month);
    const firstDay = getFirstDayOfMonth(year, month);
    const daysArray = [];
    for (let i = 0; i < firstDay; i++) daysArray.push(null);
    for (let i = 1; i <= days; i++) daysArray.push(new Date(year, month, i));

    const isSelected = (date: Date) => {
      if (startDate && date.toDateString() === startDate.toDateString())
        return "start";
      if (endDate && date.toDateString() === endDate.toDateString())
        return "end";
      if (startDate && endDate && date > startDate && date < endDate)
        return "range";
      return null;
    };

    return (
      <div className="w-full">
        <h4 className="text-center font-bold text-[#4b3427] mb-4 md:mb-6 uppercase tracking-widest text-[11px] md:text-[13px]">
          {title}
        </h4>
        <div className="grid grid-cols-7 text-center text-[9px] md:text-[10px] font-bold text-[#4b3427]/40 mb-3 md:mb-4">
          {["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"].map((d) => (
            <div key={d}>{d}</div>
          ))}
        </div>
        <div className="grid grid-cols-7 gap-y-1">
          {daysArray.map((date, i) => {
            if (!date)
              return <div key={`empty-${i}`} className="h-8 md:h-10"></div>;

            const isPast = date < today;
            const status = isSelected(date);

            return (
              <div
                key={i}
                className={`h-8 md:h-10 flex items-center justify-center text-[10px] md:text-xs relative transition-all ${
                  isPast
                    ? "text-[#4b3427]/20 cursor-not-allowed"
                    : status === "start" || status === "end"
                      ? "bg-[#8d5527] text-white cursor-pointer z-10 scale-105 rounded-md"
                      : status === "range"
                        ? "bg-[#efe2d2] text-[#8d5527] cursor-pointer"
                        : "text-[#4b3427]/80 hover:bg-[#efe2d2] cursor-pointer"
                }`}
                onClick={() => {
                  if (isPast) return;
                  setError(null);
                  if (!startDate || (startDate && endDate)) {
                    setStartDate(date);
                    setEndDate(null);
                  } else {
                    if (date < startDate) {
                      setStartDate(date);
                      setEndDate(null);
                    } else if (
                      date.toDateString() !== startDate.toDateString()
                    ) {
                      setEndDate(date);
                    }
                  }
                }}
              >
                {date.getDate()}
              </div>
            );
          })}
        </div>
      </div>
    );
  };

  const currentMonth = today.getMonth();
  const currentYear = today.getFullYear();
  const nextMonth = (currentMonth + 1) % 12;
  const nextYear = currentMonth === 11 ? currentYear + 1 : currentYear;

  const monthNames = [
    "JANUARY",
    "FEBRUARY",
    "MARCH",
    "APRIL",
    "MAY",
    "JUNE",
    "JULY",
    "AUGUST",
    "SEPTEMBER",
    "OCTOBER",
    "NOVEMBER",
    "DECEMBER",
  ];

  return (
    <div className="w-full bg-[#473c35] py-8 md:py-10 lg:py-12 px-4 sm:px-6 relative z-50">
      <div className="container mx-auto max-w-7xl">
        {error && (
          <div className="mb-6 md:mb-8 p-4 bg-red-500/10 border border-red-500/20 text-red-200 text-[9px] md:text-[10px] font-bold tracking-widest uppercase flex items-center gap-3 animate-fade-in-down">
            <i className="fa-solid fa-triangle-exclamation"></i>
            <span>{error}</span>
          </div>
        )}

        <div className="flex flex-col xl:flex-row items-start xl:items-center gap-8 md:gap-12 lg:gap-16">
          <div className="text-left w-full xl:w-1/4 shrink-0">
            <div className="flex items-center gap-3 md:gap-4 mb-2 md:mb-3">
              <div className="w-8 md:w-10 h-[1.5px] bg-white/40"></div>
              <span className="text-[9px] md:text-[10px] font-bold tracking-[0.3em] md:tracking-[0.4em] uppercase text-[#fefcf9]/90!">
                MAKE RESERVATION
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif text-[#fefcf9]! leading-tight drop-shadow-[0_2px_8px_rgba(0,0,0,0.2)]">
              Book Your Stay
            </h2>
          </div>

          <div className="flex flex-col xl:flex-row items-stretch xl:items-end gap-4 md:gap-6 w-full xl:w-3/4 relative">
            <div className="flex-1 w-full min-w-0 md:min-w-[340px] lg:min-w-[380px] relative">
              <label className="text-[9px] md:text-[10px] font-bold tracking-[0.2em] md:tracking-[0.3em] uppercase block mb-3 md:mb-4 text-[#fefcf9]/90!">
                DATE
              </label>
              <div
                onClick={() => setIsCalendarOpen(!isCalendarOpen)}
                className={`border h-16 md:h-20 p-4 md:p-6 flex items-center justify-between gap-4 group transition-all cursor-pointer bg-transparent ${isCalendarOpen || startDate ? "border-[#bf885e]" : "border-white/20 hover:border-[#bf885e]"}`}
              >
                <span className="text-[#fefcf9]! flex-1 min-w-0">
                  {startDate ? (
                    <div className="flex items-center gap-3 min-w-0 overflow-hidden">
                      <div className="flex items-center gap-1 md:gap-2 min-w-0 whitespace-nowrap">
                        <span className="opacity-50 text-[8px] md:text-[9px] font-sans uppercase tracking-widest">
                          IN
                        </span>
                        <span className="text-xs sm:text-sm md:text-base lg:text-lg font-serif text-[#fefcf9]!">
                          {formatDate(startDate)}
                        </span>
                      </div>
                      <span className="opacity-20 text-[#bf885e] shrink-0">
                        |
                      </span>
                      <div className="flex items-center gap-1 md:gap-2 min-w-0 whitespace-nowrap">
                        <span className="opacity-50 text-[8px] md:text-[9px] font-sans uppercase tracking-widest">
                          OUT
                        </span>
                        <span className="text-xs sm:text-sm md:text-base lg:text-lg font-serif text-[#fefcf9]!">
                          {endDate ? formatDate(endDate) : "..."}
                        </span>
                      </div>
                    </div>
                  ) : (
                    <span className="text-sm md:text-base lg:text-lg font-serif opacity-80 text-[#fefcf9]!">
                      Check in | Check out
                    </span>
                  )}
                </span>
                <i
                  className={`fa-solid fa-calendar-days shrink-0 text-[#efe2d2]/70 group-hover:text-[#bf885e] transition-colors ${isCalendarOpen ? "text-[#bf885e]" : ""}`}
                ></i>
              </div>

              {isCalendarOpen && (
                <div
                  ref={calendarRef}
                  className="absolute top-full mt-2 left-0 w-[calc(100vw-2rem)] md:w-[600px] lg:w-[700px] bg-white shadow-2xl p-4 md:p-8 lg:p-10 z-[100] animate-fade-in-down rounded-lg -ml-0 sm:ml-0 overflow-y-auto max-h-[80vh] md:max-h-none"
                >
                  <div className="flex items-center justify-between mb-6 md:mb-8 border-b border-[#efe2d2] pb-4 md:pb-6">
                    <div className="text-[8px] md:text-[10px] font-bold tracking-[0.1em] md:tracking-[0.2em] text-[#8d5527]/60 uppercase overflow-hidden text-ellipsis whitespace-nowrap">
                      RANGE:{" "}
                      <span className="text-[#8d5527]">
                        {startDate ? formatDate(startDate) : "..."} |{" "}
                        {endDate ? formatDate(endDate) : "..."}
                      </span>
                    </div>
                    <button
                      onClick={() => setIsCalendarOpen(false)}
                      className="bg-[#bf885e] text-white text-[8px] md:text-[9px] font-bold py-1.5 md:py-2 px-4 md:px-6 tracking-widest uppercase hover:bg-[#8d5527] transition-all shrink-0"
                    >
                      CLOSE
                    </button>
                  </div>
                  <div className="flex flex-col md:flex-row gap-8 md:gap-12 lg:gap-16">
                    <MonthCalendar
                      year={currentYear}
                      month={currentMonth}
                      title={`${monthNames[currentMonth]} ${currentYear}`}
                    />
                    <div className="hidden md:block w-[1px] bg-[#efe2d2] self-stretch"></div>
                    <MonthCalendar
                      year={nextYear}
                      month={nextMonth}
                      title={`${monthNames[nextMonth]} ${nextYear}`}
                    />
                  </div>
                </div>
              )}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 md:gap-6 w-full sm:w-auto">
              <div className="w-full sm:w-1/2 md:w-32 lg:w-36">
                <label className="text-[9px] md:text-[10px] font-bold tracking-[0.2em] md:tracking-[0.3em] uppercase block mb-3 md:mb-4 text-[#fefcf9]/90!">
                  ADULTS
                </label>
                <div className="border border-white/20 h-16 md:h-20 p-4 md:p-6 flex items-center justify-between group hover:border-[#bf885e] transition-all bg-transparent">
                  <span className="text-3xl md:text-5xl font-serif text-[#fefcf9]! leading-none">
                    {adults}
                  </span>
                  <div className="flex flex-col gap-2 md:gap-3">
                    <button
                      onClick={() => setAdults((prev) => prev + 1)}
                      className="text-[#efe2d2]/70 hover:text-white transition-colors text-[10px] md:text-xs"
                    >
                      <i className="fa-solid fa-chevron-up"></i>
                    </button>
                    <button
                      onClick={() => setAdults((prev) => Math.max(1, prev - 1))}
                      className="text-[#efe2d2]/70 hover:text-white transition-colors text-[10px] md:text-xs"
                    >
                      <i className="fa-solid fa-chevron-down"></i>
                    </button>
                  </div>
                </div>
              </div>

              <div className="w-1/2 md:w-32 lg:w-36">
                <label className="text-[9px] md:text-[10px] font-bold tracking-[0.2em] md:tracking-[0.3em] uppercase block mb-3 md:mb-4 text-[#fefcf9]/90!">
                  CHILDREN
                </label>
                <div className="border border-white/20 h-16 md:h-20 p-4 md:p-6 flex items-center justify-between group hover:border-[#bf885e] transition-all bg-transparent">
                  <span className="text-3xl md:text-5xl font-serif text-[#fefcf9]! leading-none">
                    {children}
                  </span>
                  <div className="flex flex-col gap-2 md:gap-3">
                    <button
                      onClick={() => setChildren((prev) => prev + 1)}
                      className="text-[#efe2d2]/70 hover:text-white transition-colors text-[10px] md:text-xs"
                    >
                      <i className="fa-solid fa-chevron-up"></i>
                    </button>
                    <button
                      onClick={() =>
                        setChildren((prev) => Math.max(0, prev - 1))
                      }
                      className="text-[#efe2d2]/70 hover:text-white transition-colors text-[10px] md:text-xs"
                    >
                      <i className="fa-solid fa-chevron-down"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <button
              onClick={handleSearch}
              className="h-16 md:h-20 bg-[#bf885e] px-6 md:px-10 text-[10px] md:text-[11px] font-bold tracking-[0.2em] md:tracking-[0.3em] uppercase hover:bg-[#f6efe7] hover:text-[#8d5527] transition-all whitespace-nowrap shadow-xl text-[#fefcf9]! w-full xl:w-auto mt-4 md:mt-0 flex items-center justify-center gap-2 md:gap-3 group shrink-0"
            >
              <span>CHECK AVAILABILITY</span>
              <i className="fa-solid fa-arrow-right text-[10px] transition-transform group-hover:translate-x-1"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AvailabilityBar;
