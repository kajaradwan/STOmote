import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { colors, spacing, typography, shadows } from '../constants/theme';

type ChecklistItem = {
  id: string;
  title: string;
  category: string;
  completed: boolean;
};

const ChecklistScreen = () => {
  const [checklistItems, setChecklistItems] = useState<ChecklistItem[]>([
    { id: '1', title: 'Check tire pressure', category: 'Pre-Departure', completed: false },
    { id: '2', title: 'Inspect roof vents', category: 'Pre-Departure', completed: false },
    { id: '3', title: 'Test all lights', category: 'Pre-Departure', completed: false },
    { id: '4', title: 'Check water levels', category: 'Systems', completed: false },
    { id: '5', title: 'Test AC system', category: 'Systems', completed: false },
    { id: '6', title: 'Verify awning operation', category: 'Systems', completed: false },
  ]);

  const toggleItem = (id: string) => {
    setChecklistItems(items =>
      items.map(item =>
        item.id === id ? { ...item, completed: !item.completed } : item
      )
    );
  };

  const categories = Array.from(new Set(checklistItems.map(item => item.category)));

  return (
    <ScrollView style={styles.container}>
      {categories.map(category => (
        <View key={category} style={styles.categorySection}>
          <Text style={styles.categoryTitle}>{category}</Text>
          {checklistItems
            .filter(item => item.category === category)
            .map(item => (
              <TouchableOpacity
                key={item.id}
                style={[styles.item, item.completed && styles.itemCompleted]}
                onPress={() => toggleItem(item.id)}
              >
                <View style={[styles.checkbox, item.completed && styles.checkboxCompleted]} />
                <Text style={[styles.itemText, item.completed && styles.itemTextCompleted]}>
                  {item.title}
                </Text>
              </TouchableOpacity>
            ))}
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  categorySection: {
    marginBottom: spacing.lg,
    padding: spacing.md,
  },
  categoryTitle: {
    ...typography.h2,
    color: colors.text,
    marginBottom: spacing.md,
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.primary,
    padding: spacing.md,
    borderRadius: 8,
    marginBottom: spacing.sm,
    ...shadows.small,
  },
  itemCompleted: {
    backgroundColor: colors.success,
  },
  checkbox: {
    width: 24,
    height: 24,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: colors.text,
    marginRight: spacing.md,
  },
  checkboxCompleted: {
    backgroundColor: colors.text,
  },
  itemText: {
    ...typography.body,
    color: colors.text,
    flex: 1,
  },
  itemTextCompleted: {
    textDecorationLine: 'line-through',
  },
});

export default ChecklistScreen; 