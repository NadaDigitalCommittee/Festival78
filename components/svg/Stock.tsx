//名前ふざけてます
type Props = {
  className?: string;
};
export const AFew = ({ className }: Props) => {
  return (
    <svg className={className} width="16" height="16" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="10" cy="10" r="8.5" stroke="#00BA13" stroke-width="3" />
    </svg>
  );
};
export const Few = ({ className }: Props) => {
  return (
    <svg className={className} width="16" height="16" viewBox="0 0 22 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M2.77276 17.75L11 3.5L19.2272 17.75H2.77276Z" stroke="#FFB82D" stroke-width="3" />
    </svg>
  );
};
export const No = ({ className }: Props) => {
  return (
    <svg className={className} width="16" height="16" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <line x1="1.81066" y1="1.18934" x2="17.8107" y2="17.1893" stroke="#FF0C0C" stroke-width="3" />
      <line x1="2.18934" y1="17.6893" x2="18.1893" y2="1.68934" stroke="#FF0C0C" stroke-width="3" />
    </svg>
  );
}
