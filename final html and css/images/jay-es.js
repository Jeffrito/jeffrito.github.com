  $(function() {
  var images = [
    { img: "twocranes.png", 
      title: "This is a drop",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum risus quam, commodo ac posuere non, facilisis et ligula. Praesent elementum sodales leo, non ultrices dolor cursus at. Suspendisse sed ipsum tempor est volutpat commodo nec quis libero. Lorem ipsum dolor sit amet, consectetur adipiscing elit" },
    { img: "images/image2.jpg", 
      title: "Dog here",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum risus quam, commodo ac posuere non, facilisis et ligula. Praesent elementum sodales leo, non ultrices dolor cursus at. Suspendisse sed ipsum tempor est volutpat commodo nec quis libero. Lorem ipsum dolor sit amet, consectetur adipiscing elit" },
    { img: "images/image3.jpg", 
      title: "Some sort of building",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum risus quam, commodo ac posuere non, facilisis et ligula. Praesent elementum sodales leo, non ultrices dolor cursus at. Suspendisse sed ipsum tempor est volutpat commodo nec quis libero. Lorem ipsum dolor sit amet, consectetur adipiscing elit" },
    { img: "images/image4.jpg", 
     title: "Nightscape",
     description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum risus quam, commodo ac posuere non, facilisis et ligula. Praesent elementum sodales leo, non ultrices dolor cursus at. Suspendisse sed ipsum tempor est volutpat commodo nec quis libero. Lorem ipsum dolor sit amet, consectetur adipiscing elit" }
    ];
  
  $.each(images,function() {
    var imageInfo = this;
    
    var img = $("<img>").attr({'src' : imageInfo.img,
                     'width' : 128 });
    img.click(function() {
       window.open(this.src,"mywin","status=0,toolbar=0,width=400,height=400");
    });
    
    img.hover(function() {
      $(this).addClass("selected");
      $("#thumbnails img:not(.selected)").stop().animate({opacity: 0.4});

      $("#details").show();
      $("#title").text(imageInfo.title);
      $("#description").text(imageInfo.description);

    },function() {
      $("#thumbnails img:not(.selected)").stop().animate({opacity: 1.0});
      $(this).removeClass("selected");
      
      $("#details").hide();
    });

    img.appendTo("#thumbnails");
  });
  
});// JavaScript Document