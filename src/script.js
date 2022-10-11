const createDateClock = () => {
    setInterval(() => {
        let date = new Date();

        let clock = document.getElementById('clock');
        clock.innerHTML = date.toLocaleString('id-ID', {
            hour: "numeric", minute: "numeric", second: "numeric"
        });

        let ddMmYy = document.getElementById('ddMmYy');
        ddMmYy.innerHTML = date.toLocaleString('id-ID', {
            weekday: "long", day: "numeric", month: "long", year: "numeric"
        });
    }, 1000);
}

const dateClock = createDateClock;
dateClock();