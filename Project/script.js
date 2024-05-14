// Get the display input field
const img = [
    "https://images.unsplash.com/photo-1707343848552-893e05dba6ac?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1709929170176-bc35e8bd57b1?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1709572563747-5de4d256fa6c?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1682695798256-28a674122872?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
];

var image = document.getElementsByClassName("opacity")[0];
var i = 0;

setInterval(() => {
    if (i <= img.length - 1) {
        const randomImageUrl = img[i];
        image.style.backgroundImage = `url('${randomImageUrl}')`;
        console.log(image.style.backgroundImage);
        i++;
    } else {
        i = 0;
    }
}, 2000);



const display = document.getElementById('display');

// Add event listeners to number buttons
document.querySelectorAll('.number').forEach(button => {
    button.addEventListener('click', () => {
        display.value += button.textContent;
    });
});
document.querySelector('.clear').addEventListener('click', () => {
    const currentValue = display.value
    display.value = currentValue.slice(0,-1);
})

// Add event listener for the equals button
document.getElementById('equals').addEventListener('click', () => {
    try {
        display.value = eval(display.value); // Evaluate the expression
    } catch (error) {
        display.value = 'Error';
    }
});
