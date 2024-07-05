interface Props {
    children: string;
    onClick: () => void;
    color?: string;
  }
  const Buttons = ({ children, onClick}: Props) => {
    return (
      <button type="button" className={"btn btn-warning"} onClick={onClick}>
        {children}
      </button>
      
    );
  };
  
  export default Buttons;
  