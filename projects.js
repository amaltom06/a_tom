// Function to fetch GitHub projects
async function fetchGitHubProjects() {
    try {
      // Fetch public repositories from GitHub API (use your username)
      const response = await fetch('https://api.github.com/users/amaltom06/repos');
  
      if (!response.ok) {
        throw new Error('Failed to fetch GitHub repositories');
      }
  
      const repos = await response.json();
      displayProjects(repos);
    } catch (error) {
      console.error('Error fetching GitHub projects:', error);
    }
  }
  
  // Function to display projects in the carousel
  function displayProjects(repos) {
    const carouselContent = document.getElementById('carouselContent');
    let isActive = true;
  
    repos.forEach((repo, index) => {
      // Create carousel item for each repo
      const carouselItem = document.createElement('div');
      carouselItem.className = `carousel-item ${isActive ? 'active' : ''}`;
      isActive = false;
  
      carouselItem.innerHTML = `
        <div class="carousel-content text-center">
          <h5>${repo.name}</h5>
          <p>${repo.description || 'No description provided.'}</p>
          <a href="${repo.html_url}" target="_blank" class="btn btn-primary">View on GitHub</a>
        </div>
      `;
  
      carouselContent.appendChild(carouselItem);
    });
  }
  
  // Fetch projects on page load
  document.addEventListener("DOMContentLoaded", fetchGitHubProjects);
  