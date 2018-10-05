/* @flow */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateTeamInput = {|
  name: string,
  idea?: ?string,
  description?: ?string,
|};

export type UpdateTeamInput = {|
  id: string,
  name?: ?string,
  idea?: ?string,
  description?: ?string,
|};

export type DeleteTeamInput = {|
  id?: ?string,
|};

export type CreateMemberInput = {|
  name: string,
  email: string,
  role?: ?string,
  location?: ?string,
  memberTeamId?: ?string,
  memberVoteId?: ?string,
|};

export type UpdateMemberInput = {|
  id: string,
  name?: ?string,
  email?: ?string,
  role?: ?string,
  location?: ?string,
  memberTeamId?: ?string,
  memberVoteId?: ?string,
|};

export type DeleteMemberInput = {|
  id?: ?string,
|};

export type CreateJudgeInput = {|
  name: string,
  email: string,
|};

export type UpdateJudgeInput = {|
  id: string,
  name?: ?string,
  email?: ?string,
|};

export type DeleteJudgeInput = {|
  id?: ?string,
|};

export type CreateCriteriaInput = {|
  name: string,
  description?: ?string,
|};

export type UpdateCriteriaInput = {|
  id: string,
  name?: ?string,
  description?: ?string,
|};

export type DeleteCriteriaInput = {|
  id?: ?string,
|};

export type CreateVoteInput = {|
  vote: number,
  voteJudgeId?: ?string,
  voteTeamId?: ?string,
  voteCriteriaId?: ?string,
|};

export type UpdateVoteInput = {|
  id: string,
  vote?: ?number,
  voteJudgeId?: ?string,
  voteTeamId?: ?string,
  voteCriteriaId?: ?string,
|};

export type DeleteVoteInput = {|
  id?: ?string,
|};

export type ModelTeamFilterInput = {|
  id?: ?ModelIDFilterInput,
  name?: ?ModelStringFilterInput,
  idea?: ?ModelStringFilterInput,
  description?: ?ModelStringFilterInput,
  and?: ?Array< ?ModelTeamFilterInput >,
  or?: ?Array< ?ModelTeamFilterInput >,
  not?: ?ModelTeamFilterInput,
|};

export type ModelIDFilterInput = {|
  ne?: ?string,
  eq?: ?string,
  le?: ?string,
  lt?: ?string,
  ge?: ?string,
  gt?: ?string,
  contains?: ?string,
  notContains?: ?string,
  between?: ?Array< ?string >,
  beginsWith?: ?string,
|};

export type ModelStringFilterInput = {|
  ne?: ?string,
  eq?: ?string,
  le?: ?string,
  lt?: ?string,
  ge?: ?string,
  gt?: ?string,
  contains?: ?string,
  notContains?: ?string,
  between?: ?Array< ?string >,
  beginsWith?: ?string,
|};

export type ModelMemberFilterInput = {|
  id?: ?ModelIDFilterInput,
  name?: ?ModelStringFilterInput,
  email?: ?ModelStringFilterInput,
  role?: ?ModelStringFilterInput,
  location?: ?ModelStringFilterInput,
  and?: ?Array< ?ModelMemberFilterInput >,
  or?: ?Array< ?ModelMemberFilterInput >,
  not?: ?ModelMemberFilterInput,
|};

export type ModelJudgeFilterInput = {|
  id?: ?ModelIDFilterInput,
  name?: ?ModelStringFilterInput,
  email?: ?ModelStringFilterInput,
  and?: ?Array< ?ModelJudgeFilterInput >,
  or?: ?Array< ?ModelJudgeFilterInput >,
  not?: ?ModelJudgeFilterInput,
|};

export type ModelCriteriaFilterInput = {|
  id?: ?ModelIDFilterInput,
  name?: ?ModelStringFilterInput,
  description?: ?ModelStringFilterInput,
  and?: ?Array< ?ModelCriteriaFilterInput >,
  or?: ?Array< ?ModelCriteriaFilterInput >,
  not?: ?ModelCriteriaFilterInput,
|};

