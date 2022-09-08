class navbar extends HTMLElement {
    connectedCallback() {
        const rootPath = "";
        const indexPath = "index.html";
        const contactUsPath = "contact.html";
        const servicesPath = "services.html";
        const aboutUsPath = "about.html";

        const paths = window.location.href.split("/");
        const activeMenu = paths[paths.length - 1];

        this.innerHTML = `
         <div class="flex bg-blue-500 text-white">
        <div class=" ml-4 rounded-full w-[4%]">
            <img class="rounded-full" src="imgs/logo5.webp" alt="logo">

        </div>
        <!-- <div class=" flex justify-center "> -->
        <ul class="flex justify-center w-[100vw] space-x-[4%] mt-4">
            <li class="`+ ((activeMenu === indexPath || activeMenu === rootPath) ? "font-bold" : "") + `"><a href="index.html">Home</a></li>
            <li class="`+ ((activeMenu === aboutUsPath || activeMenu === rootPath) ? "font-bold" : "") + `"><a href="about.html">About</a></li>
            <li class="`+ ((activeMenu === contactUsPath || activeMenu === rootPath) ? "font-bold" : "") + `"><a href="contact.html">Contact</a></li>
            <li class="`+ ((activeMenu === servicesPath || activeMenu === rootPath) ? "font-bold" : "") + `"><a href="services.html">Services</a></li>

        </ul>
        <!-- </div> -->



    </div>`;

    }

}

class footer extends HTMLElement {
    connectedCallback() {
        const paths = window.location.href.split("/");
        this.innerHTML = ` <footer class="text-center bg-blue-500 text-white py-1">
        <p>copyright : Tech Inject-2022</p>
    </footer>
        `;
    }
}

class smallnav extends navbar {
    connectedCallback() {
        const rootPath = "";
        const indexPath = "index.html";
        const contactUsPath = "contact.html";
        const servicesPath = "services.html";
        const aboutUsPath = "about.html";
        const paths = window.location.href.split("/");
        const activeMenu = paths[paths.length - 1];
        this.innerHTML = `<nav class="bg-blue-500 flex justify-between">
        <div class=" ml-4 rounded-full w-[8%]">
            <img class="rounded-full" src="imgs/logo5.webp" alt="logo">

        </div>


        <ul id="navit" class=" mt-16 hidden justify-center w-[100vw]  space-y-10 text-white">



             <li class="`+ ((activeMenu === indexPath || activeMenu === rootPath) ? "font-bold" : "") + `"><a href="index.html">Home</a></li>
            <li class="`+ ((activeMenu === aboutUsPath || activeMenu === rootPath) ? "font-bold" : "") + `"><a href="about.html">About</a></li>
            <li class="`+ ((activeMenu === contactUsPath || activeMenu === rootPath) ? "font-bold" : "") + `"><a href="contact.html">Contact</a></li>
            <li class="`+ ((activeMenu === servicesPath || activeMenu === rootPath) ? "font-bold" : "") + `"><a href="services.html">Services</a></li>

        </ul>

        <div onclick="btnfun()" id="btn" class=" mr-5 flex flex-col space-y-1 py-2 ">
            <span class="bg-gray-50 w-7 px-5 rounded-md h-1 "></span>
            <span class="bg-gray-50 w-7 px-5 rounded-md h-1 "></span>
            <span class="bg-gray-50 w-7 px-5 rounded-md h-1"></span>
        </div>

    </nav>
</body>
 `;
    }
}

customElements.define('small-nav', smallnav);
customElements.define('foot-er', footer);
customElements.define('nav-bar', navbar);

