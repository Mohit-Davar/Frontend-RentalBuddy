
//Declaring Class Item
class Car {

    constructor(url, model, year, seats, door, bags, rate) {
        this.url = url
        this.model = model
        this.year = year
        this.seats = seats
        this.door = door
        this.bags = bags
        this.rate = rate
        this.id = name.replace(/\s+/g, "")
        this.qty = localStorage.getItem(`${this.id}`) || 0
    }
}
//Database of Different Items
const Cars = [
    new Car("https://demo.crocoblock.com/rentgo-new/wp-content/uploads/2020/03/Geely-Vision-GC7.jpg", "Geely Vision GC7", "2016", "5", "4", "1", "20.00"),
    new Car("https://demo.crocoblock.com/rentgo-new/wp-content/uploads/2020/03/car5.jpg ", "Toyota Corolla Axio", "2017", "5", "4", "1", "35.00"),
    new Car("https://demo.crocoblock.com/rentgo-new/wp-content/uploads/2020/03/car2.jpg ", "Honda Accord Hybrid", "2017", "5", "5", "1", "30.00"),
    new Car("https://demo.crocoblock.com/rentgo-new/wp-content/uploads/2020/03/car1.jpg ", "Renault Megane Estate GT", "2017", "5", "5", "1", "28.00"),
    new Car("https://demo.crocoblock.com/rentgo-new/wp-content/uploads/2020/03/car11-1.jpg", "MAZDA CX-5", "2016", "5", "5", "2", "50.00"),
    new Car("https://demo.crocoblock.com/rentgo-new/wp-content/uploads/2020/03/car9-1.jpg ", "Toyota Camry Extremo", "2020", "5", "4", "3", "32.00"),
    new Car("https://demo.crocoblock.com/rentgo-new/wp-content/uploads/2020/03/car4.jpg", "Mitsubishi Lancer X", "2021", "5", "4", "2", "40.00"),
    new Car("https://demo.crocoblock.com/rentgo-new/wp-content/uploads/2020/04/Minivan-3.jpg", "Citroen Berlingo", "2020", "7", "5", "2", "50.00"),
    new Car("https://demo.crocoblock.com/rentgo-new/wp-content/uploads/2020/04/luxury-2.jpg", "Lexus LS460", "2016", "4", "4", "2", "36.00"),
    new Car("https://demo.crocoblock.com/rentgo-new/wp-content/uploads/2020/04/luxury-8.jpg", "AUDI 8", "2019", "5", "4", "2", "50.00"),
    new Car("https://demo.crocoblock.com/rentgo-new/wp-content/uploads/2020/04/luxury-6.jpg", "Jaguar XJR", "2021", "4", "4", "1", "58.00"),
    new Car("https://demo.crocoblock.com/rentgo-new/wp-content/uploads/2020/04/luxury-4.jpg   ", "Porsche Cayenne ", "2021", "5", "5", "1", "70.00"),
    new Car("https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQK_iXEZExzQ5dN_v5b5qoisp5bchm-gPjLy9WzN02yU5kJxBR_juaFS6EwJrrJ7e9dZ0EwsAski5tsz33cH_tHb9sQ_V5w9lbRFzQzHsTW", "Maisto Modellmotorrad Harley Davidson 13", "2020", "2", "0", "0", "30.00"),
    new Car("https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTNH7rQBQ_0ia5zYq9dOl6CMFqQyuKrybSj05WD6IXgE33UUbTnOQ7duo1L81blQJfgazeDnRBmN3J6NwVAfoTKNwzM5AzoNQog7Divo4wGQq_h5n25cRsDWuTk&usqp=CAE ", "BMW S1000Rr", "2022", "2", "0", "0", "40.00"),
    new Car("https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTTqWRYyjBQfg2N6AJ5c7rrTT2cvMrdjs_G1m2cgWzDmD1Y_TgwwgVx704dBFvJnmnyZvLta5pfwl6BWrIws9VGoGgIghLB9P09kMDqlKUJ5vMBaSGpZedTKQ&usqp=CAE", "SUZUKI GIXXER SF150", "2019", "2", "0", "0", "45.00"),
    new Car("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHrBdu7LRh6djfupx8FMXWfXzWQh3sY_K0ysTZca3Mlw&s", "Yamaha 6YU8 ", "2021", "2", "0", "0", "5.00"),
    new Car("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrPnbrDlX5L3qc2u6mXes3N7OUfkdFdbSmAtyTKvEIjA&s", "Honda SC ", "2023", "2", "0", "0", "12.00"),
    new Car("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRI9820sr5mDKRmVQiQZJIz-kaz8mWu1nC119lBg7tFYZQGwqvse3ENmXaW&s=10", "Yamaha Aerox 155", "2022", "2", "0", "0", "10.00")
]





//Generating Starting HTMl for Catalogue
const Catalogue = document.querySelector('.card-container')
function generateCatalogue(url, model, year, seats, door, bags, rate) {
    return (Catalogue.innerHTML = Catalogue.innerHTML + `
    <div class="card bg-white w-[400px] aspect-square rounded-3xl border-4 border-[color:var(--theme-color-2)] flex flex-col pt-1">
                        <div class="image w-full h-1/2 bg-center bg-contain bg-no-repeat rounded-3xl"
                            style="background-image: url(${url});">

                        </div>
                        <div class="text w-full h-1/2 px-5 py-3 flex flex-col gap-2">
                            <div class="heading font-semibold">${model}</div>
                            <div class="year text-[color:var(--theme-color-2)]">${year}</div>
                            <div><span class="cancellation text-green-600">Free cancellation up </span>to 48h before pick-up time</div>
                            <div class="icons flex gap-2 items-center">
                                <i class="fa-solid fa-user text-[color:var(--theme-color-2)]"></i> ${seats}
                                <i class="fa-solid fa-door-open text-[color:var(--theme-color-2)]"></i> ${door}
                                <i class="fa-solid fa-briefcase text-[color:var(--theme-color-2)]"></i> ${bags}
                            </div>
                            <div class="price flex justify-between">
                                <div class="amount flex justify-center items-center"><span class="text-[color:var(--theme-color-2)] text-2xl">$${rate}</span>/day</div>
                                <div class="button bg-[color:var(--theme-color-2)] px-5 py-3 rounded-[50px] hover:bg-black hover:text-[color:var(--theme-color-2)] transition-all cursor-pointer">Rent Now</div>
                            </div>
                        </div>
                    </div>
    `)
}

//Adding Values to Each Card
Cars.forEach(item => {
    generateCatalogue(item.url, item.model, item.year, item.seats, item.door, item.bags, item.rate)
})