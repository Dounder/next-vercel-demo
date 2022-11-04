export interface LightLayoutProps {
  children: JSX.Element;
  [x: string]: any;
}

export const LightLayout = ({ children }: LightLayoutProps) => {
  return (
    <div
      style={{
        backgroundColor: 'rgba(255,255,255, .1)',
        borderRadius: '5px',
        padding: '10px',
      }}
    >
      <h3>Light layout</h3>
      {children}
    </div>
  );
};
