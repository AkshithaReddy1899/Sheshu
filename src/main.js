// Main features

const obj = [
  {
    icon: '<i class="fas fa-regular fa-circle-info feature__icon"></i>',
    title: 'Additional support',
    description: 'Tutors are available for any kind of queries',
  },
  {
    icon: '<i class="fa-solid fa-certificate feature__icon"></i>',
    title: 'Certificates',
    description: 'Certificate of completion after successfully finishing all the exams conducted during the course',
  },
  {
    icon: '<i class="fas fa-question feature__icon"></i>',
    title: 'Doubt sessions',
    description: 'Doubt sessions will be conducted every Saturday',
  },
  {
    icon: '<i class="fas fa-regular fa-book feature__icon"></i>',
    title: 'Free classes',
    description: 'A whole week worth free classes, after which you are free to join the course or leave, <b>No questions asked</b>',
  },
  {
    icon: '<i class="fas fa-regular fa-wallet feature__icon"></i>',
    title: 'Pocket frendly',
    description: 'Resonable prices',
  },
  {
    icon: '<i class="fas fa-regular fa-chalkboard-teacher feature__icon"></i>',
    title: 'Online learning',
    description: 'Learn at the comfort at your house.',
  },
  {
    icon: '<i class="fas fa-regular fa-repeat feature__icon"></i>',
    title: 'Revison',
    description: 'Constant revisions of old levels.',
  },
  {
    icon: '<i class="fas fa-regular fa-tv feature__icon"></i>',
    title: 'Recorded classes',
    description: 'Access to recorded classes which you can revisit at anytime',
  },
];

const list = document.getElementById('feature-list');

obj.forEach((item) => {
  const li = document.createElement('li');
  li.innerHTML += `<div class="main-features--item mt-4 p-3">
  <div class="feature__icon-container">
    ${item.icon}
  </div>
    <h3 class="feature__heading mt-3">${item.title}</h3>
    <p class="feature__description mt-4">${item.description}</p>
  </div>`;
  list.appendChild(li);
});

/*

const counterList = document.getElementById('counter-list');

const counterObj = [
  {
    num: '180+',
    title: 'Students joined',
  },
  {
    num: '8+',
    title: 'Batches finished',
  },
];

counterObj.forEach((item) => {
  const li = document.createElement('li');
  li.innerHTML += `<div class="main-features--items flex">
  <h3 class="main__counter--num">${item.num}</h3>
  <p class="counter__heading">${item.title}</p>
  </div>`;
  counterList.appendChild(li);
});
*/
// 

const whatsapp = document.getElementById('whatsapp');

window.onload = () => {
  setTimeout(() => {
    whatsapp.style.display = 'block';
  }, 3000)
}