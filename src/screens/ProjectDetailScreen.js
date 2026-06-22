import React from 'react';
import { View, Text, ScrollView, StyleSheet, Platform } from 'react-native';
import { colors, spacing, radius, typography } from '../styles/tokens';
import { Header, SectionTitle } from '../components/ui';

export default function ProjectDetailScreen({ project, onNavigate }) {
  if (!project) {
    return (
      <View style={st.safe}>
        <Header title="Nie znaleziono" back onBack={() => onNavigate('projects')} />
        <View style={st.empty}><Text style={st.emptyText}>Projekt nie istnieje</Text></View>
      </View>
    );
  }

  return (
    <View style={st.safe}>
      <Header title={project.name} back onBack={() => onNavigate('projects')} />

      <ScrollView
        style={st.scroll}
        contentContainerStyle={st.content}
        showsVerticalScrollIndicator={true}
      >
        {/* Hero */}
        <View style={[st.hero, { backgroundColor: project.color + '15', borderColor: project.color + '30' }]}>  
          <Text style={{ fontSize: 56 }}>{project.icon}</Text>
          <Text style={st.heroTitle}>{project.name}</Text>
          <Text style={st.heroSub}>{project.subtitle}</Text>
        </View>

        {/* Description */}
        <SectionTitle>Opis</SectionTitle>
        <View style={st.card}>
          <Text style={st.descText}>{project.description}</Text>
        </View>

        {/* Technologies */}
        <SectionTitle>Technologie</SectionTitle>
        <View style={st.techRow}>
          {project.tech.map((t, i) => (
            <View key={i} style={[st.techBadge, { borderColor: project.color + '40' }]}>
              <Text style={[st.techText, { color: project.color }]}>{t}</Text>
            </View>
          ))}
        </View>

        {/* Features */}
        {project.features && project.features.length > 0 && (
          <View style={{ gap: 20 }}>
            <SectionTitle>Funkcjonalności</SectionTitle>
            <View style={st.featuresList}>
              {project.features.map((f, i) => (
                <View key={i} style={st.featureItem}>
                  <View style={[st.featureDot, { backgroundColor: project.color }]} />
                  <Text style={st.featureText}>{f}</Text>
                </View>
              ))}
            </View>
          </View>
        )}

        {/* GitHub */}
        {project.github ? (
          <View style={st.githubCard}>
            <Text style={{ fontSize: 18 }}>🔗</Text>
            <View style={{ flex: 1 }}>
              <Text style={st.ghLabel}>REPOZYTORIUM</Text>
              <Text style={st.ghUrl}>{project.github}</Text>
            </View>
          </View>
        ) : null}
      </ScrollView>
    </View>
  );
}

const st = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: colors.bg,
    ...(Platform.OS === 'web' ? { height: '100%', overflow: 'hidden' } : {}),
  },
  scroll: {
    flex: 1,
    ...(Platform.OS === 'web' ? { overflow: 'auto' } : {}),
  },
  content: {
    paddingHorizontal: spacing.xl,
    paddingTop: spacing.sm,
    paddingBottom: 60,
    gap: 20,
  },
  hero: {
    alignItems: 'center', padding: spacing.xxxl, borderRadius: radius.lg,
    borderWidth: 1, gap: spacing.sm,
  },
  heroTitle: { fontSize: 26, fontWeight: '800', color: colors.text },
  heroSub: { fontSize: 14, color: colors.textSecondary, fontWeight: '600' },
  card: {
    backgroundColor: colors.card, borderRadius: radius.lg,
    padding: spacing.lg, borderWidth: 1, borderColor: colors.border,
  },
  descText: { fontSize: 14, lineHeight: 22, color: colors.textSecondary },
  techRow: { flexDirection: 'row', flexWrap: 'wrap', gap: spacing.sm },
  techBadge: {
    backgroundColor: colors.card, borderRadius: radius.sm,
    paddingHorizontal: spacing.md, paddingVertical: 8, borderWidth: 1,
  },
  techText: { fontSize: 13, fontWeight: '700' },
  featuresList: { gap: spacing.sm },
  featureItem: {
    flexDirection: 'row', alignItems: 'flex-start', gap: spacing.md,
    backgroundColor: colors.card, borderRadius: radius.md,
    padding: spacing.lg, borderWidth: 1, borderColor: colors.border,
  },
  featureDot: { width: 8, height: 8, borderRadius: 4, marginTop: 5 },
  featureText: { flex: 1, fontSize: 13, color: colors.text, lineHeight: 20 },
  githubCard: {
    flexDirection: 'row', alignItems: 'center', gap: spacing.lg,
    backgroundColor: colors.card, borderRadius: radius.lg,
    padding: spacing.lg, borderWidth: 1, borderColor: colors.borderGreen,
  },
  ghLabel: { fontSize: 10, fontWeight: '700', color: colors.textSecondary, textTransform: 'uppercase', letterSpacing: 0.6, marginBottom: 2 },
  ghUrl: { fontSize: 12, color: colors.green, fontWeight: '600' },
  empty: { flex: 1, alignItems: 'center', justifyContent: 'center' },
  emptyText: { color: colors.textSecondary, fontSize: 14 },
});
