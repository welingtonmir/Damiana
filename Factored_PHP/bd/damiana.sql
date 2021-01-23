-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Tempo de geração: 03-Nov-2020 às 19:41
-- Versão do servidor: 5.7.31
-- versão do PHP: 7.3.21

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Banco de dados: `damiana`
--

-- --------------------------------------------------------

--
-- Estrutura da tabela `comentarios`
--

DROP TABLE IF EXISTS `comentarios`;
CREATE TABLE IF NOT EXISTS `comentarios` (
  `id_comentario` int(11) NOT NULL AUTO_INCREMENT,
  `nome` varchar(100) DEFAULT NULL,
  `msg` varchar(100) DEFAULT NULL,
  `data` datetime DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id_comentario`)
) ENGINE=MyISAM AUTO_INCREMENT=19 DEFAULT CHARSET=latin1;

--
-- Extraindo dados da tabela `comentarios`
--

INSERT INTO `comentarios` (`id_comentario`, `nome`, `msg`, `data`) VALUES
(1, 'Valentina', 'hhihlÃ§hk', '2020-11-02 22:50:30'),
(2, 'Welington', 'mensagem123', '2020-11-02 22:50:48'),
(3, 'Welington', 'mensagem123', '2020-11-02 22:58:47'),
(4, 'Welington Jonathan', 'mensagem123', '2020-11-02 22:58:58'),
(5, 'Welington Jonathan', 'mensagem123', '2020-11-02 23:00:38'),
(6, 'Welington Jonathan', 'mensagem123', '2020-11-02 23:01:31'),
(7, '', '', '2020-11-03 15:09:52'),
(8, '', '', '2020-11-03 15:31:44'),
(9, 'Welington', 'Tudo bem', '2020-11-03 15:36:33'),
(10, '', '', '2020-11-03 15:40:18'),
(11, '', '', '2020-11-03 15:43:06'),
(12, '', '', '2020-11-03 15:46:19'),
(13, '', '', '2020-11-03 15:48:57'),
(14, '', '', '2020-11-03 15:50:17'),
(15, '', '', '2020-11-03 15:51:46'),
(16, '', '', '2020-11-03 15:51:46'),
(17, '', '', '2020-11-03 15:52:08'),
(18, '', '', '2020-11-03 15:52:12');

-- --------------------------------------------------------

--
-- Estrutura da tabela `pedidos`
--

DROP TABLE IF EXISTS `pedidos`;
CREATE TABLE IF NOT EXISTS `pedidos` (
  `nome_Cliente` varchar(35) DEFAULT NULL,
  `endereco` varchar(30) DEFAULT NULL,
  `telefone` int(11) DEFAULT NULL,
  `nome_Produto` varchar(60) DEFAULT NULL,
  `valor_Unitario` decimal(5,2) DEFAULT NULL,
  `quantidade` int(2) DEFAULT NULL,
  `valor_Total` decimal(5,2) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Extraindo dados da tabela `pedidos`
--

INSERT INTO `pedidos` (`nome_Cliente`, `endereco`, `telefone`, `nome_Produto`, `valor_Unitario`, `quantidade`, `valor_Total`) VALUES
('Welington Jonathan Santos Miranda', 'Rua Albano 252', 980603213, 'Biquíni Crochê', '99.90', 1, '99.90');

-- --------------------------------------------------------

--
-- Estrutura da tabela `produtos`
--

DROP TABLE IF EXISTS `produtos`;
CREATE TABLE IF NOT EXISTS `produtos` (
  `id_produto` int(11) NOT NULL AUTO_INCREMENT,
  `categoria` varchar(100) DEFAULT NULL,
  `descricao` varchar(100) DEFAULT NULL,
  `preco` float DEFAULT NULL,
  `preco_venda` float DEFAULT NULL,
  `imagem_produto` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`id_produto`)
) ENGINE=MyISAM AUTO_INCREMENT=67 DEFAULT CHARSET=latin1;

--
-- Extraindo dados da tabela `produtos`
--

INSERT INTO `produtos` (`id_produto`, `categoria`, `descricao`, `preco`, `preco_venda`, `imagem_produto`) VALUES
(1, 'croche', 'Biquinis Cores: Preto e Magenta', 149.9, 119.9, './estilo.css/imagens/foto_nao_disponivel.gif'),
(2, 'croche', 'Biquinis Cores: Branco/Preto', 299.99, 229, './estilo.css/imagens/foto_nao_disponivel.gif'),
(3, 'croche', 'Biquinis Cores: Branco/Preto', 199.99, 149.9, './estilo.css/imagens/foto_nao_disponivel.gif'),
(4, 'croche', 'Biquinis Cores: Branco/Preto', 199.99, 149.9, './estilo.css/imagens/foto_nao_disponivel.gif'),
(5, 'croche', 'Biquinis Cores: Branco/Preto', 149.99, 119.9, './estilo.css/imagens/foto_nao_disponivel.gif'),
(6, 'croche', 'Biquinis Cores: Amarelo', 149.99, 99.9, './estilo.css/imagens/foto_nao_disponivel.gif'),
(7, 'croche', 'Biquinis Cores: Amarelo', 99.99, 89.9, './estilo.css/imagens/foto_nao_disponivel.gif'),
(8, 'croche', 'Biquinis Cores: Amarelo', 129.9, 89.9, './estilo.css/imagens/foto_nao_disponivel.gif'),
(9, 'croche', 'Biquinis Cores: Verde Oliva', 149.9, 129.9, './estilo.css/imagens/foto_nao_disponivel.gif'),
(10, 'croche', 'Biquinis Cores: Verde Oliva', 149.9, 129.9, './estilo.css/imagens/foto_nao_disponivel.gif'),
(11, 'croche', 'Biquinis Cores: Verde Oliva', 299.9, 199.9, './estilo.css/imagens/foto_nao_disponivel.gif'),
(12, 'cinturaAlta', 'Biquinis Cores: Laranja e Rosa', 199.99, 179.9, './estilo.css/imagens/foto_nao_disponivel.gif'),
(13, 'cinturaAlta', 'Biquinis Cores: Laranja e Rosa', 190.9, 179.9, './estilo.css/imagens/foto_nao_disponivel.gif'),
(14, 'cinturaAlta', 'Biquinis Cores: Laranja e Rosa', 149.9, 129.9, './estilo.css/imagens/foto_nao_disponivel.gif'),
(15, 'cinturaAlta', 'Biquinis Cores: Azul Turquesa', 199.99, 129.9, './estilo.css/imagens/foto_nao_disponivel.gif'),
(16, 'cinturaAlta', 'Biquinis Cores: Azul Turquesa', 169.9, 114.9, './estilo.css/imagens/foto_nao_disponivel.gif'),
(17, 'cinturaAlta', 'Biquinis Cores: Azul Turquesa', 159.9, 114.9, './estilo.css/imagens/foto_nao_disponivel.gif'),
(18, 'cinturaAlta', 'Biquinis Cores: Azul Turquesa', 249.9, 229.9, './estilo.css/imagens/foto_nao_disponivel.gif'),
(19, 'cinturaAlta', 'Biquinis Cores: A.I Aqua', 249.9, 229.9, './estilo.css/imagens/foto_nao_disponivel.gif'),
(20, 'cinturaAlta', 'Biquinis Cores: A.I Aqua', 249.9, 229.9, './estilo.css/imagens/foto_nao_disponivel.gif'),
(21, 'fioDental', 'Biquinis Cores: A.I Aqua', 149.9, 89.9, './estilo.css/imagens/foto_nao_disponivel.gif'),
(22, 'fioDental', 'Biquinis Cores: A.I Aqua', 149.9, 89.9, './estilo.css/imagens/foto_nao_disponivel.gif'),
(23, 'fioDental', 'Biquinis Cores: Vede Oliva', 169.9, 99.9, './estilo.css/imagens/foto_nao_disponivel.gif'),
(24, 'fioDental', 'Biquinis Cores: Vede Oliva', 169.9, 99.9, './estilo.css/imagens/foto_nao_disponivel.gif'),
(25, 'fioDental', 'Biquinis Cores: Vede Oliva', 129.9, 69.9, './estilo.css/imagens/foto_nao_disponivel.gif'),
(26, 'fioDental', 'Biquinis Cores: Vede Oliva', 129.9, 69.9, './estilo.css/imagens/foto_nao_disponivel.gif'),
(27, 'fioDental', 'Biquinis Cores:Amarelo Bebê', 99.9, 69.9, './estilo.css/imagens/foto_nao_disponivel.gif'),
(28, 'fioDental', 'Biquinis Cores:Amarelo Bebê', 129.9, 89.9, './estilo.css/imagens/foto_nao_disponivel.gif'),
(29, 'fioDental', 'Biquinis Cores:Amarelo Bebê', 129.9, 89.9, './estilo.css/imagens/foto_nao_disponivel.gif'),
(30, 'fioDental', 'Biquinis Cores: Azul Turquesa', 99.9, 69.9, './estilo.css/imagens/foto_nao_disponivel.gif'),
(31, 'fioDental', 'Biquinis Cores: Azul Turquesa', 149.9, 119.9, './estilo.css/imagens/foto_nao_disponivel.gif'),
(32, 'fioDental', 'Biquinis Cores: Azul Turquesa', 189.9, 119.9, './estilo.css/imagens/foto_nao_disponivel.gif'),
(33, 'fioDental', 'Biquinis Cores: Azul Turquesa', 169.9, 69.9, './estilo.css/imagens/foto_nao_disponivel.gif'),
(34, 'fioDental', 'Biquinis Cores: Azul Turquesa', 169.9, 69.9, './estilo.css/imagens/foto_nao_disponivel.gif'),
(35, 'cavado', 'Biquinis Cores: Laranja e Rosa', 169.9, 69.9, './estilo.css/imagens/foto_nao_disponivel.gif'),
(36, 'cavado', 'Biquinis Cores: Laranja e Rosa', 99.9, 79.9, './estilo.css/imagens/foto_nao_disponivel.gif'),
(37, 'cavado', 'Biquinis Cores: Laranja e Rosa', 99.9, 79.9, './estilo.css/imagens/foto_nao_disponivel.gif'),
(38, 'cavado', 'Biquinis Cores: Verde Oliva', 89.9, 79.9, './estilo.css/imagens/foto_nao_disponivel.gif'),
(39, 'cavado', 'Biquinis Cores: Verde Oliva', 89.9, 69.9, './estilo.css/imagens/foto_nao_disponivel.gif'),
(40, 'cavado', 'Biquinis Cores: Verde Oliva', 129.9, 99.9, './estilo.css/imagens/foto_nao_disponivel.gif'),
(41, 'cortininha', 'Biquinis Cores: Verde Oliva', 139.9, 119.9, './estilo.css/imagens/foto_nao_disponivel.gif'),
(42, 'cortininha', 'Biquinis Cores: Verde Oliva', 149.9, 119.9, './estilo.css/imagens/foto_nao_disponivel.gif'),
(43, 'cortininha', 'Biquinis Cores: Branco', 179.9, 129.9, './estilo.css/imagens/foto_nao_disponivel.gif'),
(44, 'cortininha', 'Biquinis Cores: Branco', 179.9, 129.9, './estilo.css/imagens/foto_nao_disponivel.gif'),
(45, 'cortininha', 'Biquinis Cores: Branco', 179.9, 129.9, './estilo.css/imagens/foto_nao_disponivel.gif'),
(46, 'cortininha', 'Biquinis Cores: Preto', 129.9, 99.9, './estilo.css/imagens/foto_nao_disponivel.gif'),
(47, 'cortininha', 'Biquinis Cores: Preto', 129.9, 99.9, './estilo.css/imagens/foto_nao_disponivel.gif'),
(48, 'cortininha', 'Biquinis Cores: Preto', 149.9, 119.9, './estilo.css/imagens/foto_nao_disponivel.gif'),
(49, 'cortininha', 'Biquinis Cores: Preto', 179.9, 149.9, './estilo.css/imagens/foto_nao_disponivel.gif'),
(50, 'tomaraQueCaia', 'Biquinis Cores: Branco/Preto', 179.9, 149.9, './estilo.css/imagens/foto_nao_disponivel.gif'),
(51, 'tomaraQueCaia', 'Biquinis Cores: Branco/Preto', 179.9, 149.9, './estilo.css/imagens/foto_nao_disponivel.gif'),
(52, 'tomaraQueCaia', 'Biquinis Cores: Branco Preto', 179.9, 149.9, './estilo.css/imagens/foto_nao_disponivel.gif'),
(53, 'tomaraQueCaia', 'Biquinis Cores: Branco/Preto', 199.9, 169.9, './estilo.css/imagens/foto_nao_disponivel.gif'),
(54, 'tomaraQueCaia', 'Biquinis Cores: Verde Oliva', 199.9, 169.9, './estilo.css/imagens/foto_nao_disponivel.gif'),
(55, 'tomaraQueCaia', 'Biquinis Cores: Verde Oliva', 179.9, 149.9, './estilo.css/imagens/foto_nao_disponivel.gif'),
(56, 'tomaraQueCaia', 'Biquinis Cores: Verde Oliva', 179.9, 149.9, './estilo.css/imagens/foto_nao_disponivel.gif'),
(57, 'tomaraQueCaia', 'Biquinis Cores: Verde Oliva', 189.9, 149.9, './estilo.css/imagens/foto_nao_disponivel.gif'),
(58, 'tomaraQueCaia', 'Biquinis Cores: Amarelo Bebê', 149.9, 129.9, './estilo.css/imagens/foto_nao_disponivel.gif'),
(59, 'tomaraQueCaia', 'Biquinis Cores: Amarelo Bebê', 149.9, 129.9, './estilo.css/imagens/foto_nao_disponivel.gif'),
(60, 'tomaraQueCaia', 'Biquinis Cores: Amarelo Bebê', 179.9, 149.9, './estilo.css/imagens/foto_nao_disponivel.gif'),
(61, 'babado', 'Biquinis Cores: Azul Turquesa', 149.9, 129.9, './estilo.css/imagens/foto_nao_disponivel.gif'),
(62, 'babado', 'Biquinis Cores: Azul Turquesa', 149.9, 99.9, './estilo.css/imagens/foto_nao_disponivel.gif'),
(63, 'babado', 'Biquinis Cores: Azul Turquesa', 149.9, 99.9, './estilo.css/imagens/foto_nao_disponivel.gif'),
(64, 'babado', 'Biquinis Cores: A.I Aqua', 159.9, 129.9, './estilo.css/imagens/foto_nao_disponivel.gif'),
(65, 'babado', 'Biquinis Cores: A.I Aqua', 159.9, 129.9, './estilo.css/imagens/foto_nao_disponivel.gif'),
(66, 'babado', 'Biquinis Cores: A.I Aqua', 159.9, 129.9, './estilo.css/imagens/foto_nao_disponivel.gif');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
