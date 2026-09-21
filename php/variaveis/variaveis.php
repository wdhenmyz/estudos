<?php
echo "<h3>Cadastro de Cliente e Cálculo de Compra com Frete</h3> <br>";

	// Declaração das variáveis com seus respectivos tipos
    const nome_cliente = 'wesllen';
    const idade = 23;
    const altura = 1.79;
    const sexo = 'M';
    const nome_produto = 'banana';
    const categoria_produto = 'fruta';
    const preco_unitario1 = 0.20;
    const quantidade = 20;
    const taxa_frete = 5.50;   // Valor fixo do frete

    // Processamento dos cálculos
    const valor_produtos = preco_unitario1 * quantidade;
    const valor_total_compra = valor_produtos + taxa_frete;

    // Exibição do cupom final
    echo "============================================== <br>";
    echo "          CUPOM DA COMPRA - CLIENTE            <br>";
    echo "============================================== <br>";
    echo "Cliente: " , nome_cliente, "<br>";
    echo "Idade: " , idade , " anos <br>";
    echo "Altura: " , altura , " m <br>";
    echo "Sexo: " , sexo, "<br>";
    echo "---------------------------------------------- <br>";
    echo "Produto: " , nome_produto, "<br>";
    echo "Categoria: " , categoria_produto, "<br>";
    echo "Preço unitário: R$ " , preco_unitario1, "<br>";
    echo "Quantidade: " , quantidade, "<br>";
    echo "Valor dos produtos: R$ " , valor_produtos, "<br>";
    echo "Taxa de frete: R$ " , taxa_frete, "<br>";
    echo "---------------------------------------------- <br>";
    echo "VALOR TOTAL DA COMPRA: R$", valor_total_compra,"<br>";
    echo "============================================== <br>";

	echo "<h3>Locação de Veículos com Cálculo de Seguro</h3> <br>";

    // Declaração das variáveis
    const nome_locatario = 'wesllen';
    const idade_locatario = 26;
    const modelo_carro = 'honda';
    const ano_carro = 2018;
    const categoria_carro = 'honda';
    const valor_diaria = 25.00;
    const dias_locados = 20;
    const percentual_seguro = 0.08;

    // Processamento dos valores
    const total_locacao = valor_diaria * dias_locados;
    const valor_seguro = total_locacao * percentual_seguro;
    const total_final_pagar = total_locacao + valor_seguro;

    // Exibição do contrato
    echo "================== CONTRATO DE LOCAÇÃO ================== <br>";
    echo "Locatário: " , nome_locatario, "<br>";
    echo "Idade do locatário: " , idade_locatario , " anos <br>";
    echo "---------------------------------------------------------- <br>";
    echo "Veículo: " , modelo_carro, "<br>";
    echo "Ano: " , ano_carro, "<br>";
    echo "Categoria: " , categoria_carro, "<br>";
    echo "Valor da diária: R$ " , valor_diaria, "<br>";
    echo "Dias locados: " , dias_locados, "<br>";
    echo "---------------------------------------------------------- <br>";
    echo "Valor bruto da locação: R$ " , total_locacao, "<br>";
    echo "Seguro (8%): R$ " , valor_seguro, "<br>";
    echo "---------------------------------------------------------- <br>";
    echo "TOTAL A PAGAR: R$ " , total_final_pagar, "<br>";
    echo "========================================================== <br>";

