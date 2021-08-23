setInterval(() => {
    d = new Date();
    htime = d.getHours();
    mtime = d.getMinutes();
    stime = d.getSeconds();
    hrotation = 30*htime + mtime/2 + stime/12;
    mrotation = 6*mtime;
    srotation = 6*stime;

    hour.style.transform = `rotate(${hrotation}deg)`;
    minute.style.transform = `rotate(${mrotation}deg)`;
    second.style.transform = `rotate(${srotation}deg)`;

    let a = new Date();
    let time = a.getHours() - 12 + ":" + a.getMinutes() + ":" + a.getSeconds() + " " + ampm(a.getHours());
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    let date = a.toLocaleDateString(undefined, options);
    document.getElementById('time').innerHTML = time + "<br>" + date;
}, 1000);


ampm = (x)=>{
    if (x>12) {
        return "pm";
        
    } else {

        return "am";
        
    }
}

