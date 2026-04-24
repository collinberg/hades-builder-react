import type { Boon } from "../context/BuildContext";
import Card from "./Card";

interface Props {
  boons: Boon[];
  onSelect: (boonId: string) => void;
  selectedIds?: string[];
}

const BoonList = ({ boons, onSelect, selectedIds = [] }: Props) => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-3 mb-5'>
      {boons.map((boon) => (
        <Card
          {...boon}
          key={boon.id}
          onClick={() => onSelect(boon.id)}
          disabled={selectedIds.includes(boon.id)}
        />
      ))}
    </div>
  );
};

export default BoonList;
