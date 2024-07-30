async function printPosts() {
    const url = `https://jsonplaceholder.typicode.com/posts`
    const response = await fetch(url)
    const data = await response.json()
    console.log(data);
    showData(data)
}


function showData(posts) { 
    const postContainer = document.getElementById('postsContainer');
    postContainer.innerHTML = " "
    posts.forEach(post => {
        const postElement = document.createElement('div')
        postElement.classList.add('post')
        postElement.innerHTML = `<h2>${post.title}</h2>
        <p>${post.body}</p>`;
        postContainer.appendChild(postElement);
        
    });
} 
printPosts()

// h1Tags.