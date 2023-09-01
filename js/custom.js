document.addEventListener('DOMContentLoaded', () => {

    // Handle button clicks
    $("button").click(() => {
        // Remove the "active" class from all buttons
        $("button").removeClass("active");
        // Add the "active" class to the clicked button
        $(this).addClass("active");
    });

    // Get references to various elements using const and template literals
    const bookBtn = document.getElementById('btn_book');
    const roundTripBtn = document.getElementById('roundTrip');
    const multiTripBtn = document.getElementById('multycity');
    const oneTripBtn = document.getElementById('oneWay');
    const btnManage = document.getElementById('btn_manage');
    const manageTripDiv = document.getElementById('mannage__trip');
    const singleTrip = document.getElementById('single__trip');
    const roundTrip = document.getElementById('round__trip');
    const multiTrip = document.getElementById('multi__trip');
    const oneTrip = document.getElementById('one__trip');
    const resTicketBtn = document.getElementById('search__ticket');
    const btnReserv = document.getElementById('search__res');
    const ticketDiv = document.getElementById('ticketSer');
    const reserDiv = document.getElementById('reservSer');
    const firstDiv = document.getElementById('first__div');

    // Add event listeners using arrow functions
    btnManage.addEventListener('click', () => {
        // Show the manage trip div and hide the first div
        manageTripDiv.style.display = 'block';
        firstDiv.style.display = 'none';
    });

    bookBtn.addEventListener('click', () => {
        // Show the first div and hide the manage trip div
        firstDiv.style.display = 'block';
        manageTripDiv.style.display = 'none';
        singleTrip.style.display = 'block';
    });

    resTicketBtn.addEventListener('click', () => {
        // Show the ticket div and hide the reservation div
        ticketDiv.style.display = 'block';
        reserDiv.style.display = 'none';
    });

    btnReserv.addEventListener('click', () => {
        // Show the reservation div and hide the ticket div
        ticketDiv.style.display = 'none';
        reserDiv.style.display = 'block';
    });

    oneTripBtn.addEventListener('click', () => {
        // Show the single trip div and hide others
        oneTrip.style.display = 'block';
        roundTrip.style.display = 'none';
        multiTrip.style.display = 'none';
    });

    roundTripBtn.addEventListener('click', () => {
        // Show the round trip div and hide others
        oneTrip.style.display = 'none';
        roundTrip.style.display = 'block';
        multiTrip.style.display = 'none';
    });

    multiTripBtn.addEventListener('click', () => {
        // Show the multi-city trip div and hide others
        oneTrip.style.display = 'none';
        roundTrip.style.display = 'none';
        multiTrip.style.display = 'block';
    });
});




