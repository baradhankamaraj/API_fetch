const cards = document.getElementsByClassName("cards");
const arr = [];
const imgUrl = "https://robohash.org";
const url = "https://jsonplaceholder.typicode.com/users";

async function fetchData() {
  try{

 
  const response = await fetch(url);
  const data = await response.json();
  arr.push(...data);
  cardsGenerator(arr);
  }
catch(error){
  return error;
}
}
fetchData();

function cardsGenerator(arr){
    cards[0].innerHTML ="";
    arr.forEach((information) => {
      const card = document.createElement("div");
      card.setAttribute("class", "cardDisplay");

      let personDetails = "";
      personDetails += `<h3 style="font-weight:bold;">${information.name}</h3>
                                                <p><i class='bx bxs-map'>${information.address.suite}, ${information.address.street}</i></p>
                                                <p class='add'>${information.address.city},</p>
                                                <p class='add'>${information.address.zipcode}.</p>
                                                <p  id="contact" ><i  class='bx bxs-phone'> ${information.phone}</i></p>`;
      let newUrl = `${imgUrl}/${information.id}`;

      let img = `<img src= ${newUrl} alt='robot_image'>`;

      const info = document.createElement("div");
      info.setAttribute("class", "info");

      const image = document.createElement("div");
      image.setAttribute("class", "robo");

      
      image.innerHTML = img;
      info.innerHTML = personDetails;
      card.appendChild(image);
      card.appendChild(info);
      cards[0].appendChild(card);
    });

  }
  





function showSearch() {
  const searcher = document
    .getElementById("search1")
    .value.trim()
    .toLowerCase();
  const list = arr.filter((user) => user.name.toLowerCase().includes(searcher));

    cardsGenerator(list);
  
}
 
