const organs = {
  heart: {   
    name: "Сердце",
    description: "Сердце — это мышечный орган, перекачивающий кровь по всему телу. Оно имеет грушевидную форму и немного больше кулака. Сердце расположено в верхней части грудной клетки, чуть левее от центра. Оно состоит из очень прочной мышечной ткани, способной непрерывно работать на протяжении всей жизни. Эта мышца перекачивает кровь за счёт чередования сокращений и расслаблений в чётком ритме. Этот ритм называется сердцебиением.",
    image: "https://cdn.glitch.global/8ff89136-0b2a-4a88-b122-314e4792710a/IMG_6353.png?v=1748713310566"
  },
  stomach: {
    name: "Желудок",
    description: "Желудок — это орган пищеварения, в котором начинается активное переваривание пищи. Он выделяет желудочный сок, содержащий кислоту и ферменты, которые расщепляют еду. Желудок смешивает пищу и передаёт её дальше — в кишечник — для окончательной переработки.",
    image: "https://cdn.glitch.global/8ff89136-0b2a-4a88-b122-314e4792710a/IMG_6344.png?v=1748706883347"
  },
  intestine: {
    name: "Кишечник",
    description: "Кишечник — это длинный извилистый орган, состоящий из тонкого и толстого отделов. В тонком кишечнике из пищи всасываются витамины, минералы и другие питательные вещества. А в толстом — формируются и выводятся отходы. Кишечник играет важную роль в иммунной системе и общем здоровье.",
    image: "https://cdn.glitch.global/8ff89136-0b2a-4a88-b122-314e4792710a/IMG_6346.png?v=1748706878621"
  },
  lungs: {
    name: "Легкие",
    description: "Лёгкие — это парные органы дыхания, отвечающие за обмен газов. Когда мы вдыхаем, кислород из воздуха попадает в кровь, а при выдохе — углекислый газ выводится наружу. Лёгкие находятся в грудной клетке и работают вместе с дыхательными мышцами, особенно с диафрагмой.",
    image: "https://cdn.glitch.global/8ff89136-0b2a-4a88-b122-314e4792710a/IMG_6345.png?v=1748706880403"
  },
  liver: {
    name: "Печень",
    description: "Печень — одна из самых крупных и жизненно важных желез в организме. Она очищает кровь от токсинов, участвует в переваривании пищи и запасает питательные вещества. Печень также вырабатывает желчь — жидкость, необходимую для расщепления жиров.",
    image: "https://cdn.glitch.global/8ff89136-0b2a-4a88-b122-314e4792710a/IMG_6352.png?v=1748713311695"
  },
  brain: {
    name: "Мозг",
    description: "Мозг — это центральный орган нервной системы и главный «командный пункт» тела. Он управляет мышлением, движениями, чувствами и памятью, а также контролирует все функции организма — от дыхания до сна. Мозг состоит из миллиардов нервных клеток, которые обмениваются сигналами невероятной скоростью",
    image: "https://cdn.glitch.global/8ff89136-0b2a-4a88-b122-314e4792710a/IMG_6343.png?v=1748706893152"
  },
};


// Обработка запроса пользователя (делаем нужный орган видимым)
function findOrgan() {
  const inputValue = document.getElementById('findOrgan').value.toLowerCase();
  const model = document.querySelector('#myModel');
  const heart = document.querySelector('#heart');
  const lungs = document.querySelector('#lungs');
  const brain = document.querySelector('#brain');
  const liver = document.querySelector('#liver');
  const intestine = document.querySelector('#intestine');
  const stomach = document.querySelector('#stomach');

  const organsArray = [model, heart, lungs, brain, liver, intestine, stomach];

  switch(inputValue) {
    case 'сердце':
      showInfo("heart");
      backOpacity(organsArray);
      for(let i = 0; i < organsArray.length; i++){
        if (organsArray[i] != heart) {
          setTransparency(organsArray[i], true, 0.3)
        }
      }
      break;
    case 'легкие':
      showInfo("lungs");
      backOpacity(organsArray);
      for(let i = 0; i < organsArray.length; i++){
        if (organsArray[i] != lungs) {
          setTransparency(organsArray[i], true, 0.3)
        }
      }
      break;   
    case 'мозг':
      showInfo("brain");
      backOpacity(organsArray);
      for(let i = 0; i < organsArray.length; i++){
        if (organsArray[i] != brain) {
          setTransparency(organsArray[i], true, 0.3)
        }
      }
      break;   
    case 'печень':
      showInfo("liver");
      backOpacity(organsArray);
      for(let i = 0; i < organsArray.length; i++){
        if (organsArray[i] != liver) {
          setTransparency(organsArray[i], true, 0.3)
        }
      }
      break;   
    case 'желудок':
      showInfo("stomach");
      backOpacity(organsArray);
      for(let i = 0; i < organsArray.length; i++){
        if (organsArray[i] != stomach) {
          setTransparency(organsArray[i], true, 0.3)
        }
      }
      break;   
    case 'кишечник':
      showInfo("intestine")
      backOpacity(organsArray);
      for(let i = 0; i < organsArray.length; i++){
        if (organsArray[i] != intestine) {
          setTransparency(organsArray[i], true, 0.3)
        }
      }
      break;  
    default:
      alert('Ошибка ввода. Выберите из предложенных органов');
  }
}

    
// Устанавливаем нужную прозрачность 
function setTransparency(object, transparency, opacity) {
  const model = object.object3D;
  model.traverse((node) => {
    if (node.isMesh) {
      node.material.transparent = transparency;
      node.material.opacity = opacity;
      node.material.needsUpdate = true; 
    }
  });
}

// Делаем орган непрозрачным
function backOpacity(objectsArray) {
  objectsArray = objectsArray;
  for(let i = 0; i < objectsArray.length; i++){
    setTransparency(objectsArray[i], false, 1);
  }
  
}

// Выводим информацию о нужном органе
function showInfo(name){
      const infoBox = document.getElementById("organInfo");
      const image = document.getElementById("organImage");
      const organ = organs[name];

      if (organ) {
        document.getElementById("organName").textContent = organ.name;
        document.getElementById("organDescription").textContent = organ.description;
        image.src = organ.image;
        image.style.display = "block";
        infoBox.style.display = "block";
      } else {
        image.style.display = "none";
        infoBox.style.display = "none";
        alert("Орган не найден. Пожалуйста, проверьте правильно ли Вы ввели название. Список доступных органов можно посмотреть в инструкции.");
      }
}
