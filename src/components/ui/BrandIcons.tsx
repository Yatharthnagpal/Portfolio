import React from "react";

export interface IconProps {
  className?: string;
  size?: number;
}

export function GithubIcon({ className = "w-4 h-4" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
      />
    </svg>
  );
}

export function PythonIcon({ className = "w-4 h-4" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2c-5.2 0-5 .4-5 2.2v2h5v.8H5c-1.8 0-3 .9-3 3.5v3c0 1.8 1 3.5 3 3.5h1.2v-2.2c0-1.8 1.4-3.3 3.3-3.3h5.5c1.4 0 2.5-1.1 2.5-2.5v-3.5c0-1.8-.8-3.5-3.5-3.5H12zm-1.8 1.8a.9.9 0 110 1.8.9.9 0 010-1.8zM19 8.5h-1.2v2.2c0 1.8-1.4 3.3-3.3 3.3H9c-1.4 0-2.5 1.1-2.5 2.5v3.5C6.5 21.8 7.3 22 10 22h2c5.2 0 5-.4 5-2.2v-2h-5v-.8h7c1.8 0 3-.9 3-3.5v-3c0-1.8-1-3.5-3-3.5zm-5.2 11.7a.9.9 0 110-1.8.9.9 0 010 1.8z" />
    </svg>
  );
}

export function ReactIcon({ className = "w-4 h-4" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <ellipse cx="12" cy="12" rx="10" ry="4.5" />
      <ellipse cx="12" cy="12" rx="10" ry="4.5" transform="rotate(60 12 12)" />
      <ellipse cx="12" cy="12" rx="10" ry="4.5" transform="rotate(120 12 12)" />
      <circle cx="12" cy="12" r="2" fill="currentColor" />
    </svg>
  );
}

export function ReplitIcon({ className = "w-4 h-4" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M2 1.5A1.5 1.5 0 013.5 0h7A1.5 1.5 0 0112 1.5V6H3.5A1.5 1.5 0 012 4.5v-3zM2 13.5A1.5 1.5 0 013.5 12H12v4.5a1.5 1.5 0 01-1.5 1.5h-7A1.5 1.5 0 012 16.5v-3zM12 6h8.5A1.5 1.5 0 0122 7.5v3a1.5 1.5 0 01-1.5 1.5H12V6z" />
    </svg>
  );
}

export function AzureIcon({ className = "w-4 h-4" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M5.4 20L1.5 14.5l8.1-13.8h5.9L5.4 20zm5.1-4.2l3.4 4.2h8.6L14 8.7l-3.5 7.1z" />
    </svg>
  );
}

export function DatabricksIcon({ className = "w-4 h-4" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0L1.5 6v12L12 24l10.5-6V6L12 0zm0 2.5l7.5 4.3v2.8L12 5.3 4.5 9.6V6.8L12 2.5zm-7.5 9.8l7.5 4.3 7.5-4.3v2.8L12 19.5l-7.5-4.3V12.3z" />
    </svg>
  );
}

export function LangChainIcon({ className = "w-4 h-4" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path strokeLinecap="round" strokeLinejoin="round" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
    </svg>
  );
}

export function PytorchIcon({ className = "w-4 h-4" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M13.6 1.7L12 0l-1.6 1.7c-3.8 4-4.8 9.4-2.6 13.9 1.4 2.8 4 4.8 7.1 5.2.5.1 1.1.1 1.6 0 4.1-.6 7.4-3.8 7.9-8 .5-4.2-1.8-8.2-5.4-10.1l-1.4 1.4c2.8 1.5 4.6 4.6 4.2 7.8-.4 3.3-2.9 5.8-6.2 6.3-.4.1-.9.1-1.3 0-2.4-.3-4.5-1.9-5.5-4.1-1.7-3.6-.9-8 2.2-11.2zm-.6 5.5c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" />
    </svg>
  );
}

export function TensorflowIcon({ className = "w-4 h-4" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0l9.5 5.5v11L12 22 2.5 16.5v-11L12 0zm0 2.3L4.5 6.6v8.8L12 19.7l7.5-4.3V6.6L12 2.3zM12 7l4 2.3v4.6L12 16.3l-4-2.3V9.3L12 7z" />
    </svg>
  );
}

export function FastapiIcon({ className = "w-4 h-4" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C5.37 0 0 5.37 0 12s5.37 12 12 12 12-5.37 12-12S18.63 0 12 0zm-1 5h4l-2 6h3l-6 8v-6h-3l4-8z" />
    </svg>
  );
}

export function DockerIcon({ className = "w-4 h-4" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M13.98 11.08h2.12v2.12h-2.12zm-3.05 0h2.13v2.12h-2.13zm-3.06 0h2.13v2.12H7.87zm-3.06 0h2.13v2.12H4.81zm9.17-3.06h2.12v2.13h-2.12zm-3.05 0h2.13v2.13h-2.13zm-3.06 0h2.13v2.13H7.87zm9.17-3.06h2.12v2.13h-2.12zM.5 14.5s1.2 5.5 8 5.5c6 0 10.5-3.5 12.5-7.5.5.2 2 .5 2.5.5s1-.5 1-1c0-.5-.5-.8-1-1-1.5-.5-3.5-.2-4.5.5-2-1.5-5-2-7.5-2H.5v5.5z" />
    </svg>
  );
}

