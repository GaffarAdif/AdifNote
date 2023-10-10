const addBtn = document.getElementById('add-btn');
// saving data on localStorage
const updateDataLs = ()=>{
    const allDiv = document.querySelectorAll("textarea");
    let arrr = [];
allDiv.forEach((pValue)=>{
    return arrr.push(pValue.value) ;
})
localStorage.setItem('notes', JSON.stringify(arrr))
}
// saving data on localStorage
const addNote = (text = "") => {
    const noteDiv = document.createElement('div')
    noteDiv.classList.add("note-div")
    const htmlData = `<div class="edi-del">
<button class="ed-btn  edit ed-btn-2"><i class="fa-solid fa-file-pen"></i></button>
<button class="ed-btn delt"><i class="fa-solid fa-trash-can"></i></button>
</div>
<div class="main-div ${text ? '' : 'hidden'}"></div>
<textarea  class="${text ? 'hidden' : ''}"></textarea>`;
    // noteDiv.innerHTML= htmlData;
    noteDiv.insertAdjacentHTML('afterbegin', htmlData)
    // document.body.appendChild(noteDiv);
    document.body.appendChild(noteDiv)
    // get refarencess
    const editBtn = noteDiv.querySelector('.edit');
    const delBtn = noteDiv.querySelector('.delt');
    const gDiv = noteDiv.querySelector('.main-div');
    const textArea = noteDiv.querySelector('textarea');
    // for delet note 
    delBtn.addEventListener("click", () => {
        noteDiv.remove();
        updateDataLs()
    })
    textArea.value = text;
    gDiv.innerHTML =text;
textArea.addEventListener("change", (adif)=>{
  const sValue =adif.target.value;
  gDiv.innerHTML =sValue;
 updateDataLs()
})
    // for edit button 
    editBtn.addEventListener("click", () => {
        gDiv.classList.toggle('hidden')
        textArea.classList.toggle("hidden")
    })
}
// getting data from localStorage 
const loclData = JSON.parse(localStorage.getItem("notes"))
if(loclData){
    loclData.forEach((fordata)=>{
 addNote(fordata)
})
}
addBtn.addEventListener("click", () => addNote())

