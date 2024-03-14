const liStyle = {
  backgroundColor: "#0000CD",
  color: "#F5FFFA",
};

/**
 * List
 * @constructor
 * @param {Array} items - Lista de elementos
 * @param {function} renderItem - Campo que se va a desplegar.
 * @param {function} extractKey - Se extrae el id de la lista.
 */
export const List = ({ items, renderItem, extractKey }) => {
  return (
    <ul>
      {items.map((item) => (
        <li style={liStyle} key={extractKey(item)}>
          {renderItem(item)}
        </li>
      ))}
    </ul>
  );
};
