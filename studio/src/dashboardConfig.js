export default {
  widgets: [
    { name: "structure-menu" },
    {
      name: "project-info",
      options: {
        __experimental_before: [
          {
            name: "netlify",
            options: {
              description:
                "NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.",
              sites: [
                {
                  buildHookId:
                    "60a7e42ff7a6a41244ebeb84",
                  title: "Sanity Studio",
                  name: "bookjamstack-studio",
                  apiId: "e56866cc-5593-4ad7-af3f-076a00ee5a59",
                },
                {
                  buildHookId: "60a7e42f470d3c0c9cec16d2",
                  title: "Blog Website",
                  name: "bookjamstack",
                  apiId: "3dcb98a2-e058-4ec4-8298-665376f3c481",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value:
              "https://github.com/danielgara/bookjamstack",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://bookjamstack.netlify.app",
            category: "apps",
          },
        ],
      },
    },
    { name: "project-users", layout: { height: "auto" } },
    {
      name: "document-list",
      options: {
        title: "Recent blog posts",
        order: "_createdAt desc",
        types: ["post"],
      },
      layout: { width: "medium" },
    },
  ],
};
