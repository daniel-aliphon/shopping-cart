import "./Button.css";

export const Button = ({ children, href }) => {
  return (
    <a
      href={href}
      className="button">
      {children}
    </a>
  );
};