echo "<h3>Avaliação de Desempenho de Atleta (3 arremessos)</h3> <br>";

    // Declaração das variáveis com dados cadastrais
    const nome_atleta = 'wesllen';
    const idade_atleta = 23;
    const altura_atleta = 1.79;
    const modalidade = 'arremesso de lança';

	// Entrada das 3 marcas
    const arremesso_1 = 5.69;
    const arremesso_2 = 6.33;
    const arremesso_3 = 6.10;

    // Cálculo do desempenho
    const distancia_total = arremesso_1 + arremesso_2 + arremesso_3;
    const distancia_media = distancia_total / 3;

    // Exibição do relatório
    echo "============= FICHA DO ATLETA ============= <br>";
    echo "Nome: " , nome_atleta, "<br>";
    echo "Idade: " , idade_atleta, "<br>";
    echo "Altura: " , altura_atleta, " m <br>";
    echo "Modalidade: " , modalidade, "<br>";
    echo "------------------------------------------- <br>";
    echo "1º Arremesso: " , arremesso_1 , " m <br>";
    echo "2º Arremesso: " , arremesso_2 , " m <br>";
    echo "3º Arremesso: " , arremesso_3 , " m <br>";
    echo "------------------------------------------- <br>";
    echo "Distância total arremessada: " , distancia_total , " m <br>";
    echo "Média de distância por arremesso: " , distancia_media , " m <br>";
    echo "=========================================== <br>";

echo "<h3>Controle de Vendas e Atualização de Estoque</h3> <br>";

    // Entrada de dados do vendedor e do produto
    const nome_vendedor = 'wesllen';
    const codigo_vendedor = '202300678';
    const nome_produto = 'café';
    const codigo_produto = 'cf-0023';
    const preco_unitario2 = 50.00;
    const estoque_inicial = 100;
    const quantidade_vendida = 3;

    // Processamento dos cálculos
    const estoque_final = estoque_inicial - quantidade_vendida;
    const faturamento_bruto = quantidade_vendida * preco_unitario2;

    // Exibição do resumo da venda
    echo "=============== NOTA DE VENDA =============== <br>";
    echo "Vendedor: " , nome_vendedor, "<br>";
    echo "Código do vendedor: " , codigo_vendedor, "<br>";
    echo "--------------------------------------------- <br>";
    echo "Produto: " , nome_produto, "<br>";
    echo "Código do produto: " , codigo_produto, "<br>";
    echo "Preço unitário: R$ " , preco_unitario2, "<br>";
    echo "Quantidade vendida: " , quantidade_vendida, "<br>";
    echo "--------------------------------------------- <br>";
    echo "Estoque antes da venda: " , estoque_inicial, "<br>";
    echo "Estoque depois da venda: " , estoque_final, "<br>";
    echo "--------------------------------------------- <br>";
    echo "FATURAMENTO BRUTO: R$ " , faturamento_bruto, "<br>";
    echo "============================================= <br>";

echo "<h3>Cadastro Escolar com Média Ponderada e Situação</h3> <br>";

    // Entrada de dados pessoais e acadêmicos
    const nome_aluno = 'wesllen';
    const matricula2 = '202300678';
    const turma = 'noite';
    const sexo_aluno = 'M';
    const nota_1 = 7.9;
    const nota_2 = 6.6;
    const nota_3 = 6.9;

    // Cálculo das médias (pesos: 2, 3 e 4 respectivamente)
    const media_simples = (nota_1 + nota_2 + nota_3) / 3;
    const media_ponderada = (nota_1 * 2 + nota_2 * 3 + nota_3 * 4) / 9;

    // Verificação de aprovação (baseado na média ponderada)
    const aprovado = (media_ponderada >= 7.0);

    // Exibição do boletim
    echo "================= BOLETIM ESCOLAR =================<br>";
    echo "Aluno: " , nome_aluno, "<br>";
    echo "Matrícula: " , matricula2, "<br>";
    echo "Turma: " , turma, "<br>";
    echo "Sexo: " , sexo_aluno, "<br>";
    echo "---------------------------------------------------<br>";
    echo "Nota 1 (peso 2): ", nota_1, "<br>";
    echo "Nota 2 (peso 3): ", nota_2, "<br>";
    echo "Nota 3 (peso 4): ", nota_3, "<br>";
    echo "---------------------------------------------------<br>";
    echo "Média Aritmética Simples: ", media_simples, "<br>";
    echo "Média Ponderada (2,3,4): ", media_ponderada, "<br>";
    echo "---------------------------------------------------<br>";
    echo "Aluno está aprovado? ", aprovado, "<br>";
    echo "===================================================<br>";
?>