type BoxProps = {
  children: React.ReactNode;
  additionClass?: string;
};

const Box = ({ children, additionClass = '' }: BoxProps) => {
  return (
    <div
      className={`rounded-lg border-solid border-2 border-[--gray-1] p-10 ${additionClass}`}
    >
      {children}
    </div>
  );
};

export default Box;
