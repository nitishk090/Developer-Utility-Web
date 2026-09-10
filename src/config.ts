export const siteConfig = {
  repositoryUrl: '#tools',
  releasesUrl: '#download',
  downloads: {
    windows: import.meta.env.VITE_WINDOWS_DOWNLOAD_URL || 'https://github.com/nitishk090/Developer-Utility-Web/releases/latest/download/Developer-Utility-Setup.exe',
    mac: import.meta.env.VITE_MAC_DOWNLOAD_URL || '',
  },
} as const
