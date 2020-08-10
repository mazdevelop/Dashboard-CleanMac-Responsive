        let btn_main = document.getElementById("btn-main");
        let btn_statistics = document.getElementById("btn-statistics");
        let main = document.getElementById("main");
        let statistics = document.getElementById("statistics");
        function openMain() {
            main.style.transform = "translateX(6%)";
            main.style.position = "absolute";
            main.style.margin = "0";
            main.style.height = "100vh";
            statistics.style.transform = "translateX(112%)";
            btn_main.style.backgroundColor = "#e4e4f6";
            btn_statistics.style.backgroundColor = "#fff";
        }
        function openStatistics() {
            statistics.style.transform = "translateX(-9%)";
            statistics.style.position = "inherit";
            statistics.style.margin = "0";
            statistics.style.height = "105vh";
            main.style.transform = "translateX(112%)";
            btn_statistics.style.backgroundColor = "#e4e4f6";
            btn_main.style.backgroundColor = "#fff";
        }
        const goo = document.querySelector('.goo'),
            map = {
                0: 0,
                1: 75,
                2: 160,
                3: 240,
                4: 320,
                5: 400,
            },
            activePage = index => {
                goo.style.display = "block";
                goo.style.top = get(index);
            }
        ahref = document.querySelector('.navbar-nav').children;
        for (let i = 0; i < ahref.length; i++) {
            const a = ahref[i].querySelector(".nav-link");
            if (isNaN(a)) {
                a.addEventListener("click", function () {
                    for (let j = 0; j < ahref.length; j++) {
                        if (isNaN(ahref[j].querySelector('.nav-link'))) {
                            ahref[j].querySelector('.nav-link').classList.remove("active");
                        }
                    }
                    this.classList.add("active");
                })
            }
        }

        function get(i) {
            return map[i] + 'px';
        }