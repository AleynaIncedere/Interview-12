import React, { useState } from "react";
import './styles.css';
const INITIAL_LIST = [
  { name: "Domates", value: 55.0 },
  { name: "Marul", value: 25.5 },
  { name: "Ekmek", value: 10.99 },
];

function App() {
  return <ItemValueList />;
}

const ItemValueList = () => {
  const [items, setItems] = useState(INITIAL_LIST);
  const [name, setName] = useState("");  
  const [value, setValue] = useState(""); 

  
  const isValidPrice = (price) => {
    return /^\d+(\.\d{1,2})?$/.test(price) && parseFloat(price) >= 0;
  };

  
  const addItem = () => {
    if (!name || !isValidPrice(value)) {
      alert("Lütfen geçerli bir öğe adı ve fiyat girin.");
      return;
    }

    const newItem = { name, value: parseFloat(value) };
    setItems([...items, newItem]);
    setName("");  
    setValue("");
  };

 
  const removeItem = (index) => {
    const updatedItems = items.filter((_, i) => i !== index);
    setItems(updatedItems);
  };

  return (
    <div>
      <h1>Ürün Listesi</h1>

      
      <div style={{ marginBottom: "20px" }}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Öğe adı"
          style={inputStyle}
        />
        <input
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="Fiyat"
          style={inputStyle}
        />
        <button onClick={addItem} style={buttonStyle}>
          Ekle
        </button>
      </div>

    
      <ul style={listStyle}>
        {items.map((item, index) => (
          <li key={index} style={itemStyle}>
            {item.name} - ${item.value.toFixed(2)}
            <button onClick={() => removeItem(index)} style={removeButtonStyle}>
              Sil
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};


const inputStyle = {
  padding: "10px",
  margin: "5px",
  borderRadius: "5px",
  border: "1px solid #ccc",
  
};

const buttonStyle = {
  padding: "10px",
  marginLeft: "10px",
  backgroundColor: "#ff0066",
  color: "white",
  border: "none",
  borderRadius: "5px",
  cursor: "pointer",
};

const listStyle = {
  listStyleType: "none",
  padding: "0",
  
};

const itemStyle = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "10px",
  borderBottom: "1px solid #ccc",
  color: "#ff0066",
};

const removeButtonStyle = {
  padding: "5px 10px",
  backgroundColor: "#f44336",
  color: "white",
  border: "none",
  borderRadius: "5px",
  cursor: "pointer",
};

export default App;
