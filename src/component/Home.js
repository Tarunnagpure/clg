import React from "react";
import SideNav from "./SideNav";

const Home = () => {
    return (
        <div className="Container-fluid">
            <div className="d-flex">
                <SideNav />
                <div>
                <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <img src="https://www.schoolofindia.com/img/slider2.jpg" class="d-block w-100" alt="..."></img>
                        </div>
                        <div class="carousel-item">
                            <img src="https://www.deccanherald.com/sites/dh/files/article_images/2019/12/05/file789ej02hwz9vav2sjiw-1575486497.jpg" class="d-block w-100" alt="..."></img>
                        </div>
                        <div class="carousel-item">
                            <img src="https://mainst.soledadusd.org/wp-content/uploads/sites/10/2021/06/DSC_2628-scaled.jpg" class="d-block w-100" alt="..."></img>
                        </div>
                    </div>
                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                    </button>
                </div>
            </div>

            </div>
            




        </div>
    )
}

export default Home;