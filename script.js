document.addEventListener("DOMContentLoaded", () => {
    const projects = [
      { name: "Mental Health System", link: "https://solacelink.onrender.com/" },
      { name: "Voice Sunthesizer for fun", link: "https://superreply.onrender.com/" },
      
    ];
  
    const projectLinks = document.getElementById("project-links");
  
    projects.forEach((project) => {
      const col = document.createElement("div");
      col.className = "col-md-4 mb-3";
      col.innerHTML = `
        <div class="card">
          <div class="card-body text-center">
            <h5 class="card-title">${project.name}</h5>
            <a href="${project.link}" target="_blank" class="btn btn-primary">Learn More</a>
          </div>
        </div>
      `;
      projectLinks.appendChild(col);
    });
  });
  