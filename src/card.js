import { SacrificesRequired } from "./SacrificesRequired";
import { ImageScroller } from "./ScrollImage.js";

export const Card = (props) => {
  return (
    <div>
      <div className="cardName">
        <h2>{props.name}</h2>
      </div>
      <div className="cardStats">
        ATK: {props.atk} DEF: {props.def}
      </div>
      <div className="cardType">
        Type: {props.type} Attribute: {props.attribute}
      </div>
      <div className="noSacrifices">
        This card requires {SacrificesRequired(props.level)} sacrifices to
        summon.{" "}
      </div>
      <div className="cardName">{props.name}</div>
      <div className="cardImage">{ImageScroller(props.images, props.name)}</div>
      <div className="cardDescription">{props.description}</div>
    </div>
  );
};
