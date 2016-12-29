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

  $('.window-caption-middle').width(window.innerWidth);

};

function setFullWidthSize() {
  $('.full-width').width(window.innerWidth);
};

$(window).load(function() {
  setPickerElementSizes();
  setWindowElementSizes();
  setFullWidthSize();
});

$(window).resize(function() {
  setPickerElementSizes();
  setWindowElementSizes();
  setFullWidthSize();
});
