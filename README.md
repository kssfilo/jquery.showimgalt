#jquery.showimgalt

##About

jQuery plugin to show alt attribute in img elements by inserting text after the img.

##Download

* [jquery.showimgalt.js](https://raw.github.com/kssfilo/jquery.showimgalt/master/dist/jquery.showimgalt.js)
* [jquery.showimgalt.min.js](https://raw.github.com/kssfilo/jquery.showimgalt/master/dist/jquery.showimgalt.min.js)

##Usage

```html
<html>
	<head>
		<script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1.4.2/jquery.min.js"></script>
		<script src='jquery.showimgalt.js' ></script>

		<script>
			$(document).ready(function(){
				$('img').showImgAlt();
			});
		</script>
	</head>

	<body>
		<img src='flower.jpg' alt='a beautiful flower'></img>
	</body>
</html>
```

results

```html
	<img src='flower.jpg' alt='a beautiful flower'></img>
	<span class='imgalt'>a beautiful flower</span>
```

##Options

```js
$('img').showImgAlt({before:true});   //inserts before img element
$('img').showImgAlt({tag:'<figcaption>'});     //uses figcaption element instead of span
$('img').showImgAlt({class:'someclass'});  //sets class to someclass,default is imgalt
```

##Another Usage for HTML5

```html
<html>
	<head>
		<script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1.4.2/jquery.min.js"></script>
		<script src='jquery.showimgalt.js' ></script>

		<script>
			$(document).ready(function(){
				$('figure img').showImgAlt({tag:'<figcaption>'});
			});
		</script>
	</head>

	<body>
		<figure>
			<img src='flower.jpg' alt='a beautiful flower'></img>
		</figure>
	</body>
</html>
```

###results

```html
	<figure>
		<img src='flower.jpg' alt='a beautiful flower'></img>
		<figcaption class='imgalt'>a beautiful flower</figcaption>
	</figure>
```
