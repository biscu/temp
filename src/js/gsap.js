import { gsap } from "gsap";
import { SplitText } from "gsap/SplitText";
import { CustomEase } from "gsap/CustomEase";

gsap.registerPlugin(SplitText);
gsap.registerPlugin(CustomEase);



    let mySplitText1 = new SplitText('.header', { type: 'words', wordsClass: "parentClass" });
    let mySplitText2 = new SplitText('.header', { type: 'words', wordsClass: "childClass" });

    gsap.set('.header', {autoAlpha: 1,});


    const tl = gsap.timeline();

    tl.from(mySplitText2.words, {
        duration:1,
        y: 55,
        ease: CustomEase.create("custom", "M0,0 C0.536,0.23 0.314,1 1,1 "),
        stagger: 0.04,
        delay: 0.2,
        skewX: 5,
        skewY: 5,
    });





let mySplitText3 = new SplitText('.paragraph', { type: 'words', wordsClass: "parentClass" });
let mySplitText4 = new SplitText('.paragraph', { type: 'words', wordsClass: "childClass" });


gsap.set('.paragraph', {autoAlpha: 1,});


const tl2 = gsap.timeline();

tl2.from(mySplitText4.words, {
    duration:1,
    y: 55,
    ease: CustomEase.create("custom", "M0,0 C0.536,0.23 0.314,1 1,1 "),
    stagger: 0.01,
    delay: 0.7,
    skewX: 5,
    skewY: 5,
});



let mySplitText6 = new SplitText('.row-item', { type: 'lines', linesClass: "childClass" });
let mySplitText5 = new SplitText('.row-item', { type: 'lines', linesClass: "parentClass" });


gsap.set('.row-item', {autoAlpha: 1,});


const tl3 = gsap.timeline();

tl3.from(mySplitText6.lines, {
    duration:1,
    y:30,
    ease: CustomEase.create("custom", "M0,0 C0.536,0.23 0.314,1 1,1 "),
    stagger: 0.08,
    delay: 1.3,
});


