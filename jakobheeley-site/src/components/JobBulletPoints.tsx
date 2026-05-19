type JobBulletPointsprop = {
    items: string[];
  };
  
  export default function JobBulletPoint({ items }: JobBulletPointsprop) {
    return (
      <ul className="list-disc ml-20 space-y-3 text-large font-semibold">
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    );
  }