$(document).ready(function() {
  // init controller
  var controller = new ScrollMagic.Controller();

  var wipeAnimation = new TimelineMax()
    .fromTo('section#chapitre-1', 1, { y: '100%' }, { y: '0%', ease: Linear.easeNone }) // From botton
    .fromTo('section#chapitre-2', 1, { x: '100%' }, { x: '0%', ease: Linear.easeNone }) // From right
    .fromTo('section#chapitre-3', 1, { y: '-100%' }, { y: '0%', ease: Linear.easeNone }) // From top
    .fromTo('section#chapitre-4', 1, { x: '-100%' }, { x: '0%', ease: Linear.easeNone }) // From left
    .fromTo('section#chapitre-5', 1, { x: '-100%' }, { x: '0%', ease: Linear.easeNone })


  // create a scene
  new ScrollMagic.Scene({
      triggerElement: '#container',
      triggerHook: 'onLeave',
      duration: '600%' // = nombre de slides * 100 (pour un scroll naturel)
    })
    .setPin('#container')
    .setTween(wipeAnimation)
    .on("update", function (scene) {
      const progress = scene.target.progress()
      if (progress < 0.16) {
        $('#intro video')[0].play()
      } else {
        $('#intro video')[0].pause()
      }
    })
    .addIndicators()
    .addTo(controller);
});