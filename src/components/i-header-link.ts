export type HeaderLinkFn = (id: string) => void;

export interface HeaderLink {
  id: string;
  headerId: string;
  title: string;
  width?: string;
  left?: string;
  fn: () => void;
}
