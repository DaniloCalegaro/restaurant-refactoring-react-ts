import { useState } from 'react';
import { FiCheckSquare } from 'react-icons/fi';

import { Form } from './styles';
import { Modal }  from '../Modal';
import { Input } from '../Input';
import { Foods } from '../../types';


interface ModalAddFoodData {
  isOpen: boolean;
  setIsOpen: () => void;
  handleAddFood: (food: Foods[]) => Promise<void>
}

type Props = {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export function ModalAddFood( { isOpen, setIsOpen, handleAddFood }: ModalAddFoodData) {
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [price, setPrice] = useState(0)
  const [image, setImage] = useState('')
  
  async function handleSubmit () {
    if(name !== '') {
      handleAddFood({ image, name, description, price });
      setName('')
      setDescription('')
      setPrice(0)
      setImage('')
    } 
    setIsOpen();
  }
   
  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
      <Form onSubmit={handleSubmit}>
        <h1>Novo Prato</h1>
        <Input
          name="image" 
          placeholder="Cole o link aqui" 
          onChange={event => setImage(event.target.value)}
        />
        <Input 
          name="name" 
          placeholder="Ex: Moda Italiana" 
          onChange={event => setName(event.target.value)}
        />
        <Input 
          name="price" 
          placeholder="Ex: 19.90" 
          onChange={event => setPrice(event.target.value)}
        />

        <Input 
          name="description" 
          placeholder="Descrição" 
          onChange={event => setDescription(event.target.value)}
        />
        <button type="submit" data-testid="add-food-button">
          <p className="text">Adicionar Prato</p>
          <div className="icon">
            <FiCheckSquare size={24} />
          </div>
        </button>
      </Form>
    </Modal>
  );
}

