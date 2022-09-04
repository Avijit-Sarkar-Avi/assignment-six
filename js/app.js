const loadMenuBar = () => {
    fetch('https://openapi.programming-hero.com/api/news/categories')
        .then(res => res.json())
        .then(data => displayMenuBar(data.data.news_category))
}

const displayMenuBar = categories => {
    const menuBar = document.getElementById('menu-bar');
    categories.forEach(category => {
        // console.log(category)
        const li = document.createElement('li');
        li.innerHTML = `
            <a onclick="loadCategory(${category.category_id})">${category.category_name}</a>
        `
        menuBar.appendChild(li)
    })
}

const loadCategory = (category_id) => {
    fetch(`https://openapi.programming-hero.com/api/news/category/0${category_id}`)
        .then(res => res.json())
        .then(data => displayCategory(data.data))
}

const displayCategory = news => {
    console.log(news)



    const getCategoryId = document.getElementById('category')
    getCategoryId.textContent = "";
    news.forEach(theNews => {
        console.log(theNews)

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



loadMenuBar();