export function AwsIcon({ className = "w-4 h-4" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M6.7 13.3c-1.3 0-2.3-.4-3-1.1C3 11.5 2.6 10.5 2.6 9.2c0-1.4.5-2.4 1.4-3.2.9-.8 2.2-1.2 3.8-1.2.9 0 1.7.1 2.4.3v-.6c0-.8-.2-1.4-.7-1.8-.5-.4-1.2-.6-2-.6-.9 0-1.8.3-2.6.8L4.1 1.5c1.1-.7 2.4-1 3.9-1 1.7 0 3 .4 3.9 1.3.9.9 1.3 2.1 1.3 3.8v7.4h-2.3v-1.4c-.7.6-1.5 1.1-2.4 1.4-.6.2-1.2.3-1.8.3zm.7-1.9c.9 0 1.7-.3 2.3-.9.6-.6.9-1.4.9-2.3v-.8c-.6-.2-1.3-.3-2-.3-1.1 0-1.9.2-2.4.7-.5.5-.8 1.1-.8 1.9 0 .7.2 1.2.6 1.5.4.1.9.2 1.4.2zm14.1 1.7c-4.4 3.2-10.8 4.9-16.3 4.9-7.7 0-13.7-2.6-18.6-6.9l1.8-1.4c4.3 3.8 9.5 6 16.3 6 4.8 0 10.4-1.4 14.4-4.2l2.4 1.6z" />
    </svg>
  );
}

export function PostgresqlIcon({ className = "w-4 h-4" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C5.37 0 0 5.37 0 12s5.37 12 12 12 12-5.37 12-12S18.63 0 12 0zm4.5 15.5c-.8.5-2.1.8-3.5.8-3 0-5.5-2-5.5-5 0-2.8 2.2-5 5-5 1.2 0 2.4.4 3.2 1.1l-1.4 1.4c-.5-.4-1.1-.6-1.8-.6-1.8 0-3.1 1.4-3.1 3.1 0 1.8 1.4 3.1 3.1 3.1.8 0 1.5-.3 2-.7v-1.8h-2v-1.8h3.8v4.4z" />
    </svg>
  );
}

export function MongodbIcon({ className = "w-4 h-4" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C11.5 3 7 7.5 7 12.5c0 3.6 2.2 6.7 5 8.2 2.8-1.5 5-4.6 5-8.2C17 7.5 12.5 3 12 0zm.5 18.5v-13c2 2.5 3 5 3 7 0 2.5-1.3 4.8-3 6z" />
    </svg>
  );
}

export function GitIcon({ className = "w-4 h-4" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M23.5 10.9L13.1.5c-.7-.7-1.8-.7-2.5 0L8.7 2.4l3.1 3.1c.8-.3 1.7-.1 2.3.5.6.6.8 1.5.5 2.3l3 3c.8-.3 1.7-.1 2.3.5.8.8.8 2.1 0 2.9s-2.1.8-2.9 0c-.6-.6-.8-1.5-.5-2.3l-2.8-2.8v7.1c.3.2.5.5.6.8.4.8.1 1.9-.7 2.4-.8.5-1.9.3-2.4-.5-.4-.6-.4-1.4-.1-2.1v-7.2c-.3-.2-.5-.5-.6-.8-.4-.8-.1-1.9.7-2.4.5-.3 1.1-.4 1.7-.2L9.8 1.3.5 10.7c-.7.7-.7 1.8 0 2.5l10.4 10.4c.7.7 1.8.7 2.5 0l10.1-10.2c.7-.7.7-1.8 0-2.5z" />
    </svg>
  );
}

export function VscodeIcon({ className = "w-4 h-4" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M23.15 2.59L17.5.35c-.42-.17-.9 0-1.12.39L10.3 10.38 5.75 6.94c-.38-.28-.9-.25-1.24.08L.55 10.82c-.36.35-.36.93 0 1.28l3.96 3.8-3.96 3.8c-.36.35-.36.93 0 1.28l3.96 3.8c.34.33.86.36 1.24.08l4.55-3.44 6.08 9.64c.22.39.7.56 1.12.39l5.65-2.24c.51-.2.85-.7.85-1.25V3.84c0-.55-.34-1.05-.85-1.25z" />
    </svg>
  );
}

// Icon getter helper mapping tech names to SVG brand icons
export function getTechIcon(name: string, className = "w-4 h-4"): React.ReactNode {
  const lower = name.toLowerCase();

  if (lower.includes("github")) return <GithubIcon className={className} />;
  if (lower.includes("python")) return <PythonIcon className={className} />;
  if (lower.includes("react")) return <ReactIcon className={className} />;
  if (lower.includes("replit")) return <ReplitIcon className={className} />;
  if (lower.includes("azure")) return <AzureIcon className={className} />;
  if (lower.includes("databrick")) return <DatabricksIcon className={className} />;
  if (lower.includes("langchain") || lower.includes("langgraph")) return <LangChainIcon className={className} />;
  if (lower.includes("pytorch")) return <PytorchIcon className={className} />;
  if (lower.includes("tensorflow")) return <TensorflowIcon className={className} />;
  if (lower.includes("fastapi")) return <FastapiIcon className={className} />;
  if (lower.includes("docker")) return <DockerIcon className={className} />;
  if (lower.includes("aws")) return <AwsIcon className={className} />;
  if (lower.includes("postgres")) return <PostgresqlIcon className={className} />;
  if (lower.includes("mongo")) return <MongodbIcon className={className} />;
  if (lower.includes("git")) return <GitIcon className={className} />;
  if (lower.includes("code") || lower.includes("vs code")) return <VscodeIcon className={className} />;

  // Default fallback dot icon
  return <div className="w-2 h-2 rounded-full bg-green-primary" />;
}
