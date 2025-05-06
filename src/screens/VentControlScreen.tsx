import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { colors, spacing, typography, shadows } from '../constants/theme';

const VentControlScreen = () => {
  const [speed, setSpeed] = useState(50);
  const [direction, setDirection] = useState<'in' | 'out'>('out');

  const speeds = [
    { id: 'low', label: 'Low', value: 25 },
    { id: 'medium', label: 'Medium', value: 50 },
    { id: 'high', label: 'High', value: 75 },
    { id: 'max', label: 'Max', value: 100 },
  ];

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Vent Control</Text>
        <Text style={styles.subtitle}>Control roof vent settings</Text>
      </View>

      <View style={styles.speedCard}>
        <Text style={styles.sectionTitle}>Speed</Text>
        <View style={styles.speedControls}>
          {speeds.map(speedItem => (
            <TouchableOpacity
              key={speedItem.id}
              style={[
                styles.speedButton,
                speed === speedItem.value && styles.speedButtonActive,
              ]}
              onPress={() => setSpeed(speedItem.value)}
            >
              <Text style={styles.speedLabel}>{speedItem.label}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>

      <View style={styles.directionCard}>
        <Text style={styles.sectionTitle}>Direction</Text>
        <View style={styles.directionControls}>
          <TouchableOpacity
            style={[
              styles.directionButton,
              direction === 'in' && styles.directionButtonActive,
            ]}
            onPress={() => setDirection('in')}
          >
            <Text style={styles.directionIcon}>⬇️</Text>
            <Text style={styles.directionLabel}>In</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.directionButton,
              direction === 'out' && styles.directionButtonActive,
            ]}
            onPress={() => setDirection('out')}
          >
            <Text style={styles.directionIcon}>⬆️</Text>
            <Text style={styles.directionLabel}>Out</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.statusCard}>
        <Text style={styles.statusTitle}>Current Status</Text>
        <View style={styles.statusInfo}>
          <Text style={styles.statusLabel}>Speed:</Text>
          <Text style={styles.statusValue}>{speed}%</Text>
        </View>
        <View style={styles.statusInfo}>
          <Text style={styles.statusLabel}>Direction:</Text>
          <Text style={styles.statusValue}>
            {direction === 'in' ? 'Drawing In' : 'Exhausting'}
          </Text>
        </View>
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
  speedCard: {
    backgroundColor: colors.primary,
    padding: spacing.lg,
    borderRadius: 12,
    margin: spacing.md,
    ...shadows.medium,
  },
  sectionTitle: {
    ...typography.h2,
    color: colors.text,
    marginBottom: spacing.md,
  },
  speedControls: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  speedButton: {
    backgroundColor: colors.accent,
    padding: spacing.md,
    borderRadius: 8,
    flex: 1,
    marginHorizontal: spacing.xs,
    alignItems: 'center',
  },
  speedButtonActive: {
    backgroundColor: colors.success,
  },
  speedLabel: {
    ...typography.body,
    color: colors.text,
  },
  directionCard: {
    backgroundColor: colors.primary,
    padding: spacing.lg,
    borderRadius: 12,
    margin: spacing.md,
    ...shadows.medium,
  },
  directionControls: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  directionButton: {
    backgroundColor: colors.accent,
    padding: spacing.lg,
    borderRadius: 12,
    alignItems: 'center',
    flex: 1,
    marginHorizontal: spacing.md,
  },
  directionButtonActive: {
    backgroundColor: colors.success,
  },
  directionIcon: {
    fontSize: 32,
    marginBottom: spacing.sm,
  },
  directionLabel: {
    ...typography.body,
    color: colors.text,
  },
  statusCard: {
    backgroundColor: colors.primary,
    padding: spacing.lg,
    borderRadius: 12,
    margin: spacing.md,
    ...shadows.medium,
  },
  statusTitle: {
    ...typography.h2,
    color: colors.text,
    marginBottom: spacing.md,
  },
  statusInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: spacing.sm,
  },
  statusLabel: {
    ...typography.body,
    color: colors.textSecondary,
  },
  statusValue: {
    ...typography.body,
    color: colors.text,
    fontWeight: '700',
  },
});

export default VentControlScreen; 