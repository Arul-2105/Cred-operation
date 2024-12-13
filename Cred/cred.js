let persons=[{name:'raja',age:25},{
    name:'parthi',age:21},{name:'kandha',age:21},{name:'dhina',age:25}]


let table=document.getElementById('table')
let namei=document.getElementById('name')
let agei=document.getElementById('age')
let index=-1
function handlesubmit(event)
{
event.preventDefault()
    if(index==-1)
    {
        let name=namei.value
        let age=agei.value
        let temp={
            name:name,age:age
        }
        persons=[...persons,temp]
        display()
        clear()
    }
    else
    {
        let name=namei.value
        let age=agei.value
        let temp={
            name:name,age:age
        }  
        persons[index]=temp
        display()
        clear()
        index=-1
    }
    
}
function display()
{
    table.innerHTML=persons.map((person,i)=>`<tr>
    <td>${person.name}</td>
    <td>${person.age}</td>
    <td><button onclick='edit(${i})' >edit</button>
    <td><button onclick='del(${i})'>delete</button>
    </tr>`)
}
function edit(id)

{
    let temp=persons[id]
   namei.value=temp.name
   agei.value=temp.age  
   index=id

}

function del(id)

{
    let temp=persons.filter((person,i)=>i!==id)
    persons=[...temp]
    display()
}
function clear()
{
    document.getElementById('name').value=''
document.getElementById('age').value=''
}

display()