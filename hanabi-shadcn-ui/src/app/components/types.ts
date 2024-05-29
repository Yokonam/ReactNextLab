export type Card = {
    value: number;
    exists: boolean;
  };

  export type ColorOptionProp = {
    red: boolean
    blue: boolean
    green: boolean
    yellow: boolean
    white: boolean
  }

  export type NumberOptionProp = {
    '1': boolean
    '2': boolean
    '3': boolean
    '4': boolean
    '5': boolean
  }

  export type CardItemProp = {
    id: string
    index: number
    colors: ColorOptionProp
    numbers: NumberOptionProp
    handleChangeCard?: (id: string, value: string, type: 'number'|'color') => void
    handleDeleteClick?: (id: string) => void
  }

  export type CardCollectionProp = {
    [color: string]: Card[];
  };

  export type CardCollectionProps = {
    cards: CardCollectionProp;
    handleChange: (color: string, index: number) => void;
  };
