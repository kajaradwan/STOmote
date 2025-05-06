import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { colors, spacing, typography, shadows } from '../constants/theme';

const ACControlScreen = () => {
  const [temperature, setTemperature] = useState(72);
  const [mode, setMode] = useState<'cool' | 'heat' | 'fan'>('cool');
  const [fanSpeed, setFanSpeed] = useState<'low' | 'medium' | 'high'>('medium');

  const modes = [
    { id: 'cool', label: 'Cool', icon: '❄️' },
    { id: 'heat', label: 'Heat', icon: '🔥' },
    { id: 'fan', label: 'Fan', icon: '💨' },
  ];

  const fanSpeeds = [
    { id: 'low', label: 'Low' },
    { id: 'medium', label: 'Medium' },
    { id: 'high', label: 'High' },
  ];

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>AC Control</Text>
        <Text style={styles.subtitle}>Temperature and mode settings</Text>
      </View>

      <View style={styles.temperatureCard}>
        <Text style={styles.temperatureLabel}>Temperature</Text>
        <View style={styles.temperatureControls}>
          <TouchableOpacity
            style={styles.temperatureButton}
            onPress={() => setTemperature(prev => Math.max(60, prev - 1))}
          >
            <Text style={styles.temperatureButtonText}>-</Text>
          </TouchableOpacity>
          <Text style={styles.temperatureValue}>{temperature}°F</Text>
          <TouchableOpacity
            style={styles.temperatureButton}
            onPress={() => setTemperature(prev => Math.min(90, prev + 1))}
          >
            <Text style={styles.temperatureButtonText}>+</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.modesContainer}>
        <Text style={styles.sectionTitle}>Mode</Text>
        <View style={styles.modesGrid}>
          {modes.map(modeItem => (
            <TouchableOpacity
              key={modeItem.id}
              style={[
                styles.modeButton,
                mode === modeItem.id && styles.modeButtonActive,
              ]}
              onPress={() => setMode(modeItem.id as 'cool' | 'heat' | 'fan')}
            >
              <Text style={styles.modeIcon}>{modeItem.icon}</Text>
              <Text style={styles.modeLabel}>{modeItem.label}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>

      <View style={styles.fanSpeedContainer}>
        <Text style={styles.sectionTitle}>Fan Speed</Text>
        <View style={styles.fanSpeedGrid}>
          {fanSpeeds.map(speed => (
            <TouchableOpacity
              key={speed.id}
              style={[
                styles.fanSpeedButton,
                fanSpeed === speed.id && styles.fanSpeedButtonActive,
              ]}
              onPress={() => setFanSpeed(speed.id as 'low' | 'medium' | 'high')}
            >
              <Text style={styles.fanSpeedLabel}>{speed.label}</Text>
            </TouchableOpacity>
          ))}
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
  temperatureCard: {
    backgroundColor: colors.primary,
    padding: spacing.lg,
    borderRadius: 12,
    margin: spacing.md,
    ...shadows.medium,
  },
  temperatureLabel: {
    ...typography.h3,
    color: colors.text,
    textAlign: 'center',
    marginBottom: spacing.md,
  },
  temperatureControls: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  temperatureButton: {
    backgroundColor: colors.accent,
    width: 48,
    height: 48,
    borderRadius: 24,
    justifyContent: 'center',
    alignItems: 'center',
    ...shadows.small,
  },
  temperatureButtonText: {
    ...typography.h2,
    color: colors.text,
  },
  temperatureValue: {
    ...typography.h1,
    color: colors.text,
    marginHorizontal: spacing.xl,
  },
  modesContainer: {
    padding: spacing.md,
  },
  sectionTitle: {
    ...typography.h2,
    color: colors.text,
    marginBottom: spacing.md,
  },
  modesGrid: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  modeButton: {
    backgroundColor: colors.primary,
    padding: spacing.lg,
    borderRadius: 12,
    alignItems: 'center',
    flex: 1,
    marginHorizontal: spacing.xs,
    ...shadows.medium,
  },
  modeButtonActive: {
    backgroundColor: colors.accent,
  },
  modeIcon: {
    fontSize: 32,
    marginBottom: spacing.sm,
  },
  modeLabel: {
    ...typography.body,
    color: colors.text,
  },
  fanSpeedContainer: {
    padding: spacing.md,
  },
  fanSpeedGrid: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  fanSpeedButton: {
    backgroundColor: colors.primary,
    padding: spacing.lg,
    borderRadius: 12,
    alignItems: 'center',
    flex: 1,
    marginHorizontal: spacing.xs,
    ...shadows.medium,
  },
  fanSpeedButtonActive: {
    backgroundColor: colors.accent,
  },
  fanSpeedLabel: {
    ...typography.body,
    color: colors.text,
  },
});

export default ACControlScreen; 