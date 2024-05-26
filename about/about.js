document.addEventListener('DOMContentLoaded', function() {
    fetch('../about.json')
      .then(response => response.json())
      .then(data => {
        data.profiles.forEach(profile => {
          displayUserProfile(profile);
        });
      })
      .catch(error => console.error('Error fetching profiles:', error));
  
    function displayUserProfile(profile) {
      const profileContainer = document.getElementById(profile.id);
      profileContainer.innerHTML = `
        <img src="${profile.profilePicture}" alt="${profile.firstName} ${profile.lastName}" class="profile-pic" />
        <h2>${profile.firstName} ${profile.lastName}</h2>
        <div class="profile-info">
          <p><strong>First Name:</strong> ${profile.firstName}</p>
          <p><strong>Last Name:</strong> ${profile.lastName}</p>
          <p><strong>Headline:</strong> ${profile.headline}</p>
          <p><strong>Location:</strong> ${profile.location}</p>
          <p><a href="${profile.linkedin}">View LinkedIn Profile</a></p>
        </div>
      `;
    }
  });
  