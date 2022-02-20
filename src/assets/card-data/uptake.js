const data = {
    title: "Software Developer",
    company: "Uptake Canada",
    logo: "uptake",
    date: "Sep 2019 - Dec 2019",
    location: "Mississauga, Ontario",
    description: "I joined Uptake Canada as a software developer on the product team for my 2nd coop placement. The team was responsible for development and support for about 10 different applications used by their clients. Some highlights of my work at Uptake include fixing about 50 client-facing service tickets across these applications, developing an API microservice and restoring some legacy applications to run on their cloud-based platform.",
    bullets: [
        "The API microservice was built to replace a deprecated third-party service that we used to retrieve data about some of the machine models that Uptake provides services for. The new service needed to use a new third party API and transform the response data to match the old model in an efficient and reliable way. Some of the challenges included finding the appropriate mappings, handling missing data and lazy loading since the API call was very heavy and expensive.",
        "While I was at Uptake, they had separate applications for each client, and were in the process of migrating to a shared cloud platform for easier support and development. I was in charge of restoring 2 of these applications which were written in old frameworks and configuring the CI/CD so that they could run on the cloud servers. The main challenge was sifting through legacy code which had poor documentation and trying to replicate the behaviour using a more modern stack. While it was difficult, it forced me to have a much deeper understanding of the business objectives of the product during development.",
        "The other thing I had to do was help develop a new security framework. Since the applications needed to be used by multiple clients, we needed to support multitenancy and we created a role-based security framework which applied the appropriate access rules to the different parts of the product. I created and seeded the required tables in the database, and configured the access protocols in the frontend to hide the unauthorized features."
    ],
    stack: [
        {
            tooltip: "C#",
            img: "csharp"
        },
        {
            tooltip: ".NET",
            img: "dotnet"
        },
        {
            tooltip: "ASP.NET",
            img: "aspNet"
        },
        {
            tooltip: "Microsoft SQL Server",
            img: "sqlServer"
        },
        {
            tooltip: "Ext.js",
            img: "ext"
        },
        {
            tooltip: "Node.js",
            img: "node"
        }
    ]
}

export default data