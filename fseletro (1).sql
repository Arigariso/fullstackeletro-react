-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Tempo de geração: 06-Dez-2020 às 15:39
-- Versão do servidor: 8.0.21
-- versão do PHP: 7.4.9

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Banco de dados: `fseletro`
--

-- --------------------------------------------------------

--
-- Estrutura da tabela `categoria`
--

DROP TABLE IF EXISTS `categoria`;
CREATE TABLE IF NOT EXISTS `categoria` (
  `produto` int NOT NULL,
  `categoria` varchar(45) NOT NULL,
  `cor` varchar(45) NOT NULL,
  KEY `produto` (`produto`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Extraindo dados da tabela `categoria`
--

INSERT INTO `categoria` (`produto`, `categoria`, `cor`) VALUES
(1, 'geladeira', 'branca'),
(2, 'geladeira', 'cinza'),
(3, 'geladeira', 'amarela'),
(4, 'fogao', 'cinza'),
(5, 'fogao', 'preto'),
(6, 'fogao', 'branco'),
(7, 'microondas', 'cinza'),
(8, 'microondas', 'branco'),
(9, 'maquinadelavar', 'branca'),
(10, 'maquinadelavar', 'cinza'),
(11, 'lavalouca', 'cinza '),
(12, 'lavalouca', 'branco');

-- --------------------------------------------------------

--
-- Estrutura da tabela `comentarios`
--

DROP TABLE IF EXISTS `comentarios`;
CREATE TABLE IF NOT EXISTS `comentarios` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nome` varchar(100) DEFAULT NULL,
  `msg` varchar(300) DEFAULT NULL,
  `data` datetime DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Extraindo dados da tabela `comentarios`
--

INSERT INTO `comentarios` (`id`, `nome`, `msg`, `data`) VALUES
(1, 'Ariane Gariso Carlo', 'Espero que dessa vez dê certo!', '2020-10-30 11:37:56');

-- --------------------------------------------------------

--
-- Estrutura da tabela `pedido`
--

DROP TABLE IF EXISTS `pedido`;
CREATE TABLE IF NOT EXISTS `pedido` (
  `idpedido` int NOT NULL AUTO_INCREMENT,
  `nome` varchar(45) NOT NULL,
  `endereco` varchar(150) NOT NULL,
  `telefone` int NOT NULL,
  `produto` varchar(150) NOT NULL,
  `valor` int NOT NULL,
  `quantidade` int NOT NULL,
  `preco_final` int NOT NULL,
  `data` datetime DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`idpedido`)
) ENGINE=MyISAM AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Extraindo dados da tabela `pedido`
--

INSERT INTO `pedido` (`idpedido`, `nome`, `endereco`, `telefone`, `produto`, `valor`, `quantidade`, `preco_final`, `data`) VALUES
(1, 'Ariane Gariso Carlo', 'Rua Ana Perena, 55, apartamento 22 A, Conjunto José Bonifácio', 0, 'geladeira1', 0, 1, 0, '2020-10-31 15:23:43'),
(2, 'Ariane Gariso Carlo', 'Rua Ana Perena, 55, apartamento 22 A, Conjunto José Bonifácio', 0, 'geladeira1', 0, 1, 0, '2020-10-31 15:24:18'),
(3, 'Ariane Gariso Carlo', 'Rua Ana Perena, 55, apartamento 22 A, Conjunto José Bonifácio', 0, 'geladeira1', 0, 1, 0, '2020-10-31 15:26:36');

-- --------------------------------------------------------

--
-- Estrutura da tabela `produto`
--

DROP TABLE IF EXISTS `produto`;
CREATE TABLE IF NOT EXISTS `produto` (
  `idproduto` int NOT NULL,
  `categoria` varchar(45) NOT NULL,
  `descricao` varchar(150) NOT NULL,
  `preco` decimal(8,2) DEFAULT NULL,
  `precofinal` decimal(8,2) DEFAULT NULL,
  `imagem` varchar(245) DEFAULT NULL,
  `link` varchar(100) NOT NULL,
  PRIMARY KEY (`idproduto`),
  UNIQUE KEY `imagem_UNIQUE` (`imagem`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Extraindo dados da tabela `produto`
--

INSERT INTO `produto` (`idproduto`, `categoria`, `descricao`, `preco`, `precofinal`, `imagem`, `link`) VALUES
(1, 'geladeira', 'Geladeira Frost Free Brastemp Side Iverse 540 litros', '6389.00', '5019.00', 'geladeira.png', '/geladeira1.php'),
(2, 'geladeira', 'Geladeira Consul Frost Free Duplex 405 litros cor Inox com Filtro Bem Estar', '6389.00', '5750.00', 'geladeira2.jpg', '/geladeira2.php'),
(3, 'geladeira', 'Geladeira Brastemp Retrô Frost Free', '3409.00', '2564.05', 'geladeira3.jpg', '/geladeira3.php'),
(4, 'fogao', 'Fogão de Piso 4 Bocas Cinza Brastemp Clean BFO4NAR - Bivolt', '1570.00', '1099.00', 'fogao.jpg', '/fogao1.php'),
(5, 'fogao', 'Fogão Atlas 4 Bocas Tropical Glass com Acendimento Automático – Preto', '890.00', '719.00', 'fogao2.webp', '/fogao2.php'),
(6, 'fogao', 'Fogão 5 Bocas Supreme Timer Glass Dako - Bivolt', '1650.00', '1299.90', 'foga3.jpg', '/fogao3.php'),
(7, 'microondas', 'Micro-ondas Philco 30 Litros PME31', '537.00', '429.00', 'microondas2.png', '/microondas1.php'),
(8, 'microondas', 'Micro-ondas Electrolux MTD30 20 Litros Branco 110V', '650.00', '599.00', 'microondas3.png', '/microondas2.php'),
(9, 'maquinadelavar', 'Máquina de Lavar Consul 14Kg branca com Dosagem Extra Econômica e Ciclo Edredom', '3743.00', '2850.00', 'maquina.png', '/maquina1.php'),
(10, 'maquinadelavar', 'Máquina de Lavar Brastemp 12Kg titânio com Ciclo Tira Manchas Advanced e Ciclo Antibolinha • 110V', '2539.00', '2200.50', 'maquina2.png', '/maquina2.php'),
(11, 'lavalouca', 'Lava-Louças de Piso Brastemp BLF08AS 5 Programas Inox - 220V', '2300.00', '2089.00', 'lavalouca.jpg', '/lavalouca1.php'),
(12, 'lavalouca', 'Lava-louças 8 Serviços Brastemp Ative! BLF08AB', '1800.00', '1619.00', 'lavalouca2.jpg', '/lavalouca2.php');

--
-- Restrições para despejos de tabelas
--

--
-- Limitadores para a tabela `categoria`
--
ALTER TABLE `categoria`
  ADD CONSTRAINT `produto` FOREIGN KEY (`produto`) REFERENCES `produto` (`idproduto`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
