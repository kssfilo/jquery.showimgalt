(function($) {
  module('jQuery.showimgalt');

  test('basic', function() {
	$('#qunit-fixture').append("<img src='' id='target' alt='alttext' />");
	$('#target').showImgAlt();
    expect(1);
	equal($('#qunit-fixture').html(),'<img src=\"\" id=\"target\" alt=\"alttext\"><span class=\"imgalt\">alttext</span>');
	$('#qunit-fixture').html('');
  });

  test('figurecaption', function() {
	$('#qunit-fixture').append("<img src='' id='target' alt='alttext' />");
	$('#target').showImgAlt({tag:'<figcaption>'});
    expect(1);
	equal($('#qunit-fixture').html(),'<img src=\"\" id=\"target\" alt=\"alttext\"><figcaption class=\"imgalt\">alttext</figcaption>');
	$('#qunit-fixture').html('');
  });

  test('before', function() {
	$('#qunit-fixture').append("<img src='' id='target' alt='alttext' />");
	$('#target').showImgAlt({before:true});
    expect(1);
	equal($('#qunit-fixture').html(),'<span class=\"imgalt\">alttext</span><img src=\"\" id=\"target\" alt=\"alttext\">');
	$('#qunit-fixture').html('');
  });

  test('class', function() {
	$('#qunit-fixture').append("<img src='' id='target' alt='alttext' />");
	$('#target').showImgAlt({class:'someclass'});
    expect(1);
	equal($('#qunit-fixture').html(),'<img src=\"\" id=\"target\" alt=\"alttext\"><span class=\"someclass\">alttext</span>');
	$('#qunit-fixture').html('');
  });

}(jQuery));
