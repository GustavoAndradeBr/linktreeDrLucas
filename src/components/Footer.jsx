import { useState } from "react";

const conteudo = {
  privacidade: {
    titulo: "Política de Privacidade",
    corpo: [
      {
        titulo: "Coleta de dados",
        texto:
          "Esta página é um perfil pessoal e não coleta nenhum dado pessoal dos visitantes, como nome, e-mail ou informações de navegação.",
      },
      {
        titulo: "Links externos",
        texto:
          "Esta página contém links para sites e redes sociais de terceiros. Ao acessá-los, você estará sujeito às políticas de privacidade de cada plataforma, sobre as quais não temos controle.",
      },
      {
        titulo: "Cookies",
        texto:
          "Não utilizamos cookies próprios. Eventuais cookies são gerados apenas pelas plataformas externas vinculadas.",
      },
      {
        titulo: "Contato",
        texto:
          "Dúvidas podem ser enviadas diretamente pelas redes sociais disponíveis nesta página.",
      },
    ],
  },
  termos: {
    titulo: "Termos de Uso",
    corpo: [
      {
        titulo: "Aceitação",
        texto:
          "Ao acessar esta página, você concorda com os termos descritos abaixo.",
      },
      {
        titulo: "Conteúdo",
        texto:
          "Todo o conteúdo disponível nesta página — textos, imagens e links — é de caráter pessoal e informativo. A reprodução sem autorização prévia não é permitida.",
      },
      {
        titulo: "Links externos",
        texto:
          "Os links desta página direcionam para plataformas e conteúdos de terceiros. Não nos responsabilizamos pelo conteúdo, disponibilidade ou práticas dessas plataformas.",
      },
      {
        titulo: "Alterações",
        texto:
          "Estes termos podem ser atualizados a qualquer momento. O acesso contínuo implica concordância com a versão vigente.",
      },
    ],
  },
};

function Modal({ tipo, onClose }) {
  const d = conteudo[tipo];
  const dataAtual = new Date().toLocaleDateString("pt-BR", {
    month: "long",
    year: "numeric",
  });

  return (
    <>
      {/* Overlay */}
      <div className="fixed inset-0 z-40 bg-black/50" onClick={onClose} />

      {/* Modal */}
      <div className="fixed left-1/2 top-1/2 z-50 flex max-h-[80vh] w-[min(500px,92vw)] -translate-x-1/2 -translate-y-1/2 flex-col overflow-hidden rounded-xl bg-white shadow-2xl">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-neutral-200 px-5 py-4">
          <h2 className="text-base font-semibold text-neutral-800">
            {d.titulo}
          </h2>
          <button
            onClick={onClose}
            className="text-xl leading-none text-neutral-400 hover:text-neutral-700 transition-colors"
          >
            ✕
          </button>
        </div>

        {/* Body */}
        <div className="overflow-y-auto px-5 py-4 text-sm text-neutral-600 leading-relaxed space-y-4">
          {d.corpo.map((item) => (
            <div key={item.titulo}>
              <p className="font-semibold text-neutral-800 mb-1">
                {item.titulo}
              </p>
              <p>{item.texto}</p>
            </div>
          ))}
          <p className="pt-2 text-xs text-neutral-400">
            Última atualização: {dataAtual}
          </p>
        </div>
      </div>
    </>
  );
}

export default function Footer() {
  const [modalAberto, setModalAberto] = useState(null);

  // Fecha com ESC
  const handleKeyDown = (e) => {
    if (e.key === "Escape") setModalAberto(null);
  };

  return (
    <>
      <footer
        className="flex flex-col items-center gap-2 py-6 text-center text-xs text-neutral-500"
        onKeyDown={handleKeyDown}
      >
        <p>
          Este site segue as diretrizes da Lei Geral de Proteção de Dados
          (LGPD).
        </p>
        <p className="flex items-center gap-2">
          <button
            onClick={() => setModalAberto("privacidade")}
            className="hover:text-neutral-300 transition-colors"
          >
            Política de Privacidade
          </button>
          <span className="text-neutral-700">|</span>
          <button
            onClick={() => setModalAberto("termos")}
            className="hover:text-neutral-300 transition-colors"
          >
            Termos de Uso
          </button>
        </p>
      </footer>

      {modalAberto && (
        <Modal tipo={modalAberto} onClose={() => setModalAberto(null)} />
      )}
    </>
  );
}
