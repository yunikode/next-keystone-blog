import { config, list } from "@keystone-next/keystone";
import { text } from "@keystone-next/keystone/fields";
import { document } from "@keystone-next/fields-document";

const Post = list({
  fields: {
    title: text({ validation: { isRequired: true } }),
    slug: text({ isIndexed: "unique" }),
    content: document({
      // We want to have support a fully featured document editor for our
      // authors, so we're enabling all of the formatting abilities and
      // providing 1, 2 or 3 column layouts.
      formatting: true,
      dividers: true,
      links: true,
      layouts: [
        [1, 1],
        [1, 1, 1],
      ],
      // We want to support twitter-style mentions in blogs, so we add an
      // inline relationship which references the `Author` list.
      //relationships: {
      //  mention: {
      //    kind: "inline",
      //    listKey: "Author",
      //    label: "Mention", // This will display in the Admin UI toolbar behind the `+` icon
      //    selection: "id name", // These fields will be available to the renderer
      //  },
      // },
    }),
  },
});

export default config({
  db: { provider: "sqlite", url: "file:./app.db" },
  experimental: {
    generateNextGraphqlAPI: true,
    generateNodeAPI: true,
  },
  lists: { Post },
});
