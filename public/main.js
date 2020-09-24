const animate=gsap.timeline();

animate
.from('.headerp', {xPercent:100, scale:0.5, duration:3, ease:'elastic' })
.from('.space', {xPercent:100, scale:0.5, duration:3, ease:'bounce.out'})
.from('.available', {xPercent:100, scale:0.5, duration:3, ease:'bounce.out'}, "<")
.from('.footerp', {xPercent:100, scale:0.5, duration:3, ease:'back(5)' })
