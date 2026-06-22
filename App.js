import React, { useState, useCallback } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Platform, StatusBar as RNStatusBar } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { useProjects } from './src/hooks/useProjects';
import { colors, radius } from './src/styles/tokens';

import ProfileScreen from './src/screens/ProfileScreen';
import ProjectsScreen from './src/screens/ProjectsScreen';
import ProjectDetailScreen from './src/screens/ProjectDetailScreen';
import AddProjectScreen from './src/screens/AddProjectScreen';
import ContactScreen from './src/screens/ContactScreen';

const tabs = [
  { key: 'profile', icon: '👤', label: 'PROFIL' },
  { key: 'projects', icon: '📁', label: 'PROJEKTY' },
  { key: 'contact', icon: '📬', label: 'KONTAKT' },
];

function BottomTabBar({ active, onSelect }) {
  return (
    <View style={s.tabBar}>
      {tabs.map((tab) => {
        const isActive = active === tab.key;
        return (
          <TouchableOpacity key={tab.key} style={s.tabItem} onPress={() => onSelect(tab.key)}>
            <View style={[s.tabIconBase, isActive && s.tabIconActive]}>
              <Text style={{ fontSize: 18 }}>{tab.icon}</Text>
            </View>
            <Text style={[s.tabLabel, isActive && s.tabLabelActive]}>{tab.label}</Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

export default function App() {
  const [route, setRoute] = useState('profile');
  const [selectedProjectId, setSelectedProjectId] = useState(null);
  const { projects, addProject, getProjectById, loaded } = useProjects();

  const navigate = useCallback((screen) => setRoute(screen), []);
  const handleProjectSelect = useCallback((id) => {
    setSelectedProjectId(id);
    setRoute('projectDetail');
  }, []);

  const activeTab = ['projectDetail', 'addProject'].includes(route) ? 'projects' : route;
  const showTabBar = !['projectDetail', 'addProject'].includes(route);

  const renderScreen = () => {
    switch (route) {
      case 'profile': return <ProfileScreen projectCount={projects.length} />;
      case 'projects': return <ProjectsScreen projects={projects} onProjectSelect={handleProjectSelect} onNavigate={navigate} />;
      case 'projectDetail': return <ProjectDetailScreen project={getProjectById(selectedProjectId)} onNavigate={navigate} />;
      case 'addProject': return <AddProjectScreen onAddProject={addProject} onNavigate={navigate} />;
      case 'contact': return <ContactScreen />;
      default: return <ProfileScreen projectCount={projects.length} />;
    }
  };

  if (!loaded) {
    return (
      <View style={s.loading}>
        <Text style={{ color: colors.green, fontSize: 24 }}>🚀</Text>
        <Text style={{ color: colors.textSecondary, marginTop: 8 }}>Ładowanie...</Text>
      </View>
    );
  }

  return (
    <View style={s.container}>
      <StatusBar style="light" />
      <View style={s.screen}>{renderScreen()}</View>
      {showTabBar && <BottomTabBar active={activeTab} onSelect={navigate} />}
    </View>
  );
}

const s = StyleSheet.create({
  container: {
    backgroundColor: colors.bg,
    paddingTop: Platform.OS === 'android' ? RNStatusBar.currentHeight : 0,
    maxWidth: Platform.OS === 'web' ? 430 : undefined,
    width: '100%',
    alignSelf: Platform.OS === 'web' ? 'center' : undefined,
    ...(Platform.OS === 'web'
      ? { height: '100vh', display: 'flex', flexDirection: 'column' }
      : { flex: 1 }
    ),
  },
  loading: {
    backgroundColor: colors.bg,
    alignItems: 'center',
    justifyContent: 'center',
    ...(Platform.OS === 'web' ? { height: '100vh' } : { flex: 1 }),
  },
  screen: {
    flex: 1,
    ...(Platform.OS === 'web' ? { overflow: 'hidden' } : {}),
  },
  tabBar: {
    flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center',
    height: 70, backgroundColor: colors.surface,
    borderTopWidth: 1, borderTopColor: colors.border,
    flexShrink: 0,
  },
  tabItem: { alignItems: 'center', gap: 4, paddingVertical: 8 },
  tabIconBase: {
    width: 40, height: 40, borderRadius: radius.md,
    alignItems: 'center', justifyContent: 'center',
  },
  tabIconActive: { backgroundColor: colors.green },
  tabLabel: {
    fontSize: 9, fontWeight: '500', color: colors.textSecondary,
    textTransform: 'uppercase', letterSpacing: 0.6,
  },
  tabLabelActive: { color: colors.green, fontWeight: '700' },
});
