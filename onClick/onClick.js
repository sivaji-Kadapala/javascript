function red()
{
    document.body.style.background="red";
}
function green()
{
    document.body.style.background="green";
}
function yellow()
{
    document.body.style.background="yellow";
}
function cyan()
{
    document.body.style.background="cyan";
}
function blue()
{
    document.body.style.background="blue";
}
function courses (courseName,...rest){
    return {courseNmae,rest};
}
console.log(courses("java","spring,springboot","api","j2ee","hibernate"));
console.log(courses("javascript","nodeJs","expressJs","mongoDb","reactJs"));
