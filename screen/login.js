import React, { useEffect, useState, useCallback } from 'react';
import { Pressable, StyleSheet, Text, View,
     ScrollView,TextInput, Button} from 'react-native';


export default function Login(){
    return(
        <View>
            <ScrollView>
                <Text>This is the log in page</Text>
            </ScrollView>
        </View>
    )
}


const styles = StyleSheet.create({
    input: {
      height: 40,
      margin: 12,
      borderWidth: 1,
      padding: 10,
    },
  });