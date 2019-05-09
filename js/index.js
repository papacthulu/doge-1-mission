var particles = [ ];
var particleSize = 32;//Math.round((document.body.offsetWidth * document.body.offsetHeight) / 8000);
var particleCount = Math.round((document.body.offsetWidth * document.body.offsetHeight) / 8000);
var nextParticle = 0;
$(document).ready(function() {
  for (var p = 0; p < particleCount; p++) {
    var particle = document.createElement("img");
	particle.src = "media/2.png";
    particle.className = "particle";
    document.body.appendChild(particle);
    particles[particles.length] = particle;
  }
  updateParticles();
});
var updateParticles = function() {
  var p = Math.round(Math.random() * (particles.length - 1));
  nextParticle++;
  nextParticle = nextParticle < particles.length ? nextParticle : 0;
  var top = (Math.round((Math.random() * document.body.offsetHeight - particleSize) / particleSize) * particleSize);
  var left = (Math.round((Math.random() * document.body.offsetWidth - particleSize) / particleSize) * particleSize);
  particles[p].style.opacity = (1.0 + Math.sin(left + top)) / 2.0;
  particles[p].style.width = particles[p].style.height = (particles[p].style.opacity > 0 ? particleSize : 0) + "px";
  particles[p].style.transform = particles[p].style.opacity > 0 ? particles[p].style.opacity > 0.5 ? "rotate(360deg)" : "rotate(0deg)" : "rotate(180deg)";
  particles[p].style.left = left + "px";
  particles[p].style.top = top - 20 + "px";
  setTimeout(function() {
    updateParticles();
  }, 50);
};
