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
        // console.log(menu)
        const menuBar = document.getElementById('menu-bar');
        const li = document.createElement('li');
        li.innerHTML = `
            <a onclick="categoryId">${menu.category_name}</a>
        `
        menuBar.appendChild(li)
    }
}

displayMenuBar();



const loadCategory = () => {
    fetch(`https://openapi.programming-hero.com/api/news/category/01`)
        .then(res => res.json())
        .then(data => displayCategory(data))
}
loadCategory();

const displayCategory = news => {
    // console.log(news.data);
    news.data.forEach(theNews => {
        console.log(theNews)
        const getCategoryId = document.getElementById('catagory')
        const div = document.createElement('div')
        div.innerHTML = `
        
        <div class="card card-side bg-base-100 shadow-xl mb-10">
        <figure><img src=${theNews.thumbnail_url} alt="Movie"></figure>
        <div class="card-body">
            <h2 class="card-title">${theNews.title}</h2>
            <p>${theNews.details.slice(0, 200)}...</p>

            <div class="flex space-x-28 inline-block align-baseline">
            <div>
                <div class="avatar-group -space-x-6">
                    <div class="avatar">
                        <div class="w-12">
                            <img src= ${theNews.author.img}>                           
                        </div>                      
                    </div>                  
                </div>
                <div>${theNews.author.name}</div>
            </div>    
                <span>
                    <i class="fa-solid fa-eye"></i>
                    <span>${theNews.total_view}</span>
                </span>

                <span>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-regular fa-star"></i>
                    <i class="fa-regular fa-star"></i>
                    <i class="fa-regular fa-star"></i>
                </span>

                <div class="card-actions justify-end">
                    <button class="btn btn-primary">View Detail</button>
                </div>
            </div>
        </div>
    </div>
    
        `
        getCategoryId.appendChild(div);
    })
}
// displayCategory()