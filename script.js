// Simple scroll animation
window.addEventListener('scroll', () => {
    const jobs = document.querySelectorAll('.job');
    const triggerBottom = window.innerHeight / 5 * 4;

    jobs.forEach(job => {
        const jobTop = job.getBoundingClientRect().top;
        if(jobTop < triggerBottom) {
            job.style.opacity = "1";
            job.style.transform = "translateX(0)";
        }
    });
});

// Initial styles for animation
document.querySelectorAll('.job').forEach(job => {
    job.style.opacity = "0";
    job.style.transform = "translateX(-20px)";
    job.style.transition = "all 0.6s ease-out";
});