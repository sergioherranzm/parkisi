import React from 'react';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';

export const FormButton: React.FC<{
  label: string;
  onClick?: () => void;
}> = ({ label, onClick }) => {
  return (
    <Button
      variant="contained"
      endIcon={<SendIcon />}
      onClick={onClick}
      size="large"
    >
      {label}
    </Button>
  );
};
