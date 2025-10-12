import styles from './ResumoProjetos.module.css';

const ResumoProjetos = ({ titulo }) => {
  const resumos = {
    DigiVPN: {
      titulo: "DigiVPN",
      descricao: (
        <>
          <p>
            O <strong>DigiVPN</strong> é uma aplicação interna desenvolvida para a empresa <strong>Digifarma Sistemas LTDA</strong>, 
            com o objetivo de centralizar e gerenciar os arquivos de VPN dos clientes.
            O sistema organiza os arquivos em pastas separadas por tipo de VPN e permite que o analista localize 
            rapidamente o arquivo desejado através de um ID único do cliente.
          </p>

          <p>
            Caso o arquivo não exista, o sistema oferece uma opção para solicitar a criação de uma nova VPN, redirecionando o usuário 
            a um formulário completo com os dados necessários. Ao enviar a requisição, o sistema envia automaticamente para os e-mails dos líderes 
            e responsáveis dos setores, garantindo agilidade no processo de criação.
          </p>

          <p>
            Assim que a VPN é criada, o arquivo é adicionado ao repositório correspondente e liberado para download dentro da rede interna da empresa.
            <br /><br />
            🔹 Tecnologias utilizadas: React, Node.js e CSS.
            <br />
            🔹 Disponibilidade: acesso restrito à rede interna da Digifarma Sistemas LTDA.
          </p>
        </>
      ),
    },

    DigiFirebird: {
      titulo: "DigiFirebird",
      descricao: (
        <>
          <p>
            O <strong>DigiFirebird</strong> é uma ferramenta corporativa desenvolvida para controlar as versões do aplicativo
            <strong> gerenciador de banco de dados Firebird</strong>, garantindo rastreabilidade e consistência nas atualizações realizadas para os clientes.
          </p>

          <p>
            O sistema permite que o analista busque um cliente pelo ID único e verifique se ele está utilizando a versão mais recente do aplicativo.
            Essa busca é feita diretamente em uma planilha Google Sheets, e caso o ID exista, o sistema exibe todas as informações relevantes: horário da atualização, 
            técnico responsável, dados do cliente e observações.
          </p>

          <p>
            Além disso, há uma página de cadastro onde o analista pode registrar novas atualizações.
            Ao enviar o formulário, os dados são enviados para uma API construída com Google Apps Script, que insere automaticamente as informações na planilha.
            <br /><br />
            🔹 Tecnologias utilizadas: React, Node.js, Google Apps Script (API para Sheets) e CSS.
            <br />
            🔹 Disponibilidade: acesso restrito à rede interna da Digifarma Sistemas LTDA.
          </p>
        </>
      ),
    },
  };

  const data = resumos[titulo];

  return (
    <div className={styles.resumo_container}>
      <h2 className={styles.resumo_titulo}>{data.titulo}</h2>
      <div className={styles.resumo_descricao}>{data.descricao}</div>
    </div>
  );
};

export default ResumoProjetos;
