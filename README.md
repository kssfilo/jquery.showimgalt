#showimgalt

##About

jQuery plugin to show alt attribute in img elements by inserting text after the img.

##Usage

```html
<head>
	<script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1.4.2/jquery.min.js"></script>
	<script src='jquery-showimgalt.js' ></script>

	<script>
		$(document).ready(function(){
			$('img').showImgAlt();
		});
	</script>
</head>

<body>
	<img src='flower.jpg' alt='a beautiful flower'></img>
</body>
```

results

```html
	<img src='flower.jpg' alt='a beautiful flower'></img>
	<span class='imgalt'>a beautiful flower</span>
```

##Options

```js
$('img').showImgAlt({before:true});   //inserts before img element
$('img').showImgAlt({tag:'<p>'});     //uses p element instead of span
$('img').showImgAlt({class:'someclass'});  //sets class to someclass,default is imgalt
```

