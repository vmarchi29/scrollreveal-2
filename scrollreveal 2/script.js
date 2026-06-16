const sr = ScrollReveal({
    reset:true,
    duration:2500,
    delay:400,
    distance:'100px'
});

sr.reveal('#child1',{delay:1000,origin:'left',scale:0.3,rotate:{x:30,z:90,y:180}});
sr.reveal('#child2',{delay:1500,origin:'right',scale:1.8,rotate:{x:30,z:180,y:90}});
sr.reveal('#child3',{delay:2000,origin:'bottom',scale:0.3,rotate:{x:90,z:180,y:30}});