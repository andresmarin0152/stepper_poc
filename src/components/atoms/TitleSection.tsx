interface Props {
  title: string;
  index: number;
}

const TitleSection = ({ title, index }: Props) => (
  <h2 className="font-medium text-2xl text-gray-primary-title">
    {index}. {title}
  </h2>
);

export default TitleSection;
