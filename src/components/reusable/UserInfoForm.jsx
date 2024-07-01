// UserInfoForm.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const UserInfoForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: '',
    phone: '',
    address: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Account created:', formData);
    setFormData({
      username: '',
      phone: '',
      address: '',
      message: 'Account created successfully!',
    });
    navigate('/subscription-options'); // Navigate to subscription options page
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <Title>User Information</Title>
        <Input
          type="text"
          name="username"
          placeholder="Username"
          value={formData.username}
          onChange={handleChange}
        />
        <Input
          type="text"
          name="phone"
          placeholder="Phone Number"
          value={formData.phone}
          onChange={handleChange}
        />
        <Input
          type="text"
          name="address"
          placeholder="Address"
          value={formData.address}
          onChange={handleChange}
        />
        <Button type="submit">Create Account</Button>
        {formData.message && <Message>{formData.message}</Message>}
      </Form>
    </Container>
  );
};

// Styled components...


const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f0f0f0;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: white;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h1`
  margin-bottom: 20px;
`;

const Input = styled.input`
  margin: 10px 0;
  padding: 10px;
  width: 100%;
`;

const Button = styled.button`
  margin: 10px 0;
  padding: 10px;
  width: 100%;
  background-color: red;
  color: white;
  border: none;
  cursor: pointer;
`;

const Message = styled.p`
  margin-top: 20px;
  color: green;
`;


export default UserInfoForm;


// UserInfoForm.jsx
// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';

// const UserInfoForm = () => {
//   const navigate = useNavigate();
//   const [formData, setFormData] = useState({
//     username: '',
//     phone: '',
//     address: '',
//     message: '',
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log('Account created:', formData);
//     setFormData({
//       username: '',
//       phone: '',
//       address: '',
//       message: 'Account created successfully!',
//     });
//     navigate('/subscription-options');
//   };

//   return (
//     <div>
//       <h1>User Information Form</h1>
//       <form onSubmit={handleSubmit}>
//         <input type="text" name="username" placeholder="Username" value={formData.username} onChange={handleChange} />
//         <input type="text" name="phone" placeholder="Phone Number" value={formData.phone} onChange={handleChange} />
//         <input type="text" name="address" placeholder="Address" value={formData.address} onChange={handleChange} />
//         <button type="submit">Create Account</button>
//         {formData.message && <p>{formData.message}</p>}
//       </form>
//     </div>
//   );
// };

// export default UserInfoForm;
