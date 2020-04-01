// im a new to jquery so i try to do all the thing i can in jquery to fill more relax with it.
$("document").ready(function () {

  const shortText = (str) =>{
    let tmp = str.slice(0, 25);
    return tmp + "...";
  }

  // passing content(groups)
  function Card(title, link, img, desc) {
    this.link = link;
    this.img = img;
    this.title = title;
    this.desc = desc;
  };

  let img = []
  let book = []
  let podcast = []

  //links
  img[1] = new Card("Linux toturials for happy people", "https://www.youtube.com/playlist?list=PL-tKrPVkKKE2AniHDmp6zK9KGD1sjf0bd", "linux.jpg")
  img[2] = new Card("Jaditv", "https://www.youtube.com/playlist?list=PL-tKrPVkKKE3hrSEWmC_zWayV-hWKQPKR", "tv.jpg")
  img[3] = new Card("Serial Number SMS Confirmation Project", "https://www.youtube.com/playlist?list=PL-tKrPVkKKE1vAT_rgjnvL_RgFUI9oJ9a", "sms.jpg")
  img[4] = new Card("Blockchain, Currency Code and Bitcoin toturials", "https://www.youtube.com/playlist?list=PL-tKrPVkKKE1gLxAL-56H-XR-fTapqofC", "blockchain.jpg")
  img[5] = new Card("Undrestanding programming", "https://www.youtube.com/playlist?list=PL-tKrPVkKKE1Y_o_h2w85dzVdoX5t7SI0", "programming.jpg")
  img[6] = new Card("Few minutes with jadi", "https://www.youtube.com/playlist?list=PL-tKrPVkKKE3NsQ41Mg5sKEpR6pWTgI5V", "fewMin.jpg")
  img[7] = new Card("Git", "https://faradars.org/courses/fvgit9609-managed-distributed-edition-using-git", "git.jpg")
  img[8] = new Card("video casts", "https://jadi.net/tag/videocast/", "videocast.jpg")
  img[9] = new Card("Linux lpic 1&2 v4", "https://www.youtube.com/playlist?list=PL-tKrPVkKKE1mjuWx2W-_xEDRcoteSDLP", "lpic.jpg")
  img[10] = new Card("Jadi english version", "https://www.youtube.com/playlist?list=PL-tKrPVkKKE0Ta6TalbWPC3xOuxRlJayf", "en.jpg")
  img[11] = new Card("Bestoon", "https://www.youtube.com/playlist?list=PL-tKrPVkKKE2arllFNptfpTWaCW6hH8Rl", "bestoon.jpg")
  img[12] = new Card("Python for beginer", "https://maktabkhooneh.org/course/%D8%A2%D9%85%D9%88%D8%B2%D8%B4-%D8%A8%D8%B1%D9%86%D8%A7%D9%85%D9%87-%D9%86%D9%88%DB%8C%D8%B3%DB%8C-%D8%A8%D8%A7-%D9%BE%D8%A7%DB%8C%D8%AA%D9%88%D9%86-%D9%85%D9%82%D8%AF%D9%85%D8%A7%D8%AA%DB%8C-mk346/", "py.jpg")
  img[13] = new Card("Advance python", "https://maktabkhooneh.org/course/%D8%A2%D9%85%D9%88%D8%B2%D8%B4-%D8%A8%D8%B1%D9%86%D8%A7%D9%85%D9%87-%D9%86%D9%88%DB%8C%D8%B3%DB%8C-%D8%A8%D8%A7-%D9%BE%D8%A7%DB%8C%D8%AA%D9%88%D9%86-%D9%BE%DB%8C%D8%B4%D8%B1%D9%81%D8%AA%D9%87-mk387/", "py2.jpg")
  book[1] = new Card("Just for fun", "http://linuxstory.ir/", "books.jpg")
  book[2] = new Card("Linux and life", "http://linuxbook.ir/", "books.jpg")
  book[3] = new Card("The lost bicycle guide for life", "http://bikezen.ir/", "books.jpg")
  podcast[1] = new Card("Radio geek podcast", "https://jadi.net/tag/podcast/", "podcast.jpg")


  //if title is to long so short it :)
  for(let i = 1; i < img.length; i++){
    if(img[i].title.length > 26){
      img[i].title = shortText(img[i].title)
    }
  }

  // adding content
  let tmpHtml = ""
  // $("header").append('<img src="img/jadiFace.jpg" alt="jadi">');
  $("header").append('<div class="bigTitle"><h1>ThankYou JADI</h1><p>for all this awesome contents that you spend time to make for us... your the best</p></div>');

  // $("#section1 .section-title").append("<h4>Video Toturials<hr></h4>");
  for (let i = 1; i < img.length; i++) {
    tmpHtml = '<div class="col-lg-4 col-md-6 col-12">' + '<div class="gallery-card">' + '<a href="' + img[i].link
      + '" target="_blank">' + '<img src="img/' + img[i].img + '">'
      + "<br>" + "<p>" + img[i].title + "</p>" + '</a>' + '</div>' + '</div>';
    $("#section1").parent().append(tmpHtml);
  }

  // $("#section2 .section-title").append("<h4>Books<hr></h4>");
  for (let i = 1; i < book.length; i++) {
    tmpHtml = '<div class="col-lg-4 col-md-6 col-12">' + '<div class="gallery-card">' + '<a href="' + book[i].link
      + '" target="_blank">' + '<img src="img/' + book[i].img + '">'
      + "<br>" + "<p>" + img[i].title + "</p>" + '</a>' + '</div>' + '</div>';
    $("#section2").parent().append(tmpHtml);
  }

  // $("#section3 .section-title").append("<h4>Podcast<hr></h4>");
  for (let i = 1; i < podcast.length; i++) {
    tmpHtml = '<div class="col-lg-4 col-md-6 col-12">' + '<div class="gallery-card">' + '<a href="' + podcast[i].link
      + '" target="_blank">' + '<img src="img/' + podcast[i].img + '">'
      + "<br>" + "<p>" + img[i].title + "</p>" + '</a>' + '</div>' + '</div>';
    $("#section3").parent().append(tmpHtml);
  }

  let theme = "light";
  // add bootstrap classes
  $(".container-fluid").addClass("text-center");
  $("header").addClass("text-center");
  $("#header").addClass("align-items-center");
  $(".section-title").addClass("col-12 text-center");
  $("row").addClass("justify-content-around");
  $("img").addClass("img-fluid");
  $("#changeTheme").click(() =>{
    if(theme == "light"){
      $('link[href="myStyle.css"]').attr("href", "myDarkStyle.css");
      $("#changeTheme").html('<i class="fas fa-sun"></i>');
      theme = "dark";
    } else if(theme == "dark"){
      $('link[href="myDarkStyle.css"]').attr("href", "myStyle.css");
      $("#changeTheme").html('<i class="fas fa-moon"></i>');
      theme = "light";
    }
  })
});
