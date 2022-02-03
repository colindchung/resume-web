const data = {
    title: "Associate Software Engineer",
    company: "SPS Commerce",
    logo: "sps",
    date: "Jan 2019 - Apr 2019",
    location: "Brampton, Ontario",
    description: "I joined SPS Commerce as a software engineering intern on one of the backend teams. This was my first software internship and it taught me the basics of software engineering practices and architecture. Some highlights of my work included optimizing data validation jobs by over 50%, upgrading 3 applications from the .NET framework to .NET Core and configuring permissions and jobs to run as scheduled ECS tasks on Amazon Web Services.",
    bullets: [
        "One of my first tasks was to optimize the data validation jobs, since they were taking a large chunk of the weekend to run. The core issue was that we had SQL stored procedures which were running serially and not using the resources efficiently. By configuring the stored procedures to run in parallel and applying the corresponding backend changes, the runtime of the data validation jobs was decreased by over 50%.",
        "Another task of mine was to support 3 applications through the upgrade of one of our third-party vendors. I had to rewrite a lot of functionality to work from a console application in the .NET Core framework so that it was compatible with the new changes. In the process, I was able to find some redundant parts of the workflow and proposed some changes to automate the functionality of some of our manual jobs. Part of this upgrade was configuring some jobs as scheduled ECS tasks in AWS. I had to configure the permissions using ansible files and configure the listener rules to control the traffic."
    ],
    stack: [
        "csharp",
        "dotnet",
        "dotnetCore",
        "aspNet",
        "sqlServer",
        "aws",
        "docker"
    ]
}

export default data