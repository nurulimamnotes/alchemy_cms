if (typeof(Alchemy) === 'undefined') {
  var Alchemy = {};
}

(function($) {

  $.extend(Alchemy, {

    Datepicker: function(selector) {
      var browserHasDatepicker = Alchemy.isiOS;
      var datepicker_options = {
        dateFormat: 'yy-mm-dd',
        changeMonth: true,
        changeYear: true,
        showWeek: true,
        showButtonPanel: true,
        showOtherMonths: true,
        onSelect: function() {
          Alchemy.setElementDirty($(this).parents('div.element_editor'));
        }
      };
      if (typeof(selector) === 'undefined') {
        var selector = 'input[type="date"], input.date'
      }
      if (Alchemy.locale === 'de') {
        $.extend(datepicker_options, {
          dateFormat: 'dd.mm.yy',
          dayNames: ['Sonntag', 'Montag', 'Dienstag', 'Mittwoch', 'Donnerstag', 'Freitag', 'Samstag'],
          dayNamesMin: ['So', 'Mo', 'Di', 'Mi', 'Do', 'Fr', 'Sa'],
          monthNames: ['Januar', 'Februar', 'März', 'April', 'Mai', 'Juni', 'Juli', 'August', 'September', 'Oktober', 'November', 'Dezember'],
          monthNamesShort: ['Jan', 'Feb', 'Mär', 'Apr', 'Mai', 'Jun', 'Jul', 'Aug', 'Sep', 'Okt', 'Nov', 'Dez'],
          closeText: 'Ok',
          currentText: 'Heute',
          weekHeader: 'KW',
          nextText: 'nächster',
          prevText: 'vorheriger'
        });
      }
      if (!browserHasDatepicker) {
        // Disables the browsers default Datepicker.
        $(selector).datepicker(datepicker_options).prop('type','text');
      }
    }

  });

})(jQuery);