export type ModelVoteFilterInput = {|
  id?: ?ModelIDFilterInput,
  vote?: ?ModelIntFilterInput,
  and?: ?Array< ?ModelVoteFilterInput >,
  or?: ?Array< ?ModelVoteFilterInput >,
  not?: ?ModelVoteFilterInput,
|};

export type ModelIntFilterInput = {|
  ne?: ?number,
  eq?: ?number,
  le?: ?number,
  lt?: ?number,
  ge?: ?number,
  gt?: ?number,
  contains?: ?number,
  notContains?: ?number,
  between?: ?Array< ?number >,
|};

export type CreateTeamMutationVariables = {|
  input: CreateTeamInput,
|};

export type CreateTeamMutation = {|
  createTeam: ? {|
    __typename: "Team",
    id: string,
    name: string,
    idea: ?string,
    description: ?string,
    members: ? {|
      __typename: string,
      nextToken: ?string,
    |},
    votes: ? {|
      __typename: string,
      nextToken: ?string,
    |},
  |},
|};

export type UpdateTeamMutationVariables = {|
  input: UpdateTeamInput,
|};

export type UpdateTeamMutation = {|
  updateTeam: ? {|
    __typename: "Team",
    id: string,
    name: string,
    idea: ?string,
    description: ?string,
    members: ? {|
      __typename: string,
      nextToken: ?string,
    |},
    votes: ? {|
      __typename: string,
      nextToken: ?string,
    |},
  |},
|};

export type DeleteTeamMutationVariables = {|
  input: DeleteTeamInput,
|};

export type DeleteTeamMutation = {|
  deleteTeam: ? {|
    __typename: "Team",
    id: string,
    name: string,
    idea: ?string,
    description: ?string,
    members: ? {|
      __typename: string,
      nextToken: ?string,
    |},
    votes: ? {|
      __typename: string,
      nextToken: ?string,
    |},
  |},
|};

export type CreateMemberMutationVariables = {|
  input: CreateMemberInput,
|};

export type CreateMemberMutation = {|
  createMember: ? {|
    __typename: "Member",
    id: string,
    name: string,
    email: string,
    role: ?string,
    location: ?string,
    team: ? {|
      __typename: string,
      id: string,
      name: string,
      idea: ?string,
      description: ?string,
    |},
    vote: ? {|
      __typename: string,
      id: string,
      name: string,
      idea: ?string,
      description: ?string,
    |},
  |},
|};

export type UpdateMemberMutationVariables = {|
  input: UpdateMemberInput,
|};

export type UpdateMemberMutation = {|
  updateMember: ? {|
    __typename: "Member",
    id: string,
    name: string,
    email: string,
    role: ?string,
    location: ?string,
    team: ? {|
      __typename: string,
      id: string,
      name: string,
      idea: ?string,
      description: ?string,
    |},
    vote: ? {|
      __typename: string,
      id: string,
      name: string,
      idea: ?string,
      description: ?string,
    |},
  |},
|};

export type DeleteMemberMutationVariables = {|
  input: DeleteMemberInput,
|};

export type DeleteMemberMutation = {|
  deleteMember: ? {|
    __typename: "Member",
    id: string,
    name: string,
    email: string,
    role: ?string,
    location: ?string,
    team: ? {|
      __typename: string,
      id: string,
      name: string,
      idea: ?string,
      description: ?string,
    |},
    vote: ? {|
      __typename: string,
      id: string,
      name: string,
      idea: ?string,
      description: ?string,
    |},
  |},
|};

export type CreateJudgeMutationVariables = {|
  input: CreateJudgeInput,
|};

export type CreateJudgeMutation = {|
  createJudge: ? {|
    __typename: "Judge",
    id: string,
    name: string,
    email: string,
  |},
|};

export type UpdateJudgeMutationVariables = {|
  input: UpdateJudgeInput,
|};

