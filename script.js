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