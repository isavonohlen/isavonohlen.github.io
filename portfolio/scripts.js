function flipCard(card) {
  card.classList.toggle('flipped');
}

let flipped = false;

function flipCard(card) {
  if (flipped) {
    // Wenn bereits gedreht, drehen wir die Karte zurück
    card.classList.remove('flipped');
    card.classList.add('reverse-flipped'); // Reverse Drehung
  } else {
    // Wenn noch nicht gedreht, führen wir den Flip aus
    card.classList.add('flipped');
    card.classList.remove('reverse-flipped');
  }

  // Toggle den Zustand der Drehung
  flipped = !flipped;
}
