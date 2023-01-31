$(document).ready(function(){

    //store and save clicks

    $('.saveBtn').on('click', function(){
        console.log('do');
    
        let time = $(this).parent().attr('id');
        let value = $(this).siblings('.description').val();

        console.log(time);
        console.log(value);

        // saving to local storage
        localStorage.setItem(time, value)
        $('.notification').addClass('show');
        
        //removing save noti
        setTimeout(function(){
            $('.notification').removeClass('show');

        }, 5000)
     })

     //hourly updates using moment.js 

     function hourlyUpdates(){
        let currentHour = moment().hours();

        for(let index=0; index < $(".time-block").length; index++){
            let hour = parseInt($(".time-block")[index].getAttribute('id').split('-')[1]);
            console.log(hour);

            if(hour < currentHour){
                $('.time-block')[index].classList.add('past')
            } else if(hour === currentHour){
                $('.time-block')[index].classList.add('past')
                $('.time-block')[index].classList.add('present')
                
            } else {
                $('.time-block')[index].classList.add('past')
                $('.time-block')[index].classList.add('present')
                $('.time-block')[index].classList.add('future')
            }


        }
     }

    hourlyUpdates();

    let interval = setInterval(hourlyUpdates, 15000);

    $('hour-9 description').val(localStorage.getItem('hour-9'))

    $('#currentDay').text(moment().format('dddd, MMMM, Do'))


})