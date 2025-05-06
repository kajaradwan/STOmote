import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { colors, spacing, typography, shadows } from '../constants/theme';

const TankStatusScreen = () => {
  const tanks = [
    { name: 'Fresh Water', level: 75, unit: '%' },
    { name: 'Grey Water', level: 45, unit: '%' },
    { name: 'Black Water', level: 30, unit: '%' },
    { name: 'Propane', level: 60, unit: '%' },
  ];

  const getLevelColor = (level: number) => {
    if (level > 75) return colors.success;
    if (level > 25) return colors.warning;
    return colors.error;
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Tank Status</Text>
        <Text style={styles.subtitle}>Current tank levels</Text>
      </View>

      <View style={styles.tanksContainer}>
        {tanks.map((tank, index) => (
          <View key={index} style={styles.tankCard}>
            <View style={styles.tankHeader}>
              <Text style={styles.tankName}>{tank.name}</Text>
              <Text style={[styles.tankLevel, { color: getLevelColor(tank.level) }]}>
                {tank.level}{tank.unit}
              </Text>
            </View>
            <View style={styles.progressBarContainer}>
              <View
                style={[
                  styles.progressBar,
                  { width: `${tank.level}%`, backgroundColor: getLevelColor(tank.level) },
                ]}
              />
            </View>
          </View>
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
  tanksContainer: {
    padding: spacing.md,
  },
  tankCard: {
    backgroundColor: colors.primary,
    padding: spacing.lg,
    borderRadius: 12,
    marginBottom: spacing.md,
    ...shadows.medium,
  },
  tankHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: spacing.sm,
  },
  tankName: {
    ...typography.h3,
    color: colors.text,
  },
  tankLevel: {
    ...typography.h3,
    fontWeight: '700',
  },
  progressBarContainer: {
    height: 8,
    backgroundColor: colors.textSecondary,
    borderRadius: 4,
    overflow: 'hidden',
  },
  progressBar: {
    height: '100%',
    borderRadius: 4,
  },
});

export default TankStatusScreen; 