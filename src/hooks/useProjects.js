import { useState, useEffect, useCallback } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { initialProjects } from '../data/initialData';

const STORAGE_KEY = '@portfolio_projects';

export function useProjects() {
  const [projects, setProjects] = useState(initialProjects);
  const [loaded, setLoaded] = useState(false);

  // Load projects from AsyncStorage on mount
  useEffect(() => {
    const load = async () => {
      try {
        const stored = await AsyncStorage.getItem(STORAGE_KEY);
        if (stored) {
          const parsed = JSON.parse(stored);
          if (Array.isArray(parsed) && parsed.length > 0) {
            setProjects(parsed);
          }
        }
      } catch (e) {
        console.warn('Błąd ładowania projektów:', e);
      }
      setLoaded(true);
    };
    load();
  }, []);

  // Save projects to AsyncStorage whenever they change
  useEffect(() => {
    if (!loaded) return;
    const save = async () => {
      try {
        await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(projects));
      } catch (e) {
        console.warn('Błąd zapisywania projektów:', e);
      }
    };
    save();
  }, [projects, loaded]);

  const addProject = useCallback((newProject) => {
    const project = {
      id: String(Date.now()),
      name: newProject.name,
      subtitle: newProject.subtitle,
      description: newProject.description,
      tech: newProject.tech
        ? newProject.tech.split(',').map((t) => t.trim()).filter(Boolean)
        : [],
      icon: newProject.icon || '📁',
      color: '#00C853',
      github: newProject.github || '',
      features: newProject.features
        ? newProject.features.split(',').map((f) => f.trim()).filter(Boolean)
        : [],
    };
    setProjects((prev) => [project, ...prev]);
    return true;
  }, []);

  const getProjectById = useCallback(
    (id) => projects.find((p) => p.id === id) || null,
    [projects]
  );

  return { projects, addProject, getProjectById, loaded };
}
