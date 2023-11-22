var dayNames = ['NED', 'PON', 'UTO', 'STR', 'ŠTV', 'PIA', 'SOB'];
var days = [];

for (let i = 0; i <= 10; i++) {
    let date = new Date();
    date.setDate(date.getDate() + i);
    let dayName = dayNames[date.getDay()];
    let day = date.getDate();
    let month = date.getMonth()+1;
    let times = [];
    for (let i = 7; i <= 16; i++) {
        for (let j = 0; j <= 1; j++) {
            let time = i.toString() + ':';
            if(j == 0)
                time = time + '00';
            else
                time = time + '30';
            let id = day.toString() + '.' + month.toString() + '.' + date.getYear().toString() + '.' + time.toString();
            let reserved =  "";
            times.push({time: time, id: id, reserved: reserved});
        }
    }
    this.days.push({
        name: dayName, 
        date: day.toString() + '.' + month.toString() + '.',
        times
    });
}

const timeslots = Vue.createApp({
    data() {
        return {
            days
        }
    }
});

timeslots.mount('#timeslots-box');