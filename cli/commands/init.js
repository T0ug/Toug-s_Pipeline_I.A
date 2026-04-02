import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

export async function initCommand() {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = path.dirname(__filename);

    const repoRoot = path.resolve(__dirname, "../../");
    const source = path.join(repoRoot, ".agents");
    const target = path.join(process.cwd(), ".agents");

    if (!fs.existsSync(source)) {
        console.error("Erro: pasta .agents não encontrada no repositório.");
        process.exit(1);
    }

    if (fs.existsSync(target)) {
        console.error("Erro: já existe uma pasta .agents neste projeto.");
        process.exit(1);
    }

    fs.cpSync(source, target, { recursive: true });
    console.log("✅ .agents copiada com sucesso para o projeto atual.");
}