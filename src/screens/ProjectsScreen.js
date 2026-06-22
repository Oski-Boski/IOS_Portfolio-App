import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, StyleSheet, Platform } from 'react-native';
import { colors, spacing, radius, typography } from '../styles/tokens';
import { ProjectCard, SectionTitle } from '../components/ui';

export default function ProjectsScreen({ projects, onProjectSelect, onNavigate }) {
  return (
    <View style={st.safe}>
      <View style={st.topBar}>
        <Text style={st.heading}>Moje Projekty</Text>
        <TouchableOpacity style={st.addBtn} onPress={() => onNavigate('addProject')} activeOpacity={0.7}>
          <Text style={st.addBtnText}>+ Dodaj</Text>
        </TouchableOpacity>
      </View>

      <ScrollView style={Platform.OS === "web" ? { flex: 1, overflow: "auto" } : { flex: 1 }} contentContainerStyle={st.content} showsVerticalScrollIndicator={false}>
        <SectionTitle>Portfolio ({projects.length})</SectionTitle>

        <View style={st.list}>
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} onPress={onProjectSelect} />
          ))}
        </View>

        {projects.length === 0 && (
          <View style={st.empty}>
            <Text style={{ fontSize: 48 }}>📂</Text>
            <Text style={st.emptyText}>Brak projektów</Text>
            <Text style={st.emptySubText}>Dodaj swój pierwszy projekt</Text>
          </View>
        )}
      </ScrollView>
    </View>
  );
}

const st = StyleSheet.create({
  safe: { flex: 1, backgroundColor: colors.bg, ...(Platform.OS === 'web' ? { overflow: 'hidden' } : {}) },
  topBar: {
    flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between',
    paddingHorizontal: spacing.xl, paddingTop: spacing.lg, paddingBottom: spacing.sm,
  },
  heading: { ...typography.heading, color: colors.text },
  addBtn: {
    backgroundColor: colors.green, borderRadius: radius.sm,
    paddingHorizontal: spacing.md, paddingVertical: 8,
  },
  addBtnText: { color: colors.white, fontSize: 13, fontWeight: '700' },
  content: { paddingHorizontal: spacing.xl, paddingTop: spacing.sm, paddingBottom: 100, gap: spacing.xl },
  list: { gap: spacing.md },
  empty: { alignItems: 'center', paddingVertical: 60, gap: spacing.sm },
  emptyText: { fontSize: 18, fontWeight: '700', color: colors.text },
  emptySubText: { fontSize: 14, color: colors.textSecondary },
});
