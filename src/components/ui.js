import React from 'react';
import { View, Text, TouchableOpacity, TextInput, ScrollView, StyleSheet } from 'react-native';
import { colors, radius, spacing, typography, shadows } from '../styles/tokens';

// ── Header ──
export const Header = ({ title, back, onBack, right }) => (
  <View style={s.header}>
    {back ? (
      <TouchableOpacity style={s.backBtn} onPress={onBack}>
        <Text style={s.backArrow}>‹</Text>
      </TouchableOpacity>
    ) : <View style={{ width: 32 }} />}
    <Text style={[s.headerTitle, back && { fontSize: 18 }]} numberOfLines={1}>{title}</Text>
    {right || <View style={{ width: 32 }} />}
  </View>
);

// ── Primary Button ──
export const PrimaryButton = ({ title, onPress, disabled }) => (
  <TouchableOpacity
    onPress={onPress}
    disabled={disabled}
    activeOpacity={0.8}
    style={[s.primaryBtn, shadows.glow, disabled && { backgroundColor: colors.border, opacity: 0.5 }]}
  >
    <Text style={s.primaryBtnText}>{title}</Text>
  </TouchableOpacity>
);

// ── Input Field ──
export const InputField = ({ label, placeholder, value, onChangeText, multiline, error, keyboardType }) => (
  <View style={s.inputGroup}>
    <Text style={s.inputLabel}>{label}</Text>
    <TextInput
      style={[s.inputBox, multiline && { height: 100, textAlignVertical: 'top' }, error && { borderColor: colors.red }]}
      placeholder={placeholder}
      placeholderTextColor={colors.textMuted}
      value={value}
      onChangeText={onChangeText}
      multiline={multiline}
      keyboardType={keyboardType || 'default'}
    />
    {error ? <Text style={s.errorText}>{error}</Text> : null}
  </View>
);

// ── Section Title ──
export const SectionTitle = ({ children }) => (
  <View style={s.sectionTitle}>
    <View style={s.sectionBar} />
    <Text style={s.sectionText}>{children}</Text>
  </View>
);

// ── Skill Badge ──
export const SkillBadge = ({ label }) => (
  <View style={s.skillBadge}>
    <Text style={s.skillText}>{label}</Text>
  </View>
);

// ── Project Card ──
export const ProjectCard = ({ project, onPress }) => (
  <TouchableOpacity style={s.projectCard} onPress={() => onPress?.(project.id)} activeOpacity={0.7}>
    <View style={[s.projectIcon, { backgroundColor: project.color + '20' }]}>
      <Text style={{ fontSize: 28 }}>{project.icon}</Text>
    </View>
    <View style={{ flex: 1, gap: 4 }}>
      <Text style={s.projectName}>{project.name}</Text>
      <Text style={s.projectSub}>{project.subtitle}</Text>
      <View style={s.techRow}>
        {project.tech.slice(0, 3).map((t, i) => (
          <View key={i} style={s.techBadge}>
            <Text style={s.techText}>{t}</Text>
          </View>
        ))}
      </View>
    </View>
    <Text style={s.chevron}>›</Text>
  </TouchableOpacity>
);

// ── Contact Row ──
export const ContactRow = ({ icon, label, value }) => (
  <View style={s.contactRow}>
    <Text style={{ fontSize: 20 }}>{icon}</Text>
    <View style={{ flex: 1 }}>
      <Text style={s.contactLabel}>{label}</Text>
      <Text style={s.contactValue}>{value || '—'}</Text>
    </View>
  </View>
);

// ── Stat Block ──
export const StatBlock = ({ value, label }) => (
  <View style={s.statBlock}>
    <Text style={s.statValue}>{value}</Text>
    <Text style={s.statLabel}>{label}</Text>
  </View>
);

// ── Styles ──
const s = StyleSheet.create({
  header: {
    flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between',
    paddingHorizontal: spacing.xl, paddingTop: spacing.lg, paddingBottom: spacing.sm,
  },
  backBtn: {
    width: 32, height: 32, borderRadius: 10, borderWidth: 1, borderColor: colors.border,
    alignItems: 'center', justifyContent: 'center',
  },
  backArrow: { fontSize: 20, color: colors.text, marginTop: -2 },
  headerTitle: { ...typography.subheading, color: colors.text, flex: 1, textAlign: 'center' },

  primaryBtn: {
    backgroundColor: colors.green, borderRadius: radius.lg,
    paddingVertical: 15, paddingHorizontal: spacing.xxl, alignItems: 'center',
  },
  primaryBtnText: { color: colors.white, fontSize: 15, fontWeight: '800', textTransform: 'uppercase', letterSpacing: 0.3 },

  inputGroup: { gap: 6 },
  inputLabel: { ...typography.caption, color: colors.textSecondary },
  inputBox: {
    borderWidth: 1.5, borderColor: colors.border, borderRadius: radius.lg,
    paddingHorizontal: spacing.lg, paddingVertical: 14,
    fontSize: 14, color: colors.text, backgroundColor: colors.card,
  },
  errorText: { fontSize: 12, color: colors.red, marginTop: 2 },

  sectionTitle: { flexDirection: 'row', alignItems: 'center', gap: spacing.sm },
  sectionBar: { width: 3, height: 18, borderRadius: 2, backgroundColor: colors.green },
  sectionText: { ...typography.sectionTitle, color: colors.text },

  skillBadge: {
    backgroundColor: colors.greenGlowLight, borderRadius: radius.sm,
    paddingHorizontal: spacing.md, paddingVertical: 6,
    borderWidth: 1, borderColor: colors.borderGreen,
  },
  skillText: { fontSize: 12, fontWeight: '600', color: colors.greenBright },

  projectCard: {
    flexDirection: 'row', alignItems: 'center', gap: 14,
    backgroundColor: colors.card, borderRadius: radius.lg,
    padding: spacing.lg, borderWidth: 1, borderColor: colors.border,
  },
  projectIcon: {
    width: 56, height: 56, borderRadius: radius.md,
    alignItems: 'center', justifyContent: 'center',
  },
  projectName: { fontWeight: '700', fontSize: 16, color: colors.text },
  projectSub: { fontSize: 12, color: colors.textSecondary },
  techRow: { flexDirection: 'row', gap: 6, marginTop: 4, flexWrap: 'wrap' },
  techBadge: {
    backgroundColor: colors.surface, borderRadius: 6,
    paddingHorizontal: 8, paddingVertical: 3,
    borderWidth: 1, borderColor: colors.border,
  },
  techText: { fontSize: 10, fontWeight: '600', color: colors.textSecondary },
  chevron: { fontSize: 18, color: colors.textMuted },

  contactRow: {
    flexDirection: 'row', alignItems: 'center', gap: spacing.lg,
    backgroundColor: colors.card, borderRadius: radius.lg,
    padding: spacing.lg, borderWidth: 1, borderColor: colors.border,
  },
  contactLabel: { ...typography.caption, color: colors.textSecondary, marginBottom: 2 },
  contactValue: { fontSize: 14, fontWeight: '600', color: colors.text },

  statBlock: {
    flex: 1, backgroundColor: colors.card, borderRadius: radius.lg,
    padding: spacing.lg, alignItems: 'center',
    borderWidth: 1, borderColor: colors.border,
  },
  statValue: { ...typography.stat, color: colors.green },
  statLabel: { ...typography.tiny, color: colors.textSecondary, marginTop: 4 },
});
