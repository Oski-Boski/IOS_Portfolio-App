import React from 'react';
import { View, Text, ScrollView, StyleSheet, Platform } from 'react-native';
import { colors, spacing, radius, typography, shadows } from '../styles/tokens';
import { SectionTitle, ContactRow } from '../components/ui';
import { contactData, profileData } from '../data/initialData';

export default function ContactScreen() {
  return (
    <View style={st.safe}>
      <ScrollView style={Platform.OS === "web" ? { flex: 1, overflow: "auto" } : { flex: 1 }} contentContainerStyle={st.content} showsVerticalScrollIndicator={false}>
        {/* Header card */}
        <View style={[st.heroCard, shadows.glow]}>
          <Text style={{ fontSize: 36 }}>📬</Text>
          <Text style={st.heroTitle}>Kontakt</Text>
          <Text style={st.heroSub}>Chętnie porozmawiam o współpracy!</Text>
        </View>

        <SectionTitle>Dane kontaktowe</SectionTitle>

        <View style={st.list}>
          <ContactRow icon="📧" label="E-MAIL" value={contactData.email} />
          <ContactRow icon="🔗" label="GITHUB" value={contactData.github} />
          <ContactRow icon="📍" label="LOKALIZACJA" value={contactData.location} />
          <ContactRow icon="🎓" label="UCZELNIA" value={contactData.school} />
          {contactData.linkedin ? (
            <ContactRow icon="💼" label="LINKEDIN" value={contactData.linkedin} />
          ) : null}
          {contactData.phone ? (
            <ContactRow icon="📱" label="TELEFON" value={contactData.phone} />
          ) : null}
        </View>

        <SectionTitle>Dostępność</SectionTitle>
        <View style={st.availCard}>
          <View style={st.availDot} />
          <Text style={st.availText}>Otwarty na projekty i współpracę</Text>
        </View>
      </ScrollView>
    </View>
  );
}

const st = StyleSheet.create({
  safe: { flex: 1, backgroundColor: colors.bg, ...(Platform.OS === 'web' ? { overflow: 'hidden' } : {}) },
  content: { paddingHorizontal: spacing.xl, paddingTop: spacing.xxl, paddingBottom: 100, gap: spacing.xl },
  heroCard: {
    backgroundColor: colors.green, borderRadius: radius.lg,
    padding: spacing.xxxl, alignItems: 'center', gap: spacing.sm,
  },
  heroTitle: { ...typography.heading, color: colors.white },
  heroSub: { fontSize: 14, color: 'rgba(255,255,255,0.8)', fontWeight: '500', textAlign: 'center' },
  list: { gap: spacing.sm },
  availCard: {
    flexDirection: 'row', alignItems: 'center', gap: spacing.md,
    backgroundColor: colors.card, borderRadius: radius.lg,
    padding: spacing.lg, borderWidth: 1, borderColor: colors.borderGreen,
  },
  availDot: { width: 10, height: 10, borderRadius: 5, backgroundColor: colors.green },
  availText: { fontSize: 14, fontWeight: '600', color: colors.greenBright },
});
