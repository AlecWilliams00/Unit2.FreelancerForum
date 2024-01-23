document.addEventListener("DOMContentLoaded", function() {
    const freelancers = [
      { name: "Bob", price: 20, occupation: "Lawn Maintenance" },
      { name: "Robert", price: 70, occupation: "Programmer" },
      { name: "Austin", price: 40, occupation: "Teacher" },
    ];
  
    function createFreelancerCard(name, occupation, cost) {
      let freelancerCardParent = document.createElement("div");
      freelancerCardParent.className = "freelancerCard";
  
      let nameP = document.createElement("p");
      nameP.className = "name";
      nameP.textContent = "Name: " + name;
  
      let occupationP = document.createElement("p");
      occupationP.className = "occupation";
      occupationP.textContent = "Occupation: " + occupation;
  
      let costP = document.createElement("p");
      costP.className = "cost";
      costP.textContent = "Cost: $" + cost;
  
      freelancerCardParent.append(nameP, occupationP, costP);
  
      return freelancerCardParent;
    }
  
    function initialFreelancers(freelancersArray) {
      for (let i = 0; i < freelancersArray.length; i++) {
        let freelancerCard = createFreelancerCard(
          freelancersArray[i].name,
          freelancersArray[i].occupation,
          freelancersArray[i].price
        );
        
        document.body.appendChild(freelancerCard);
      }
    }
  
    function generateRandomFreelancer() {
      const possibleNames = ['John', 'Jane', 'Alex', 'Emily', 'Chris'];
      const possibleOccupations = ['Designer', 'Developer', 'Writer', 'Consultant', 'Photographer'];
      const randomName = possibleNames[Math.floor(Math.random() * possibleNames.length)];
      const randomOccupation = possibleOccupations[Math.floor(Math.random() * possibleOccupations.length)];
      const randomPrice = Math.floor(Math.random() * 100) + 20; 
      // Random price between $20 and $120
      const newFreelancer = { name: randomName, occupation: randomOccupation, price: randomPrice };
  
      return newFreelancer;
    }
  
    function renderNewFreelancer() {
      const newFreelancer = generateRandomFreelancer();
      let freelancerCard = createFreelancerCard(newFreelancer.name, newFreelancer.occupation, newFreelancer.price);
      document.body.appendChild(freelancerCard);

      freelancers.push(newFreelancer)
    }
  
    function calculateAverageStartingPrice(freelancersArray) {
      if (freelancersArray.length === 0) {
        return 0; 
      }
  
      let totalStartingPrice = 0;
  
      for (let i = 0; i < freelancersArray.length; i++) {
        totalStartingPrice += freelancersArray[i].price;
      }
  
      return totalStartingPrice / freelancersArray.length;
    }
  
    // Call the function
    initialFreelancers(freelancers);
  
    // Set an interval to generate and render a new freelancer every 5 seconds 
    setInterval(function() {
      renderNewFreelancer();
      // Calculate and log the average starting price each time a new freelancer is added
      console.log('Average Starting Price:', calculateAverageStartingPrice(freelancers).toFixed(2));
    }, 3000);
  });

