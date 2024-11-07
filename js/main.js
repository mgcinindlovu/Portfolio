// Array of projects
const projects = [
  {
    title: 'Mgcini Portfolio',
    description: "A showcase of Mgcini's personal portfolio and projects.",
    url: ' https://mgcinindlovu.github.io/Portfolio/'
  },
  {
    title: 'Carwebsite',
    description: "A showcase of carwebsite projects.",
    url: 'https://mgcinindlovu.github.io/carwebsite/'
  },
  {
    title: 'Shoptacle',
    description: 'A showcase of Shoptacle project.',
    url: ' https://mgcinindlovu.github.io/shoptacle/'
  },
  {
    title: 'Food App',
    description: 'A collection Food App design project.',
    url: 'https://www.figma.com/proto/6zgjLbVO6oDUC8bVoxSV38/Untitled?page-id=&node-id=309-660&node-type=frame&viewport=812%2C385%2C0.28&t=ve5jEKK0Hli04KaN-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=309%3A611'
  },
  {
    title: 'Waste Application',
    description: "A showcase of Mgcini's first design project.",
    url: 'https://www.figma.com/design/6zgjLbVO6oDUC8bVoxSV38/Untitled?node-id=0-1&t=UT0DKweGFKEyrCKl-1'
  },
  
  
 
  {
    title: 'Project 3',
    description: "A showcase of Web Development Project 3  .",
    url: ' https://mgcinindlovu.github.io/peacock-selective/'
  },
  {
    title: 'Real  Estate Project',
    description: "A showcase of Design Real Estate project.",
    url: '../images/real.png'
  },
  {
    title: 'Watch project',
    description: "A showcase of Design Watch project.",
    url: 'https://www.figma.com/proto/z1nBO1jZRnYCdVxt1OE9sV/Untitled?page-id=160%3A2&node-id=178-17&node-type=canvas&viewport=508%2C-1889%2C0.37&t=pFK18b8nYq0PtRja-1&scaling=scale-down-width&content-scaling=fixed',
  },
  {
    title: 'Jameson',
    description: "A showcase of Design Jameson project.",
    url: 'https://www.figma.com/design/z1nBO1jZRnYCdVxt1OE9sV/Untitled?node-id=0-1&t=g2z29FFT9fNBRHEK-1',
  },
  {
    title: 'Project 1',
    description: "A showcase of Project 1 and project.",
    url: ' https://mgcinindlovu.github.io/coworkspace/',
  },
];

// Function to load projects
function loadProjects() {
  const projectList = document.getElementById('project-list');
  
  projects.forEach((project) => {
    const projectCard = document.createElement('div');
    projectCard.className = 'project-card';

    projectCard.innerHTML = `
      <h2>${project.title}</h2>
      <p>${project.description}</p>
      <iframe src="${project.url}" title="${project.title}" class="project-iframe"></iframe>
    `;

    projectList.appendChild(projectCard);
  });
}

// Load projects when DOM is fully loaded
document.addEventListener("DOMContentLoaded", loadProjects);
