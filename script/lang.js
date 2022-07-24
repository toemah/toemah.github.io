const lang = {
    en: [
        {
            selector: "#job",
            html: "Web Developer"
        },
        {
            selector: "#about-section>div>h2>span",
            html: "About me"
        },
        {
            selector: "#about-section>div>p",
            html: `I'm a ${calculateYears(birthday)} yo french guy, junior developper with a broad skillset although I've been mostly dabbling in web technologies. 
            I've worked on websites and put together a few mobile apps for both Android and iOS devices.\n
            Day - to - day I'm a big videogame nerd, it's quite certainly the thing I'm the most passionate about. 
            I play a ton of them and try my best to discover more. 
            I love engaging in discussions about their design but also the experience I had.`
        },
        {
            selector: "#education-section>h2>span",
            html: "Education"
        },
        {
            selector: "#college>.title>h3:first-child",
            html: `Bachelor Degree`
        },
        {
            selector: "#college>.edu-table>.edu-row>.edu-cell:last-child",
            html: `One year degree in apprenticeship at the <a href="https://www.iut-orsay.universite-paris-saclay.fr/">IUT d'Orsay</a>, 
            I attended classes 2 days per week and worked the other 3 at <a href="https://www.altisys.fr/">Alitsys</a> as an apprentice Web Developer.\n
            I got a lot more experienced with mobile development for Android and iOS platforms through school assignements and learned more about web application at my job.`
        },
        {
            selector: "#university>.title>h3:first-child",
            html: `University Degree in Computer Science`
        },
        {
            selector: "#university>.edu-table>.edu-row>.edu-cell:last-child",
            html: `I started studying comp sci at the <a href="https://iutparis-seine.u-paris.fr/">IUT de Paris</a>, making my first steps in programming with C and then Java. 
            There I also learnt the basics of networking and algorithms.`
        },
        {
            selector: "#highschool>.title>h3:first-child",
            html: `High School Diploma`
        },
        {
            selector: "#highschool>.edu-table>.edu-row>.edu-cell:last-child",
            html: `At the <a href="https://lyc-bascan.fr/">Lycée Louis Bascan</a>, I specialized in science and broad engineering concepts, 
            working tirelessly to make sure I could pursue my studies as I wished to.`
        },
        {
            selector: "#project-section>h2>span",
            html: "Projects"
        },
        {
            selector: "#musiconator>.content>.info>.description",
            html: `<p>
                        A jukebox mobile app built using the 
                        <a href="https://flutter.webp/">Flutter framework (v2.15.1)</a> and the 
                        <a href="">audioplayers (v0.20.1)</a> and
                        <a href="https://pub.dev/packages/audioplayers">file_picker (v4.6.0)</a>
                        plugins.
                    </p>
                    <h4>features:</h4>
                    <ul>
                        <li>
                            Customizable themes (name and sounds)
                        </li>
                        <li>
                            Customizable sounds (audio, name, picture)
                        </li>
                    </ul>`
        },
        {
            selector: "#canvas>.content>.info>.description",
            html: `<p>
                    A canvas made without the
                    <a href="https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API">Canvas API</a>.
                    <br>
                    Try it <a href="https://toemah.github.io/canvas/">here</a>.
                    </p>
                    <h4>features:</h4>
                    <ul>
                        <li>
                            5 Colors
                        </li>
                        <li>
                            2 Brushes
                        </li>
                        <li>
                            Brush size slider
                        </li>
                    </ul>`
        },
        {
            selector: "#gamer_test>.content>.info>.description",
            html: `<p>
                    My own take on the popular reaction time test.
                    <br>
                    Try it <a href="https://toemah.github.io/gamer_test/">here</a>.
                    </p>
                    <h4>features:</h4>
                    <ul>
                        <li>
                            Minimal UI (limited to on-screen prompts)
                        </li>
                        <li>
                            Result in 5 rounds
                        </li>
                    </ul>`
        }
    ],
    fr: [
        {
            selector: "#job",
            html: "Développeur Web"
        },
        {
            selector: "#about-section>div>h2>span",
            html: "À propos"
        },
        {
            selector: "#about-section>div>p",
            html: `Je suis un développeur junior de ${calculateYears(birthday)} ans, doté d'un large éventail de compétences cependant je travaille en majorité avec les techonologies web. 
            J'ai créé des sites webs ainsi que quelques applications mobiles pour les appareils Android et iOS.\n
            Au quotidien je suis un grand fan de jeux vidéos, c'est sans doute ma plus grande passion. 
            Je joue à plein de titres et essaie d'en découvrir de nouveaux. 
            J'adore discuter des aspects plus techniques de chacun mes aussi partagé l'expérience qu'ils m'ont procuré.`
        },
        {
            selector: "#education-section>h2>span",
            html: "Parcours"
        },
        {
            selector: "#college>.title>h3:first-child",
            html: `Licence Professionelle PRISM`
        },
        {
            selector: "#college>.edu-table>.edu-row>.edu-cell:last-child",
            html: `Une année en alternance à l'<a href="https://www.iut-orsay.universite-paris-saclay.fr/">IUT d'Orsay</a>, 
            J'assistais aux cours 2 jours par semaine et travaillais les 3 autres chez <a href="https://www.altisys.fr/">Alitsys</a> en tant qu'apprenti développeur web.\n
            Grâce à des projets scolaires j'ai acquis beaucoup d'expérience en développement mobile pour les plateformes Android et iOS tandis que j'ai appris beaucoup vis à vis des applications web au travail.`
        },
        {
            selector: "#university>.title>h3:first-child",
            html: `DUT Informatique`
        },
        {
            selector: "#university>.edu-table>.edu-row>.edu-cell:last-child",
            html: `J'ai commencé à étudié l'informatique à l'<a href="https://iutparis-seine.u-paris.fr/">IUT de Paris</a>, d'abord avec le langage de programmation C puis Java. 
            J'y ai aussi appris les bases de l'algorithmie et du fonctionnement d'un réseau.`
        },
        {
            selector: "#highschool>.title>h3:first-child",
            html: `Baccalauréat - STI2D`
        },
        {
            selector: "#highschool>.edu-table>.edu-row>.edu-cell:last-child",
            html: `Au <a href="https://lyc-bascan.fr/">Lycée Louis Bascan</a>, j'ai suivi une formation technologique et scientifique, 
            j'ai travaillé sans relâche afin d'assurer la poursuite de mes études dans un domaine qui me conviendrai plus.`
        },
        {
            selector: "#project-section>h2>span",
            html: "Projets"
        },
        {
            selector: "#musiconator>.content>.info>.description",
            html: `<p>
                        Une application mobile de boîte à rythme réalisé à l'aide du 
                        <a href="https://flutter.webp/">framework Flutter (v2.15.1)</a> et des plugins 
                        <a href="">audioplayers (v0.20.1)</a> et
                        <a href="https://pub.dev/packages/audioplayers">file_picker (v4.6.0)</a>.
                    </p>
                    <h4>fonctionnalités:</h4>
                    <ul>
                        <li>
                            Thèmes personnalisables (nom et sons)
                        </li>
                        <li>
                            Sons personnalisables (audio, nom, image)
                        </li>
                    </ul>`
        },
        {
            selector: "#canvas>.content>.info>.description",
            html: `<p>
                    Une toile de peinture réalisée sans
                    l'<a href="https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API">API Canvas</a>.
                    <br>
                    Essayez la <a href="https://toemah.github.io/canvas/">ici</a>.
                    </p>
                    <h4>fonctionnalités:</h4>
                    <ul>
                        <li>
                            5 Couleurs
                        </li>
                        <li>
                            2 Pinceaux
                        </li>
                        <li>
                            Taille du pinceau ajustable avec un slider
                        </li>
                    </ul>`
        },
        {
            selector: "#gamer_test>.content>.info>.description",
            html: `<p>
                    Ma version du populaire test de réactivité.
                    <br>
                    Essayez le <a href="https://toemah.github.io/gamer_test/">ici</a>.
                    </p>
                    <h4>fonctionnalités:</h4>
                    <ul>
                        <li>
                            UI minimaliste (seulement des instructions textuelles)
                        </li>
                        <li>
                            Résultat après 5 tours
                        </li>
                    </ul>`
        }
    ]
};
