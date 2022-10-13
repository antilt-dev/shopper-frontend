import React,{useState,useContext} from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import GlobalContext from '../contexts/GlobalContext';

const modalStyle = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  color:'#b2b2b2',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor:'white',
  boxShadow: 2,
  p: 2,
  display:"flex",
  flexDirection:"column",
  alignItems:"center",
  borderRadius:"10px"
};

const textStyle = {
    textAlign:"center"
}

export default function ErrorModal(isOpen) {

  const {openModalError,setOpenModalError} = useContext(GlobalContext)

  return (
    <div>
      <Modal
        open={openModalError}
        onClose={()=>setOpenModalError(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={modalStyle}>
          <Typography sx={textStyle} id="modal-modal-title" variant="h6" component="h2">
            Não foi possível adicionar este produto
          </Typography>
          <Typography>
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/OOjs_UI_icon_alert_destructive.svg/1200px-OOjs_UI_icon_alert_destructive.svg.png" style={{width: "50px"}}alt="error"/>
          </Typography> 
          <Typography sx={textStyle} id="modal-modal-description" >
           Nosso estoque deste produto não conta com quantidade suficiente para atender sua solicitação.
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}