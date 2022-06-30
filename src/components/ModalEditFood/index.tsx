import { ChangeEvent, useEffect, useState } from 'react';
import { FiCheckSquare } from 'react-icons/fi';

import { Form } from './styles';
import { Modal } from '../Modal';
import { Input } from '../Input';
import { Foods, FoodsResponse } from '../../types';

interface TypeModalEditFoodProps {
  isOpen: boolean
  setIsOpen: () => void
  editingFood: FoodsResponse,
  handleUpdateFood: (foodEdit: Foods) => void
}

export function ModalEditFood ({ isOpen, setIsOpen, editingFood, handleUpdateFood } : TypeModalEditFoodProps) {
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [price, setPrice] = useState(0)
  const [image, setImage] = useState('')
  
  useEffect(() => {
    setName(editingFood.name)
    setDescription(editingFood.description)
    setPrice(editingFood.price)
    setImage(editingFood.image)
  },[editingFood])

  async function handleSubmit() {
    const newValuesFood = { name,  description, price, image };
    handleUpdateFood(newValuesFood);
    setIsOpen();
  }    

  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
      <Form onSubmit={handleSubmit} initialData={editingFood}>
        <h1>Editar Prato</h1>
        <Input 
          name="image" 
          placeholder="Cole o link aqui" 
          onChange={(event: ChangeEvent<HTMLInputElement>) => setImage(event.target.value)}
        />
        <Input 
          name="name" 
          placeholder="Ex: Moda Italiana" 
          onChange={(event: ChangeEvent<HTMLInputElement>) => setName(event.target.value)}
        />
        <Input 
          name="price" 
          placeholder="Ex: 19.90" 
          onChange={(event: ChangeEvent<HTMLInputElement>) => setPrice(Number(event.target.value))}
        />
        <Input 
          name="description" 
          placeholder="Descrição" 
          onChange={(event: ChangeEvent<HTMLInputElement>) => setDescription(event.target.value)}
        />
        <button type="submit" data-testid="edit-food-button">
          <div className="text">Editar Prato</div>
          <div className="icon">
            <FiCheckSquare size={24} />
          </div>
        </button>
      </Form>
    </Modal>
  );
}