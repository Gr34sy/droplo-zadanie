'use client';

type ButtonProps = {
  text: string;
  style?: 'outline';
  type?: 'reset' | 'submit' | 'button';
  onClick?: () => void;
};
const Button = ({ text, style, type = 'button', onClick }: ButtonProps) => {
  return (
    <button
      type={type}
      className={
        style === 'outline'
          ? 'rounded-lg border border-[--gray-1] font-bold p-4'
          : 'rounded-lg bg-[--violet] font-bold px-5 py-3 text-[--white-1]'
      }
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button;
