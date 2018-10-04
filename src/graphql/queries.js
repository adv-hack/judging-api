// this is an auto generated file. This will be overwritten
import gql from "graphql-tag";

export const GetTeam = gql`
  query GetTeam($id: ID!) {
    getTeam(id: $id) {
      id
      name
      idea
      description
      members {
        nextToken
      }
    }
  }
`;
export const ListTeams = gql`
  query ListTeams(
    $filter: ModelTeamFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTeams(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        idea
        description
      }
      nextToken
    }
  }
`;
export const GetMember = gql`
  query GetMember($id: ID!) {
    getMember(id: $id) {
      id
      name
      email
      role
      location
      team {
        id
        name
        idea
        description
      }
      vote {
        id
        name
        idea
        description
      }
    }
  }
`;
export const ListMembers = gql`
  query ListMembers(
    $filter: ModelMemberFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listMembers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        email
        role
        location
      }
      nextToken
    }
  }
`;
export const GetJudge = gql`
  query GetJudge($id: ID!) {
    getJudge(id: $id) {
      id
      name
      email
    }
  }
`;
export const ListJudges = gql`
  query ListJudges(
    $filter: ModelJudgeFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listJudges(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        email
      }
      nextToken
    }
  }
`;
export const GetCriteria = gql`
  query GetCriteria($id: ID!) {
    getCriteria(id: $id) {
      id
      name
      description
    }
  }
`;
export const ListCriterias = gql`
  query ListCriterias(
    $filter: ModelCriteriaFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCriterias(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        description
      }
      nextToken
    }
  }
`;
export const GetVote = gql`
  query GetVote($id: ID!) {
    getVote(id: $id) {
      id
      judge {
        id
        name
        email
      }
      team {
        id
        name
        idea
        description
      }
      criteria {
        id
        name
        description
      }
      vote
    }
  }
`;
export const ListVotes = gql`
  query ListVotes(
    $filter: ModelVoteFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listVotes(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        vote
      }
      nextToken
    }
  }
`;
