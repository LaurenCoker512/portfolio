interface SkillBadgeProps {
  name: string;
}

const SkillBadge = ({ name }: SkillBadgeProps) => (
  <span className="inline-block bg-primary-light text-primary px-4 py-1 rounded-full text-sm font-medium mr-2 mb-2">
    {name}
  </span>
);

export default SkillBadge;
