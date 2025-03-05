export type InputProps = {
  type: string;
  id: string;
  name: string;
  value: string;
  disabled: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}