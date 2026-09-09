export const siteConfig = {
  repositoryUrl: '#tools',
  releasesUrl: '#download',
  downloads: {
    windows: import.meta.env.VITE_WINDOWS_DOWNLOAD_URL || '/downloads/Developer%20Utility%20Setup%201.0.0.exe',
    mac: import.meta.env.VITE_MAC_DOWNLOAD_URL || '',
  },
} as const
