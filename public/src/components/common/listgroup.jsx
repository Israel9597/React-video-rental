

const Listgroup = (props) => {
    const {onItemSelect, items, textProperty, valueProperty,selectedItem } = props;

    return (
      <ul className="list-group clickable">
        {items.map((item) => (
          <li
            onClick={() => onItemSelect(item)}
            key={item[valueProperty]}
            className={item===selectedItem?"list-group-item active":"list-group-item"}
          >
            {item[textProperty]}
          </li>
        ))}
      </ul>
    );
}

Listgroup.defaultProps = {
    textProperty: "name",
    valueProperty:"_id"
}
 
export default Listgroup;