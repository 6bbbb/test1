fetch('users.json')
    .then(response => response.json())
    .then(data => {
        console.log(data);
        const container = document.querySelector('.cards');
        data.forEach(user => {
            console.log(user);
            const UserDiv = document.createElement('div');
            YoutubeEmbed = extractYouTubeID(user.YoutubeLink);
            UserDiv.innerHTML += `
        <iframe  src="https://www.youtube.com/embed/${YoutubeEmbed}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            <h2>ID       : ${user.ID}</h2>
            <h2>Name     : ${user.FirstName + " " + user.LastName} </h2>
            <h2>Balance  : ${user.Balance} </h2>
            <h2>Gender   : ${user.Gender} </h2>
            <h2>Email    : ${user.Email} </h2>
        `;
            container.appendChild(UserDiv);
        });
    });


function extractYouTubeID(url) {
    const regex = /(?:youtu\.be\/|youtube\.com\/(?:watch\?v=|embed\/|v\/))([^\s&?/]+)/;
    const match = url.match(regex);
    return match ? match[1] : null;
}
//Softwares
fetch('Softwares.json')
    .then(response => response.json())
    .then(data => {
        console.log(data);
        const container = document.querySelector('.softwares');
        data.forEach(software => {
            console.log(software);
            const softwareDiv = document.createElement('div');
            softwareDiv.innerHTML += `
        <img src="${software.AppIconLink}" alt="">
            <h2>${software.AppName}</h2>
            <h2>Level  : ${software.BtecLevel} </h2>
            <a href="${software.AppDownloadLinke}">Download</a>
        <p>${software.AppDescription}</p>

        `;
            container.appendChild(softwareDiv);
        });
    });

