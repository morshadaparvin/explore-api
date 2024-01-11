function load(){
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(data => dis(data))
}
function dis(posts){
    const posCon = document.getElementById('post-con')
    for(const post of posts){
        const div = document.createElement('div')
        div.innerHTML = `
        <h4>post id-${post.userId}<h4/>
       <h5>post title:${post.title}</h5>
       <p>post description:${post.body}</p>

        `;
        posCon.appendChild(div);
    }

}
load();
function todolist(todos){
    const todo = document.getElementById()
    for(const todo of todos){
        const div = document.createElement('div')
        div.innerHTML = `
        `
        todo.appendChild('div')
    }

}