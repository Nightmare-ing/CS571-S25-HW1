function submitApplication(e) {
    e.preventDefault(); // You can ignore this; prevents the default form submission!

    for (job of document.getElementsByName("job")) {
        if (job.checked === true) {
            alert(`Thank you for applying to be a ${job.value}`);
            return;
        }
    }
    alert("Please select a job!");
}
