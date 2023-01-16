

let songContainer = document.getElementById('songContainer');
const musicians = ['Pink Floyd', 'Daft Punk', 'Metallica'];
let modalBody = document.getElementsByClassName('modal-body')[0];
let uniqueCounter = [];
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '624ae02b3emsh4797618b358aa86p1c3a1djsn65e61e09845f',
		'X-RapidAPI-Host': 'deezerdevs-deezer.p.rapidapi.com'
	}
};

window.onload = function loadExamples(){
    uniqueCounter = [];
    let counter = 1;
    for (const musician of musicians) {
    fetch(`https://deezerdevs-deezer.p.rapidapi.com/search?q=${musician}`, options)
	.then(response => response.json())
	.then(response => {
for (const object of response.data) {

    songContainer.innerHTML += `
    <div class="col mb-4">
    <div class="card">
      <img src="${object.album['cover']}" class="card-img-top" alt="${object.title}">
      <div class="card-body">
        <h5 class="card-title">${object.title}</h5>
        <p>from <b>${musician}</b><p>
      </div>
    </div>
  </div>`

  modalBody.innerHTML += `${counter}. ${object.title}, <br>`
  counter ++;
 uniqueCounter.push(response.data);
    }
})
	.catch(err => console.error(err));
}

}

function searchSong(){
    uniqueCounter = [];
    let counter = 1;
    songContainer.innerHTML = '';
    modalBody.innerHTML = '';
    let userInput = document.getElementById('user-input').value;
    fetch(`https://deezerdevs-deezer.p.rapidapi.com/search?q=${userInput}`, options)
	.then(response => response.json())
	.then(response => {
         for (const object of response.data) {
            songContainer.innerHTML += `
            <div class="col mb-4">
            <div class="card">
              <img src="${object.album['cover']}" class="card-img-top" alt="${object.title}">
              <div class="card-body">
                <h5 class="card-title">${object.title}</h5>
        
              </div>
            </div>
          </div>`

          modalBody.innerHTML += `${counter}. ${object.title}, <br>`
          counter ++;
          uniqueCounter.push(response.data);
        } 
    })
	.catch(err => console.error(err));
}


function countUnique(){
    console.log(uniqueCounter.length)
}

