import { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';


export default function ProductForm() {
    
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState(0);
    const [goToProducts, setGoToProducts] = useState(false);
    const router = useRouter();

    async function createProduct(e) {
        e.preventDefault();
        const data = { title, description, price };
        await axios.post('/api/products', data);
        setGoToProducts(true);
    }

    if (goToProducts) {
        router.push('/products');
    }

    return (
            <form onSubmit={ createProduct }>
                <label>Product Name</label>
                <input
                    type="text"
                    placeholder="Product name"
                    value={title}
                    onChange={e => setTitle(e.target.value)} />
                <label>Product Description</label>
                <textarea
                    placeholder="Product description"
                    value={description}
                    onChange={e => setDescription(e.target.value)} />
                <label>Price</label>
                <input
                    type="number"
                    placeholder="Price"
                    value={price}
                    onChange={e => setPrice(e.target.value)} />
                <button
                    type='sumbit'
                    className='btn-primary'>
                    Save
                </button>

            </form>
    );
}