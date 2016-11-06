function setPickerElementSizes() {
  var blockHeight = $('#pickerImage').height();
  blockHeight = blockHeight - parseInt( $('.picker-caption').css('paddingTop') );
  blockHeight = blockHeight - parseInt( $('.picker-caption').css('paddingBottom') );

  var blockWidth = $('#pickerImage').width();
  blockWidth = blockWidth - parseInt( $('.picker-caption').css('paddingLeft') );
  blockWidth = blockWidth - parseInt( $('.picker-caption').css('paddingRight') );

  $('.picker-caption').height(blockHeight);
  $('.picker-caption').css('line-height', blockHeight+'px');

  $('.picker-crop-height').height(blockHeight);
  $('.picker-crop-width').width(blockWidth);
};

function setWindowElementSizes() {
  var blockHeight = window.innerHeight;
  blockHeight = blockHeight - parseInt( $('.top-bar').css('height') );
  $('.window-caption').height(blockHeight);
  $('.window-caption').css('line-height', blockHeight+'px');
  $('.window-caption').width(window.innerWidth);
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
