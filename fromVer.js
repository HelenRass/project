function NextSlide(route,slider) {
	var currentSlider=document.getElementById(slider);
    var slides = currentSlider.getElementsByClassName("slide");
    var i=0;
    for (i = 0; i < slides.length; i++) {
		
		if(slides[i].classList.contains('active')){break;}
    }
	slides[i].classList.remove('active');
	slides[i].classList.add('inactive');
	if(route=='right')
	{
		if(i==slides.length-1)
		{i=0;}
		else
		{i++;}
	}
	else
	{
		if(i==0)
		{i=slides.length-1;}
		else
		{i--;}
	}
    slides[i].classList.remove('inactive');
	slides[i].classList.add('active');
   
}