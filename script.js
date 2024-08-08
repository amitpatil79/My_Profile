document.addEventListener("DOMContentLoaded", function() {
    fetch("data.json")
    .then(response => response.json())
    .then(data => renderPortfolio(data))
    .catch(error => console.log("Error fetching data:", error));
});

function renderPortfolio(data) {
    const content = document.getElementById('content');
    content.innerHTML = `
        <section class="px-4 py-16">
            <h1 class="text-4xl font-black">${data.name}</h1>
            <p class="text-gray-600 text-xl mb-3">${data.title}</p>
            <p class="text-gray-600 mb-2">${data.bio1}</p>
            <p class="text-gray-600 mb-2">${data.bio2}</p>
            <p class="text-gray-600">${data.bio3}</p>
        </section>
        
        <section class="px-4 pb-16">
            <h2 class="text-3xl mb-8 font-bold text-gray-800">Skills</h2>
            <div class="mb-6">
                <h3 class="text-xl font-semibold text-gray-800 mb-2">Key Areas</h3>
                <div class="rounded-lg">
                    <ul class="grid md:grid-cols-4 grid-cols-2 gap-4">
                        ${data.skills.key_areas.map(skill => `<li class="bg-white  rounded-lg p-2">${skill}</li>`).join('')}
                    </ul>
                </div>
            </div>
            <div class="mb-6">
                <h3 class="text-xl font-semibold text-gray-800 mb-2">Languages & tools</h3>
                <div class="rounded-lg">
                    <ul class="grid md:grid-cols-4 grid-cols-2 gap-4">
                        ${data.skills.languages_tools.map(skill => `<li class="bg-white  rounded-lg p-2">${skill}</li>`).join('')}
                    </ul>
                </div>
            </div>
            <div class="mb-6">
                <h3 class="text-xl font-semibold text-gray-800 mb-2">Database</h3>
                <div class="rounded-lg">
                    <ul class="grid md:grid-cols-4 grid-cols-2 gap-4">
                        ${data.skills.databases.map(skill => `<li class="bg-white  rounded-lg p-2">${skill}</li>`).join('')}
                    </ul>
                </div>
            </div>
        </section>

        <section class="px-4 pb-16">
            <h2 class="text-3xl mb-8 font-bold text-gray-800">Experience</h2>
            ${data.experience.map(exp => `
                <div>
                    <h3 class="text-xl font-bold text-gray-800">${exp.title}</h3>
                    <p class="text-gray-600 mb-4">${exp.duration}</p>
                    <div class="border-l-4 pl-6">
                        ${exp.details.map(detail => `
                            <div class="text-gray-600 bg-white  rounded-lg p-4 mb-6">
                                <h3 class="font-semibold text-gray-800">${detail.title}</h3>
                                <p class="text-gray-600 mb-4">${detail.date}</p>
                                <p class="text-gray-600 text-sm mb-4">${detail.description}</p>
                            </div>
                        `).join('')}
                    </div>
                </div>
            `).join('')}
        </section>

        <section class="px-4 pb-16">
            <h2 class="text-3xl mb-8 font-bold text-gray-800">Certification</h2>
            <ul class="list-none text-gray-800 grid md:grid-cols-2 grid-cols-1 gap-4">
                ${data.certifications.map(cert => `
                    <li class="bg-white p-3 rounded-xl">${cert.name} - <span class="bg-gray-100 font-bold p-2 text-sm rounded-xl">${cert.provider}</span></li>
                `).join('')}
            </ul>
        </section>

        <section class="px-4 pb-16">
            <div class="mt-8 mx-auto">
                <ul class="flex justify-center">
                    <a href="#" target="_blank">
                        <li class="m-2 p-2">
                            <div>
                                <img src="./assets/icons/LinkedIn.png" class="w-8 h-8 invert" alt="">
                            </div>
                        </li>
                    </a>
                    <a href="#" target="_blank">
                        <li class="m-2 p-2">
                            <div>
                                <img src="./assets/icons/GitHub.png" class="w-8 h-8 invert" alt="">
                            </div>
                        </li>
                    </a>
                    <a href="#" target="_blank">
                        <li class="m-2 p-2">
                            <div>
                                <img src="./assets/icons/Instagram.png" class="w-8 h-8 invert" alt="">
                            </div>
                        </li>
                    </a>
                    <a href="#" target="_blank">
                        <li class="m-2 p-2">
                            <div>
                                <img src="./assets/icons/TwitterX.png" class="w-8 h-8 invert" alt="">
                            </div>
                        </li>
                    </a>
                </ul>
            </div>
        </section>
    `;
}
