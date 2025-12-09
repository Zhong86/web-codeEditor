const ToggleButton = ({isDark, switchModes}) => {
  return (
    <div className={isDark ? 'toggle-dark' : "toggle-light"}>
      <h4 className="light-mode" onClick={() => switchModes("light")}>Light</h4>
      <h4 className="dark-mode" onClick={()  => switchModes("dark")}>Dark</h4>
    </div>
  );
};

export default ToggleButton;
