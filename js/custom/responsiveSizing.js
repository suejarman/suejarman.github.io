function setPickerElementSizes() {
  var blockHeight = $('#pickerImage').height();
  var blockWidth = $('#pickerImage').width();

  $('.picker-caption').height(blockHeight+1);
  $('.picker-caption').width(blockWidth+1);
  $('.picker-caption').css('line-height', blockHeight+'px');

  $('.picker-crop-height').height(blockHeight);
  $('.picker-crop-width').width(blockWidth);
};

function setWindowElementSizes() {
  var blockHeight = window.innerHeight;
  var headerHeight = parseInt( $('.top-bar').css('height') );
  blockHeight = blockHeight - headerHeight;

  $('.window-caption').height(blockHeight);
  $('.window-caption').css('line-height', blockHeight+'px');

};

function setFullWidthSize() {
  $('.full-width').width(window.innerWidth);
};

$(window).on("load",function() {
  setPickerElementSizes();
  setWindowElementSizes();
  setFullWidthSize();
});

$(window).on("resize",function() {
  setPickerElementSizes();
  setWindowElementSizes();
  setFullWidthSize();
});

$(window).on("orientationchange",function(){
  setPickerElementSizes();
  setWindowElementSizes();
  setFullWidthSize();
});
