const loadCategory = () => {
  const uri = "https://taxi-kitchen-api.vercel.app/api/v1/categories";

  fetch(uri) // promise kortesi j ami tomake response
    .then((res) => res.json()) //promise kortesi ami tomake data
    .then((data) => displayCategory(data.categories));
};

let cart = [];
let total = 0;

const displayCategory = (categories) => {
  //   console.log(categories);
  // 1. jekhane rakho setake dhore niye asho
  const catContainer = document.getElementById("category-container");
  catContainer.innerHTML = "";

  for (let cat of categories) {
    //3 - Create html element
    const categoryCard = document.createElement("div");
    categoryCard.innerHTML = `
          <a href="#food" id="cat-btn-${cat.id}" onclick="loadFoods(${cat.id})" class="btn justify-start btn-block shadow btn-category">
            <img
              src="${cat.categoryImg}"
              alt=""
              class="w-10"
            />${cat.categoryName}
          </a>`;

    //4- Append the element
    catContainer.append(categoryCard);
  }
};

///////////////////////////////////////////

const loadFoods = (id) => {
  //1 - food container k hide korbo + loading k show korbo
  document.getElementById("loading-spinner").classList.remove("hidden");
  document.getElementById("food-container").classList.add("hidden");

  const url = id
    ? `https://taxi-kitchen-api.vercel.app/api/v1/categories/${id}`
    : `https://taxi-kitchen-api.vercel.app/api/v1/foods/random`;

  //1 - sobaike niye eshe active class remove kore dao.

  const catBtns = document.querySelectorAll(".btn-category");
  catBtns.forEach((btn) => btn?.classList?.remove("active"));

  //2 - Jake click kora hoise take active class dao
  const currentBtn = document.getElementById(`cat-btn-${id}`);
  console.log(currentBtn);
  currentBtn?.classList?.add("active");

  fetch(url) // promise kortesi j ami tomake response
    .then((res) => res.json()) //promise kortesi ami tomake data
    .then((data) => displayFoods(data.foods));
};