// Simple Config stuff
const config = {
    name: 'EVO NFT',
    amount: 2000,
    nft_name: 'Evolates',
    discord_link: 'https://discord.gg/evolates',
    twitter_link: 'https://twitter.com/evolates'
};

// Header Description
config.description = config.amount + ' ' + config.nft_name + ' are just waiting to be bought by you!';

// Visions
config.visions = [{
    title: config.nft_name,
    description: 'By getting my hair pulled back, I want to get whipped by your huge whip doggio, while riding my new fancy ' + config.nft_name,
    icon: 'fas fa-bong'
}, {
    title: 'Metaverse',
    description: 'This new NFT - ' + config.nft_name + ', is usable instantly on the Metaverse, as soon as it launches!',
    icon: 'fas fa-universal-access'
}];

// Timeline Points
config.timeline = [{
    title: 'Presale',
    description: 'We pick a small number of people to get whitelisted to buy before launching on major platforms'
}, {
    title: 'Binance Launch',
    description: 'We launch ' + config.nft_name + ' on the Binance NFT marketplace.'
}];

// Team Members
config.team = [{
    name: 'EVO',
    title: 'Supply Commander',
    image: 'img/evo.png'
}, {
    name: 'Nobody',
    title: 'Artist',
    image: 'img/nobody.png'
}];

// FAQ Points
config.faq = [{
    question: 'What\'s the total supply of ' + config.nft_name + '?',
    answer: 'Well, we\'re going to launch with approximately 300 ' + config.nft_name
}, {
    question: 'When is ' + config.nft_name + ' going to mint?',
    answer: config.nft_name + ' is going to launch on the 5th of September in 2022 at 12pm EST'
}];

// Launch Button
config.launch = {
    time: new Date(Date.parse("2022-09-05T12:00:00.000Z")),
    link: 'https://opensea.io/collection/evolates'
};


// !!! DO NOT TOUCH BELOW THIS POINT !!!
// !!! DO NOT TOUCH BELOW THIS POINT unless you're sure you won't break anything !!!
// !!! DO NOT TOUCH BELOW THIS POINT !!!


config.launch.diff = new Date(config.launch.time - Date.now());
if (config.launch.diff.getMonth() == 1) {
    mo = "month"
} else {
    mo = "months"
}
if (config.launch.diff.getDate() - 1 == 1) {
    da = "day"
} else {
    da = "days"
}
if (config.launch.diff.getMonth() >= 1 && config.launch.diff.getYear() == 0) {
    config.launch.text = (config.launch.diff.getMonth()) + ' ' + mo + ' & ' + (config.launch.diff.getDate() - 1) + ' ' + da;
} else if (config.launch.diff.getDate() - 1 > 1 && config.launch.diff.getYear() == 0) {
    config.launch.text = (config.launch.diff.getDate() - 1) + ' ' + da;
} else if (config.launch.diff.getDate() - 1 == 0 && (config.launch.diff.getMinutes() > 0 || config.launch.diff.getHours() > 0) && config.launch.diff.getYear() == 0) {
    config.launch.text = config.launch.diff.getHours() + ' hrs, ' + config.launch.diff.getMinutes() + ' min and ' + config.launch.diff.getSeconds() + ' sec';
} else {
    config.launch.text = 'Minted now!';
}


