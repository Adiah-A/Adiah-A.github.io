const funFacts = [
    "Je parle couramment Français!",
    "Hot Take Alert: I think Mac and Cheese is overrated (email to argue)"
    //"I'm a coffee connoisseur with over 20 coffee mugs."
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