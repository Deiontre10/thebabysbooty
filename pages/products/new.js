import Layout from '@/components/Layout';
import { useState } from 'react';

export default function NewProduct() {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState(0);

    async function createProduct() {
        const data = { title, description, price };
        await axios.post('/api/products', data)
    }

    return (
        <Layout>
            <form onSubmit={ createProduct }>
                <h1>New Product</h1>
                <label>Product Name</label>
                <input
                    type="text"
                    placeholder="Product name"
                    value={title}
                    onChange={ev => setTitle(ev.target.value)} />
                <label>Product Description</label>
                <textarea
                    placeholder="Product description"
                    value={description}
                    onChange={ev => setDescription(ev.target.value)} />
                <label>Price</label>
                <input
                    type="number"
                    placeholder="Price"
                    value={price}
                    onChange={ev => setPrice(ev.target.value)} />
                <button
                    type='sumbit'
                    className='btn-primary'>
                    Save
                </button>

            </form>
        </Layout>
    );
}