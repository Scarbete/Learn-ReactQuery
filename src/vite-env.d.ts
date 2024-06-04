/// <reference types="vite/client" />

type ImportMetaEnv = {
    readonly VITE_APP_BASE_URL: string
}

type ImportMeta = {
    readonly env: ImportMetaEnv
}