import { getDocs } from 'https://www.gstatic.com/firebasejs/10.6.0/firebase-firestore.js';
import { reservations } from './firebase.js';
 
var dayNames = ['NED', 'PON', 'UTO', 'STR', 'ŠTV', 'PIA', 'SOB'];
var days = [];

let reservedTimeslots = [];
getDocs(reservations).then((snapshot) => {
    snapshot.docs.forEach((doc) => {
        reservedTimeslots.push({ ...doc.data() })
    })
    setupTimeslots();
});

function setupTimeslots() {
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
                if(day == new Date().getDate() && i <= date.getHours())
                    reserved = "reserved";
                for(let i = 0; i < reservedTimeslots.length; i++) {
                    if(reservedTimeslots[i].timeslotID == id) {
                        reserved = "reserved";
                        break;
                    }
                }
                times.push({time: time, id: id, reserved: reserved});
            }
        }
        days.push({
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
}
