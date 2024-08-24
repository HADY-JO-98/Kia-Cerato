document.addEventListener("DOMContentLoaded", function() {
    // التقاط معرّف النموذج من URL
    const urlParams = new URLSearchParams(window.location.search);
    const model = urlParams.get('model');

    // عناصر الصفحة
    const carPhoto = document.getElementById('pic');
    const carDesc = document.getElementById('tex');
    const specsTable = document.getElementById('table');
    const header = document.getElementById('content');
    const head = document.getElementById('hh');
    const modelsData = {
        "2003": {
            "head": "Kia Cerato 2003 Specrta Specifications",
            "image": "images/kia2003.jpg",
            "description": "2003 is the first year that the line Cerato was introduced to the public. Initially, it wasn't known as Cerato, it was called Spectra and Sevilla. It is available with two types of transmission: manual, which uses 5 speeds, and automatic, which has 4 speeds.",
            "table": `
                <thead>
                    <tr>
                        <th>Specification</th>
                        <th>Details</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Engine</td>
                        <td>1.6L 4-cylinder</td>
                    </tr>
                    <tr>
                        <td>Horsepower</td>
                        <td>105 hp</td>
                    </tr>
                    <tr>
                        <td>Torque</td>
                        <td>143 Nm</td>
                    </tr>
                    <tr>
                        <td>Drive Type</td>
                        <td>Front-Wheel Drive (FWD)</td>
                    </tr>
                    <tr>
                        <td>Transmission</td>
                        <td>5-speed manual or 4-speed automatic</td>
                    </tr>
                    <tr>
                        <td>Fuel Consumption</td>
                        <td>8.1 L/100 km</td>
                    </tr>
                    <tr>
                        <td>Fuel Tank Capacity</td>
                        <td>50 liters</td>
                    </tr>
                </tbody>`
        },
        "2010": {
            "head": "Kia Cerato 2010 Specifications",
            "image": "images/kia2010.jpg",
            "description": "2010 it is the first time to be called Cerato. Kia improved the design to be more fluid, more youthful, and more comfortable. The body is bigger than the Spectra, and this model was produced until 2013.",
            "table": `
                <thead>
                    <tr>
                        <th>Specification</th>
                        <th>Details</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Engine</td>
                        <td>1.6L or 2.0L 4-cylinder</td>
                    </tr>
                    <tr>
                        <td>Horsepower</td>
                        <td>126 hp (1.6L) or 156 hp (2.0L)</td>
                    </tr>
                    <tr>
                        <td>Torque</td>
                        <td>156 Nm (1.6L) or 194 Nm (2.0L)</td>
                    </tr>
                    <tr>
                        <td>Drive Type</td>
                        <td>Front-Wheel Drive (FWD)</td>
                    </tr>
                    <tr>
                        <td>Transmission</td>
                        <td>5-speed manual or 6-speed automatic</td>
                    </tr>
                    <tr>
                        <td>Fuel Consumption</td>
                        <td>7.9 L/100 km (1.6L) or 8.3 L/100 km (2.0L)</td>
                    </tr>
                    <tr>
                        <td>Fuel Tank Capacity</td>
                        <td>52 liters</td>
                    </tr>
                </tbody>`
        },
        "2015": {
            "head": "Kia Cerato 2015 Specifications",
            "image": "images/kia2015.jpg",
            "description": "2015 the car still called Cerato, but K3 has been added to the name. From this year, the fluidness and comfortability of the car have been improved, and its size almost remains the same. This model was produced until 2017.",
            "table": `
                <thead>
                    <tr>
                        <th>Specification</th>
                        <th>Details</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Engine</td>
                        <td>1.6L or 2.0L 4-cylinder</td>
                    </tr>
                    <tr>
                        <td>Horsepower</td>
                        <td>130 hp (1.6L) or 161 hp (2.0L)</td>
                    </tr>
                    <tr>
                        <td>Torque</td>
                        <td>157 Nm (1.6L) or 194 Nm (2.0L)</td>
                    </tr>
                    <tr>
                        <td>Drive Type</td>
                        <td>Front-Wheel Drive (FWD)</td>
                    </tr>
                    <tr>
                        <td>Transmission</td>
                        <td>6-speed manual or 6-speed automatic</td>
                    </tr>
                    <tr>
                        <td>Fuel Consumption</td>
                        <td>7.8 L/100 km (1.6L) or 8.2 L/100 km (2.0L)</td>
                    </tr>
                    <tr>
                        <td>Fuel Tank Capacity</td>
                        <td>50 liters</td>
                    </tr>
                </tbody>`
        },
        "2018": {
            "head": "Kia Cerato 2018 Specifications",
            "image": "images/kia2017.jpg",
            "description": "2018 the car has still with its name Kia Cerato K3. The car has been taller than ever, has a sharper shape, making it more fluid, and the driving experience has been improved. However, 2022 is the year that this model stopped.",
            "table": `
                <thead>
                    <tr>
                        <th>Specification</th>
                        <th>Details</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Engine</td>
                        <td>1.6L or 2.0L 4-cylinder</td>
                    </tr>
                    <tr>
                        <td>Horsepower</td>
                        <td>132 hp (1.6L) or 161 hp (2.0L)</td>
                    </tr>
                    <tr>
                        <td>Torque</td>
                        <td>160 Nm (1.6L) or 194 Nm (2.0L)</td>
                    </tr>
                    <tr>
                        <td>Drive Type</td>
                        <td>Front-Wheel Drive (FWD)</td>
                    </tr>
                    <tr>
                        <td>Transmission</td>
                        <td>6-speed manual or 6-speed automatic</td>
                    </tr>
                    <tr>
                        <td>Fuel Consumption</td>
                        <td>7.6 L/100 km (1.6L) or 8.0 L/100 km (2.0L)</td>
                    </tr>
                    <tr>
                        <td>Fuel Tank Capacity</td>
                        <td>50 liters</td>
                    </tr>
                </tbody>`
        },
        "2022": {
            "head": "Kia Cerato 2022 Specifications",
            "image": "images/kia2022.jpeg",
            "description": "2022 this is the last model that was called Cerato. The driving experience has been improved; it has almost the same shape as the last model, and there is no big difference between them. In 2024, this model and the Cerato name were discontinued.",
            "table": `
                <thead>
                    <tr>
                        <th>Specification</th>
                        <th>Details</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Engine</td>
                        <td>1.6L, 2.0L, or 1.6L Turbo 4-cylinder</td>
                    </tr>
                    <tr>
                        <td>Horsepower</td>
                        <td>132 hp (1.6L), 161 hp (2.0L), or 201 hp (1.6L Turbo)</td>
                    </tr>
                    <tr>
                        <td>Torque</td>
                        <td>160 Nm (1.6L), 194 Nm (2.0L), or 265 Nm (1.6L Turbo)</td>
                    </tr>
                    <tr>
                        <td>Drive Type</td>
                        <td>Front-Wheel Drive (FWD)</td>
                    </tr>
                    <tr>
                        <td>Transmission</td>
                        <td>6-speed automatic or 7-speed dual-clutch (1.6L Turbo)</td>
                    </tr>
                    <tr>
                        <td>Fuel Consumption</td>
                        <td>7.4 L/100 km (1.6L), 7.9 L/100 km (2.0L), or 7.2 L/100 km (1.6L Turbo)</td>
                    </tr>
                    <tr>
                        <td>Fuel Tank Capacity</td>
                        <td>50 liters</td>
                    </tr>
                </tbody>`
        },
        "2024": {
            "head": "Kia K5 Specifications",
            "image": "images/k5.jpeg",
            "description": "2024 Kia K5 is the first model that has been published after the Cerato name ended. It has a bigger body than Cerato, improved driving experience, more fluidity, and comfort. This is the line that will continue in the future; we await 2025 to see how it will evolve.",
            "table": `
                <thead>
                    <tr>
                        <th>Specification</th>
                        <th>Details</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Engine</td>
                        <td>1.6L Turbo or 2.0L 4-cylinder</td>
                    </tr>
                    <tr>
                        <td>Horsepower</td>
                        <td>180 hp (1.6L Turbo) or 159 hp (2.0L)</td>
                    </tr>
                    <tr>
                        <td>Torque</td>
                        <td>265 Nm (1.6L Turbo) or 196 Nm (2.0L)</td>
                    </tr>
                    <tr>
                        <td>Drive Type</td>
                        <td>Front-Wheel Drive (FWD)</td>
                    </tr>
                    <tr>
                        <td>Transmission</td>
                        <td>8-speed automatic</td>
                    </tr>
                    <tr>
                        <td>Fuel Consumption</td>
                        <td>7.1 L/100 km (1.6L Turbo) or 7.8 L/100 km (2.0L)</td>
                    </tr>
                    <tr>
                        <td>Fuel Tank Capacity</td>
                        <td>60 liters</td>
                    </tr>
                </tbody>`
        }
    };
    if (modelsData[model]) {
        const data = modelsData[model];
        carPhoto.innerHTML = `<img src="${data.image}" alt="Kia Cerato ${model}">`;
        carDesc.innerHTML = `<p>${data.description}</p>`;
        head.innerHTML = data.head
        specsTable.innerHTML = data.table;
        header.style.backgroundImage = `linear-gradient(rgba(30, 32, 30, .55), rgba(30, 32, 30, .95)), url('${data.image}')`;
        header.style.backgroundSize = 'cover';
        header.style.backgroundPosition = 'center';
        header.style.backgroundRepeat = 'no-repeat';
    }
});