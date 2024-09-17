import './StyledPage.css';

export default function StyledPage() {
    return (
        <div>
            <h2>Desenvolvimento Front-End com Frameworks</h2>
            <h3>Mobile-First UI com React</h3>
            <h4>Diferença entre responsividade e adaptabilidade</h4>
            <p>
                A responsividade refere-se à capacidade de um site ou aplicação web de ajustar seu layout e conteúdo de forma fluida e proporcional, 
                dependendo do tamanho da tela ou dispositivo em que está sendo visualizado. Isso é geralmente alcançado através do uso de unidades 
                flexíveis, como porcentagens, e media queries no CSS.
            </p>
            <p>
                A adaptabilidade, por outro lado, envolve a criação de diferentes versões de um site ou aplicação para diferentes dispositivos ou 
                tamanhos de tela. Em vez de ajustar o layout de forma fluida, a adaptabilidade pode envolver a entrega de um layout completamente 
                diferente, otimizado para o dispositivo específico.
            </p>
        </div>
    );
}