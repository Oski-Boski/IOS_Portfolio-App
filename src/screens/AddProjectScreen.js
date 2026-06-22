import React, { useState } from 'react';
import { View, Text, ScrollView, StyleSheet, Alert, Platform } from 'react-native';
import { colors, spacing } from '../styles/tokens';
import { Header, InputField, PrimaryButton } from '../components/ui';

export default function AddProjectScreen({ onAddProject, onNavigate }) {
  const [form, setForm] = useState({
    name: '',
    subtitle: '',
    description: '',
    tech: '',
    icon: '',
    github: '',
    features: '',
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const update = (field) => (value) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    if (submitted) validate({ ...form, [field]: value });
  };

  const validate = (data) => {
    const errs = {};
    if (!data.name.trim()) errs.name = 'Nazwa jest wymagana';
    else if (data.name.trim().length < 2) errs.name = 'Min. 2 znaki';

    if (!data.subtitle.trim()) errs.subtitle = 'Podtytuł jest wymagany';

    if (!data.description.trim()) errs.description = 'Opis jest wymagany';
    else if (data.description.trim().length < 20) errs.description = 'Min. 20 znaków';

    if (!data.tech.trim()) errs.tech = 'Podaj min. 1 technologię';

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = () => {
    setSubmitted(true);
    if (!validate(form)) return;

    onAddProject(form);

    if (Platform.OS === 'web') {
      alert('Projekt dodany!');
    } else {
      Alert.alert('Sukces', 'Projekt został dodany do portfolio!');
    }

    onNavigate('projects');
  };

  return (
    <View style={st.safe}>
      <Header title="Nowy Projekt" back onBack={() => onNavigate('projects')} />

      <ScrollView
        style={st.scroll}
        contentContainerStyle={st.content}
        showsVerticalScrollIndicator={false}
      >
        <InputField
          label="Nazwa projektu *"
          placeholder="np. Moja Aplikacja"
          value={form.name}
          onChangeText={update('name')}
          error={errors.name}
        />

        <InputField
          label="Podtytuł *"
          placeholder="np. System Zarządzania Zadaniami"
          value={form.subtitle}
          onChangeText={update('subtitle')}
          error={errors.subtitle}
        />

        <InputField
          label="Opis projektu *"
          placeholder="Opisz czym jest projekt, jakie problemy rozwiązuje..."
          value={form.description}
          onChangeText={update('description')}
          multiline
          error={errors.description}
        />

        <InputField
          label="Technologie * (oddzielone przecinkami)"
          placeholder="np. React, Node.js, MongoDB"
          value={form.tech}
          onChangeText={update('tech')}
          error={errors.tech}
        />

        <InputField
          label="Emoji ikona"
          placeholder="np. 🚀 (opcjonalne)"
          value={form.icon}
          onChangeText={update('icon')}
        />

        <InputField
          label="Link do GitHub"
          placeholder="https://github.com/... (opcjonalne)"
          value={form.github}
          onChangeText={update('github')}
        />

        <InputField
          label="Funkcjonalności (oddzielone przecinkami)"
          placeholder="np. Logowanie, Dashboard, Raporty"
          value={form.features}
          onChangeText={update('features')}
          multiline
        />
      </ScrollView>

      <View style={st.btnWrap}>
        <PrimaryButton title="Dodaj projekt" onPress={handleSubmit} />
      </View>
    </View>
  );
}

const st = StyleSheet.create({
  safe: { flex: 1, backgroundColor: colors.bg, ...(Platform.OS === 'web' ? { overflow: 'hidden' } : {}) },
  scroll: { flex: 1, ...(Platform.OS === 'web' ? { overflow: 'auto' } : {}) },
  content: {
    paddingHorizontal: spacing.xl, paddingTop: spacing.lg,
    paddingBottom: spacing.xxxl, gap: spacing.xl,
  },
  btnWrap: {
    paddingHorizontal: spacing.xl, paddingBottom: spacing.xxxl, paddingTop: spacing.md,
  },
});
