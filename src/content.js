// src/content.js

export const content = {
    header: {
        name: "Adeline Doche",
    },
    hero: {
        title: "Adeline Doche",
        subtitle:
            "Étudiante en Architecture Intérieure & Design – Passionnée par la création d’espaces uniques.",
        backgroundImage: "/images/bg.jpeg",
    },
    nav: [
        { id: "profil", label: "Profil" },
        { id: "objectifs", label: "Objectifs" },
        { id: "portfolio", label: "Portfolio" },
        { id: "experiences", label: "Expériences" },
        { id: "formations", label: "Formations" },
        { id: "competences", label: "Compétences" },
        { id: "contact", label: "Contact" },
    ],
    profile: {
        title: "Profil",
        image: "/images/doche_adeline.png",
        text:
            "Étudiante en double cursus Architecture Intérieure et Design à l’École Camondo, Paris. Passionnée par la conception d'espaces intérieurs, je recherche un stage afin de développer mes compétences et contribuer à des projets créatifs.",
    },
    objectifs: {
        title: "Objectifs",
        icon: "target",
        text: `Je suis à la recherche d’un stage de cinq mois à partir de juin 2025, au sein d’une agence spécialisée en design d’espace ou en scénographie. Passionnée par la création d’environnements innovants et immersifs, je souhaite rejoindre une équipe dynamique qui place la créativité au cœur de ses projets.
  
        Mon objectif est de mettre mes compétences au service de concepts audacieux tout en développant mon expertise aux côtés de professionnels engagés dans une démarche créative et visionnaire.`,
    },
    portfolio: {
        title: "Portfolio",
    },
    experiences: {
        title: "Expériences",
        items: [
            {
                image: "/images/defaultEntreprise.png",
                title: "2024 - Stage cabinet d’architecture de Anne De Charry",
                description: `J’ai eu l’opportunité d’effectuer mon stage de fin de troisième année à Camondo à l’agence de Anne De Charry, architecte DPLG. 

                J’ai ainsi pu explorer le métier d’architecte et apprendre sur l’aménagement et la réhabilitation concernait la rénovation de maisons basques traditionnelles, appelées “Extra”. 

                Cette expérience m’a permis de mieux comprendre les étapes d’un projet architectural, de la conception aux choix des matériaux, tout en découvrant l’importance de préserver l’authenticité d’un bâtiment tout en l’adaptant aux besoins modernes.`,
            },
            {
                image: "/images/acte.jpeg",
                title: "2023 - Stage chantier rénovation chez ACTE Architecture",
                description:
                    `Lors de ma deuxième année à l’école Camondo, j’ai eu l’opportunité de réaliser un stage chantier de quatre mois aux côtés de l’architecte Alexis Le Mault, diplômé d’État HMO-NP (DPLG). 

                    Cette immersion m’a permis de suivre de près l’évolution d’un projet de construction, de ses dernières finitions jusqu’à sa phase finale. J’ai pu observer les imprévus inhérents à tout chantier et mesurer l’importance d’une gestion rigoureuse. 

                    Alexis Le Mault a su faire preuve d’une remarquable réactivité et d’une coordination efficace entre les différents corps de métier, ce qui m’a offert un précieux apprentissage sur la gestion concrète d’un projet architectural.`,
            },
            {
                title: "2020 - Design de chaussures personnalisées",
                description: "Boutique en ligne",
            },
            {
                title: "2019 - Création du logo Powermama",
                description: "Entreprise de yoga, Chatou 78400",
            },
            {
                title: "2025 - Partenariat avec Cuisinella",
                description: "",
            },
            {
                title:
                    "2024 - Proposition de projet de réhabilitation du restaurant le Picardeau appartenant à Claudia Cardinale",
                description: "",
            },
            {
                title: "2024 - Partenariat avec Lafuma",
                description: "",
            },
            {
                title:
                    "2024 - Proposition de projet de réaménagement et réorganisation du Musée des Arts Décoratifs (MAD)",
                description: "",
            },
            {
                image: "/images/ozConsulting.jpeg",
                title: "2017 - Stage chez Oz Consulting",
                description: "Conception et aménagement d’espaces de travail",
            },
        ],
    },
    formations: {
        title: "Formations",
        items: [
            {
                title: "Ecole d’Architecture intérieure & Design, Camondo (2021–2026)",
                image: "/images/camondo.jpeg",
                description: "Actuellement en quatrième année",
            },
            {
                title: "Diplôme national du baccalauréat général (2019–2020)",
                image: "/images/bac.jpeg",
                description:
                    `- Baccalauréat avec mention lycée Alain, 
                     - Spécialités : Sciences de l’informatique, Mathématiques, LLCE Anglais`,
            },
        ],
    },
    competences: {
        title: "Compétences",
        sections: [
            {
                title: "Logiciels",
                icon: "faLaptopCode",
                items: [
                    {
                        name: "Suite Adobe",
                        icon: "/images/icons/adobe.png"
                    },
                    {
                        name: "Autocad",
                        icon: "/images/icons/autocad.png"
                    },
                    {
                        name: "Revit",
                        icon: "/images/icons/revit.png"
                    },
                    {
                        name: "Rhinocéros",
                        icon: "/images/icons/rhino.png"
                    },
                    {
                        name: "Cinéma 4D",
                        icon: "/images/icons/cinema4d.webp"
                    },
                    {
                        name: "Sketch Up",
                        icon: "/images/icons/sketchup.png"
                    },
                    {
                        name: "Procreate",
                        icon: "/images/icons/procreate.png"
                    },
                    {
                        name: "Blender",
                        icon: "/images/icons/blender.png"
                    },
                    {
                        name: "PackOffice",
                        icon: "/images/icons/office.png"
                    },
                ],
            },
            {
                title: "Compétences techniques",
                icon: "faTools",
                items: [
                    {
                        name: "Modélisations et Conceptualisation d’espaces 3D",
                        icon: "/images/icons/3d.png"
                    },
                    {
                        name: "Dessins perspectives et techniques",
                        icon: "/images/icons/drawing.png"
                    }
                ]
            },
            {
                title: "Langues et Permis",
                icon: "faGlobe",
                items: [
                    "Français (langue maternelle)",
                    "Anglais (B2-C1)",
                    "Chinois (A2)",
                    "Permis B",
                    "Permis A bateau",
                ],
            },
            {
                title: "Profil personnel",
                icon: "faIdBadge",
                items: [
                    "Capacité à se représenter dans l’espace",
                    "Sens de la créativité",
                    "Rigoureuse et précise",
                    "Capacité à s’organiser",
                    "Gestion du stress",
                    "Sensibilité artistique : dessin, peinture, argile,...",
                    "Pratiques sportives : patinage artistique, fitness/gym, course à pied",
                ],
            },
        ],
    },
    contact: {
        title: "Contact",
        email: "adeline.doche@ecolecamondo.net",
        phone: "+33 6 01 67 13 17",
        address: "22 allée du lac supérieur, 78110 Le Vésinet, France",
    },
    social: {
        linkedin: "https://www.linkedin.com/in/adeline-doche-4707a91a1/",
        instagram: "https://www.instagram.com/adelindesign_/",
        email: "mailto:adeline.doche@ecolecamondo.net",
    },
};
