'use client';

type ButtonProps = {
  text: string;
  style?: 'outline';
  type?: 'reset' | 'submit' | 'button';
  disabled?: true | false;
  onClick?: () => void;
};
const Button = ({
  text,
  style,
  disabled = false,
  type = 'button',
  onClick,
}: ButtonProps) => {
  return (
    <button
      disabled={disabled}
      type={type}
      className={
        style === 'outline'
          ? 'rounded-lg border border-[--gray-1] font-bold p-4 disabled:bg-[--gray-1] disabled:text-[--gray-2]'
          : 'rounded-lg bg-[--violet] font-bold px-5 py-3 text-[--white-1]'
      }
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button;
