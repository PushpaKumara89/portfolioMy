joinDate = date = new Date('2022-05-01')
let experience = document.getElementById('experience');
experience.attributes.item(2).value=(new Date().getFullYear()- joinDate.getFullYear()).toString()

function hireMe(){
    alert("not implement yet!")
}
