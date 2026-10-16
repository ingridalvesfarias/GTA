const nome = document.getElementById("nome");
const personagem = document.getElementById("personagem");
const avatares = document.querySelectorAll(".avatar");

// ---------- Trocar personagem ----------
function selecionar(avatar) {
    avatares.forEach((a) => a.classList.remove("ativo"));
    avatar.classList.add("ativo");

    nome.textContent = avatar.dataset.nome;
    nome.style.color = avatar.dataset.cor;
    personagem.src = avatar.src;
    personagem.alt = avatar.dataset.nome;
    personagem.classList.remove("foto-usuario");
}

avatares.forEach((avatar) => {
    avatar.addEventListener("click", () => selecionar(avatar));
});

// ---------- Foto do usuário ----------
const modal = document.getElementById("modal");
const modalCamera = document.getElementById("modal-camera");
const inputGaleria = document.getElementById("input-galeria");
const video = document.getElementById("video");
let stream = null;

document.getElementById("btn-foto").addEventListener("click", () => (modal.hidden = false));
document.getElementById("modal-fechar").addEventListener("click", () => (modal.hidden = true));

// Galeria
document.getElementById("opcao-galeria").addEventListener("click", () => {
    modal.hidden = true;
    inputGaleria.click();
});

inputGaleria.addEventListener("change", () => {
    const arquivo = inputGaleria.files[0];
    if (arquivo) usarFoto(arquivo);
    inputGaleria.value = "";
});

// Câmera
document.getElementById("opcao-camera").addEventListener("click", async () => {
    modal.hidden = true;
    try {
        stream = await navigator.mediaDevices.getUserMedia({
            video: { facingMode: "user" },
        });
        video.srcObject = stream;
        modalCamera.hidden = false;
    } catch (erro) {
        alert("Não consegui acessar a câmera. Verifique a permissão do navegador.");
    }
});

function fecharCamera() {
    if (stream) stream.getTracks().forEach((t) => t.stop());
    stream = null;
    modalCamera.hidden = true;
}

document.getElementById("camera-fechar").addEventListener("click", fecharCamera);

document.getElementById("tirar-foto").addEventListener("click", () => {
    const canvas = document.createElement("canvas");
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    canvas.getContext("2d").drawImage(video, 0, 0);
    canvas.toBlob((blob) => {
        fecharCamera();
        usarFoto(blob);
    }, "image/jpeg", 0.9);
});

// ---------- Usar a foto ----------
async function usarFoto(arquivo) {
    avatares.forEach((a) => a.classList.remove("ativo"));
    nome.textContent = "Você";
    nome.style.color = "#ffd319";
    personagem.classList.add("foto-usuario");
    personagem.src = URL.createObjectURL(arquivo); // preview imediato
}

// ---------- Ponto de ligação com a IA (em desenvolvimento) ----------
async function gerarVersaoGta(arquivo) {
    const dados = new FormData();
    dados.append("foto", arquivo);

    const resposta = await fetch("/api/gerar-gta", { method: "POST", body: dados });
    if (!resposta.ok) throw new Error("Falha ao gerar a imagem");

    const blob = await resposta.blob();
    return URL.createObjectURL(blob);
}