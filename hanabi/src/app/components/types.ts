export type Card = {
    value: number;
    exists: boolean;
  };

  export type CardCollectionProp = {
    [color: string]: Card[];
  };

  export type CardCollectionProps = {
    cards: CardCollectionProp;
    handleChange: (color: string, index: number) => void;
  };
