type CoreCompListProps = {
    items: string[];
  };
  
  export default function CoreCompList({ items }: CoreCompListProps) {
    return (
      <ul className="list-none text-lg text-black bg-zinc-500 rounded-2xl items-center text-center font-semibold shadow-stone-600 shadow-sm">
        {items.map((item, index) => (
          <li className="bg-white p-6 m-5 rounded-lg break-words w-48 shadow-stone-700 shadow-md hover:shadow-violet-950 hover:shadow-lg" key={index}>{item}</li>
        ))}
      </ul>
    );
  }
  