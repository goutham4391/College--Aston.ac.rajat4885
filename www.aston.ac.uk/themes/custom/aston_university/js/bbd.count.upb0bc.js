/**
 * @file
 * Big Blue Door Theme CountUp JS functionality.
 */
import {CountUp} from "../js/countup/dist/countUp.min.js";

(function ($) {

  $(".count-up").each(function(index) {
    var startVal = $(this).find('.field--name-field-starting-number').text();
    var endVal = $(this).find('.field--name-field-ending-number').text();

    const options = {
      startVal: startVal,
    };

    window['counter_' + index] = new CountUp($(this).attr('id'), endVal, options);

  });

  $('.paragraph--type--numbers-panel')
    .waypoint(function(direction) {
      if (direction == "up") {
        $(".count-up").each(function(index) {
          //window['counter_' + index].reset();
        });
      }
      else {
        $(".count-up").each(function(index) {
          window['counter_' + index].start();
        });
      }

    }, {
      offset: 'bottom-in-view'
    })

})(jQuery);
