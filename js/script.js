/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var navpos = "1";           
var myWorks = {
    web : [
        {
            name: "PNB",
            image: "pnb.png",
            type : "Internet Banking",
            role: "Front End Developer",
            company : "TAGIT PH",
            link : "https://portal.pnb.com.ph/mib/login.do?app=PN"
        },
        {
            name: "Leederville Cameras",
            image: "leederville.png",
            type: "E-commerce",
            role: "Full Stack Developer",
            company : "Kayweb",
            link: "https://www.leedervillecameras.com.au/"
        },
        {
            name: "Klik Online Dental Lab",
            image: "klik.png",
            type: "E-commerce",
            role: "Full Stack Developer",
            company : "Kayweb",
            link: "https://www.klikdental.com.au"
        },
        {
            name: "100 Proof",
            image: "100proof.png",
            type: "E-commerce",
            role: "Full Stack Developer",
            company : "Kayweb",
            link: "http://www.100proof.com.au"
        },
        {
            name: "Happy Kids Early Learning",
            image: "happykids.png",
            type: "Information Website",
            role: "Full Stack Developer",
            company : "Kayweb",
            link: "http://www.happykidsearlylearning.com.au/"
        },
        {
            name: "MyCar Body Shop",
            image: "mycar.png",
            type: "Information Website",
            role: "Full Stack Developer",
            company : "Kayweb",
            link: "http://www.mycarbodyshop.com.au/"
        },
        {
            name: "Nagorno Karabakh AU",
            image: "nkr.png",
            type: "Information Website",
            role: "Full Stack Developer",
            company : "Kayweb",
            link: "http://www.nkraustralia.org/"
        },
        {
            name: "Armenian Relief Society",
            image: "ars.png",
            type: "Information Website",
            role: "Full Stack Developer",
            company : "Kayweb",
            link: "http://www.armenianreliefsociety.com.au"
        }
    ],
    app : [
        
    ],
    employment : [
        {
            name: "Tagit PH",
            image: "tagit.png",
            position: "Front End and App Developer",
            date: "May 2018 - Present",
            experience: "<br>Maintains existing Mobile and Internet banking of PNB.<br><br>Technologies used: Android Studio (Java), Xcode (Objective C), HTML5, CSS3, JavaScript, JQuery, JSON, Bootstrap, Handlebars and SVN."
        },
        {
            name: "Kayweb Website and Apps",
            image: "kayweb.png",
            position: "Full Stack Developer",
            date: "May 2016 - May 2018",
            experience: "<br>Developed Information, E-commerce Websites and CRM Apps.<br><br>Technologies used: HTML5, CSS3, JavaScript, JQuery, JSON, Bootstrap, Materialize CSS, PHP (CodeIgniter), Apache Cordova, LINUX server and GIT."
        },
        {
            name: "STI College Munoz Edsa",
            image: "sti.png",
            position: "IT Coach",
            date: "June 2014 - April 2016",
            experience: "<br>Handled IT subjects such as: Java Basic, Java Object Oriented, Mobile Apps Developmnet (Android), Assembly Language, Web Development (PHP), VB.net, Database Management (SQL), Computer Fundamentals and Thesis."
        }
    ]
}
$(document).ready(function(){
    $(".navigator li i").click(function(){
       $(".navigator li i").removeClass("active");
       $(this).addClass("active");
       var pos = $(this).attr("data-pos");
       $('html,body').animate({
            scrollTop: $(".scroll-page-"+pos).offset().top},
        'slow');
    });
    
    //populating work items;
    $.each(myWorks.web,function(key, row){
        $(".work-item-container").append(getWorkItemView(row));
    });
    
    //populating employment items
    $.each(myWorks.employment,function(key, row){
        $(".employer-item-container").append(getEmpItemView(row));
    });
    
    $(".scroll-page").mouseenter(function(){
       var pos = $(this).attr("data-pos");
       if(pos != navpos)
       {
           $(".navigator li i").removeClass("active");
           $(".nav-"+pos).addClass("active");
           navpos = pos;
       }
    });
});

var getWorkItemView = function(workItem)
{
    var str =  '<div class="work-item col-6 col-lg-4 no-gutters" style="background: url(images/thumbnails/'+ workItem.image +') center center no-repeat; background-size: cover;">'
        str +=  '<div class="work-wrapper">';
        str +=     '<span class="name">'+ workItem.name + '</span>';
        str +=     '<span>'+ workItem.type +'</span>';
        str +=     '<span>' + workItem.role + ' - ' + workItem.company + '</span>';
        str +=     '<a target="_blank" href="'+ workItem.link +'" class="btn btn-info">Go to site</a>';
        str +=  '</div>';
        str += '</div>';
        
    return str;
};

var getEmpItemView = function(empItem)
{
    var str = '<div class="col-12 col-lg-4">\n\
                    <div class="emp-image" style="background: url(images/employer/'+ empItem.image +') center center no-repeat; background-size: contain;"></div>\n\
                    <span class="emp-name rubik-txt">'+ empItem.name +'</span>\n\
                    <span class="emp-pos">'+ empItem.position +'</span>\n\
                    <span>'+ empItem.date +'</span>\n\
                    <p>'+ empItem.experience +'</p>\n\
                </div>';
    return str;
}