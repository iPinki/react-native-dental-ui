import React from 'react';
import { StyleSheet, Text, View, SectionList } from 'react-native';
import styled from 'styled-components/native';
import {Ionicons} from '@expo/vector-icons';

import {Appointment, SectionTitle} from './components';

const DATA = [
  {
    title: '21 февраля',
    data: [
      {
      time: '12:30',
      diagnosis: 'пульпит',
      active: true,
      user: {
        fullname: 'Дим Димыч',
        avatar: 'https://yt3.ggpht.com/a/AGF-l7-Xc2EacafOCRGNJlGJTzpj1wXXm4qf_rC4qQ=s88-c-k-c0xffffffff-no-rj-mo',
      }
    },
    {
      time: '13:30',
      diagnosis: 'пульпит',
      user: {
        fullname: 'Вася Пупкин',
        avatar: 'https://yt3.ggpht.com/a/AGF-l7_WPkb9wYVauGAY_4AXM4nwFLEUkRqpnoMtMQ=s48-c-k-c0xffffffff-no-rj-mo',
      }
    },
    ]
  },
  {
    title: '22 февраля',
    data: [
      {
      time: '11:30',
      diagnosis: 'пульпит',
      user: {
        fullname: 'Дим Димыч',
        avatar: 'https://yt3.ggpht.com/a/AGF-l7-Xc2EacafOCRGNJlGJTzpj1wXXm4qf_rC4qQ=s88-c-k-c0xffffffff-no-rj-mo',
      }
    },
    {
      time: '12:30',
      diagnosis: 'пульпит',
      user: {
        fullname: 'Вася Пупкин',
        avatar: 'https://yt3.ggpht.com/a/AGF-l7_WPkb9wYVauGAY_4AXM4nwFLEUkRqpnoMtMQ=s48-c-k-c0xffffffff-no-rj-mo',
      }
    },
      {
      time: '13:30',
      diagnosis: 'пульпит',
      user: {
        fullname: 'Дим Димыч',
        avatar: 'https://yt3.ggpht.com/a/AGF-l7-Xc2EacafOCRGNJlGJTzpj1wXXm4qf_rC4qQ=s88-c-k-c0xffffffff-no-rj-mo',
      }
    },
    {
      time: '14:30',
      diagnosis: 'пульпит',
      user: {
        fullname: 'Вася Пупкин',
        avatar: 'https://yt3.ggpht.com/a/AGF-l7_WPkb9wYVauGAY_4AXM4nwFLEUkRqpnoMtMQ=s48-c-k-c0xffffffff-no-rj-mo',
      }
    },
    ]
  },
  {
    title: '23 февраля',
    data: [
      {
      time: '11:30',
      diagnosis: 'пульпит',
      user: {
        fullname: 'Дим Димыч',
        avatar: 'https://yt3.ggpht.com/a/AGF-l7-Xc2EacafOCRGNJlGJTzpj1wXXm4qf_rC4qQ=s88-c-k-c0xffffffff-no-rj-mo',
      }
    },
    {
      time: '12:30',
      diagnosis: 'пульпит',
      user: {
        fullname: 'Вася Пупкин',
        avatar: 'https://yt3.ggpht.com/a/AGF-l7_WPkb9wYVauGAY_4AXM4nwFLEUkRqpnoMtMQ=s48-c-k-c0xffffffff-no-rj-mo',
      }
    },
    ]
  },
];

export default function App() {
  return (
    <Container>
      <SectionList
        sections={DATA}
        keyExtractor={(item, index) => index}
        renderItem={({item}) => <Appointment {...item} />}
        renderSectionHeader={({section: {title}}) => (
          <SectionTitle>{title}</SectionTitle>
        )}
      />
      <PlusButton
          style={{
            shadowColor: '#2A86FF',
            shadowOffset: {
              width: 0,
              height: 2
            },
            shadowOpacity: 0.7,
            shadowRadius: 3.5,
            elevation: 5
          }}
      >
        <Ionicons name="ios-add" size={40} color="white" />
      </PlusButton>
    </Container>
  );
}

const PlusButton = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  border-radius: 50px;
  width: 64px;
  height: 64px;
  background: #2a86ff;
  position: absolute;
  right: 25px;
  bottom: 25px;
`;

const Container = styled.View`
  flex: 1;
  margin-top: 30px;
  padding: 0;
`;