function openModal(missionId) {
    const modal = document.getElementById("myModal");
    const modalText = document.getElementById("modal-text");
    const source = document.getElementById(missionId);

    if (source) {
        modalText.innerHTML = source.innerHTML;
        modal.style.display = "flex"; 
        document.body.style.overflow = "hidden";
    }
}

function closeModal() {
    document.getElementById("myModal").style.display = "none";
    document.body.style.overflow = "auto";
}

// Fermeture si on clique sur le fond noir
window.onclick = function(event) {
    const modal = document.getElementById("myModal");
    if (event.target == modal) {
        closeModal();
    }
}

// On utilise l'Intersection Observer pour animer les éléments
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.timeline-item').forEach(item => {
  item.style.opacity = '0';
  item.style.transform = 'translateY(20px)';
  item.style.transition = 'all 0.6s ease-out';
  observer.observe(item);
});

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~PROJETS~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

const carousel = document.getElementById('projectCarousel');

// Fonction pour faire défiler le carrousel
function scrollCarousel(direction) {
  const scrollAmount = 320; // Largeur d'une carte + le gap
  carousel.scrollBy({
    left: direction * scrollAmount,
    behavior: 'smooth'
  });
}

// Fonctions pour le Popup (Mise à jour avec le paramètre 'link')
function openPopup(title, description, link) {
  document.getElementById('popupTitle').innerText = title;
  document.getElementById('popupDesc').innerHTML = description;
  
  // On récupère le bouton "Voir plus" et on lui donne l'adresse de la page
  const popupLink = document.getElementById('popupLink');
  if (popupLink) {
    popupLink.href = link;
  }
  
  document.getElementById('popup').style.display = 'flex';
}

function closePopup() {
  document.getElementById('popup').style.display = 'none';
}

// Fermer le popup si on clique en dehors de la fenêtre blanche
window.onclick = function(event) {
  const popup = document.getElementById('popup');
  if (event.target == popup) {
    closePopup();
  }
}

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~PROJETS~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~


