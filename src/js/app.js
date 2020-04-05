import {add} from './add';
import '../css/main.css';


console.log(`add(1,2): ${add(1,2)}`);
document.querySelector('.content').innerHTML =`add(1,2): ${add(1,2)}`;
