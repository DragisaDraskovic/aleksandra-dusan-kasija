import './CalendarButton.css'

const CalendarButton = () => {

    const startDate = "20260905T110000";
    const endDate = "20260906T010000";

      const googleCalendarUrl =
    `https://calendar.google.com/calendar/render?action=TEMPLATE` +
    `&text=Venčanje Aleksandre i Dušana i 1. rođendan Kasijin` +
    `&dates=${startDate}/${endDate}` +
    `&details=Radujemo se vašem dolasku!` +
    `&location=Restoran Barok, Vrbas`;
    // }

  return (

    <a
      href={googleCalendarUrl}

      target="_blank"

      rel="noopener noreferrer"

      className="calendar-button"
    >
      {/* ДОДАЈ У КАЛЕНДАР */}
      DODAJ U KALENDAR
    </a>
  );

}

export default CalendarButton