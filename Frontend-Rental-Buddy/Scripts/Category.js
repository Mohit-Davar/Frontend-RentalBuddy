const VehicleCategoryContainer = document.querySelector('.vehicle-categories .card-container')
function generateVehicleCategory(category, example, price, seats, doors, url) {
    return (
        VehicleCategoryContainer.innerHTML = VehicleCategoryContainer.innerHTML + `
            <div class="card flex flex-col bg-white w-[350px] h-[450px] px-9 pt-12 pv-5 relative z-10">
                        <div class="text flex w-full h-1/2  justify-between items-center">
                            <div class="type w-1/2 h-full">
                                <p class="text-3xl font-extrabold">${category}</p>
                                <p class="text-xl">${example}</p>
                                <button class="bg-[#f0c541] text-white text-center text-xl                                           px-5 py-2 mt-4">From <div><span class="text-2xl">$${price}</span>/Day</div></button>
                            </div>
                            <div class="specifications w-1/2 h-full text-[color:var(--category-theme-2)] text-end text-xl">
                                <p><i class="fa-solid fa-car text-[color:var(--category-theme-1)]"></i> ${seats} seats</p>
                                <p><i class="fa-solid fa-door-open text-[color:var(--category-theme-1)]"></i> ${doors} Doors</p>
                                <p><i class="fa-solid fa-wind text-[color:var(--category-theme-1)]"></i> A/C</p>
                            </div>
                        </div>
                        <div class="image w-full h-1/2 bg-contain bg-center bg-no-repeat "
                            style="background-image: url(${url});">

                        </div>
                    </div>`
    )
}
//Declaring Class VehicleCategory
class VehicleCategory {

    constructor(category, example, price, seats, doors, url) {
        this.category = category
        this.example = example
        this.price = price
        this.seats = seats
        this.doors = doors
        this.url = url
    }
}
//Database of Different VehicleCategories
const VehicleCategories = [
    new VehicleCategory("Economy", "Maruti Suzuki and Similar", "25", "5", "4", "Images/Dezire.png"),
    new VehicleCategory("Premium", "Lamborghini and Similar", "200", "2", "2", "Images/BMW.png"),
    new VehicleCategory("Luxury", "Mini Cooper and similar", "100", "4", "4", "Images/Volkswagen.png"),
    new VehicleCategory("EV", "Tata Punch and Similar", "55", "5", "4", "Images/PunchEv.png"),
    new VehicleCategory("Offroad", "G Wagon and Similar", "60", "5", "4", "Images/Thar.png"),
    new VehicleCategory("SUV", "Range Rover and Similar", "65", "7", "4", "Images/Fortuner.png")

]
VehicleCategories.forEach(VehicleCategory => {
    generateVehicleCategory(VehicleCategory.category, VehicleCategory.example, VehicleCategory.price, VehicleCategory.seats, VehicleCategory.doors, VehicleCategory.url)
})


