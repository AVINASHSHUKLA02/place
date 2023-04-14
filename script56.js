var circle = document.querySelector("#circle");
var frame = document.querySelector(".frame");

window.addEventListener("mousemove",function(dets){
    gsap.to(circle,{
        x:dets.clientX,
        y:dets.clientY,
        // duration:.2,
        ease:Expo,
        delay:0.5
    }) 



});
gsap.from('#one', {
    stagger: .3,
    duration: 2,
    y: 20,
    // delay: 7,
    ease: 'Expo.easeInOut',
    opacity: 0
})
gsap.from('#two', {
    stagger: .3,
    duration: 2,
    scrollTrigger: {
        trigger: "#two",
        start: "top 0%",
        pin: true,
        scrub: 1,
        end: "+=500px",
      },
    y: 20,
    // delay: 7,
    ease: 'Expo.easeInOut',
    // opacity: 0
})
var cl = document.querySelector("#ar");
cl.addEventListener("click",function(){
    

    gsap.to('.imgs', {
        stagger: .3,
        duration: 2,
        y: 20,
        // delay: 7,
        ease: 'Expo.easeInOut',
        opacity: 1
    })
    gsap.from('#nav', {
        stagger: .3,
        // duration: 2,
        y: 10,
        // delay: 7,
        ease: 'Expo.easeInOut',
        // opacity: 1
    })
    gsap.to('.jk', {
        stagger: .3,
        duration: 2,
        y: 20,
        // delay: 7,
        ease: 'Expo.easeInOut',
        opacity: 0
    })
    gsap.to('.new', {
        stagger: .5,
        duration: 2,
        y: 20,
        // delay: 7,
        ease: 'Expo.easeInOut',
        opacity: 1
    })
}
)
var cl = document.querySelector("#arrr");
cl.addEventListener("click",function(){
    

    gsap.to('.imgs', {
        stagger: .3,
        duration: 2,
        // y: 20,
        // delay: 7,
        ease: 'Expo.easeInOut',
        opacity: 0
    })
    gsap.from('#nav', {
        stagger: .3,
        // duration: 2,
        y: 10,
        // delay: 7,
        ease: 'Expo.easeInOut',
        opacity: 1
    })
    gsap.to('.jk', {
        stagger: .3,
        duration: 2,
        // y: 20,
        // delay: 7,
        ease: 'Expo.easeInOut',
        opacity: 1
    })
    gsap.to('.new', {
        stagger: .5,
        duration: 2,
        // y: 20,
        // delay: 7,
        ease: 'Expo.easeInOut',
        opacity: 0
    })
}
)

