import { useEffect, useState } from "react";
import { fetchItems } from "./api";
import { useParams, useSearchParams } from "react-router";

function Items() {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const [params, setParams] = useSearchParams();

  useEffect(() => {
    setIsLoading(true);
    fetchItems(params).then((itemsData) => {
      setItems(itemsData);
      setIsLoading(false);
    });
  }, []);

  if (isLoading) {
    return <h3>Items Loading...</h3>;
  }

  return (
    <ul>
      {items.map((item) => {
        return (
          <div key={item.item_id}>
            <h4>{item.item_name}</h4>
            <img src={item.img_url} alt="Gameboy" />
            <p>{item.description}</p>
            <h4>{item.seller_name}</h4>
            <h4>{item.price}</h4>
          </div>
        );
      })}
    </ul>
  );
}

export default Items;
