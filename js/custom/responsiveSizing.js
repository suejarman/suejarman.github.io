function setPickerElementSizes() {
  var blockHeight = $('#pickerImage').height();
  var blockWidth = $('#pickerImage').width();

  $('.picker-caption').height(blockHeight+1);
  $('.picker-caption').width(blockWidth+1);
  $('.picker-caption').css('line-height', blockHeight+'px');
};

function setWindowElementSizes() {
  var blockHeight = window.innerHeight;
  var headerHeight = parseInt( $('.top-bar').css('height') );
  blockHeight = blockHeight - headerHeight;

  $('.window-caption').height(blockHeight);
  $('.window-caption').css('line-height', blockHeight+'px');
};

$(window).on("load",function() {
  setPickerElementSizes();
  setWindowElementSizes();
});

$(window).on("resize",function() {
  setPickerElementSizes();
  setWindowElementSizes();
});

$(window).on("orientationchange",function(){
  setPickerElementSizes();
  setWindowElementSizes();
});
