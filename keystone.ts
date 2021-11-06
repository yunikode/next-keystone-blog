import { config, list } from "@keystone-next/keystone";
import {text} from '@keystone-next/keystone/fields';

const Post = list({
    fields: {
        title: text({validation:{isRequired: true}}),
        slug: text({isIndexed: 'unique', }),
        content: text()
    }
})

export default config({
    db: {provider: 'sqlite', url: 'file:./app.db'},
    experimental: {
        generateNextGraphqlAPI: true,
        generateNodeAPI:true
    },
    lists: {Post}
})