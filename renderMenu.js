function getAllIngredients() {
  const ingredientSet = new Set();
  drinks.forEach(drink => {
    drink.ingredients.forEach(ing => ingredientSet.add(ing));
  });
  return Array.from(ingredientSet).sort();
}

function populateIngredientSelects() {
  const selects = [
    document.getElementById('ingredient1'),
    document.getElementById('ingredient2'),
    document.getElementById('ingredient3')
  ];

  const ingredients = getAllIngredients();

  selects.forEach(select => {
    ingredients.forEach(ingredient => {
      const opt = document.createElement('option');
      opt.value = ingredient;
      opt.textContent = ingredient;
      select.appendChild(opt);
    });
  });
}

function filterDrinks() {
  const selected = [
    document.getElementById('ingredient1').value,
    document.getElementById('ingredient2').value,
    document.getElementById('ingredient3').value
  ].filter(v => v !== "");

  const filtered = drinks.filter(drink =>
    selected.every(sel => drink.ingredients.includes(sel))
  );

  renderDrinks(filtered);
}

function resetFilters() {
  document.getElementById('ingredient1').value = "";
  document.getElementById('ingredient2').value = "";
  document.getElementById('ingredient3').value = "";
  renderDrinks(drinks);
}

function formatCategory(baseIngredient) {
    const capitalized = baseIngredient.charAt(0).toUpperCase() + baseIngredient.slice(1);
    return `${capitalized}-Based Cocktails`;
  }
  
  function renderDrinks(drinksToRender) {
    const root = document.getElementById('menu-root');
    root.innerHTML = ''; // Clear previous content
  
    // Group drinks by first ingredient
    const categories = {};
    drinksToRender.forEach(drink => {
      const base = drink.ingredients[0];
      if (!categories[base]) {
        categories[base] = [];
      }
      categories[base].push(drink);
    });
  
    // For each category
    Object.keys(categories).sort().forEach(base => {
      const section = document.createElement('div');
      section.className = 'section';
  
      const header = document.createElement('h2');
      header.textContent = formatCategory(base);
      section.appendChild(header);
  
      categories[base].forEach(drink => {
        const drinkDiv = document.createElement('div');
        drinkDiv.className = 'drink';
  
        const name = document.createElement('div');
        name.className = 'drink-name';
        name.textContent = `${drink.name} (p. ${drink.recipePage})`;
  
        const image = document.createElement('img');
        image.src = drink.image;
        image.alt = drink.name;

        // Fallback to default preview image if loading fails
        image.onerror = function () {
        this.onerror = null;
        this.src = 'images/preview.jpg';
        };
  
        const ingredients = document.createElement('p');
        ingredients.textContent = "Ingredients: " + drink.ingredients.join(', ');
  
        const leftCol = document.createElement('div');
        leftCol.style.flex = "1";

        leftCol.appendChild(name);
        leftCol.appendChild(ingredients);

        drinkDiv.appendChild(leftCol);
        drinkDiv.appendChild(image);
  
        section.appendChild(drinkDiv);
      });
  
      root.appendChild(section);
    });
  }

  window.onload = () => {
    populateIngredientSelects();
    renderDrinks(drinks); // initial render
  };