const app = Vue.createApp({
    mounted() {
        window.addEventListener("scroll", this.onScroll);
        $('#loader').animate({ opacity: 0 }, 500, function() {
            $('#loader').hide();
        });
        this.getLaunch()
    },
    beforeDestroy() {
        window.removeEventListener("scroll", this.onScroll);
    },
    data() {
        return {
            config: config
        }
    },
    methods: {
        launched() {
            if (this.config.launch.time <= Date.now()) {
                window.location.href = this.config.launch.link;
            }
        },
        goTo(hash) {
            if (hash !== "") {
                event.preventDefault();
                $('html, body').animate({
                    scrollTop: $(hash).offset().top
                }, 350, 'swing');
            }
        },
        onScroll(e) {
            if (window.top.scrollY > 150 && !$('#navbar').is(":hover")) {
                $('#navbar').css('opacity', 0.5);
                $('#navbar').css('height', '50px');
            }
            if (window.top.scrollY <= 150 || $('#navbar').is(":hover")) {
                $('#navbar').css('opacity', 1);
                $('#navbar').css('height', '75px');
            }
            if (window.top.scrollY > $('#vision-spacer').offset().top - 300 && window.top.scrollY < $('#timeline-spacer').offset().top - 300) {
                if (!$('#navbar > .navbar-list > .navbar-item.nft').hasClass('active')) {
                    $('#navbar > .navbar-list > .navbar-item.nft').toggleClass('active');
                }
            } else if ($('#navbar > .navbar-list > .navbar-item.nft').hasClass('active')) {
                $('#navbar > .navbar-list > .navbar-item.nft').toggleClass('active');
            }
            if (window.top.scrollY > $('#timeline-spacer').offset().top - 300 && window.top.scrollY < $('#team-spacer').offset().top - 300) {
                if (!$('#navbar > .navbar-list > .navbar-item.roadmap').hasClass('active')) {
                    $('#navbar > .navbar-list > .navbar-item.roadmap').toggleClass('active');
                }
            } else if ($('#navbar > .navbar-list > .navbar-item.roadmap').hasClass('active')) {
                $('#navbar > .navbar-list > .navbar-item.roadmap').toggleClass('active');
            }
            if (window.top.scrollY > $('#team-spacer').offset().top - 300 && window.top.scrollY < $('#faq-spacer').offset().top - 400) {
                if (!$('#navbar > .navbar-list > .navbar-item.team').hasClass('active')) {
                    $('#navbar > .navbar-list > .navbar-item.team').toggleClass('active');
                }
            } else if ($('#navbar > .navbar-list > .navbar-item.team').hasClass('active')) {
                $('#navbar > .navbar-list > .navbar-item.team').toggleClass('active');
            }
            if (window.top.scrollY > $('#faq-spacer').offset().top - 400) {
                if (!$('#navbar > .navbar-list > .navbar-item.faq').hasClass('active')) {
                    $('#navbar > .navbar-list > .navbar-item.faq').toggleClass('active');
                }
            } else if ($('#navbar > .navbar-list > .navbar-item.faq').hasClass('active')) {
                $('#navbar > .navbar-list > .navbar-item.faq').toggleClass('active');
            }
            $('#navbar > .navbar-scroll').css('width', 150 / $(document).height() * window.top.scrollY + '%');
        },
        navbarHover() {
            if ($('#navbar').is(":hover")) {
                $('#navbar').css('opacity', 1);
                $('#navbar').css('height', '75px');
            } else if (window.top.scrollY > 150) {
                $('#navbar').css('opacity', 0.5);
                $('#navbar').css('height', '50px');
            } else {
                $('#navbar').css('opacity', 1);
                $('#navbar').css('height', '75px');
            }
        },
        getLaunch() {
            setInterval(() => {
                this.config.launch.diff = new Date(this.config.launch.time - Date.now());
                if (this.config.launch.diff.getMonth() == 1) {
                    mo = "month"
                } else {
                    mo = "months"
                }
                if (this.config.launch.diff.getDate() - 1 == 1) {
                    da = "day"
                } else {
                    da = "days"
                }
                if (this.config.launch.diff.getMonth() >= 1 && this.config.launch.diff.getYear() == 0) {
                    this.config.launch.text = (this.config.launch.diff.getMonth()) + ' ' + mo + ' & ' + (this.config.launch.diff.getDate() - 1) + ' ' + da;
                } else if (this.config.launch.diff.getDate() - 1 > 1 && this.config.launch.diff.getYear() == 0) {
                    this.config.launch.text = (this.config.launch.diff.getDate() - 1) + ' ' + da;
                } else if (this.config.launch.diff.getDate() - 1 == 0 && (this.config.launch.diff.getMinutes() > 0 || this.config.launch.diff.getHours() > 0) && this.config.launch.diff.getYear() == 0) {
                    this.config.launch.text = this.config.launch.diff.getHours() + ' hrs, ' + this.config.launch.diff.getMinutes() + ' min and ' + this.config.launch.diff.getSeconds() + ' sec';
                } else {
                    this.config.launch.text = 'Minted now!';
                }
            }, 1000);
        }
    }
});

app.component('navbar', {
    data() {
        return {
            config: config
        }
    },
    methods: {
        goTo(hash) {
            if (hash !== "") {
                event.preventDefault();
                $('html, body').animate({
                    scrollTop: $(hash).offset().top
                }, 350, 'swing');
            }
        }
    },
    template: `
    <nav id="navbar">
        <img class="navbar-logo" src="img/logo.png" :alt="config.nft_name+' Logo'" @click="goTo('#header')">
        <div class="navbar-list">
            <a class="navbar-item nft" @click="goTo('#vision-spacer')">{{config.nft_name}}</a>
            <a class="navbar-item roadmap" @click="goTo('#timeline-spacer')">Roadmap</a>
            <a class="navbar-item team" @click="goTo('#team-spacer')">Team</a>
            <a class="navbar-item faq" @click="goTo('#faq-spacer')">FAQ</a>
            <a class="navbar-item discord" :href="config.discord_link"><i class="fab fa-discord"></i></a>
            <a class="navbar-item twitter" :href="config.twitter_link"><i class="fab fa-twitter"></i></a>
        </div>
        <div class="navbar-scroll">
        </div>
    </nav>`
});

app.component('vision-item', {
    props: ['vision'],
    template: `
    <div class="vision-item">
        <div class="vision-icon">
            <i :class="vision.icon"></i>
        </div>
        <div class="vision-info">
            <h4 class="vision-title">{{ vision.title }}</h4>
            <p class="vision-description">{{ vision.description }}</p>
        </div>
    </div>`
});

app.component('timeline-item', {
    props: ['item'],
    template: `
    <div class="timeline-item">
        <div class="timeline-blob"></div>
        <h5 class="timeline-title">{{ item.title }}</h5>
        <p class="timeline-description">{{ item.description }}</p>
    </div>`
});

app.component('team-member', {
    props: ['member'],
    template: `
    <div class="team-member" :style="'background:url('+member.image+');background-repeat:no-repeat;background-position:center;background-size:cover;'">
        <h2 class="member-name">@{{ member.name }}</h2>
        <p class="member-title">{{ member.title }}</p>
    </div>`
});

app.component('faq-item', {
    props: ['faq'],
    template: `
    <div class="faq-item">
        <p class="faq-question">{{ faq.question }}</p>
        <p class="faq-answer">{{ faq.answer }}</p>
    </div>`
});

app.mount('#app');