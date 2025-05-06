import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/types';
import { colors, spacing, typography, shadows } from '../constants/theme';

type HomeScreenProps = {
  navigation: NativeStackNavigationProp<RootStackParamList, 'Home'>;
};

const HomeScreen = ({ navigation }: HomeScreenProps) => {
  const menuItems = [
    { title: 'Checklist', screen: 'Checklist', color: colors.primary },
    { title: 'Controls', screen: 'Controls', color: colors.secondary },
    { title: 'Tank Status', screen: 'TankStatus', color: colors.accent },
    { title: 'AC Control', screen: 'ACControl', color: colors.primary },
    { title: 'Vent Control', screen: 'VentControl', color: colors.secondary },
    { title: 'Settings', screen: 'Settings', color: colors.accent },
  ];

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>STOmote</Text>
        <Text style={styles.subtitle}>Storyteller Overland Control</Text>
      </View>

      <View style={styles.menuGrid}>
        {menuItems.map((item, index) => (
          <TouchableOpacity
            key={index}
            style={[styles.menuItem, { backgroundColor: item.color }]}
            onPress={() => navigation.navigate(item.screen as keyof RootStackParamList)}
          >
            <Text style={styles.menuItemText}>{item.title}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  header: {
    padding: spacing.xl,
    alignItems: 'center',
  },
  title: {
    ...typography.h1,
    color: colors.text,
    marginBottom: spacing.xs,
  },
  subtitle: {
    ...typography.body,
    color: colors.textSecondary,
  },
  menuGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    padding: spacing.md,
    justifyContent: 'space-between',
  },
  menuItem: {
    width: '48%',
    aspectRatio: 1,
    marginBottom: spacing.md,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    ...shadows.medium,
  },
  menuItemText: {
    ...typography.h3,
    color: colors.text,
    textAlign: 'center',
  },
});

export default HomeScreen; 