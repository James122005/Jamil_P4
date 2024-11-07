
const draggableElements = document.querySelectorAll('.box');
const droppableElements = document.querySelectorAll('.droppable');
let score = 0;

// DRAG START
draggableElements.forEach(element => {
    element.addEventListener('dragstart', (event) => {
        event.dataTransfer.setData('text', event.target.id);
        event.currentTarget.classList.add('draggableFormat');
    });
});

// DROP EVENT
droppableElements.forEach(element => {
    element.addEventListener('drop', (event) => {
        event.preventDefault();
        
        // Retrieve the dragged element's ID
        const droppedElementId = event.dataTransfer.getData('text');
        const dropZoneId = event.currentTarget.getAttribute('data-draggable-id');
        const draggedElement = document.getElementById(droppedElementId);

        console.log("Dropped Element ID:", droppedElementId);
        console.log("Drop Zone ID:", dropZoneId);

        // Check if IDs match
        if (droppedElementId === dropZoneId) {
            // Correct match
            event.currentTarget.appendChild(draggedElement);
            score += 1;
            document.getElementById('remarks').innerText = "RIGHT!";
            document.getElementById('scores').innerText = score;
        } else {
            // Incorrect match
            document.getElementById('remarks').innerText = "WRONG!";
        }
    });

    // DRAG OVER
    element.addEventListener('dragover', (event) => {
        event.preventDefault();
    });
});