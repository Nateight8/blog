import gql from "graphql-tag";

const comments = gql`
  type Comment {
    id: String
    comment: String
  }

  type Query {
    getComments: [Comment]
  }

  type Mutation {
    createComment(comment: String): Comment
  }
`;

export default comments;
