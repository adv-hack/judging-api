// this is an auto generated file. This will be overwritten
import gql from "graphql-tag";

export const CreateTeam = gql`
  mutation CreateTeam($input: CreateTeamInput!) {
    createTeam(input: $input) {
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
export const UpdateTeam = gql`
  mutation UpdateTeam($input: UpdateTeamInput!) {
    updateTeam(input: $input) {
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
export const DeleteTeam = gql`
  mutation DeleteTeam($input: DeleteTeamInput!) {
    deleteTeam(input: $input) {
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
export const CreateMember = gql`
  mutation CreateMember($input: CreateMemberInput!) {
    createMember(input: $input) {
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
export const UpdateMember = gql`
  mutation UpdateMember($input: UpdateMemberInput!) {
    updateMember(input: $input) {
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
export const DeleteMember = gql`
  mutation DeleteMember($input: DeleteMemberInput!) {
    deleteMember(input: $input) {
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
export const CreateJudge = gql`
  mutation CreateJudge($input: CreateJudgeInput!) {
    createJudge(input: $input) {
      id
      name
      email
    }
  }
`;
export const UpdateJudge = gql`
  mutation UpdateJudge($input: UpdateJudgeInput!) {
    updateJudge(input: $input) {
      id
      name
      email
    }
  }
`;
export const DeleteJudge = gql`
  mutation DeleteJudge($input: DeleteJudgeInput!) {
    deleteJudge(input: $input) {
      id
      name
      email
    }
  }
`;
export const CreateCriteria = gql`
  mutation CreateCriteria($input: CreateCriteriaInput!) {
    createCriteria(input: $input) {
      id
      name
      description
    }
  }
`;
export const UpdateCriteria = gql`
  mutation UpdateCriteria($input: UpdateCriteriaInput!) {
    updateCriteria(input: $input) {
      id
      name
      description
    }
  }
`;
export const DeleteCriteria = gql`
  mutation DeleteCriteria($input: DeleteCriteriaInput!) {
    deleteCriteria(input: $input) {
      id
      name
      description
    }
  }
`;
export const CreateVote = gql`
  mutation CreateVote($input: CreateVoteInput!) {
    createVote(input: $input) {
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
export const UpdateVote = gql`
  mutation UpdateVote($input: UpdateVoteInput!) {
    updateVote(input: $input) {
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
export const DeleteVote = gql`
  mutation DeleteVote($input: DeleteVoteInput!) {
    deleteVote(input: $input) {
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
