// im a new to jquery so i try to do all the thing i can in jquery to fill more relax with it.
$("document").ready(function(){

// passing content(groups)
function Card(title, link, img, desc){
  this.link = link;
  this.img = img;
  this.title = title;
  this.desc = desc;
};

let img = []
let book = []
let podcast = []

img[1] = new Card("Git", "https://faradars.org/courses/fvgit9609-managed-distributed-edition-using-git", "git.jpg")
img[2] = new Card("video casts", "https://jadi.net/tag/videocast/", "videocast.jpg")
img[3] = new Card("Serial Number SMS Confirmation Project", "https://www.youtube.com/playlist?list=PL-tKrPVkKKE1vAT_rgjnvL_RgFUI9oJ9a", "sms.jpg")
img[4] = new Card("Blockchain, Currency Code and Bitcoin toturials", "https://www.youtube.com/playlist?list=PL-tKrPVkKKE1gLxAL-56H-XR-fTapqofC", "blockchain.jpg")
img[5] = new Card("Undrestanding programming", "https://www.youtube.com/playlist?list=PL-tKrPVkKKE1Y_o_h2w85dzVdoX5t7SI0", "programming.jpg")
img[6] = new Card("Few minutes with jadi", "https://www.youtube.com/playlist?list=PL-tKrPVkKKE3NsQ41Mg5sKEpR6pWTgI5V", "fewMin.jpg")
img[7] = new Card("Linux toturials for happy people", "https://www.youtube.com/playlist?list=PL-tKrPVkKKE2AniHDmp6zK9KGD1sjf0bd", "linux.jpg")
img[8] = new Card("Jaditv", "https://www.youtube.com/playlist?list=PL-tKrPVkKKE3hrSEWmC_zWayV-hWKQPKR", "tv.jpg")
img[9] = new Card("Linux lpic 1&2 v4", "https://www.youtube.com/playlist?list=PL-tKrPVkKKE1mjuWx2W-_xEDRcoteSDLP")
img[10] = new Card("Jadi english version", "https://www.youtube.com/playlist?list=PL-tKrPVkKKE0Ta6TalbWPC3xOuxRlJayf", "en.jpg")
img[11] = new Card("Bestoon", "https://www.youtube.com/playlist?list=PL-tKrPVkKKE2arllFNptfpTWaCW6hH8Rl", "bestoon.jpg")
img[12] = new Card("Python for beginer", "https://maktabkhooneh.org/course/%D8%A2%D9%85%D9%88%D8%B2%D8%B4-%D8%A8%D8%B1%D9%86%D8%A7%D9%85%D9%87-%D9%86%D9%88%DB%8C%D8%B3%DB%8C-%D8%A8%D8%A7-%D9%BE%D8%A7%DB%8C%D8%AA%D9%88%D9%86-%D9%85%D9%82%D8%AF%D9%85%D8%A7%D8%AA%DB%8C-mk346/", "py.jpg")
img[13] = new Card("Advance python", "https://maktabkhooneh.org/course/%D8%A2%D9%85%D9%88%D8%B2%D8%B4-%D8%A8%D8%B1%D9%86%D8%A7%D9%85%D9%87-%D9%86%D9%88%DB%8C%D8%B3%DB%8C-%D8%A8%D8%A7-%D9%BE%D8%A7%DB%8C%D8%AA%D9%88%D9%86-%D9%BE%DB%8C%D8%B4%D8%B1%D9%81%D8%AA%D9%87-mk387/", "py2.jpg")
book[1] = new Card("Just for fun", "http://linuxstory.ir/", "books.jpg")
book[2] = new Card("Linux and life", "http://linuxbook.ir/", "books.jpg")
book[3] = new Card("The lost bicycle guide for life", "http://bikezen.ir/", "books.jpg")
podcast[1] = new Card("Radio geek podcast", "https://jadi.net/tag/podcast/", "podcast.jpg")

// passing content(singles)

// adding content
let tmpHtml = ""
$("header").append('<img src="img/jadiFace.jpg" alt="jadi">');
$("header").append("<h1>ThankYou JADI</h1><p>for all this awesome contents that you spend time to make for us... your the best</p>");

$("#section1 .section-title").append("<h4>Video Toturials</h4><hr>");
for(let i = 1 ; i < img.length; i++){
  tmpHtml = '<div class="gallery-card">' + '<img src="img/' + img[i].img + '">'
  + '<a href="' + img[i].link + '" target="__blank">' + img[i].title +'</a>' + '</div>';
  $("#section1 .gallery").append(tmpHtml);
}

$("#section2 .section-title").append("<h4>Books</h4><hr>");
for(let i = 1; i < book.length; i++){
    tmpHtml = '<div class="gallery-card">' + '<img src="img/' + book[i].img + '">'
    + '<a href="' + book[i].link + '" target="__blank">' + book[i].title +'</a>' + '</div>';
    $("#section2 .gallery").append(tmpHtml);
}

$("#section3 .section-title").append("<h4>Podcast</h4><hr>");
for(let i = 1; i < podcast.length; i++){
    tmpHtml = '<div class="gallery-card">' + '<img src="img/' + podcast[i].img + '">'
    + '<a href="' + podcast[i].link + '" target="__blank">' + podcast[i].title +'</a>' + '</div>';
    $("#section2 .gallery").append(tmpHtml);
}


// add bootstrap classes


});
