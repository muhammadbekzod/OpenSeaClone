import sanityClient from "@sanity/client";

export const client = sanityClient({
    projectId: '0dqhsgka',
    dataset: 'production',
    apiVersion: '2021-03-15',
    token:'skRc1SPKV1bR4l8Camd1KTRofCPVzlo6iLsWVPHlkPgAGztWKqw9JibCy3XabWcwLXf3hjtBFntdTP3bxMQm2sA63TH7Meyfo6tOMdx5Q8FhZcpwJtz8u6BENhf7TK3qfyvFNTFTpbJKZ1zqbH2RNwn8MoQuNdf9sb1jqO222epryLxGZsrC',
    useCdn: false,
})