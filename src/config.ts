export const siteConfig = {
  version: import.meta.env.VITE_APP_VERSION || '1.0.0',
  repositoryUrl: import.meta.env.VITE_GITHUB_REPOSITORY_URL || 'https://github.com/nitishk090/Developer-Utility-Tool',
  downloads: {
    // Google Drive must be shared with "Anyone with the link" as Viewer.
    windows: import.meta.env.VITE_WINDOWS_DOWNLOAD_URL || 'https://drive.google.com/uc?export=download&id=18H3ZQCKszPx-kxrL7E4xdG9Tp79o-LXJ',
    mac: import.meta.env.VITE_MAC_DOWNLOAD_URL || '',
  },
} as const
