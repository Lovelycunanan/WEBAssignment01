//@Name: Assignment 1
// @Course Code: SODV1201
// @Class: Software Development Diploma Program
// @Author: Florica Lovely Mae Cunanan 

window.onload = function() {
    //When the window is fully loaded, hide the image description
    document.getElementById('pictureName').style.display = 'none';
    // Show the image description after 10 seconds
    setTimeout(function() {
        document.getElementById('pictureName').style.display = 'block';
    }, 10000); 
};
