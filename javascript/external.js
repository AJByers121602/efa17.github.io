// arr = ["Mael","Eric","Randall","James"];
// for (var i=0; i < arr.length; i++)
// {
// document.writeln(arr[i],"<br>");
// }
//user_name =window.prompt("please enter your name","Type your name here");

var webmaps =
  [
    ["Zoom Earth using OpenStreetMap and NOAA data","https://zoom.earth/maps/precipitation/#view=29.917403,-97.578117,11z/model=icon/overlays=wind", "The purpose of this application is to allow the user to forecast weather by using a list of parameters to simulate different phenomena over a duration."],
  ["FEMA National Flood Hazard Layer (NFHL) Viewer","https://hazards-fema.maps.arcgis.com/apps/webappviewer/index.html?id=8b0adb51996444d4879338b5529aa9cd&extent=-97.83296090065974,29.82313424684327,-97.7914188474371,29.841748432307906","The purpose of this web mapping application is to view addresses to see if they fall into flood plains recorded in the FEMA databases. Homeowners can use this tool to see if they want to purchase flood insurance or how safe their home is from flood damage."]
];




function welcome()
{
let a = "Please enter your name.";
let b = "Type your name here.";
// A prompt box is used to prompt users to input a value before entering a page.
user_name = window.prompt(a, b);
message = "<h1>Hello, welcome to my webpage, " + user_name + "!</h1>"
return message
}
document.write(welcome());

function webmap_table()
{
document.write("<table width=100%>");
for (var row=0; row < webmaps.length; row++)
{
document.write("<tr>");
for (var column=0; column < webmaps[0].length; column++)
{
document.write("<td>" + webmaps[row][column] +"</td>");
}
document.write("</tr>");
}
document.write("</table>");
return "";
}
