import { useState } from "react";

export default function Counter() {
const [count, setCount] = useState(0);

return (
<div style={{
textAlign: "center",
padding: "20px"
}}>
<h2>Contador: {count}</h2>
<button 
onClick={() => setCount(count + 1)}
>
Me Gusta
</button>
</div>
);
}