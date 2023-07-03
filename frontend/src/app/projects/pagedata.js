"use client"
const filters = ['All','Machine Learning / Artificial Intelligence','Networking & Cloud Computing', 'Algorithms / Dynamical Programming','Microservice / Backend Systems','Database Systems','Data Analytics & PreProcessing','Hardware Engineering Integrations','Frontend & UI Development','Full Stack Development','Libraries / Packages / Modules / Applications / Frameworks']

const projects = [
    {
        title: "Trek - Optimal Path Simulation on Geospatial Map",
        description: "Using graph theory algorithms and simulations, to optimaize paths and travel times between nodes on a geospatial map",
        long_description:"Using graph theory algorithms and simulations, to optimaize paths and travel times between nodes on a geospatial map",
        slug:'trek',
        languages:['Python','Jupyter Notebook','HTML'],
        tags:['Algorithms / Dynamical Programming','Libraries / Packages / Modules / Applications / Frameworks'],
        sourcecode:'https://github.com/teddyoweh/Trek',
        pypipackge:'https://pypi.org/project/trekpy/'

    },
    {
        title: "Stochastic Processes Disease Modelling",
        description: "Presented new mathematical models that extend methodology which incorporates relationships (edges) between indivduals (nodes) to create a network graph on which a disease outbreaks.",
        long_description:"Presented new mathematical models that extend methodology which incorporates relationships (edges) between indivduals (nodes) to create a network graph on which a disease outbreaks.",
        slug:'Stochastic-Processes-Disease-Modelling',
        languages:['Python','Jupyter Notebook'],
        tags:['Algorithms / Dynamical Programming','Libraries'],
        sourcecode:'https://github.com/teddyoweh/Stochastic-Processes-Disease-Modelling',
 

    },
    {
        title: "WHOTAI",
        description:'Custom Tree AI/MODEL Algorithms & Parallel Programming to  simulate / play Naija Whot (African Card Game) - Similar to Uno Card Game',
        long_description:'Custom Built Random Forest + Decision Tree AI Algoritmns & Parallel Programming to  simulate / play Naija Whot (African Card Game) - Similar to Uno Card Game',
        slug:'whotai',
        languages:['Python'],
        tags:['Machine Learning / Artificial Intelligence','Algorithms / Dynamical Programming'],
        sourcecode:'https://github.com/teddyoweh/WHOTAI',
    },
    {
        title: "Cheat Model",
        description:'NLP Text Binary Probabilistic Classification Model for predicting cheat statements',
        long_description:'NLP Text Binary Probabilistic Classification Model for predicting cheat statements',
        slug:'cheat-model',
        languages:['Python','Jupyter Notebook'],
        tags:['Machine Learning / Artificial Intelligence','Data Analytics & PreProcessing'],
        sourcecode:'https://github.com/teddyoweh/cheat-model'
    },
    {
        title: "Cheat Model API",
        description:'Micros-service System for NLP Text Binary Probabilistic Classification Model for integrations with Applications ',
        long_description:'Micros-service System for NLP Text Binary Probabilistic Classification Model for integrations with Applications ',
        slug:'cheat-model-api',
        languages:['Python'],
        tags:['Microservice / Backend Systems','Networking & Cloud Computing'],
        sourcecode:'https://github.com/teddyoweh/cheat-model-api'
    },

    {
        title: "Beardb",
        description:'Database system utilizes AES encryption for JSON data, providing secure and easy remote access, management, and deployment.',
        long_description:'Database system utilizes AES encryption for JSON data, providing secure and easy remote access, management, and deployment.',
        slug:'beardb',
        languages:['Python'],
        tags:['Database Systems','Microservice / Backend Systems','Libraries / Packages / Modules / Applications / Frameworks'],
        sourcecode:'https://github.com/teddyoweh/Beardb',
        pypipackge:'https://pypi.org/project/beardb/',
        documenation:'https://beardb.net'
    },
 
    {
        title: "Beardb API ",
        description:'Microservice for remote deployment of Beardb Databases.',
        long_description:'Microservice for remote deployment of Beardb Databases.',
        slug:'beardb-api',
        languages:['Python'],
        tags:['Database Systems','Microservice / Backend Systems','Libraries / Packages / Modules / Applications / Frameworks','Networking & Cloud Computing'],
        sourcecode:'https://github.com/teddyoweh/beardb-api',
        pypipackge:'https://pypi.org/project/BeardbAPI/',
        documenation:'https://beardb.net'
    },

    
    {
        title: "Beardb Website",
        description:'Website Documentation for BearDB and BearDBAPI',
        long_description:'Website Documentation for BearDB and BearDBAPI',
        slug:'beardb-website',
        languages:['Vue','Javascript'],
        tags:['Frontend & UI Development'],
        website:'https://beardb.net',
        sourcecode:'https://github.com/teddyoweh/beardb-website'
    },
    {
        title: "Rocket Payload System | NASA USLI",
        description:'Developed  90% of the codebase of a payload system used in a Rocket launched at est. 4,600fts to carry out various image processing techniques based on commands from an SDR Radio Receiver custom functions was developed to parse commands. With Raspberry Pi as the microcontroller',
        long_description:'Developed  90% of the codebase of a payload system used in a Rocket launched at est. 4,600fts to carry out various image processing techniques based on commands from an SDR Radio Receiver custom functions was developed to parse commands. With Raspberry Pi as the microcontroller',
        slug:'tarpayload',
        languages:['Python'],
        tags:['Hardware Engineering Integrations','Algorithms / Dynamical Programming','Microservice / Backend Systems'],
        sourcecode:'https://github.com/Tarleton-RocketTeam/TARPayload'
    },
    {
        title: "Slic",
        description:"SLIC (Swift Low-latency Intercommunication) simplifies client-server communication using tcp / p2p protocols while focusing on latency reduction through low-latency intercommunication techniques. By optimizing network protocols, minimizing data processing overhead, with optimized algorithms for data serialization and deserialization, reducing processing overhead and improving efficiency. Alternative to REST API Architectures.",
        long_description:'SLIC (Swift Low-latency Intercommunication) simplifies client-server communication using tcp / p2p protocols while focusing on latency reduction through low-latency intercommunication techniques. By optimizing network protocols, minimizing data processing overhead, with optimized algorithms for data serialization and deserialization, reducing processing overhead and improving efficiency, while offering built-in capabilities like rate limiting and network traffic management for enhanced network efficiency and seamless data exchange to ensure faster response times, reduced communication delays, and enhanced overall performance in latency-sensitive applications.',
        slug:'slic',
        languages:['Python'],
        tags:['Networking & Cloud Computing','Algorithms / Dynamical Programming','Libraries / Packages / Modules / Applications / Frameworks'],
        sourcecode:'https://github.com/teddyoweh/SLIC',
        pypipackge:'https://pypi.org/project/slicpy/'
    },
    {
        title: "Omark",
        description:'Omarke is a facial recognition system that incorporates a binary search algorithm to efficiently search for absent faces in pictures based on a given dataset. It employs a state-of-the-art facial recognition model for identifying individuals, leveraging its advanced capabilities to provide accurate and reliable results. The use of binary search further optimizes the process, allowing for faster and more efficient searches.',
        long_description:'Omarke is a facial recognition system that incorporates a binary search algorithm to efficiently search for absent faces in pictures based on a given dataset. It employs a state-of-the-art facial recognition model for identifying individuals, leveraging its advanced capabilities to provide accurate and reliable results. The use of binary search further optimizes the process, allowing for faster and more efficient searches.',
        slug:'omark',
        languages:['Python'],
        tags:['Machine Learning / Artificial Intelligence','Algorithms / Dynamical Programming','Libraries / Packages / Modules / Applications / Frameworks'],
        sourcecode:'https://github.com/teddyoweh/Omark',
        pypipackge:'https://pypi.org/project/Omarke/'
    },
    {
        title: "CodeMatch",
        description:'Developed a Cosine Similarity-Based Code Comparison Tool, while i was a student tutor/grader at my university to analyze if students copied code and changed portions of the code and variable names ',
        long_description:'Developed a Cosine Similarity-Based Code Comparison Tool, while i was a student tutor/grader at my university to analyze if students copied code and changed portions of the code and variable names ',
        slug:'codematch',
        languages:['Python','Next JS','Javascript'],
        tags:['Machine Learning / Artificial Intelligence','Algorithms / Dynamical Programming','Libraries / Packages / Modules / Applications / Frameworks','Frontend & UI Development'],
        sourcecode:'https://github.com/teddyoweh/CodeMatch',
        website:'https://code-match-one.vercel.app'


    },
    {
        title: "BearFTP",
        description:'Distributed P2P File Transfer Protocol over TCP Network',
        long_description:'Distributed P2P File Transfer Protocol over TCP Network',
        slug:'bearftp',
        languages:['Python','Shell'],
        tags:['Networking & Cloud Computing'],
        sourcecode:'https://github.com/teddyoweh/BearFTP'
    },
    {
        title: "Fitness Training Website - 7 Trials Strength Training",
        description:'Designed a Fitness Training Website for a Client ',
        long_description:'Designed a Fitness Training Website for a Client ',
        slug:'7trialstrength',
        languages:['Next JS','Javascript'],
        tags:['Frontend & UI Development','Full Stack Development','Libraries / Packages / Modules / Applications / Frameworks'],
        source:'https://github.com/teddyoweh/7trialsstrengthtraining.com',
        website:'https://7trialsstrength.com/'
    },
    {
        title: "Fitness Training Website Backend - 7 Trials Strength Training",
        description:'Backend Microservice & Payment Gateway System for 7 Trials Strength Training Website ',
        long_description:'Backend Microservice & Payment Gateway System for 7 Trials Strength Training Website ',
        slug:'7trialstrengthbackend',
        languages:['Nest JS','Javascript','Node JS'],
        tags:['Microservice / Backend Systems','Database Systems','Full Stack Development','Libraries / Packages / Modules / Applications / Frameworks'],
        sourcecode:'https://github.com/teddyoweh/7TrialsStrengthTraining.com-backend'
    },
    {
        title: "Battle of the Dorms Website",
        description:'Designed a Website for an on campus Event ',
        long_description:'Designed a Website for an on campus Event ',
        slug:'7trialstrength',
        languages:['React JS','Javascript'],
        tags:['Frontend & UI Development','Full Stack Development','Libraries / Packages / Modules / Applications / Frameworks'],
        website:'https://www.battleofthedorms.com/',
        sourcecode:'https://github.com/teddyoweh/battleofthedorms'
    },
    {
        title: "teddyoweh.net",
        description:'My Current Website.',
        long_description:'My Current Website.',
        slug:'teddyoweh.net',
        languages:['Next JS','Javascript'],
        tags:['Frontend & UI Development','Full Stack Development','Libraries / Packages / Modules / Applications / Frameworks'],
        sourcecode:'https://github.com/teddyoweh/teddyoweh.net-v2',
        website:'https://teddyoweh.net'
    },
    {
        title: "teddyoweh.net v1 - Legacy Code",
        description:'My Previous Website.',
        long_description:'My Previous Website.',
        slug:'teddyoweh.net-v1',
        languages:['React JS','Javascript'],
        tags:['Frontend & UI Development','Full Stack Development','Libraries / Packages / Modules / Applications / Frameworks'],
        sourcecode:'https://github.com/teddyoweh/teddyoweh.net',
        website:'https://v1.teddyoweh.net'
    },
    {
        title: "teddyoweh.net v1 backend system - Legacy Code",
        description:'Backend System for website analytics and contact for system api endpoints',
        long_description:'Backend System for website analytics and contact for system api endpoints',
        slug:'teddyoweh.net-v1-backend',
        languages:['Node JS','Javascript'],
        tags:['Backend Development','Full Stack Development','Libraries / Packages / Modules / Applications / Frameworks'],
        sourcecode:'https://github.com/teddyoweh/teddyoweh.github.io/tree/main/new',
        website:'https://v0.teddyoweh.net'
    },
    {
        title: "teddyoweh.net v0 - Legacy Code",
        description:'My Previous Website.',
        long_description:'My Previous Website.',
        slug:'teddyoweh.net-v1',
        languages:['React JS','Javascript'],
        tags:['Frontend & UI Development','Full Stack Development','Libraries / Packages / Modules / Applications / Frameworks'],
        sourcecode:'https://github.com/teddyoweh/teddyoweh.github.io/tree/main/new',
        website:'https://teddyoweh.herokuapp.com/'
    },
  
]

 
function doSplit(str) {
  const splitStr = str.split(' ');
  const lowerCaseStr = splitStr[0].toLowerCase();
  return lowerCaseStr;
}
const prlanguagesa = (prl) =>{
    return {
        name:prl.toUpperCase(),
        div:
            <div className="prg-language">
                <span className={doSplit(prl)}></span>
                <label>{prl}</label>
            </div>
    }
}
 

export {projects,filters,prlanguagesa}