function setPickerElementSizes() {
  var blockHeight = $('#pickerImage').height();
  blockHeight = blockHeight - parseInt( $('.picker-caption').css('paddingTop') );
  blockHeight = blockHeight - parseInt( $('.picker-caption').css('paddingBottom') );

  var blockWidth = $('#pickerImage').width();
  blockWidth = blockWidth - parseInt( $('.picker-caption').css('paddingLeft') );
  blockWidth = blockWidth - parseInt( $('.picker-caption').css('paddingRight') );

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
