interface Props extends React.LabelHTMLAttributes<HTMLLabelElement> {}

export const Label = ({ children, ...props }: Props) => {
  return (
    <>
      <label
        className="block text-sm font-medium leading-6 text-gray-300"
        {...props}
      >
        {children}
      </label>
    </>
  );
};
