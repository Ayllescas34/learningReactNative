import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert, StyleSheet } from 'react-native';

export const Formulario = () => {
  const [nombre, setNombre] = useState('');
  const [correo, setCorreo] = useState('');

  const handleSubmit = () => {
    if (nombre.trim() === '' || correo.trim() === '') {
      if (Platform.OS === 'web') {
        alert('Por favor completa todos los campos');
      } else {
        Alert.alert('Campos vacíos', 'Por favor completa todos los campos');
      }
      return;
    }

    Alert.alert('Formulario enviado', `Nombre: ${nombre}\nCorreo: ${correo}`);
    // Aquí puedes limpiar el formulario o enviar los datos
    setNombre('');
    setCorreo('');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Nombre:</Text>
      <TextInput
        style={styles.input}
        placeholder="Tu nombre"
        value={nombre}
        onChangeText={setNombre}
      />

      <Text style={styles.label}>Correo:</Text>
      <TextInput
        style={styles.input}
        placeholder="Tu correo"
        keyboardType="email-address"
        value={correo}
        onChangeText={setCorreo}
      />

      <Button title="Enviar" onPress={handleSubmit} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#fff',
    borderRadius: 10,
    elevation: 3,
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
    fontWeight: '600',
  },
  input: {
    borderWidth: 1,
    borderColor: '#aaa',
    padding: 10,
    marginBottom: 15,
    borderRadius: 5,
  },
});
