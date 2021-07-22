$(document).ready(function () {
  $("textarea").keyup(function (e) {
    if (e.keyCode == 13) {
      const regex = /hsl\(.*%\)/gim;
      const colors = this.value.match(regex);
      colors.map((e) => {
        $(".main").html(function(){
          this.innerHTML += `<div class="card">
                <div class="color" style="background:${e}"></div>
                <div class="hover-layer">
                    <div class="color-code" style="user-select:all">${e}</div>
                    <button>Copy !</button>
                </div>
            </div>`
        }); 
    });
    }
  });
  $('.main').on('click','.color-code',function(){
      document.execCommand('copy');
  })
});
