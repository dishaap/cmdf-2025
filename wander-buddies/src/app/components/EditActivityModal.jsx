import React, { useState, useEffect } from 'react';
import { Modal, Box, Typography, TextField, Button, IconButton, MenuItem, Select, InputLabel, FormControl } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

const EditActivityModal = ({ open, onClose, activityToEdit}) => {
  const [activityName, setActivityName] = useState('');
  const [activityType, setActivityType] = useState('');
  const [activityDate, setActivityDate] = useState('');
  const [activityBudget, setActivityBudget] = useState('');
  const [activityAddress, setActivityAddress] = useState('');
  const [activityDescription, setActivityDescription] = useState('');

  useEffect(() => {
    if (activityToEdit) {
      setActivityName(activityToEdit.activityName || '');
      setActivityType(activityToEdit.activityType || '');
      setActivityDate(activityToEdit.activityDate || '');
      setActivityBudget(activityToEdit.activityBudget || '');
      setActivityAddress(activityToEdit.activityAddress || '');
      setActivityDescription(activityToEdit.activityDescription || '');
    }
  }, [activityToEdit, open]);

  const handleSubmit = () => {
    // Add API call
    console.log('Editing activity:', { activityName, activityType, activityDate, activityBudget, activityAddress, activityDescription });
    onClose();
  };

  return (
    <Modal open={open} onClose={onClose}>
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          bgcolor: '#F9FEEF',
          boxShadow: 24,
          p: 3,
          borderRadius: 2,
          width: 400,
        }}
      >
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
          <Typography sx={{color: "#96B74C", fontFamily: "var(--font-poppins)", fontWeight: 500, fontSize: "1.5rem", paddingLeft: "6vw"}}>Edit Activity</Typography>
          <IconButton onClick={onClose}>
            <CloseIcon />
          </IconButton>
        </Box>

        <TextField
          label="Activity Name"
          fullWidth
          margin="normal"
          value={activityName}
          onChange={(e) => setActivityName(e.target.value)}
        />

        {/* Activity Type */}
        <FormControl fullWidth margin="normal">
          <InputLabel>Activity Type</InputLabel>
          <Select
            value={activityType}
            onChange={(e) => setActivityType(e.target.value)}
            label="Activity Type"
          >
            <MenuItem value="Food">Food</MenuItem>
            <MenuItem value="Transit">Transit</MenuItem>
            <MenuItem value="Art">Art</MenuItem>
            <MenuItem value="History">History</MenuItem>
            <MenuItem value="Shopping">Shopping</MenuItem>
            <MenuItem value="Entertainment">Entertainment</MenuItem>
            <MenuItem value="Nature">Nature</MenuItem>
          </Select>
        </FormControl>

        {/* Activity Date */}
        <TextField
        //   label="Activity Date"
          type="date"
          fullWidth
          margin="normal"
          value={activityDate}
          onChange={(e) => setActivityDate(e.target.value)}
        />

        {/* Activity Budget */}
        <TextField
          label="Activity Budget"
          fullWidth
          margin="normal"
          value={activityBudget}
          onChange={(e) => setActivityBudget(e.target.value)}
        />

        {/* Activity Address */}
        <TextField
          label="Activity Address"
          fullWidth
          margin="normal"
          value={activityAddress}
          onChange={(e) => setActivityAddress(e.target.value)}
        />
        <TextField
          label="Activity Description"
          fullWidth
          margin="normal"
          multiline
          rows={4}
          value={activityDescription}
          onChange={(e) => setActivityDescription(e.target.value)}
        />

        <Button
          variant="contained"
          fullWidth
          sx={{ mt: 2, backgroundColor: "#96B74C", fontFamily: "var(--font-poppins)", fontWeight: 500, fontSize: "0.8rem"}}
          onClick={handleSubmit}
        >
          Save Activity
        </Button>
      </Box>
    </Modal>
  );
};

export default EditActivityModal;
