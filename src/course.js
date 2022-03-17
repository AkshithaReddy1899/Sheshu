const modalData = [
  {
    id: 'A1',
    title: 'A1 course curriculum',
    description: 'Greetings, good byes, everyday expressions, can introduce, simple interactions…',
  },
  {
    id: 'A2',
    title: 'A2 course curriculum',
    description: 'Understanding and interpreting improves, translation work, can describe situations and surroundings..',
  },
  {
    id: 'B1',
    title: 'B1 course curriculum',
    description: 'Can get gist of whatever is read or heard, can translate without any external help, can describe and justify with reasons and opinions',
  },
];

const modal = document.getElementById('modal');
const body = document.querySelector('.about');
const close = document.getElementById('close');
const header = document.getElementById('modal__header');
const description = document.getElementById('modal__description');

const modalClose = () => {
  body.style.overflow = 'scroll';
  modal.style.display = 'none';
}

close.addEventListener('click', () => {modalClose()})

const modalDisplay = (id) => {
  modal.style.display = 'block';
  const obj = modalData.filter((item) => item.id === id);
  header.textContent = obj[0].title;
  description.textContent = obj[0].description;
}

const reviewsObj = [
  {
    img: 'src/images/logo-webp',
    name: 'Loreum ispusm',
    qualification: 'Loreum ipsum',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit nisi quod iste aspernatur accusantium! Ratione ducimus exercitationem impedit dolorum architecto provident ea sint animi sequi necessitatibus, voluptatem quisquam officiis quas',
  }
]

const reviewContainer = document.querySelector('carousel-inner');

reviewsObj.forEach((item) => {
  const div = document.createElement('div');
  div.className = 'carousel-item';
  div.innerHTML += `<img src="${item.img}" class="d-block w-100" alt="Student">
  <p class="review_name"></p>`
})

/* <div class="carousel-item active">
            <img src="..." class="d-block w-100" alt="...">
          </div> */