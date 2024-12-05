$(document).ready(function() {
  function createQuoteCarousel(quote) {
    return `
        <div class="carousel-item">
          <div class="text-white justify-content-center align-items-center mx-auto">
            <div class="col-12 col-sm-2 text-center">
              <img src="${quote.pic_url}" class="rounded-circle" width="150px" height="150px" alt="${quote.name}">
            </div>
            <div class="col-12 col-sm-10"></div>
              <div class="quote-text">
                <p>${quote.text}</p>
                <h4 class="font-weight-bold mb-0">${quote.name}</h4>
                <p class="font-italic">${quote.title}</p>
              </div>
            </div>
          </div>
        </div>
    `;
  }

  // Function to load quotes from api
  function loadQuotes() {
    $('.loader').show();
    $('.quoteCarousel').hide();
    $.ajax({
      url: 'https://smileschool-api.hbtn.info/quotes',
      method: 'GET',
      success: function(data) {
        const quoteCarousel = $('.quoteCarousel');
        
        // Adds quotes to carousel
        data.forEach(function (quote){
          const quoteHTML = createQuoteCarousel(quote);
          const $carouselItem = $(quoteHTML);
          
          quoteCarousel.append($carouselItem);
        });

        // Hide loader and show carousel
        $('.loader').hide();
        $('.quoteCarousel').show();
        // Initialize Slick carousel
        $('.quoteCarousel').slick({
          slidesToShow: 1,
          infinite: true,
          initialSlide: 0,
          prevArrow: '<div class="carousel-control-prev"><img src="/images/arrow_white_left.png" class="quoteImage" /></div>',
          nextArrow: '<div class="carousel-control-next"><img src="/images/arrow_white_right.png" class="quoteImage" /></div>',
        });
      },
    });
  }

  // Creates a card for each item
  function createVideo(video) {
    return `<div class="row align-items-center mx-auto">
              <div class="d-flex flex-column">
                <div class="card">
                  <img src="${video.thumb_url}" class="card-img-top" alt="Thumbnail for video"/>
                  <div class="card-img-overlay text-center">
                    <img src="images/play.png" alt="Play button" width="64px" class="align-self-center play-overlay"/>
                  </div>
                  <div class="card-body">
                    <h5 class="card-title font-weight-bold">
                      ${video.title}
                    </h5>
                    <p class="card-text text-muted">
                      Lorem ipsum dolor sit amet, consect adipiscing elit,
                      sed do eiusmod.
                    </p>
                    <div class="creator d-flex align-items-center">
                      <img src="${video.author_pic_url || 'images/profile_1.jpg'}" alt="Video Author" width="30px" class="rounded-circle"/>
                      <h6 class="pl-3 m-0 main-color">${video.author}</h6>
                    </div>
                    <div class="info pt-3 d-flex justify-content-between">
                      <div class="rating d-flex flex-row">${video.star}</div>
                      <span class="main-color">${video.duration || '8 min'}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>`;
  }


  function loadVideos() {
    $('.loader').show();
    $('.videoCarousel').hide();
    $.ajax({
      url: 'https://smileschool-api.hbtn.info/popular-tutorials',
      method: 'GET',
      success: function(data) {
        const videoCarousel = $('.videoCarousel');

        // Adds videos to carousel
        data.forEach(function (video){
          const videoCard = createVideo(video);
          const $carouselItem = $(videoCard);

          videoCarousel.append($carouselItem);
        });

        // Hide loader and show carousel
        $('.loader').hide();
        $('.videoCarousel').show();
        // Initialize Slick carousel
        $('.videoCarousel').slick({
          slidesToShow: 4,
          infinite: true,
          initialSlide: 0,
          prevArrow: '<div class="carousel-control-prev"><img src="/images/arrow_white_left.png" class="quoteImage" /></div>',
          nextArrow: '<div class="carousel-control-next"><img src="/images/arrow_white_right.png" class="quoteImage" /></div>',
          responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 2,
              }
            },
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 1,
              }
            }
          ]
        });
      },
    });
  }

  function loadLatest() {
    $('.loader').show();
    $('.videoCarousel').hide();
    $.ajax({
      url: 'https://smileschool-api.hbtn.info/latest-tutorials',
      method: 'GET',
      success: function(data) {
        const videoCarousel = $('.videoCarousel');

        // Adds videos to carousel
        data.forEach(function (video){
          const videoCard = createVideo(video);
          const $carouselItem = $(videoCard);

          videoCarousel.append($carouselItem);
        });

        // Hide loader and show carousel
        $('.loader').hide();
        $('.videoCarousel').show();
        // Initialize Slick carousel
        $('.videoCarousel').slick({
          slidesToShow: 4,
          infinite: true,
          initialSlide: 0,
          prevArrow: '<div class="carousel-control-prev"><img src="/images/arrow_white_left.png" class="quoteImage" /></div>',
          nextArrow: '<div class="carousel-control-next"><img src="/images/arrow_white_right.png" class="quoteImage" /></div>',
          responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 2,
              }
            },
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 1,
              }
            }
          ]
        });
      },
    });
  }

  function createCourse(course) {
    return `<div class="row align-items-center mx-auto">
              <div class="d-flex flex-column">
                <div class="card">
                  <img src="${course.thumb_url}" class="card-img-top" alt="Thumbnail for video"/>
                  <div class="card-img-overlay text-center">
                    <img src="images/play.png" alt="Play button" width="64px" class="align-self-center play-overlay"/>
                  </div>
                  <div class="card-body">
                    <h5 class="card-title font-weight-bold">
                      ${course.title}
                    </h5>
                    <p class="card-text text-muted">
                      Lorem ipsum dolor sit amet, consect adipiscing elit,
                      sed do eiusmod.
                    </p>
                    <div class="creator d-flex align-items-center">
                      <img src="${course.author_pic_url || 'images/profile_1.jpg'}" alt="Video Author" width="30px" class="rounded-circle"/>
                      <h6 class="pl-3 m-0 main-color">${course.author}</h6>
                    </div>
                    <div class="info pt-3 d-flex justify-content-between">
                      <div class="rating d-flex flex-row">${course.star}</div>
                      <span class="main-color">${course.duration || '8 min'}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>`;
  }
  
  function loadCourses() {
    $('.loader').show();
    $('.courses').hide();
    $.ajax({
      url: 'https://smileschool-api.hbtn.info/courses',
      method: 'GET',
      data: {
        q: $('#keywords').val(),
        topic: $('#topic').val(),
        sort: $('#sort').val(),
      },
      success: function(data) {
        const courses = data.courses;

        courses.forEach(function(course) {
          const video = createCourse(course);
          $('.courses').append(video);
        });
        $('.loader').hide();
        $('.courses').show()
      }
    })
  };


  // Loads in when page loads
  loadQuotes();
  loadVideos();
  loadLatest();
  loadCourses();
});
