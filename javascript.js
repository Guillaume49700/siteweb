function Rotation_Image(index)
{
	// id de la div qui contient l'image
	var div = document.getElementById("id_image");
	if(index<0)
		index = 0;
	if(index >= tab_Images.length)
		index=0;

	div.style.backgroundImage ="url(\""+tab_Images[index]+"\")";
	index++;
	setTimeout("Rotation_Image("+index+")",4000);
}



// Création d'un tableau qui contient l'url des images
var tab_Images = new Array();
tab_Images.push("http://www.delicesdelaroche.com/fr/restauration/user/documents/images/restaurant/mcith/vgn_ad_L260_H200_4117_d-lices_de_la_roche.jpg");
tab_Images.push("http://www.delicesdelaroche.com/fr/restauration/user/documents/images/restaurant/mcith/vgn_ad_L260_H200_4200_d-lices_de_la_roche.jpg");
tab_Images.push("http://www.delicesdelaroche.com/fr/restauration/user/documents/images/restaurant/mcith/vgn_ad_L260_H200_4270_d-lices_de_la_roche.jpg");