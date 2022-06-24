// app.js

$(function(){

    // 시간재생 - 매 1초마다 재생
    setInterval(function(){

        let d = new Date();
        let h = d.getHours(); // 시간
        let m = d.getMinutes(); // 분
        let s = d.getSeconds(); // 초
    
        let month = d.getMonth() + 1;
        let date = d.getDate();

        $('.month').html(month);
        $('.date').html(date);

        let week = d.getDay();
        
        if(week == 0) {week = 'SUN'};
        if(week == 1) {week = 'MON'};
        if(week == 2) {week = 'TUE'};
        if(week == 3) {week = 'WED'};
        if(week == 4) {week = 'THU'};
        if(week == 5) {week = 'FRI'};
        if(week == 6) {week = 'SAT'};

        $('.week').html(week);

        // 0 ~ 9까지는 앞에 0 표시
        if(s < 10) {
            s = '0' + s;
        }
        if(m < 10) {
            m = '0' + m;
        }
        if(h < 10) {
            h = '0' + h;
        }
        
        // 오전/오후 표시
        if(h < 12) {
            h = 'AM ' + h;
        }
        else {
            h = 'PM ' + h;
        }

        // if(m >= 10) {
        //     alert('휴식시간');
        // }

        if(m == 50) {
            if(s == 00){
                /*alert('휴식시간');*/
                $(function(){
                    $('.container').addClass('on')
                })
            };
        }
    
        $('.container').click(function(){
            $('.container').removeClass('on')
        })

        // 시간표시
        $('.hour').html(h);
        $('.min').html(m);
        $('.sec').html(s);

    }, 1000);
});