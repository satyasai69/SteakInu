var $cursor = $(".cursor"),
        $overlay = $(".project-overlay");
      function moveCircle(e) {
        TweenLite.to($cursor, 0.5, {
          css: {
            left: e.pageX,
            top: e.pageY
          },
          delay: 0.03
        });
      }
      $(".p-1").hover(function() {
        $(".cursor").css({ "background-image": "url(https://media.discordapp.net/attachments/1058738298178248748/1067327171586162718/ethxrnity_steak_covered_with_gold_should_have_a_transperent_bac_8ad23a26-65a1-482e-98a0-4a71c05d37cc.png?width=882&height=882)" });
      });
      $(".p-2").hover(function() {
        $(".cursor").css({ "background-image": "url(https://cdn.discordapp.com/attachments/1068948405008744619/1069217935115178025/IMG_4562.png)" });
      });
      $(".p-3").hover(function() {
        $(".cursor").css({ "background-image": "url(https://cdn.discordapp.com/attachments/1068948405008744619/1069217935492653126/IMG_4561.png)" });
      });
      $(".p-4").hover(function() {
        $(".cursor").css({ "background-image": "url(https://media.discordapp.net/attachments/1068948405008744619/1069217936822255652/IMG_4558.png?width=808&height=808)" });
      });
      var flag = false;
      $($overlay).mousemove(function() {
        flag = true;
        TweenLite.to($cursor, 0.3, { scale: 1, autoAlpha: 1 });
        $($overlay).on("mousemove", moveCircle);
      });
      $($overlay).mouseout(function() {
        flag = false;
        TweenLite.to($cursor, 0.3, { scale: 0.1, autoAlpha: 0 });
      });