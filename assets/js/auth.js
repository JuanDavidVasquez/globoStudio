/* const nav = document.querySelector('.navLinks');
const burger = document.querySelector('.burger');
const links = nav.querySelectorAll("a");

burger.addEventListener("click", ()=>{
    nav.classList.toggle("nav-open");
    burger.classList.toggle("toggle");
});

links.forEach(link=>{
    link.addEventListener("click",()=>{
        nav.classList.toggle("nav-open");
        burger.classList.toggle("toggle");
    });
}); */

const sales = document.getElementById('sales');
const newSales = document.getElementById('newSale');
const dash = document.getElementById('dash');
const content = document.querySelector('.content');

sales.addEventListener('click', ()=>{
    content.innerHTML = `
    <div class="containerSales">
                    <div class="itemSales">
                        <h6>Sale</h6>
                        <h4>Status: <span>New</span></h4>
                        <p>Description:<br/>
                            Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto.</p>
                            <span class="dateDelivery">Estimated delivery date: 01-08-2024</span>
                    </div>
                    <div class="itemSales">
                        <h6>Sale</h6>
                        <h4>Status: <span>building art</span></h4>
                        <p>Description:<br/>
                            Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto.</p>
                            <span class="dateDelivery">Estimated delivery date: 01-08-2024</span>
                    </div>
                    <div class="itemSales">
                        <h6>Sale</h6>
                        <h4>Status: <span>building art</span></h4>
                        <p>Description:<br/>
                            Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto.</p>
                            <span class="dateDelivery">Estimated delivery date: 01-08-2024</span>
                    </div>
                    <div class="itemSales">
                        <h6>Sale</h6>
                        <h4>Status: <span>on the way</span></h4>
                          <p>Description:<br/>
                            Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto.</p>
                            <span class="dateDelivery">Estimated delivery date: 01-08-2024</span>
                    </div>
                    <div class="itemSales">
                        <h6>Sale</h6>
                        <h4>Status: <span>Stock</span></h4>
                          <p>Description:<br/>
                            Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto.</p>
                            <span class="dateDelivery">Estimated delivery date: 01-08-2024</span>
                       
                    </div>
                </div>
    `;
});

newSales.addEventListener('click', ()=>{
    content.innerHTML = `
     <div class="newSalesContainer">
        <h2>New Sales</h2>
        <div class="newSalesForm">
            <label for="salesTitle">Title:</label>
            <input type="text" id="salesTitle" name="salesTitle" placeholder="Enter sale title">

            <label for="salesDescription">Description:</label>
            <textarea id="salesDescription" name="salesDescription" placeholder="Enter sale description"></textarea>


            <button type="submit">Add Sale</button>
        </div>
    </div>
    `;
});

dash.addEventListener('click', () => {
    content.innerHTML = `
    <div class="dashboardContainer">
        <h2>Dashboard</h2>
        <div class="dashboardSummary">
            <div class="summaryItem">
                <h3>Total Sales</h3>
                <p>Number of sales made: <span id="totalSales">100</span></p>
            </div>
            <div class="summaryItem">
                <h3>Pending Sales</h3>
                <p>Number of pending sales: <span id="pendingSales">5</span></p>
            </div>
            <div class="summaryItem">
                <h3>Completed Sales</h3>
                <p>Number of completed sales: <span id="completedSales">90</span></p>
            </div>
        </div>
        <div class="dashboardCharts">
            <h3>Sales Overview</h3>
            <div id="salesChart" class="chart"></div>
        </div>
    </div>
    `;

    // Inicializar el gráfico con ApexCharts
    const options = {
        series: [{
            name: 'Sales',
            data: [30, 40, 35, 50, 49, 60, 70]
        }],
        chart: {
            height: 350,
            type: 'line'
        },
        stroke: {
            curve: 'smooth'
        },
        title: {
            text: 'Sales Overview',
            align: 'left'
        },
        xaxis: {
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul']
        }
    };

    const chart = new ApexCharts(document.querySelector('#salesChart'), options);
    chart.render();
});
