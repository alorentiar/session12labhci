$(document).ready(() => {
  const container = $("#container");
  container.html("<h1>Hello World<h1>");

  let data = [1, 2, 3, 4, 5];
  let list = "";

  data.forEach((value, index) => {
    list += `<li>${value}</li>`;
  });

  let container_content = container.html();
  // console.log(container_content);
  container.html(`
    ${container_content}
    <ul>
        ${list}
    </ul>
`);

  // kalo class depannya tinggal diganti ama titik
  const child = $("ul li:nth-child(1)").css("color", "red").css("background-color", "yellow");

  child.click(() => {
    alert(child.html());
  });
  console.log(child);

  const hide = $("#hide");
  const show = $("#show");

  hide.click(() => {
    // container.hide(100, "swing");
    // container.slideUp(1000);
    container.fadeOut(1000);
  });

  show.click(() => {
    // container.show(1000, "linear");
    // container.slideDown(1000);
    container.fadeIn(1000);
  });

  const animate = $("#animate");

  animate.click(() => {
    container.stop().animate({
      height: "500px",
      backgroundcolor: "blue",
    });
  });

  const images = [
    "https://i.pinimg.com/originals/4d/04/b6/4d04b6ba8264eddf752b974a6a40382d.jpg",
    "https://cdn0-production-images-kly.akamaized.net/a4G2GrIRYJkJmNp6w3wakTfkLrE=/1200x675/smart/filters:quality(75):strip_icc():format(jpeg)/kly-media-production/medias/2397689/original/079704300_1541055654-gitar.jpg",
    "https://id.yamaha.com/id/files/Image-Index_C_CX_1080x1080_74dbc8c0454066169b60df7087f1809c.jpg?impolicy=resize&imwid=396&imhei=396",
  ];

  let slides = "";

  images.forEach((value, index) => {
    slides += `<li class="slide"><img src='${value}'/></li>`;
  });

  const slides_container = $(".slides");
  slides_container.html(slides);

  function startSlider() {
    $(".slides > li:first").fadeOut(1000).next().fadeIn(1000).end().appendTo(".slides");
  }

  setInterval(startSlider, 3000);
});
