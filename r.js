gsap.to(".nav", {
    backgroundColor: "#000",
    duration: 0.5,
    height: "90px",
    scrollTrigger: {
        trigger: ".nav",
        scroller: "body",
        start: "top -10%",
        end: "top -10%",
        scrub: 1
    }
})
gsap.to("#colon1", {
    x: 80,
    y: 30,
    scrollTrigger: {
        trigger: "#colon1",
        scroller: "body",
        markers: false,
        start: "top 60%",
        end: "top 55%",
        scrub: 3
    }
})
gsap.to("#colon2", {
    x: -80,
    y: -40,
    scrollTrigger: {
        trigger: "#colon2",
        scroller: "body",
        markers: false,
        start: "top 60%",
        end: "top 55%",
        scrub: 3
    }
})
gsap.to(".mi", {
    backgroundColor: "#000",
    scrollTrigger: {
        trigger: ".mi",
        scroller: "body",
        markers: false,
        start: "top -30%",
        end: "top -100%",
        scrub: 3
    }
})
gsap.to(".top", {
    y: -130,
    scrollTrigger: {
        trigger: ".top",
        scroller: "body",
        start: "top 60%",
        end: "top 60%",
        scrub: 3
    }
})
gsap.to("#ji", {
    x: 140,
    scrollTrigger: {
        trigger: "#ji",
        scroller: "body",
        start: "top 55%",
        end: "top 55%",
        scrub: 3
    }
})
gsap.to("#kri", {
    x: -140,
    scrollTrigger: {
        trigger: "#kri",
        scroller: "body",
        start: "top 55%",
        end: "top 55%",
        scrub: 3
    }
})
gsap.to("#about p", {
    color:"#95C11E",
    scrollTrigger: {
        trigger: "#about p",
        scroller: "body",
        start: "top 55%",
        end: "top 55%",
        scrub: 3
    }
})
// gsap.to("#about h1", {
//     color:"#95C11E",
//     scrollTrigger: {
//         trigger: "#about h1",
//         scroller: "body",
//         start: "top 55%",
//         end: "top 55%",
//         scrub: 3
//     }
// })
gsap.to(".ete p", {
   color:"#95C11E",
//    backgroundColor:"#000",
    scrollTrigger: {
        trigger: ".ete p",
        scroller: "body",
        markers: false,
        start: "top 60%",
        end: "top 55%",
        scrub: 1
    }
})
gsap.to("#about", {
       backgroundColor:"#000",
    scrollTrigger: {
        trigger: "#about",
        scroller: "body",
        start: "top 55%",
        end: "top 55%",
        scrub: 3
    }
})
var tl= gsap.timeline({
    repeat: -1
});
tl
.to(".ete p", {
    ease: Expo.easeInOut,
    stagger: 2,
    top:0
 },'a')
  .to(".ete p", {
    ease: Expo.easeInOut,
    stagger: 2,
    top: "-100%",
    delay: 2
  },'a')