const addBtn = document.querySelector(".input-todo button");
const inputBox = document.querySelector(".input-todo input");
const todoList = document.querySelector('.todo-list')
const deleteAllBtn = document.querySelector('.info-box button')






inputBox.onkeyup = () => {
    let userEnteredValue = inputBox.value;
    if (userEnteredValue.trim() != 0) {
        addBtn.classList.add('active');
    } else {
        addBtn.classList.remove('active');
    }
}




addBtn.addEventListener("click", function () {
    let userEnteredValue = inputBox.value;
    const getLocalStrageData = JSON.parse(localStorage.getItem("todo")) || [];
    getLocalStrageData.push(userEnteredValue);
    localStorage.setItem("todo", JSON.stringify(getLocalStrageData));
    showTask()
    addBtn.classList.remove('active')
    showTask();// برای اضافه کردن تسک نیاز به رقرش کردن نباشد 

});


showTask()
function showTask() {
    inputBox.value = "";// خالی شدن input

    let getLocalStrageData = localStorage.getItem("todo");
    if (getLocalStrageData === null) {
        listArray = [];
    } else {
        listArray = JSON.parse(getLocalStrageData);
    }
    if (listArray.length > 0) {
        deleteAllBtn.classList.add('active')
    } else {
        deleteAllBtn.classList.remove('active')

    }


    const pendingTaskNumb = document.querySelector('.pendingTask')
    pendingTaskNumb.textContent = listArray.length;//pendingTaskNumb.textContent متن محتوای داخل عنصر pendingTaskNumb را تنظیم می‌کند.

    let newTag = ""
    listArray.forEach((element, index) => {
        newTag += `<li>${element}<span class="icon"><i class="fas fa-trash-alt" onclick ="deleteTask(${index})"></i></span></li>`


    });
    todoList.innerHTML = newTag;





}
deleteAllBtn.addEventListener("click", function () {
    localStorage.removeItem('todo');
    showTask()
})



function deleteTask(index) {
    // const getLocalStorageData = JSON.parse(localStorage.getItem('todo')) || [];
    // const updatedTasks = getLocalStorageData.filter((_, i) => i !== index)
    // localStorage.setItem('todo', JSON.stringify(updatedTasks))
    showTask()



    const getLocalStorageData = localStorage.getItem('todo');
    let listArray = JSON.parse(getLocalStorageData)
    listArray.splice(index,1)
    localStorage.setItem('todo', JSON.stringify(listArray))
}






