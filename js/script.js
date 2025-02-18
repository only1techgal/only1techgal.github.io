document.addEventListener("DOMContentLoaded", function() {
    const skills = document.querySelectorAll(".skill");

    skills.forEach(skill => {
        skill.addEventListener("mouseover", function() {
            this.style.transform = "scale(1.1)";
            this.style.transition = "0.3s";
        });

        skill.addEventListener("mouseout", function() {
            this.style.transform = "scale(1)";
        });
    });
});
