import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { colors, spacing, typography, shadows } from '../constants/theme';

const ControlsScreen = () => {
  const controls = [
    { title: 'Lights', icon: '💡', action: 'Toggle' },
    { title: 'Pump', icon: '💧', action: 'Toggle' },
    { title: 'Awning', icon: '🏕️', action: 'Extend/Retract' },
    { title: 'Drain', icon: '🚰', action: 'Toggle' },
    { title: 'Aux', icon: '🔌', action: 'Toggle' },
  ];

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Controls</Text>
        <Text style={styles.subtitle}>Quick access to main systems</Text>
      </View>

      <View style={styles.controlsGrid}>
        {controls.map((control, index) => (
          <TouchableOpacity
            key={index}
            style={styles.controlItem}
            onPress={() => console.log(`Toggle ${control.title}`)}
          >
            <Text style={styles.controlIcon}>{control.icon}</Text>
            <Text style={styles.controlTitle}>{control.title}</Text>
            <Text style={styles.controlAction}>{control.action}</Text>
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
  controlsGrid: {
    padding: spacing.md,
  },
  controlItem: {
    backgroundColor: colors.primary,
    padding: spacing.lg,
    borderRadius: 12,
    marginBottom: spacing.md,
    alignItems: 'center',
    ...shadows.medium,
  },
  controlIcon: {
    fontSize: 32,
    marginBottom: spacing.sm,
  },
  controlTitle: {
    ...typography.h3,
    color: colors.text,
    marginBottom: spacing.xs,
  },
  controlAction: {
    ...typography.caption,
    color: colors.textSecondary,
  },
});

export default ControlsScreen; 