"use client";

import { motion } from "framer-motion";
import {
  GithubIcon,
  ReactIcon,
  LangChainIcon,
  PythonIcon,
  AzureIcon,
  DatabricksIcon,
  PytorchIcon,
  FastapiIcon,
  DockerIcon,
  AwsIcon,
} from "@/components/ui/BrandIcons";

interface OrbitalIcon {
  name: string;
  icon: React.ReactNode;
  top: string;
  left: string;
  floatDelay: number;
}

// Icon positions precisely calibrated so the green corner point touches the 3D globe outline curvature
const orbitalIcons: OrbitalIcon[] = [
  {
    name: "GitHub",
    icon: <GithubIcon className="w-7 h-7 text-green-primary" />,
    top: "8%",
    left: "50%",
    floatDelay: 0,
  },
  {
    name: "React",
    icon: <ReactIcon className="w-7 h-7 text-cyan-400" />,
    top: "20%",
    left: "78%",
    floatDelay: 0.4,
  },
  {
    name: "LangChain",
    icon: <LangChainIcon className="w-7 h-7 text-emerald-400" />,
    top: "50%",
    left: "89%",
    floatDelay: 0.8,
  },
  {
    name: "Python",
    icon: <PythonIcon className="w-7 h-7 text-yellow-400" />,
    top: "78%",
    left: "78%",
    floatDelay: 1.2,
  },
  {
    name: "Azure",
    icon: <AzureIcon className="w-7 h-7 text-blue-400" />,
    top: "89%",
    left: "50%",
    floatDelay: 1.6,
  },
  {
    name: "Databricks",
    icon: <DatabricksIcon className="w-7 h-7 text-rose-400" />,
    top: "78%",
    left: "22%",
    floatDelay: 2.0,
  },
  {
    name: "PyTorch",
    icon: <PytorchIcon className="w-7 h-7 text-orange-400" />,
    top: "50%",
    left: "11%",
    floatDelay: 2.4,
  },
  {
    name: "FastAPI",
    icon: <FastapiIcon className="w-7 h-7 text-teal-400" />,
    top: "20%",
    left: "22%",
    floatDelay: 2.8,
  },
  {
    name: "Docker",
    icon: <DockerIcon className="w-7 h-7 text-sky-400" />,
    top: "34%",
    left: "34%",
    floatDelay: 1.0,
  },
  {
    name: "AWS",
    icon: <AwsIcon className="w-7 h-7 text-amber-400" />,
    top: "64%",
    left: "64%",
    floatDelay: 1.8,
  },
];

export default function OrbitalTechIcons() {
  return (
    <div className="hidden md:block absolute inset-0 pointer-events-none z-30 overflow-visible">
      {orbitalIcons.map((item) => (
        <motion.div
          key={item.name}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: item.floatDelay * 0.15 }}
          style={{ top: item.top, left: item.left }}
          className="absolute -translate-x-1/2 -translate-y-1/2 pointer-events-auto"
        >
          <motion.div
            animate={{
              y: [0, -6, 0],
            }}
            transition={{
              duration: 3.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: item.floatDelay,
            }}
            className="group relative flex items-center justify-center w-14 h-14 md:w-15 md:h-15 rounded-2xl bg-[#0a0f0a]/95 border-2 border-green-primary/50 glass-card backdrop-blur-2xl shadow-[0_0_25px_rgba(34,197,94,0.35)] hover:border-green-glow hover:shadow-[0_0_35px_rgba(74,222,128,0.6)] hover:scale-130 transition-all duration-300 cursor-pointer"
          >
            {item.icon}

            {/* Glowing Green Corner Point touching the Globe Outline */}
            <span className="absolute -top-1.5 -right-1.5 w-3.5 h-3.5 rounded-full bg-green-glow shadow-[0_0_10px_rgba(74,222,128,0.8)] animate-ping" />
            <span className="absolute -top-1.5 -right-1.5 w-3.5 h-3.5 rounded-full bg-green-primary border-2 border-bg-primary shadow-[0_0_8px_rgba(34,197,94,1)]" />

            {/* Tooltip on hover */}
            <span className="absolute bottom-full mb-2.5 hidden group-hover:block px-3 py-1 rounded-xl bg-bg-card border border-green-primary/50 font-mono text-xs font-semibold text-green-glow whitespace-nowrap shadow-2xl z-40">
              {item.name}
            </span>
          </motion.div>
        </motion.div>
      ))}
    </div>
  );
}
