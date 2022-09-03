const loadMenuBar = async () => {
    const response = await fetch('https://openapi.programming-hero.com/api/news/categories');
    const data = await response.json();
    // console.log(data.data.news_category)
    return data;
}

const displayMenuBar = async () => {
    const data = await loadMenuBar()
    // console.log(data)
    for (const menu of data.data.news_category) {
        console.log(menu)
        const menuBar = document.getElementById('menu-bar');
        const li = document.createElement('li');
        li.innerHTML = `
            <a>${menu.category_name}</a>
        `
        menuBar.appendChild(li)
    }
}

displayMenuBar();