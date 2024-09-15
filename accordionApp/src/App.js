import Item from "./accordionItem";

const data = [
  {
    title: "What is Our Product?",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in ligula vel est consequat vulputate. In hac habitasse platea dictumst.",
    id: 1,
  },
  {
    title: "What is Our Services?",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in ligula vel est consequat vulputate. In hac habitasse platea dictumst.",
    id: 2,
  },
  {
    title: "Who works with us?",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in ligula vel est consequat vulputate. In hac habitasse platea dictumst.",
    id: 3,
  },
  {
    title: "What you should do with us?",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in ligula vel est consequat vulputate. In hac habitasse platea dictumst.",
    id: 143,
  },
  {
    title: "What you should do with us?",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in ligula vel est consequat vulputate. In hac habitasse platea dictumst.",
    id: 43,
  },
  {
    title: "What you should do with us?",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in ligula vel est consequat vulputate. In hac habitasse platea dictumst.",
    id: 23,
  },
];

export default function App() {
  return (
    <div className="h-full">
      <div className="flex justify-center pt-32 ">
        {/* container accordion  */}
        <div className="flex flex-col w-[70%]">
          {data.map((item) => (
            <Item item={item} key={item.id} />
          ))}
        </div>
      </div>
    </div>
  );
}
