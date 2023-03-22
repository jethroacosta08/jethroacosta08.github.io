/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var navpos = "1";           
var myWorks = {
    web : [
        {
            name: "SIGN ART",
            image: "signart.png",
            type : "Portfolio Website/Marketplace",
            role: "Full Stack Developer",
            company : "Cosmic Ai",
            link : "https://www.sign-art.app/",
            active : true
        },
        {
            name: "PNB",
            image: "pnb.png",
            type : "Internet Banking",
            role: "Front End Developer",
            company : "TAGIT PH",
            link : "https://portal.pnb.com.ph/mib/login.do?app=PN",
            active : true
        },
        {
            name: "VCFIRMEA",
            image: "vcfirmea.png",
            type : "Information Website",
            role: "Full Stack Developer",
            company : "Cosmic Ai",
            link : "https://vcfirmea.com/",
            active : true
        },
        {
            name: "AIBOTCMS",
            image: "aibot.png",
            type : "Product (ChatBot CMS)",
            role: "Full Stack Developer",
            company : "Cosmic Ai",
            link : "https://aibotcms.herokuapp.com/",
            active : false
        },
        {
            name: "EON",
            image: "eon.PNG",
            type : "Internet Banking",
            role: "Front End Developer",
            company : "TAGIT PH",
            link : "https://ib.eonbankph.com/mib/login.do?app=NB",
            active : false
        },
        {
            name: "Leederville Cameras",
            image: "leederville.png",
            type: "E-commerce",
            role: "Full Stack Developer",
            company : "Kayweb",
            link: "https://www.leedervillecameras.com.au/",
            active : false
        },
        {
            name: "100 Proof",
            image: "100proof.png",
            type: "E-commerce",
            role: "Full Stack Developer",
            company : "Kayweb",
            link: "http://www.100proof.com.au",
            active : false
        },
        {
            name: "Nagorno Karabakh AU",
            image: "nkr.png",
            type: "Information Website",
            role: "Full Stack Developer",
            company : "Kayweb",
            link: "http://www.nkraustralia.org/",
            active : true
        },
        {
            name: "Armenian Relief Society",
            image: "ars.png",
            type: "Information Website",
            role: "Full Stack Developer",
            company : "Kayweb",
            link: "http://www.armenianreliefsociety.com.au",
            active : true
        },
        {
            name: "Klik Online Dental Lab",
            image: "klik.png",
            type: "E-commerce",
            role: "Full Stack Developer",
            company : "Kayweb",
            link: "https://www.klikdental.com.au",
            active : false
        },
        {
            name: "MyCar Body Shop",
            image: "mycar.png",
            type: "Information Website",
            role: "Full Stack Developer",
            company : "Kayweb",
            link: "http://www.mycarbodyshop.com.au/",
            active : false
        }
    ],
    app : [
        {
            name: "Flight Centre: Cheap Flights",
            image: "flightcentre.png",
            type : "Flight & Hotel Booking",
            role: "Mobile App Developer",
            company : "Deloitte",
            applink : {
                android : "https://play.google.com/store/apps/details?id=au.com.flightcentre",
                ios : "https://apps.apple.com/au/app/flight-centre-cheap-flights/id1152184991"
            },
            active : true
        },
        {
            name: "PayyoBonus",
            image: "payyo.png",
            type : "Rewards Platform",
            role: "Mobile App Developer",
            company : "JMAGLLC",
            applink : {
                android : "https://play.google.com/store/apps/details?id=com.payyo.bonus",
                ios : "https://apps.apple.com/ph/app/payyo-bonus/id6443962443"
            },
            active : true
        },
        {
            name: "PNB Mobile Banking",
            image: "pnbmobile.PNG",
            type : "Mobile Banking",
            role: "Mobile App Developer",
            company : "TAGIT PH",
            applink : {
                android : "https://play.google.com/store/apps/details?id=com.pnb.mobile&hl=fil",
                ios : "https://apps.apple.com/ph/app/pnb-mobile-banking/id1139710846"
            },
            active : true
        },
        {
            name: "FE Credit",
            image: "fec.PNG",
            type : "Finance",
            role: "Mobile App Developer",
            company : "TAGIT PH",
            applink : {
                android : "https://play.google.com/store/apps/details?id=com.fecredit.cards&hl=fil",
                ios : "https://apps.apple.com/us/app/fe-credit-mobile/id1404353894"
            },
            active : true
        },
        {
            name: "NowRPM",
            image: "nowrpm.png",
            type : "Health & Fitness",
            role: "Mobile App Developer",
            company : "Softbir Inc.",
            applink : {
                android : "https://play.google.com/store/apps/details?id=com.apkamd.app",
                ios : "https://play.google.com/store/apps/details?id=com.apkamd.app"
            },
            active : true
        },
        {
            name: "DUGSONG",
            image: "dugsong.png",
            type : "Card Game",
            role: "Mobile App Developer",
            company : "Cosmic Ai",
            applink : {
                android : "https://play.google.com/store/apps/details?id=com.cosmicai.dugsong",
                ios : "https://play.google.com/store/apps/details?id=com.cosmicai.dugsong"
            },
            active : true
        },
        {
            name: "JonLu Properties RE calc",
            image: "jonlu.png",
            type : "Real Estate",
            role: "Mobile App Developer",
            company : "Cosmic Ai",
            applink : {
                android : "https://play.google.com/store/apps/details?id=com.jonluproperties.app",
                ios : "https://play.google.com/store/apps/details?id=com.jonluproperties.app"
            },
            active : true
        },
        {
            name: "SMS Gateway Local",
            image: "smsgateway.png",
            type : "Communications/Automation",
            role: "Mobile App Developer",
            company : "Cosmic Ai",
            applink : {
                android : "https://play.google.com/store/apps/details?id=com.cosmicai.smsgateway",
                ios : "https://play.google.com/store/apps/details?id=com.cosmicai.smsgateway"
            },
            active : false
        },
    ],
    employment : [
        {
            name: "Deloitte",
            image: "deloitte.png",
            position: "Consultant",
            date: "December 2020 - Present",
            experience: "<b>Mobile Capability Lead</b>, responsible for managing the team, conducting team members' skill gap analysis, and giving them the right resources to improve their skillset. Involved in resourcing and training new hires by running boot camps. <b>Mobile Developer</b>, responsible for building client's mobile applications both Android and iOS. I'm involved in different roles such as epic ownership, quality assurance and etc.<br/><br/><b>Skills:</b> React Native · Kotlin · TypeScript · JavaScript · Java · Swift · Objective C"
        },
        {
            name: "Cosmic Ai",
            image: "cosmicai.png",
            position: "Founder",
            date: "December 2019 - Present",
            experience: "<br><b>Skills:</b> Chatbot development via dialogflow and Node JS. Mobile development using Java for android, Objective C and Swift for IOS, Firebase for serverless services and REALM for offline database. Managing App consoles such as Firebase, Google Cloud Platform and Google Play"
        },
        {
            name: "Tagit PH",
            image: "tagit.png",
            position: "Front End and App Developer",
            date: "May 2018 - December 2020",
            experience: "<br>Maintains existing Mobile and Internet banking of PNB and App developer for FE Credit project.<br><br><b>Skills:</b> Android Studio (Java), Xcode (Objective C), Swift, Firebase, HTML5, CSS3, JavaScript, JQuery, JSON, Bootstrap, Handlebars and SVN."
        },
        {
            name: "Kayweb Website and Apps",
            image: "kayweb.png",
            position: "Full Stack Developer",
            date: "May 2016 - May 2018",
            experience: "<br>Developed Information, E-commerce Websites and CRM Apps.<br><br><b>Skills:</b> HTML5, CSS3, JavaScript, JQuery, JSON, Bootstrap, Materialize CSS, PHP (CodeIgniter), Apache Cordova, LINUX server and GIT."
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
    //app
    var device = getMobileOperatingSystem();
    $.each(myWorks.app,function(key, row){
        let caption = "Go to Play Store";
        if(device == "ios")
        {
            caption = "Go to App Store";
            row.link = row.applink.ios;
        }
        else
        {
            row.link = row.applink.android;
        }
        $(".work-item-container").append(getWorkItemView(row, caption));
    });

    //web
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

var getWorkItemView = function(workItem, buttonCaption)
{
    if(!buttonCaption)
    {
        buttonCaption = "Go to site";
    }

    var str =  '<div class="work-item col-12 col-sm-6 col-lg-4">'
        str += '<div class="item-image" style="background: url(images/thumbnails/'+ workItem.image +') center center no-repeat; background-size: cover;"></div>'
        str +=  '<div class="work-wrapper">';
        str +=     '<span class="name">'+ workItem.name + '</span>';
        str +=     '<span>'+ workItem.type +'</span>';
        str +=     '<span>' + workItem.role + ' - ' + workItem.company + '</span>';
        if(workItem.active) {
            str +=     '<a target="_blank" href="'+ workItem.link +'" class="btn btn-info">'+ buttonCaption +'</a>';
        } else {
            str +=     '<i> No longer available...</i>';
        }
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

function getMobileOperatingSystem() {
    var userAgent = navigator.userAgent || navigator.vendor || window.opera;

    // Windows Phone must come first because its UA also contains "Android"
    if (/windows phone/i.test(userAgent)) {
        return "windows";
    }

    if (/android/i.test(userAgent)) {
        return "android";
    }

    if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
        return "ios";
    }

    return "unknown";
}