export interface ShowCaseApplicationState {
  components: ShowCasedComponent[];
}

export interface ShowCasedComponent {
  id: number;
  name: string;
  path: string;
}
