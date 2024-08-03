export interface Contacts {
  advisors: TeamMember[];
  teams: Teams;
}

export type TeamMember = {
  name: string;
  role: string;
  email: string;
  image: string;
};

export type Teams = {
  [team: string]: TeamMember[];
};

export interface MemberCardsProps {
  contacts: Contacts;
}
