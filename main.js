canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");

greencarWidth = 75;
greencarHeight = 100;

greencarX = 5;
greencary = 225;

background_image = "parkingLot.jpg";
greencar_image = "car2.png";

//Set initial position for a car image.

function add() {
	background_imageTag = new Image();
	background_imageTag.onload = uploadBackground;
	background_imageTag.src = background_image;

	greencar_imageTag =new Image();
	greencar_imageTag.onload = uploadgreencar;
	greencar_imageTag.src = greencar_image;
}

function uploadBackground() {
	//Define function ‘uploadBackground’
    ctx.drawImage(background_imageTag, 0,0, canvas.width, canvas.height);
}

function uploadgreencar() {
	//Define function ‘uploadgreencar’.
    
	ctx.drawImage(greencar_imageTag, greencarX, greencary, greencarWidth, greencarHeight);

}


window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
	
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
	
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
		
		
}

function up() {
    if (greencary > 0) {
        greencary = greencary - 10;
        console.log("When up arrow is pressed x = " + greencarX + " Y = " + greencary)
        uploadBackground();
        uploadgreencar();
    }
    
}

function down() {
    if (greencary <= 300) {
        greencary = greencary + 10;
        console.log("When up arrow is pressed x = " + greencarX + " Y = " + greencary)
        uploadBackground();
        uploadgreencar();
    }
    
}

function left()
{
	//Define function to move the car left side
	if (greencarX > 0) {
        greencarX = greencarX - 10;
        console.log("When up arrow is pressed x = " + greencarX + " Y = " + greencary)
        uploadBackground();
        uploadgreencar();
    }
}

function right()
{
	//Define function to move the car right side
	if (greencarX <= 700) {
        greencarX = greencarX + 10;
        console.log("When up arrow is pressed x = " + greencarX + " Y = " + greencary)
        uploadBackground();
        uploadgreencar();
    }
}
