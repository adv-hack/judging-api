// this is an auto generated file. This will be overwritten
import gql from "graphql-tag";

export const OnCreateTeam = gql`
  subscription OnCreateTeam {
    onCreateTeam {
      id
      name
      idea
      description
      members {
        nextToken
      }
      votes {
        nextToken
      }
    }
  }
`;
export const OnUpdateTeam = gql`
  subscription OnUpdateTeam {
    onUpdateTeam {
      id
      name
      idea
      description
      members {
        nextToken
      }
      votes {
        nextToken
      }
    }
  }
`;
export const OnDeleteTeam = gql`
  subscription OnDeleteTeam {
    onDeleteTeam {
      id
      name
      idea
      description
      members {
        nextToken
      }
      votes {
        nextToken
      }
    }
  }
`;
export const OnCreateMember = gql`
  subscription OnCreateMember {
    onCreateMember {
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
export const OnUpdateMember = gql`
  subscription OnUpdateMember {
    onUpdateMember {
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
export const OnDeleteMember = gql`
  subscription OnDeleteMember {
    onDeleteMember {
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
export const OnCreateJudge = gql`
  subscription OnCreateJudge {
    onCreateJudge {
      id
      name
      email
    }
  }
`;
export const OnUpdateJudge = gql`
  subscription OnUpdateJudge {
    onUpdateJudge {
      id
      name
      email
    }
  }
`;
export const OnDeleteJudge = gql`
  subscription OnDeleteJudge {
    onDeleteJudge {
      id
      name
      email
    }
  }
`;
export const OnCreateCriteria = gql`
  subscription OnCreateCriteria {
    onCreateCriteria {
      id
      name
      description
    }
  }
`;
export const OnUpdateCriteria = gql`
  subscription OnUpdateCriteria {
    onUpdateCriteria {
      id
      name
      description
    }
  }
`;
export const OnDeleteCriteria = gql`
  subscription OnDeleteCriteria {
    onDeleteCriteria {
      id
      name
      description
    }
  }
`;
export const OnCreateVote = gql`
  subscription OnCreateVote {
    onCreateVote {
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
export const OnUpdateVote = gql`
  subscription OnUpdateVote {
    onUpdateVote {
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
export const OnDeleteVote = gql`
  subscription OnDeleteVote {
    onDeleteVote {
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