export type UpdateJudgeMutation = {|
  updateJudge: ? {|
    __typename: "Judge",
    id: string,
    name: string,
    email: string,
  |},
|};

export type DeleteJudgeMutationVariables = {|
  input: DeleteJudgeInput,
|};

export type DeleteJudgeMutation = {|
  deleteJudge: ? {|
    __typename: "Judge",
    id: string,
    name: string,
    email: string,
  |},
|};

export type CreateCriteriaMutationVariables = {|
  input: CreateCriteriaInput,
|};

export type CreateCriteriaMutation = {|
  createCriteria: ? {|
    __typename: "Criteria",
    id: string,
    name: string,
    description: ?string,
  |},
|};

export type UpdateCriteriaMutationVariables = {|
  input: UpdateCriteriaInput,
|};

export type UpdateCriteriaMutation = {|
  updateCriteria: ? {|
    __typename: "Criteria",
    id: string,
    name: string,
    description: ?string,
  |},
|};

export type DeleteCriteriaMutationVariables = {|
  input: DeleteCriteriaInput,
|};

export type DeleteCriteriaMutation = {|
  deleteCriteria: ? {|
    __typename: "Criteria",
    id: string,
    name: string,
    description: ?string,
  |},
|};

export type CreateVoteMutationVariables = {|
  input: CreateVoteInput,
|};

export type CreateVoteMutation = {|
  createVote: ? {|
    __typename: "Vote",
    id: string,
    judge: {|
      __typename: string,
      id: string,
      name: string,
      email: string,
    |},
    team: {|
      __typename: string,
      id: string,
      name: string,
      idea: ?string,
      description: ?string,
    |},
    criteria: {|
      __typename: string,
      id: string,
      name: string,
      description: ?string,
    |},
    vote: number,
  |},
|};

export type UpdateVoteMutationVariables = {|
  input: UpdateVoteInput,
|};

export type UpdateVoteMutation = {|
  updateVote: ? {|
    __typename: "Vote",
    id: string,
    judge: {|
      __typename: string,
      id: string,
      name: string,
      email: string,
    |},
    team: {|
      __typename: string,
      id: string,
      name: string,
      idea: ?string,
      description: ?string,
    |},
    criteria: {|
      __typename: string,
      id: string,
      name: string,
      description: ?string,
    |},
    vote: number,
  |},
|};

export type DeleteVoteMutationVariables = {|
  input: DeleteVoteInput,
|};

export type DeleteVoteMutation = {|
  deleteVote: ? {|
    __typename: "Vote",
    id: string,
    judge: {|
      __typename: string,
      id: string,
      name: string,
      email: string,
    |},
    team: {|
      __typename: string,
      id: string,
      name: string,
      idea: ?string,
      description: ?string,
    |},
    criteria: {|
      __typename: string,
      id: string,
      name: string,
      description: ?string,
    |},
    vote: number,
  |},
|};

export type GetTeamQueryVariables = {|
  id: string,
|};

export type GetTeamQuery = {|
  getTeam: ? {|
    __typename: "Team",
    id: string,
    name: string,
    idea: ?string,
    description: ?string,
    members: ? {|
      __typename: string,
      nextToken: ?string,
    |},
    votes: ? {|
      __typename: string,
      nextToken: ?string,
    |},
  |},
|};

export type ListTeamsQueryVariables = {|
  filter?: ?ModelTeamFilterInput,
  limit?: ?number,
  nextToken?: ?string,
|};

export type ListTeamsQuery = {|
  listTeams: ? {|
    __typename: "ModelTeamConnection",
    items: ? Array<? {|
      __typename: string,
      id: string,
      name: string,
      idea: ?string,
      description: ?string,
    |} >,
    nextToken: ?string,
  |},
|};

export type GetMemberQueryVariables = {|
  id: string,
|};

