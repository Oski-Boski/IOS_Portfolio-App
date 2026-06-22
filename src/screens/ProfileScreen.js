import React from 'react';
import { View, Text, ScrollView, Image, StyleSheet, Platform } from 'react-native';
import { colors, spacing, radius, shadows, typography } from '../styles/tokens';
import { SectionTitle, SkillBadge, StatBlock } from '../components/ui';
import { profileData } from '../data/initialData';

export default function ProfileScreen({ projectCount }) {
  return (
    <View style={st.safe}>
      <ScrollView style={Platform.OS === 'web' ? { flex: 1, overflow: 'auto' } : { flex: 1 }} contentContainerStyle={st.content} showsVerticalScrollIndicator={false}>
        {/* Avatar & Name */}
        <View style={st.avatarSection}>
          <Image source={require('../../assets/avatar.jpg')} style={[st.avatar, shadows.glow]} />
          <Text style={st.name}>{profileData.name}</Text>
          <Text style={st.title}>{profileData.title}</Text>
          <View style={st.schoolBadge}>
            <Text style={st.schoolText}>🎓 {profileData.school}</Text>
          </View>
        </View>

        {/* Stats */}
        <View style={st.statsRow}>
          <StatBlock value={projectCount} label="Projekty" />
          <StatBlock value={profileData.skills.length} label="Umiejętności" />
          <StatBlock value="2026" label="Rok" />
        </View>

        {/* Bio */}
        <SectionTitle>O mnie</SectionTitle>
        <View style={st.bioCard}>
          <Text style={st.bioText}>{profileData.bio}</Text>
        </View>

        {/* Skills */}
        <SectionTitle>Umiejętności</SectionTitle>
        <View style={st.skillsGrid}>
          {profileData.skills.map((skill, i) => (
            <SkillBadge key={i} label={skill} />
          ))}
        </View>

        {/* GitHub */}
        <View style={st.githubCard}>
          <Text style={{ fontSize: 20 }}>🔗</Text>
          <View style={{ flex: 1 }}>
            <Text style={st.ghLabel}>GitHub</Text>
            <Text style={st.ghUrl}>{profileData.github}</Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const st = StyleSheet.create({
  safe: { flex: 1, backgroundColor: colors.bg, ...(Platform.OS === 'web' ? { overflow: 'hidden' } : {}) },
  content: { paddingHorizontal: spacing.xl, paddingTop: spacing.xxl, paddingBottom: 100, gap: spacing.xl },
  avatarSection: { alignItems: 'center', gap: spacing.sm },
  avatar: {
    width: 100, height: 100, borderRadius: 50, backgroundColor: colors.green,
    alignItems: 'center', justifyContent: 'center',
  },
  name: { ...typography.heading, color: colors.text, marginTop: spacing.sm },
  title: { fontSize: 15, color: colors.greenBright, fontWeight: '600' },
  schoolBadge: {
    backgroundColor: colors.greenGlowLight, borderRadius: radius.sm,
    paddingHorizontal: spacing.md, paddingVertical: 6,
    borderWidth: 1, borderColor: colors.borderGreen, marginTop: 4,
  },
  schoolText: { fontSize: 12, fontWeight: '600', color: colors.textSecondary },
  statsRow: { flexDirection: 'row', gap: 10 },
  bioCard: {
    backgroundColor: colors.card, borderRadius: radius.lg,
    padding: spacing.lg, borderWidth: 1, borderColor: colors.border,
  },
  bioText: { fontSize: 14, lineHeight: 22, color: colors.textSecondary },
  skillsGrid: { flexDirection: 'row', flexWrap: 'wrap', gap: spacing.sm },
  githubCard: {
    flexDirection: 'row', alignItems: 'center', gap: spacing.lg,
    backgroundColor: colors.card, borderRadius: radius.lg,
    padding: spacing.lg, borderWidth: 1, borderColor: colors.border,
  },
  ghLabel: { ...typography.caption, color: colors.textSecondary, marginBottom: 2 },
  ghUrl: { fontSize: 13, color: colors.green, fontWeight: '600' },
});
