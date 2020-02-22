import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import styled from 'styled-components/native';

const Group = ({user, diagnosis, active, time}) => {
    return(
        <GroupItem>
          <Avatar source={{uri: user.avatar}}/>
          <View style={{flex: 1}}>
            <FullName>{user.fullname}</FullName>
            <GrayText>{diagnosis}</GrayText>
          </View>
          <GroupDate active={active}>{time}</GroupDate>
        </GroupItem>
    );
}

Group.defaultProps = {
    title: 'Untitled',
    items: [],
};

const GroupDate = styled.Text`
  background: ${props => (props.active ? '#2a86ff' : ' #e9f5ff')};
  color: ${props => (props.active ? '#fff' : '#4294ff')};
  border-radius: 18px;
  font-weight: bold;
  font-size: 14px;
  width: 70px;
  height: 32px;
  text-align: center;
  line-height: 32px;
`;

const GrayText = styled.Text`
  font-size: 16px;
  color: #8b979f;
`;

const FullName = styled.Text`
  font-weight: bold;
  font-size: 16px;
`;

const Avatar = styled.Image`
  border-radius: 50px;
  width: 40px;
  height: 40px;
  margin-right: 16px;
`;

const GroupItem = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  padding: 20px;
  border-bottom-width: 1px;
  border-bottom-color: #f3f3f3;
`;

export default Group;