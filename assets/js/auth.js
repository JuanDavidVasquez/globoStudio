const sales = document.getElementById('sales');
const newSales = document.getElementById('newSale');
const dash = document.getElementById('dash');
const content = document.querySelector('.content');
const panelAdmin = document.getElementById('panelAdmin');
const users = document.getElementById('users');
const myPoints = document.getElementById('myPoints');

myPoints.addEventListener('click', () => {
    content.innerHTML = `
        <div class="pointsContainer">
            <h2>My Points</h2>
            <div class="pointsSummary">
                <div class="pointsCard">
                    <h3>Accumulated Points</h3>
                    <p class="pointsValue">500</p>
                    <p class="pointsDescription">Points you have accumulated so far.</p>
                </div>
                <div class="pointsCard">
                    <h3>Spent Points</h3>
                    <p class="pointsValue">150</p>
                    <p class="pointsDescription">Points you have spent.</p>
                </div>
                <div class="pointsCard">
                    <h3>Points Expiration</h3>
                    <p class="pointsValue">2024-12-31</p>
                    <p class="pointsDescription">Date when your points will expire.</p>
                </div>
            </div>
        </div>
    `;
});


users.addEventListener('click', () => {
    content.innerHTML = `
        <div class="usersContainer">
            <h2>Users</h2>
            <table class="usersTable">
                <thead>
                    <tr>
                        <th>User</th>
                        <th>Email</th>
                        <th>Role</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>John Doe</td>
                        <td>john.doe@example.com</td>
                        <td>creator</td>
                        <td>
                            <button class="actionButton editButton">Edit</button>
                            <button class="actionButton deleteButton">Delete</button>
                        </td>
                    </tr>
                    <tr>
                        <td>Jane Smith</td>
                        <td>jane.smith@example.com</td>
                        <td>Client</td>
                        <td>
                            <button class="actionButton editButton">Edit</button>
                            <button class="actionButton deleteButton">Delete</button>
                        </td>
                    </tr>
                     <tr>
                        <td>Gabriel Vasquez</td>
                        <td>gabriel@example.com</td>
                        <td>Admin</td>
                        <td>
                            <button class="actionButton editButton">Edit</button>
                            <button class="actionButton deleteButton">Delete</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    `;
});


function renderDonutChart(selector, series, labels, title) {
    const options = {
        series: series, // Datos para los segmentos del pastel
        chart: {
            height: 400,
            type: 'pie' // Tipo de gráfico
        },
        title: {
            text: title,   // Título del gráfico
            align: 'left'
        },
        labels: labels, // Etiquetas para cada segmento
        legend: {
            position: 'bottom', // Ubicación de la leyenda
            horizontalAlign: 'center', // Alineación horizontal
            floating: false, // No flotar
            offsetY: 10 // Espacio entre el gráfico y la leyenda
        }
    };

    const chart = new ApexCharts(document.querySelector(selector), options);
    chart.render();
}

