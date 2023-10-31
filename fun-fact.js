const funFacts = [
    "Big7 - Burna boy",
    "Siamois - Fally Ipupa",
    "AfroTrap, Pt. 7 (La Puissance) - MHD",
    "It's Plenty - Burna boy",
    "City Boys - Burna boy",
    "A Kele Nta - MHD",
    "Tested, Approved & Trusted - Burna boy",
    "Eloko Oyo - Fally Ipupa",
    "For My Hand (feat. Ed Sheeran) - Burna boy",
    "AfroTrap, Pt. 3 (Champions League) - MHD",
    "Alone - Burna boy",
    "Last Last - Burna boy",
    "Location - Burna boy",
    "Tout le Monde - Fally Ipupa",
    "Ye - Burna boy",
    "Ipseite - Damso",
    "Copines - Aya Nakamura",
    "La dot - Aya Nakamura",
    "Feu de bois - Damso",
    "AfroTrap, Pt. 5 (Ngatie Abedi) - MHD"
  ];
  
  // Function to display a random fun fact
  function displayRandomFunFact() {
    const funFactElement = document.getElementById("fun-fact");
    const randomIndex = Math.floor(Math.random() * funFacts.length);
    funFactElement.textContent = funFacts[randomIndex];
  }
  
  // Add an event listener to the "Show Fun Fact" button
  const showFactButton = document.getElementById("show-fact-button");
  showFactButton.addEventListener("click", displayRandomFunFact);