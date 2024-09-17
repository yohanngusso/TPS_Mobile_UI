import './StyledPage.css';

export default function StyledPage() {
    return (
        <div className="container">
            <h2 className="title">Desenvolvimento Front-End com Frameworks</h2>
            <h3 className="subtitle">Mobile-First UI com React</h3>
            <h4 className="subsubtitle">Conceitos de Usabilidade</h4>
            <p className="text">
                A usabilidade refere-se à facilidade com que os usuários podem interagir com um sistema ou aplicação. Um design de interface 
                bem-sucedido deve ser intuitivo, eficiente e agradável para o usuário.
            </p>
            <p className="text">
                A acessibilidade, por outro lado, envolve a criação de interfaces que possam ser utilizadas por pessoas com diferentes tipos 
                de limitações, sejam elas físicas, visuais, auditivas ou cognitivas. Isso pode incluir o uso de leitores de tela, legendas e 
                outras tecnologias assistivas.
            </p>
        </div>
    );
}