panelAdmin.addEventListener('click', () => {
    content.innerHTML = `
        <div class="containerDashInit">
            <h1>Globo Studio Admin Panel</h1>

            <div class="dashInit">
                <div class="itemDashInit">
                    <div class="dashboardCharts">
                        <div id="salesChart1" class="chart"></div>
                    </div>
                </div>
                <div class="itemDashInit">
                    <div class="dashboardCharts">
                        <div id="salesChart2" class="chart"></div>
                    </div>
                </div>
                <div class="itemDashInit">
                    <div class="dashboardCharts">
                        <div id="salesChart3" class="chart"></div>
                    </div>
                </div>                    
            </div>
        </div>
         <div class="salesContainer adminSales">
        <h2>Sales Overview</h2>
        <table class="salesTable">
            <thead>
                <tr>
                    <th>Sale</th>
                    <th>Status</th>
                    <th>Description</th>
                    <th>Estimated Delivery Date</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>1</td>
                    <td><span class="status new">New</span></td>
                    <td>Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto.</td>
                    <td>01-08-2024</td>
                    <td class="actionButtons">
                        <button id="edit">Gestion</button>
                        <button id="delete">Delete</button>
                    </td>
                </tr>
                <tr>
                    <td>2</td>
                    <td><span class="status building">Building Art</span></td>
                    <td>Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto.</td>
                    <td>01-08-2024</td>
                  <td class="actionButtons">
                        <button id="edit">Gestion</button>
                        <button id="delete">Delete</button>
                    </td>
                </tr>
                <tr>
                    <td>3</td>
                    <td><span class="status pending">Pending</span></td>
                    <td>Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto.</td>
                    <td>01-08-2024</td>
                     <td class="actionButtons">
                        <button id="edit">Gestion</button>
                        <button id="delete">Delete</button>
                    </td>
                </tr>
                <tr>
                    <td>4</td>
                    <td><span class="status on-the-way">On the Way</span></td>
                    <td>Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto.</td>
                    <td>01-08-2024</td>
                     <td class="actionButtons">
                        <button id="edit">Gestion</button>
                        <button id="delete">Delete</button>
                    </td>
                </tr>
                <tr>
                    <td>5</td>
                    <td><span class="status stock">Stock</span></td>
                    <td>Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto.</td>
                    <td>01-08-2024</td>
                   <td class="actionButtons">
                        <button id="edit">Gestion</button>
                        <button id="delete">Delete</button>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
    `;

    // Asegúrate de que los elementos con los IDs existan en el DOM antes de renderizar los gráficos
    setTimeout(() => {
        renderDonutChart('#salesChart2', [30, 40, 35, 50, 49], ['New', 'Building Art', 'Pending', 'On the Way', 'Stock'], 'Sales Status');
        renderDonutChart('#salesChart1', [20, 30, 25, 40, 35], ['Ass', 'Bsssss', 'Csssss', 'Dssss', 'Essss'], 'Sales Service');
        renderDonutChart('#salesChart3', [10, 20, 15, 25, 20],  ['Ass', 'Bsssss', 'Csssss', 'Dssss', 'Essss'], 'Sales Client');
    }, 0);
});

sales.addEventListener('click', () => {
    content.innerHTML = `
    <div class="salesContainer">
        <h2>Sales Overview</h2>
        <table class="salesTable">
            <thead>
                <tr>
                    <th>Sale</th>
                    <th>Status</th>
                    <th>Description</th>
                    <th>Estimated Delivery Date</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>1</td>
                    <td><span class="status new">New</span></td>
                    <td>Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto.</td>
                    <td>01-08-2024</td>
                    <td class="actionButtons">
                        <button id="edit">Edit</button>
                        <button id="delete">Delete</button>
                    </td>
                </tr>
                <tr>
                    <td>2</td>
                    <td><span class="status building">Building Art</span></td>
                    <td>Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto.</td>
                    <td>01-08-2024</td>
                  <td class="actionButtons">
                        <button id="edit">Edit</button>
                        <button id="delete">Delete</button>
                    </td>
                </tr>
                <tr>
                    <td>3</td>
                    <td><span class="status pending">Pending</span></td>
                    <td>Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto.</td>
                    <td>01-08-2024</td>
                     <td class="actionButtons">
                        <button id="edit">Edit</button>
                        <button id="delete">Delete</button>
                    </td>
                </tr>
                <tr>
                    <td>4</td>
                    <td><span class="status on-the-way">On the Way</span></td>
                    <td>Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto.</td>
                    <td>01-08-2024</td>
                     <td class="actionButtons">
                        <button id="edit">Edit</button>
                        <button id="delete">Delete</button>
                    </td>
                </tr>
                <tr>
                    <td>5</td>
                    <td><span class="status stock">Stock</span></td>
                    <td>Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto.</td>
                    <td>01-08-2024</td>
                   <td class="actionButtons">
                        <button id="edit">Edit</button>
                        <button id="delete">Delete</button>
                    </td>
                </tr>
            </tbody>
        </table>
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
