document.getElementById('mobile-menu').addEventListener('click', function() {
    this.classList.toggle('is-active');
    document.querySelector('.nav-list').classList.toggle('show');
});


$("#btnEducation").click(function() {
    $(".box").hide();
    $("#educationDescription").show();
    document.querySelector('.nav-list').classList.remove('show');
    document.getElementById('mobile-menu').classList.remove('is-active');
});
$("#btnExperience").click(function() {
    $(".box").hide();
    $("#experienceDescription").show();
    document.querySelector('.nav-list').classList.remove('show');
    document.getElementById('mobile-menu').classList.remove('is-active');
});
$("#btnSkills").click(function() {
    $(".box").hide();
    $("#skillsDescription").show();
    document.querySelector('.nav-list').classList.remove('show');
    document.getElementById('mobile-menu').classList.remove('is-active');
});
$("#btnProject").click(function() {
    $(".box").hide();
    $("#projectDescription").show();
    document.querySelector('.nav-list').classList.remove('show');
    document.getElementById('mobile-menu').classList.remove('is-active');
});
$("#btnContact").click(function() {
    $(".box").hide();
    $("#contactDescription").show();
    document.querySelector('.nav-list').classList.remove('show');
    document.getElementById('mobile-menu').classList.remove('is-active');
});
$("#btnAboutMe").click(function() {
    $(".box").hide();
    $("#aboutMeDescription").show();
    document.querySelector('.nav-list').classList.remove('show');
    document.getElementById('mobile-menu').classList.remove('is-active');
});



