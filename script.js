//var date=new Date()
//document.body.innerHTML="<h1>Today is " + date + "</h1>"
//var n=7239;
//var s="this is how it ends i feel the chemicals burn in my blood stream";
//var single=true;
//var couple=null;
//var justify
function logscope(title, instructor, level, published, views){
    this.title=title;
    this.instructor=instructor;
    this.level=level;
    this.published=published;
    this.views=views;
    this.updateviews=function(){
        return ++this.views;
    };
}
var course=new logscope("js","me",1,"new",0);
console.log(course);