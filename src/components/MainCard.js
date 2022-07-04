import React ,{useState} from 'react'
import { FaPlus } from 'react-icons/fa';
import mainCard from 'mainCard.css'
import plus_img from '../images/icon-plus.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import Select from 'react-select';


 const MainCard = () => {
  const handleChange = (e) =>{
    console.log(e.value);
  }
    const [select1, setSelect1] = useState();

    const options = [
        { value: 'chocolate', label: 'Chocolate' },
        { value: 'strawberry', label: 'Strawberry' },
        { value: 'vanilla', label: 'Vanilla' }
      ]

  return (
    <div> 
    <Select options={options} onChange={(e) => handleChange(e)}/>        
</div> 
  )
}
 export default MainCard