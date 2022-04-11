import { Pressable, PressableProps, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Mtext from './Mtext'

const PresssabbleText = (props:PressableProps & {text: string}) => {
  return (
    <Pressable {...props}>
    <Mtext style={{ textDecorationLine: "underline" }}>
      {props.text}
    </Mtext>
  </Pressable>
  )
}

export default PresssabbleText

const styles = StyleSheet.create({})