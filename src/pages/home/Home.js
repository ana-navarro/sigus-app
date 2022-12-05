import React from 'react'
import { AboutText, MineraImage } from './styled.style'

export const Home = () => {
    return (
        <>
            <div className='text-center mt-4'>
                <h3>Sobre a Minera Engenharia</h3>
                <MineraImage src={'https://scontent.fmoc2-1.fna.fbcdn.net/v/t39.30808-6/239606813_1174076909734874_4735385665080596059_n.png?_nc_cat=108&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeEZrlIhlsyMYdoL3gOMuMF_rO4Eoy060lis7gSjLTrSWOTkbUElBL5k1TVz5-vfl3JQkUgr33yTm6GrseT1U5-C&_nc_ohc=f479NREvlA4AX9aS8RZ&_nc_ht=scontent.fmoc2-1.fna&oh=00_AfBW57A_uytgA7uxEIUDgbw1a2H100RtBtwfxfDzlfyuRA&oe=63883995'} />
            </div>

            <AboutText>
                <p>
                    A Minera Engenharia, fundada em 2014, fornece diversas soluções em geração de Energia Solar e Eficiência Energética,
                    apresentando em seu DNA a inovação e a sustentabilidade.
                </p>
                <p>
                    Desde a sua fundação, a empresa se diferencia prestando serviços de Engenharia de alto nível técnico na Construção,
                    Manutenção e Comissionamento de Usinas e Parques Solares e Projetos de Eficiência Energética, visando à harmonização entre
                    tecnologia e o meio ambiente, sem esquecer-se do ser humano.
                </p>
                <p>
                    Com o auxílio de equipamentos de última geração operando dentro dos padrões e normas interacionais e nacionais e com corpo
                    técnico altamente qualificado, a Minera Engenharia oferece soluções em Eficiência Energética e serviços para Usinas Fotovoltaicas, tais como:
                </p>
                <ul>
                    <li>Projeto;</li>
                    <li>Implantação;</li>
                    <li>Comercialização;</li>
                    <li>Consultoria e Inspeção;</li>
                    <li>Comissionamento;</li>
                    <li>Operação e Manutenção (O&M).</li>
                </ul>
                <p>
                    Apesar de ser jovem, a empresa atualmente possui um portfólio bem extenso de obras executadas em Usinas de Energia Solar, com quase 15MW instalados.
                </p>
            </AboutText>

            <div className='text-center mt-4'>
                <h3>Sobre o SIGUS</h3>
            </div>

            <AboutText>
                <p>
                    O projeto SIGUS, tem como objetivo ajudar a empresa a Minera Engenharia na parte de gestão de relatórios financeiros e técnicos,
                    e também auxiliar na parte de análise de dados vindos dos parques solares. Atualmente, não possui um sistema que unifica a parte
                    de gestão financeira (geração de pagamentos para o cliente pagar) e a parte de geração de energia (relatório técnico sobre quanto
                    de energia a empresa cliente gastou e gerou). Para criarem os relatórios técnicos, nos dias de hoje, se utiliza o Microsoft Word
                    para gerar o documento com as informações de quanta energia foi gerada, consumida e restante a partir do número de instalação.
                    Para criarem os relatórios financeiros, eles acessam o aplicativo do banco e assim geram um link para pagamento para o cliente.
                    A ideia principal do sistema SIGUS é auxiliar na geração dos relatórios técnicos e financeiros, e unir essas duas áreas de atuação
                    dentro da empresa minera. Com as informações contidas no relatório técnico também é possível gerar gráficos que ajudam no processo
                    de decisão dos engenheiros. Assim, através do sistema SIGUS a Minera Engenharia conseguirá unir duas áreas e também aumentar a produtividade.
                </p>
            </AboutText>

        </>
    )
}
