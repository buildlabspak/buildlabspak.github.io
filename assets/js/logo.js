// Hero logo: gentle pointer-follow tilt (CSS handles the idle float).
(function(){
  var stage=document.getElementById('stage'),logo=document.getElementById('logo3d');
  if(!stage||matchMedia('(prefers-reduced-motion: reduce)').matches){return;}
  stage.addEventListener('pointermove',function(e){
    var r=stage.getBoundingClientRect(),x=(e.clientX-r.left)/r.width-.5,y=(e.clientY-r.top)/r.height-.5;
    logo.style.transform='rotateX('+(-y*14).toFixed(1)+'deg) rotateY('+(x*22).toFixed(1)+'deg)';
  });
  stage.addEventListener('pointerleave',function(){logo.style.transform='';});
})();
