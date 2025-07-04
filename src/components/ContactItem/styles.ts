import styled from 'styled-components';

export const ContactCard = styled.div`
  background-color: #fff;
  padding: 15px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-bottom: 10px;
`;

export const ContactInfo = styled.p`
  font-size: 16px;
  color: #555;
`;

export const ContactName = styled.h3`
  font-size: 18px;
  color: #007bff;
  margin-bottom: 5px;
`;

export const ButtonGroup = styled.div`
  display: flex;
  gap: 10px;
  justify-content: flex-end;
  margin-top: 10px;
`;

export const ActionButton = styled.button<{ edit?: boolean; remove?: boolean }>`
  background-color: ${props => {
    if (props.edit) return '#ffc107';
    if (props.remove) return '#dc3545';
    return '#007bff';
  }};
  color: #fff;
  padding: 8px 12px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 14px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${props => {
      if (props.edit) return '#e0a800';
      if (props.remove) return '#c82333';
      return '#0056b3';
    }};
  }
`;