export type GetMemberQuery = {|
  getMember: ? {|
    __typename: "Member",
    id: string,
    name: string,
    email: string,
    role: ?string,
    location: ?string,
    team: ? {|
      __typename: string,
      id: string,
      name: string,
      idea: ?string,
      description: ?string,
    |},
    vote: ? {|
      __typename: string,
      id: string,
      name: string,
      idea: ?string,
      description: ?string,
    |},
  |},
|};

export type ListMembersQueryVariables = {|
  filter?: ?ModelMemberFilterInput,
  limit?: ?number,
  nextToken?: ?string,
|};

export type ListMembersQuery = {|
  listMembers: ? {|
    __typename: "ModelMemberConnection",
    items: ? Array<? {|
      __typename: string,
      id: string,
      name: string,
      email: string,
      role: ?string,
      location: ?string,
    |} >,
    nextToken: ?string,
  |},
|};

export type GetJudgeQueryVariables = {|
  id: string,
|};

export type GetJudgeQuery = {|
  getJudge: ? {|
    __typename: "Judge",
    id: string,
    name: string,
    email: string,
  |},
|};

export type ListJudgesQueryVariables = {|
  filter?: ?ModelJudgeFilterInput,
  limit?: ?number,
  nextToken?: ?string,
|};

export type ListJudgesQuery = {|
  listJudges: ? {|
    __typename: "ModelJudgeConnection",
    items: ? Array<? {|
      __typename: string,
      id: string,
      name: string,
      email: string,
    |} >,
    nextToken: ?string,
  |},
|};

export type GetCriteriaQueryVariables = {|
  id: string,
|};

export type GetCriteriaQuery = {|
  getCriteria: ? {|
    __typename: "Criteria",
    id: string,
    name: string,
    description: ?string,
  |},
|};

export type ListCriteriasQueryVariables = {|
  filter?: ?ModelCriteriaFilterInput,
  limit?: ?number,
  nextToken?: ?string,
|};

export type ListCriteriasQuery = {|
  listCriterias: ? {|
    __typename: "ModelCriteriaConnection",
    items: ? Array<? {|
      __typename: string,
      id: string,
      name: string,
      description: ?string,
    |} >,
    nextToken: ?string,
  |},
|};

export type GetVoteQueryVariables = {|
  id: string,
|};

export type GetVoteQuery = {|
  getVote: ? {|
    __typename: "Vote",
    id: string,
    judge: {|
      __typename: string,
      id: string,
      name: string,
      email: string,
    |},
    team: {|
      __typename: string,
      id: string,
      name: string,
      idea: ?string,
      description: ?string,
    |},
    criteria: {|
      __typename: string,
      id: string,
      name: string,
      description: ?string,
    |},
    vote: number,
  |},
|};

export type ListVotesQueryVariables = {|
  filter?: ?ModelVoteFilterInput,
  limit?: ?number,
  nextToken?: ?string,
|};

export type ListVotesQuery = {|
  listVotes: ? {|
    __typename: "ModelVoteConnection",
    items: ? Array<? {|
      __typename: string,
      id: string,
      vote: number,
    |} >,
    nextToken: ?string,
  |},
|};

export type OnCreateTeamSubscription = {|
  onCreateTeam: ? {|
    __typename: "Team",
    id: string,
    name: string,
    idea: ?string,
    description: ?string,
    members: ? {|
      __typename: string,
      nextToken: ?string,
    |},
    votes: ? {|
      __typename: string,
      nextToken: ?string,
    |},
  |},
|};

export type OnUpdateTeamSubscription = {|
  onUpdateTeam: ? {|
    __typename: "Team",
    id: string,
    name: string,
    idea: ?string,
    description: ?string,
    members: ? {|
      __typename: string,
      nextToken: ?string,
    |},
    votes: ? {|
      __typename: string,
      nextToken: ?string,
    |},
  |},
|};

export type OnDeleteTeamSubscription = {|
  onDeleteTeam: ? {|
    __typename: "Team",
    id: string,
    name: string,
    idea: ?string,
    description: ?string,
    members: ? {|
      __typename: string,
      nextToken: ?string,
    |},
    votes: ? {|
      __typename: string,
      nextToken: ?string,
    |},
  |},
|};

