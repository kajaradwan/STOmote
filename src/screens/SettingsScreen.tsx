import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Switch } from 'react-native';
import { colors, spacing, typography, shadows } from '../constants/theme';

const SettingsScreen = () => {
  const [notifications, setNotifications] = useState(true);
  const [darkMode, setDarkMode] = useState(true);
  const [autoConnect, setAutoConnect] = useState(true);

  const settings = [
    {
      title: 'Notifications',
      description: 'Enable push notifications for system alerts',
      value: notifications,
      onValueChange: setNotifications,
    },
    {
      title: 'Dark Mode',
      description: 'Use dark theme throughout the app',
      value: darkMode,
      onValueChange: setDarkMode,
    },
    {
      title: 'Auto-Connect',
      description: 'Automatically connect to van when in range',
      value: autoConnect,
      onValueChange: setAutoConnect,
    },
  ];

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Settings</Text>
        <Text style={styles.subtitle}>Configure app preferences</Text>
      </View>

      <View style={styles.settingsContainer}>
        {settings.map((setting, index) => (
          <View key={index} style={styles.settingCard}>
            <View style={styles.settingInfo}>
              <Text style={styles.settingTitle}>{setting.title}</Text>
              <Text style={styles.settingDescription}>{setting.description}</Text>
            </View>
            <Switch
              value={setting.value}
              onValueChange={setting.onValueChange}
              trackColor={{ false: colors.textSecondary, true: colors.accent }}
              thumbColor={colors.text}
            />
          </View>
        ))}
      </View>

      <View style={styles.aboutSection}>
        <Text style={styles.aboutTitle}>About</Text>
        <Text style={styles.version}>Version 1.0.0</Text>
        <Text style={styles.copyright}>© 2024 STOmote</Text>
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
  settingsContainer: {
    padding: spacing.md,
  },
  settingCard: {
    backgroundColor: colors.primary,
    padding: spacing.lg,
    borderRadius: 12,
    marginBottom: spacing.md,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    ...shadows.medium,
  },
  settingInfo: {
    flex: 1,
    marginRight: spacing.md,
  },
  settingTitle: {
    ...typography.h3,
    color: colors.text,
    marginBottom: spacing.xs,
  },
  settingDescription: {
    ...typography.caption,
    color: colors.textSecondary,
  },
  aboutSection: {
    padding: spacing.xl,
    alignItems: 'center',
  },
  aboutTitle: {
    ...typography.h2,
    color: colors.text,
    marginBottom: spacing.md,
  },
  version: {
    ...typography.body,
    color: colors.textSecondary,
    marginBottom: spacing.xs,
  },
  copyright: {
    ...typography.caption,
    color: colors.textSecondary,
  },
});

export default SettingsScreen; 