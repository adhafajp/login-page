const container   = document.querySelector('.container'); 
const registerbtn = document.querySelector('.register-btn');
const loginbtn    = document.querySelector('.login-btn');
const toggleIcons = document.querySelectorAll(".toggle-password");
const userInputs  = document.querySelectorAll(".input-box input[type='text']");
const passInputs  = document.querySelectorAll(".input-box input[type='password']");

// Toggle panel login/register
registerbtn.addEventListener(
    'click', () => container.classList.add('active')
);
loginbtn.addEventListener(
    'click',   () => container.classList.remove('active')
);

// Toggle show/hide password on icon click
toggleIcons.forEach(icon => {
    icon.addEventListener("click", () => {
        const input = icon.previousElementSibling;
        const isPwd = input.type === "password";
        input.type = isPwd ? "text" : "password";
        icon.classList.toggle("bx-show",  isPwd);
        icon.classList.toggle("bx-hide", !isPwd);
    });
});

// 1) Shortcut "/" di dalam input username untuk fokus ke input password
document.addEventListener("keydown", e => {
    if (e.key === "/" && !e.shiftKey && !e.ctrlKey && !e.altKey && !e.metaKey) {
        e.preventDefault();

        const isRegisterActive = container.classList.contains("active");

        const index = isRegisterActive ? 1 : 0;

        if (userInputs[index]) userInputs[index].focus();
    }
});


// 2) Shortcut "Shift + H" di dalam input password untuk toggle
passInputs.forEach(input => {
    input.addEventListener("keydown", e => {
            if (e.key.toLowerCase() === "h" && e.shiftKey && !e.ctrlKey && !e.altKey && !e.metaKey) {
            e.preventDefault();
            // cari ikon toggle yang terkait
            const icon = input.parentElement.querySelector(".toggle-password");
            icon && icon.click();   // kembali pakai logic click untuk toggle
        }
    });
});
