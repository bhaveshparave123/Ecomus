

// top swiper

var swiper = new Swiper(".myTopSwiper", {
    slidesPerView: "1",
    spaceBetween: 30,
    autoplay:{
        delay :2500,
        disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });

// swiper hero 

var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    autoplay:{
        delay :2000,
        disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });


//   category swiper

var swiper = new Swiper(".myCateSwiper", {
    slidesPerView: 4,
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });

  // 
  var swiper = new Swiper(".myCateSwiperphone", {
    slidesPerView: 1,
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });


  // trending 

  var swiper = new Swiper(".mytrending", {
    slidesPerView: 4,
    spaceBetween: 30,
    autoplay:{
      delay :2000,
      disableOnInteraction: false,
  },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });

  // 
  var swiper = new Swiper(".mytrendingphone", {
    slidesPerView: 1,
    spaceBetween: 30,
    autoplay:{
      delay :2000,
      disableOnInteraction: false,
  },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });

  // happy

  var swiper = new Swiper(".myhappy", {
    slidesPerView: 3,
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });

// 
  var swiper = new Swiper(".myhappyphone", {
    slidesPerView: 1,
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });

    // blog

    var swiper = new Swiper(".myblog", {
      slidesPerView: 3,
      spaceBetween: 30,
      autoplay:{
        delay:1000,
        disableOnInteraction:false,
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });

    // 
    var swiper = new Swiper(".myblogphone", {
      slidesPerView: 1,
      spaceBetween: 30,
      autoplay:{
        delay:1000,
        disableOnInteraction:false,
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });



//     // discount 3
    
//     function time(){
//       var neww = new Date();

//      var hour= neww.getHours()+6;
//      var minute= neww.getMinutes();
//     //  var second= neww.getSeconds();

//      document.getElementById("hour").innerHTML=hour;
//      document.getElementById("minute").innerHTML=minute;
//     //  document.getElementById("second").innerHTML=second;

//     }
// setInterval(
//     time,1000);


// var second=60;
// var minute=12;
// var hour=6;
//     function secondA(){
//       setInterval(function(){
//         if(second>0 ){
//           second--;
//            document.getElementById("second").innerHTML=second;
//            if(second == 0){
//             second=60;
//             document.getElementById("second").innerHTML=second;
//            }
//         }
//       },1000);
//     }
//     secondA()

//     function mimuteA(){
//     setInterval(function(){
//       if(minute>0 ){
//          minute--;
//           document.getElementById("minute").innerHTML=minute;
//           if(minute == 0){
//            minute=60;
//            document.getElementById("minute").innerHTML=minute;
//           }
//        }
//        // else{
//        //   clearInterval(timerint);
//        //   document.querySelector("second").innerHTML=timer;
//        // }
//      },60000);
//     }
//     mimuteA()

//     function hourA(){
//       setInterval(function(){
//         if(hour>0){
//           hour--;
//           document.getElementById("hour").innerHTML=hour;
//           if(hour == 0){
//             hour=12;
//             document.getElementById("hour").innerHTML=hour;
//           }
//         }
//       },600000)
//     }

//     hourA()

    let time = { hour: 6, minute: 12, second: 60 };

    function updateTimer() {
      // Decrease seconds
      if (time.second > 0) {
        time.second--;
      } else {
        time.second = 59;

        // Decrease minutes
        if (time.minute > 0) {
          time.minute--;
        } else {
          time.minute = 59;

          // Decrease hours
          if (time.hour > 0) {
            time.hour--;
          } else {
            time.hour = 12; // Reset hours
          }
        }
      }

      // Update DOM
      document.getElementById("second").textContent = time.second.toString().padStart(2, "0");
      document.getElementById("minute").textContent = time.minute.toString().padStart(2, "0");
      document.getElementById("hour").textContent = time.hour.toString().padStart(2, "0");
    }

    // Run the timer every second
    setInterval(updateTimer, 1000);