document.addEventListener('DOMContentLoaded', () => {

  if (window.lucide) {
    window.lucide.createIcons();
  }

  const appointmentForm = document.getElementById('appointmentForm');

  if (appointmentForm) {
    appointmentForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const prenom = document.getElementById('prenom').value.trim();
      const telephone = document.getElementById('telephone').value.trim();
      const service = document.getElementById('service').value;
      const date = document.getElementById('date').value;
      const heure = document.getElementById('heure').value;

      const template = "Bonjour Cabinet dentaire Richarlayne, je souhaite planifier un rendez-vous. Voici mes informations :\n" +
                       "- Prénom : " + prenom + "\n" +
                       "- Numéro : " + telephone + "\n" +
                       "- Soin : " + service + "\n" +
                       "- Date souhaitée : " + date + "\n" +
                       "- Heure souhaitée : " + heure;

      const whatsappURL = "https://wa.me/22960911818?text=" + encodeURIComponent(template);

      window.open(whatsappURL, '_blank');
    });
  }
});