export type OnCreateMemberSubscription = {|
  onCreateMember: ? {|
    __typename: "Member",
    id: string,
    name: string,
    email: string,
    role: ?string,
    location: ?string,
    team: ? {|
      __typename: string,
      id: string,
      name: string,
      idea: ?string,
      description: ?string,
    |},
    vote: ? {|
      __typename: string,
      id: string,
      name: string,
      idea: ?string,
      description: ?string,
    |},
  |},
|};

export type OnUpdateMemberSubscription = {|
  onUpdateMember: ? {|
    __typename: "Member",
    id: string,
    name: string,
    email: string,
    role: ?string,
    location: ?string,
    team: ? {|
      __typename: string,
      id: string,
      name: string,
      idea: ?string,
      description: ?string,
    |},
    vote: ? {|
      __typename: string,
      id: string,
      name: string,
      idea: ?string,
      description: ?string,
    |},
  |},
|};

export type OnDeleteMemberSubscription = {|
  onDeleteMember: ? {|
    __typename: "Member",
    id: string,
    name: string,
    email: string,
    role: ?string,
    location: ?string,
    team: ? {|
      __typename: string,
      id: string,
      name: string,
      idea: ?string,
      description: ?string,
    |},
    vote: ? {|
      __typename: string,
      id: string,
      name: string,
      idea: ?string,
      description: ?string,
    |},
  |},
|};

export type OnCreateJudgeSubscription = {|
  onCreateJudge: ? {|
    __typename: "Judge",
    id: string,
    name: string,
    email: string,
  |},
|};

export type OnUpdateJudgeSubscription = {|
  onUpdateJudge: ? {|
    __typename: "Judge",
    id: string,
    name: string,
    email: string,
  |},
|};

export type OnDeleteJudgeSubscription = {|
  onDeleteJudge: ? {|
    __typename: "Judge",
    id: string,
    name: string,
    email: string,
  |},
|};

export type OnCreateCriteriaSubscription = {|
  onCreateCriteria: ? {|
    __typename: "Criteria",
    id: string,
    name: string,
    description: ?string,
  |},
|};

export type OnUpdateCriteriaSubscription = {|
  onUpdateCriteria: ? {|
    __typename: "Criteria",
    id: string,
    name: string,
    description: ?string,
  |},
|};

export type OnDeleteCriteriaSubscription = {|
  onDeleteCriteria: ? {|
    __typename: "Criteria",
    id: string,
    name: string,
    description: ?string,
  |},
|};

export type OnCreateVoteSubscription = {|
  onCreateVote: ? {|
    __typename: "Vote",
    id: string,
    judge: {|
      __typename: string,
      id: string,
      name: string,
      email: string,
    |},
    team: {|
      __typename: string,
      id: string,
      name: string,
      idea: ?string,
      description: ?string,
    |},
    criteria: {|
      __typename: string,
      id: string,
      name: string,
      description: ?string,
    |},
    vote: number,
  |},
|};

export type OnUpdateVoteSubscription = {|
  onUpdateVote: ? {|
    __typename: "Vote",
    id: string,
    judge: {|
      __typename: string,
      id: string,
      name: string,
      email: string,
    |},
    team: {|
      __typename: string,
      id: string,
      name: string,
      idea: ?string,
      description: ?string,
    |},
    criteria: {|
      __typename: string,
      id: string,
      name: string,
      description: ?string,
    |},
    vote: number,
  |},
|};

export type OnDeleteVoteSubscription = {|
  onDeleteVote: ? {|
    __typename: "Vote",
    id: string,
    judge: {|
      __typename: string,
      id: string,
      name: string,
      email: string,
    |},
    team: {|
      __typename: string,
      id: string,
      name: string,
      idea: ?string,
      description: ?string,
    |},
    criteria: {|
      __typename: string,
      id: string,
      name: string,
      description: ?string,
    |},
    vote: number,
  |},
|};