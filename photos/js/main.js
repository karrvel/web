
var dir           = "img/",
    fileExtension = ".jfif",
    imgSrc        = new Array,
    imgName       = new Array;

$.ajax({
    url: dir,
    success: function (data) {
        $(data).find("a:contains(" + fileExtension + ")").each(function () {
          imgName.push(parseInt(this.title.replace('.jfif', '')));
        })
        imgName.sort(function(a, b){return a - b});

        for (num of imgName) {
          imgSrc.push(dir + num + fileExtension);
        }
     }
})

$('#upload').click(() => {
  $('.img-main').empty();

  setTimeout( () => {
    for (src of imgSrc) {
    col4 = $(document.createElement('div'));
    col4.addClass(['col-4', 'p-1', 'mb-1']);

    card = $(document.createElement('div'));
    card.addClass(['card','bordered','p-2']);
    col4.append(card);

    img = $(document.createElement('img'));
    img.addClass('card-img-top');
    img.attr('src', src);
    card.append(img);

    $('.img-main').append(col4);
    }
  }, 100)
})

