canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
nasa_mars_images_array=["nasa_img_1_.jpg","nasa_img_2.jpg","nasa_img_3.jpg"];
random_number=Math.floor(Math.random()*4);
console.log(random_number);
rover_width=100;
rover_height=90;
background_image=nasa_mars_images_array[random_number];
console.log(background_image);
rover_x=10;
rover_y=10;
background_image="mars.jpg";
rover_image="rover.png";
function add()
{
    background_imageTAG=new Image();
    background_imageTAG.onload=uploadBackground;
    background_imageTAG.src=background_image;

    rover_imageTag=new Image();
    rover_imageTag.onload=uploadrover;
    rover_imageTag.src=rover_image;
}
function uploadBackground(){
    ctx.drawImage (background_imageTAG,0,0,canvas.width,canvas.height);
}
function uploadrover()
{
    ctx.drawImage(rover_imageTag,rover_x,rover_y,rover_width,rover_height);
}
window.addEventListener("keydown",my_keydown);
function my_keydown(e)
{
    keyPressed=e.keyCode;
    console.log(keyPressed);
    if(keyPressed=="38")
    {
        up();
        console.log("up");
    }
    if(keyPressed=="40")
    {
        down();
        console.log("down");
    }
    if(keyPressed=="37")
    {
        left();
        console.log("left");
    }
    if(keyPressed=="39")
    {
        right();
        console.log("right");
    }
}
function up()
{
    if(rover_y >=0)
{
    rover_y=rover_y-10;
    console.log("when up arrow is used,x="+rover_x+",y="+rover_y);
    uploadBackground();
    uploadrover();
}
}
function down()
{
    if(rover_y <=500)
{
    rover_y=rover_y+10;
    console.log("when up arrow is used,x="+rover_x+",y="+rover_y);
    uploadBackground();
    uploadrover();
}
}
function left()
{
    if(rover_x >=0)
{
    rover_x=rover_x-10;
    console.log("when up arrow is used,x="+rover_x+",y="+rover_y);
    uploadBackground();
    uploadrover();
}
}
function right()
{
    if(rover_x <=700)
{
    rover_x=rover_x+10;
    console.log("when up arrow is used,x="+rover_x+",y="+rover_y);
    uploadBackground();
    uploadrover();
}
}