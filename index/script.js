function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}
const seclist = [
    "introduction-container",
    "skills-container",
    "insights-container",
    "rewards-container",
    "socials-container"
]
var shallSkillAnimPlay = true ;
var shallInsightsAnimPlay = true ;
var shallRewardAnimPlay = true ;
var shallSocialAnimPlay = true ;
var navs ;
window.onload = ()=>{
    navs = [
        document.getElementById("intro-nav"),
        document.getElementById("skill-nav"),
        document.getElementById("ins-nav"),
        document.getElementById("rew-nav"),
        document.getElementById("soc-nav"),
    ]
    navs.forEach((element,index,elems)=>[
        element.onclick = (event)=>{
            var scroller = seclist[navs.indexOf(event.target)];
            document.getElementById(scroller).scrollIntoView({behavior : "smooth"});
        }
    ])
}

document.getElementById("box-container").onscroll = ()=>{
    for(var i = 0 ; i < seclist.length ; i++){
        if(isInViewport(document.getElementById(seclist[i]))){
            navs[i].style.transform = "translateX(-2rem)";
        }
        else{;
            navs[i].style.transform = "translateX(-0rem)";
        }
    }


    var skillContainer = document.getElementById("skills-box-container");
    if(isInViewport(skillContainer.parentElement) && shallSkillAnimPlay){
        // skillContainer.classList.add("sectionanim")
        skillContainer.style["transform"] = "translateY(0rem)";
        skillContainer.style["opacity"] = "1";
        shallSkillAnimPlay = false;
    }
    var insghtsContainer = document.getElementById("list-container");
    if(isInViewport(insghtsContainer.parentElement) && shallInsightsAnimPlay){
        // insghtsContainer.classList.add("sectionanim")
        insghtsContainer.style["transform"] = "translateY(0rem)";
        insghtsContainer.style["opacity"] = "1";
        shallInsightsAnimPlay = false;
    }
    var rewardsContainer = document.getElementById("rewards-list");
    if(isInViewport(rewardsContainer.parentElement) && shallRewardAnimPlay){
        // rewardsContainer.classList.add("sectionanim")
        rewardsContainer.style["transform"] = "translateY(0rem)";
        rewardsContainer.style["opacity"] = "1";
        shallRewardAnimPlay = false;
    }
    var socialContainer = document.getElementsByClassName("socials-container-div")[0];
    if(isInViewport(socialContainer.parentElement) && shallSocialAnimPlay){
        // socialContainer.classList.add("sectionanim")
        socialContainer.style["transform"] = "translateY(0rem)";
        socialContainer.style["opacity"] = "1";
        shallSocialAnimPlay = false;
    }
}

