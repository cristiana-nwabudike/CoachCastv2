import { useParams } from "react-router-dom";

export default function MovieShare() {
  const { title } = useParams();
  return (
    <div className="p-6 space-y-6">
      <h2 className="text-2xl font-bold">{title}</h2>
      <div className="bg-black h-64 rounded flex items-center justify-center">[ Movie
