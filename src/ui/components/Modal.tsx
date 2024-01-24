import React from "react";
import { useDispatch } from "react-redux";
import { Modal, Box, Typography, IconButton } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import DeleteIcon from '@mui/icons-material/Delete';
import { removeFromCart, incrementQuantity, decrementQuantity } from '../../store/slices/productsSlice';
import { getCurrentPrice } from "../../utils";
import { ProductsType } from '../../types';

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

interface ModalProps {
    open: boolean;
    handleToggle: () => void;
    items: ProductsType; // Replace YourItemType with the type of your items
    title: string;
}

const _Modal: React.FC<ModalProps> = ({ open, handleToggle, items, title }) => {
    const dispatch = useDispatch();

    const handleIncrement = (itemId: number) => {
        dispatch(incrementQuantity(itemId));
    };

    const handleDecrement = (itemId: number) => {
        dispatch(decrementQuantity(itemId));
    };

    const handleDelete = (itemId: number) => {
        dispatch(removeFromCart(itemId));
    };

    return (
        <Modal
            open={open}
            onClose={handleToggle}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={style}>
                <Typography id="modal-modal-title" variant="h6" component="h2">
                    {title}
                </Typography>
                <Box sx={{ mt: 2 }}>
                    {items && items.length > 0 ? 
                        items.map(item => (
                            <Box key={item.id} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 2 }}>
                                <Box>
                                    <img src={item.thumbnail} alt={item.title} style={{ width: 50, height: 50, marginRight: 2 }} />
                                    <Typography variant="subtitle1">{item.title}</Typography>
                                </Box>
                                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                    <IconButton size="small" onClick={() => handleDecrement(item.id)}>
                                        <RemoveIcon />
                                    </IconButton>
                                    <Typography variant="body2" sx={{ mx: 1 }}>{item.quantity}</Typography>
                                    <IconButton size="small" onClick={() => handleIncrement(item.id)}>
                                        <AddIcon />
                                    </IconButton>
                                    <Typography variant="body2" sx={{ ml: 1 }}>${getCurrentPrice(item.price, item.discountPercentage) * item.quantity}</Typography>
                                    <IconButton size="small" onClick={() => handleDelete(item.id)}>
                                        <DeleteIcon />
                                    </IconButton>
                                </Box>
                            </Box>
                        )) : (
                            <p>No item in the {title}</p>
                        )
                    }
                </Box>
            </Box>
        </Modal>
    )
}

export default _Modal;
