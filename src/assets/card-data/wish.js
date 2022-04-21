const data = {
    title: "Software Engineer Intern",
    company: "Wish",
    logo: "wish",
    date: "Jan 2022 - Apr 2022",
    location: "Mississauga, Ontario",
    description: "I joined Wish as a software engineering intern for my 5th coop placement. I was part of an anti-fraud team responsible for building applications used to assess risk and prevent fraud. I was responsible for the backend software infrastructure of a new application including setting up OAuth2.0 authentication, session management and implementing role-based security. I also worked on refactoring some RPCs and plumbing data from several microservices and warehouses to be displayed on our dashboard.",
    bullets: [
        "At a high level, the service I was working on was to consolidate risk/fraud data in one dashboard for our team to assess risk in a timely fashion. I had to wire our application with our in-house authentication services and follow the OAuth2.0 and OIDC standard protocols. We also had an in-house API gateway service and session management which I integrated in our service. Our security model was role-based and I was in charge of setting up the user-role data model and management for this application.",
        "I was also responsible for creating the GraphQL framework in our application to plumb data from several different services and databases. This involved resolving downstream dependency issues, creating and refactoring RPCs, and configuring the access rules for our service. With this work, we were able to produce an end-to-end product which gave us key risk data in one place.",
        "Lastly, I noticed a very inefficient query coming from one of our microservices. We were performing very resource intensive aggregations on the query in one of the RPCs. I proposed a database design change where we had an aggregate data table which would be updated incrementally by our main application rather than the old design of dumping raw data into a datastore and computing these values each time. Although my internship ended before I was able to see the full impact of my change, this design laid the foundation for our data aggregator which could be applied to several other use cases in the company."
    ],
    stack: [
        {
            tooltip: "Golang",
            img: "golang"
        },
        {
            tooltip: "Python",
            img: "python"
        },
        {
            tooltip: "GraphQL",
            img: "graphql"
        },
        {
            tooltip: "MongoDB",
            img: "mongodb"
        },
        {
            tooltip: "Kubernetes",
            img: "kubernetes"
        },
        {
            tooltip: "Docker",
            img: "docker"
        },
        {
            tooltip: "gRPC",
            img: "grpc"
        },
    ]
}

export default data