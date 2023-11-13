import Toggle from "../../../../UI/Toggle";

const FromUberEats: React.FC<{
  title: string;
  svg: React.ReactElement;
  className?: string;
}> = (props) => {
  return (
    <section className={`flex justify-between ${props.className}`}>
      {props.svg}
      <p className="pl-3 grow">{props.title}</p>
      <Toggle />
    </section>
  );
};

export default FromUberEats;
