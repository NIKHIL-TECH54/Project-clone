<?php include 'include/header.php' ?>

<div class="container-fluid" id="contact-head-main">
    <h2 class="">View Rooms </h2>
    <p class="">Lorem ipsum dolor sit, amet consectetur adipisicing elit. !</p>
</div>
<div class="container mt-lg-5 mb-lg-5">
    <div class="row">
        <div class="col-lg-12 col-md-12 d-flex flex-column justify-content-center align-items-center">
            <div class="view-content text-center">
                <h1> Room's</h1>
                <p> Aspernatur magnam reprehenderit unde explicabo esse tenetur placeat, accusantium quidem saepe quisquam delectus? Doloribus cumque natus dicta maxime perferendis velit voluptatem quae.</p>
            </div>
            <div class="tab mt-lg-4">
                <button class="tablinks active" onclick="openCity(event, 'all')">All</button>
                <button class="tablinks" onclick="openCity(event, 'London')">Delux Rooms</button>
                <button class="tablinks" onclick="openCity(event, 'Paris')">Premium Rooms</button>
                <button class="tablinks" onclick="openCity(event, 'Tokyo')">Luxury Rooms</button>
            </div>
            <div id="all" >
                <div id="London" class="tabcontent">
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-4 col-md-12">
                                <div class="view-room">
                                    <img src="img/room-5.jpg" alt="">
                                </div>
                                <div class="view-room-con text-center">
                                    <h5>Delux Room</h5>
                                </div>
                            </div>
                            <div class="col-lg-4 col-md-12">
                                <div class="view-room">
                                    <img src="img/room-5.jpg" alt="">
                                </div>
                                <div class="view-room-con text-center">
                                    <h5>Delux Room</h5>
                                </div>
                            </div>
                            <div class="col-lg-4 col-md-12">
                                <div class="view-room">
                                    <img src="img/room-5.jpg" alt="">
                                </div>
                                <div class="view-room-con text-center">
                                    <h5>Delux Room</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div id="Paris" class="tabcontent">
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-4 col-md-12">
                                <div class="view-room">
                                    <img src="img/room-3.jpg" alt="">
                                </div>
                                <div class="view-room-con text-center">
                                    <h5>Delux Room</h5>
                                </div>
                            </div>
                            <div class="col-lg-4 col-md-12">
                                <div class="view-room">
                                    <img src="img/room-7.jpg" alt="">
                                </div>
                                <div class="view-room-con text-center">
                                    <h5>Delux Room</h5>
                                </div>
                            </div>
                            <div class="col-lg-4 col-md-12">
                                <div class="view-room">
                                    <img src="img/room-2.jpg" alt="">
                                </div>
                                <div class="view-room-con text-center">
                                    <h5>Delux Room</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div id="Tokyo" class="tabcontent">
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-4 col-md-12">
                                <div class="view-room">
                                    <img src="img/room-7.jpg" alt="">
                                </div>
                                <div class="view-room-con text-center">
                                    <h5>Delux Room</h5>
                                </div>
                            </div>
                            <div class="col-lg-4 col-md-12">
                                <div class="view-room">
                                    <img src="img/room-6.jpg" alt="">
                                </div>
                                <div class="view-room-con text-center">
                                    <h5>Delux Room</h5>
                                </div>
                            </div>
                            <div class="col-lg-4 col-md-12">
                                <div class="view-room">
                                    <img src="img/room-4.jpg" alt="">
                                </div>
                                <div class="view-room-con text-center">
                                    <h5>Delux Room</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
<script>
    function openCity(evt, cityName) {
    var i, tabcontent, tablinks;

    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    if (cityName === "all") {
        // Show all tab contents
        for (i = 0; i < tabcontent.length; i++) {
            tabcontent[i].style.display = "block";
        }
    } else {
        document.getElementById(cityName).style.display = "block";
    }

    evt.currentTarget.className += " active";
}

</script>

<?php include 'include/footer.php' ?>