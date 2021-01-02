// $(document).ready(function () {
//   $(document).on('click', '.dropdown-item', function (e) {
//     e.preventDefault();
//   });
//   if ($(window).width() < 992) {
//     $('.has-submenu').click(function (e) {
//       e.preventDefault();
//       $(this).next('.megasubmenu').toggle();
//       $('.dropdown').on('hide.bs.dropdown', function () {
//         $(this).find('.megasubmenu').hide();
//       });
//     });
//   }
// });

// const nodeList = document.querySelectorAll('.dropdown-menu a.dropdown-toggle');
// nodeList.forEach((elem) => {
//   elem.addEventListener('click', (e) => {
//     e.preventDefault();
//     let parent = elem.offsetParent;
//     if (!elem.nextElementSibling.classList.contains('show')) {
//       parent.classList.remove('show');
//     }

//     let subMenu = elem.nextElementSibling;
//     subMenu.classList.toggle('show');
//     elem.parentElement.classList.toggle('show');
//   });
// });

// document.querySelector('.dropdown-menu').addEventListener('click', (e) => {
//   e.preventDefault();
// });

$(document).ready(function () {
  $('.dropdown-menu a.dropdown-toggle').on('click', function (e) {
    var $el = $(this);
    $el.toggleClass('active-dropdown');
    var $parent = $(this).offsetParent('.dropdown-menu');
    if (!$(this).next().hasClass('show')) {
      $(this)
        .parents('.dropdown-menu')
        .first()
        .find('.show')
        .removeClass('show');
    }
    var $subMenu = $(this).next('.dropdown-menu');
    $subMenu.toggleClass('show');

    $(this).parent('li').toggleClass('show');

    $(this)
      .parents('li.nav-item.dropdown.show')
      .on('hidden.bs.dropdown', function (e) {
        $('.dropdown-menu .show').removeClass('show');
        $el.removeClass('active-dropdown');
      });

    if (!$parent.parent().hasClass('navbar-nav')) {
      $el.next().css({
        'margin-top': '-1px',
        left: $parent.outerWidth() - 2,
        height: '100%',
      });
    }

    return false;
  });
});
