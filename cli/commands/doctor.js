import fs from "fs";
import path from "path";

export async function doctorCommand() {
    const target = path.join(process.cwd(), ".agents");

    if (!fs.existsSync(target)) {
        console.error("❌ Pasta .agents não encontrada no projeto atual.");
        process.exit(1);
    }

    const expected = [
        "core",
        "agents",
        "skills",
        "workflows",
        "templates",
        "registry"
    ];

    const missing = expected.filter((dir) =>
        !fs.existsSync(path.join(target, dir))
    );

    if (missing.length > 0) {
        console.error("⚠️ Estrutura incompleta. Faltando:");
        for (const item of missing) {
            console.error(`- ${item}`);
        }
        process.exit(1);
    }

    console.log("✅ Estrutura .agents encontrada e parece válida.");
}