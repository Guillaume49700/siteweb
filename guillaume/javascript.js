function Rotation_Image(index)
{
	// id de la div qui contient l'image
	var div = document.getElementById("id_i");
	if(index<0)
		index = 0;
	if(index >= tab_Images.length)
		index=0;

	div.style.backgroundImage ="url(\""+tab_Images[index]+"\")";
	index++;
	setTimeout("Rotation_Image("+index+")",2000);
}



// Création d'un tableau qui contient l'url des images
var tab_Images = new Array();
tab_Images.push("gabarit1.PNG");
tab_Images.push("gabarit2.PNG");
tab_Images.push("gabarit3.PNG");