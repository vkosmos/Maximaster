-- phpMyAdmin SQL Dump
-- version 4.8.3
-- https://www.phpmyadmin.net/
--
-- Хост: 127.0.0.1:3306
-- Время создания: Апр 14 2019 г., 17:22
-- Версия сервера: 8.0.12
-- Версия PHP: 7.1.22

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- База данных: `maximaster`
--

-- --------------------------------------------------------

--
-- Структура таблицы `guestbook`
--

CREATE TABLE `guestbook` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `time` int(11) NOT NULL,
  `author` varchar(100) DEFAULT NULL,
  `content` text CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `guestbook`
--

INSERT INTO `guestbook` (`id`, `time`, `author`, `content`) VALUES
(1, 1234567890, 'Иван', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse ultrices aliquam condimentum. Proin elementum porttitor urna, sit amet viverra velit consectetur id.'),
(2, 1234567134, 'Петр', 'Morbi vel lectus et arcu efficitur fermentum nec nec erat. Aliquam maximus, lorem eu vestibulum vehicula, diam dolor congue erat, ac congue nulla felis eget diam.'),
(3, 1234123490, '', 'Vivamus quis ante venenatis, viverra justo vel, eleifend nisi. Integer et fermentum elit. Vivamus turpis magna, tincidunt in orci eget, hendrerit tincidunt tortor.'),
(4, 1554489256, '1234', '1234123412341234'),
(5, 1554489263, '1234', '1234123412341234'),
(6, 1554489338, '', 'Новая запись. Попробуемс'),
(7, 1554490045, 'erferfer', 'ferferr'),
(8, 1554812777, '', 'iojoijojoijio h huy guy gyg g uyg uyg uy');

-- --------------------------------------------------------

--
-- Структура таблицы `products`
--

CREATE TABLE `products` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `title` varchar(200) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `description` text NOT NULL,
  `price` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `products`
--

INSERT INTO `products` (`id`, `title`, `description`, `price`) VALUES
(14, 'Телевизор', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid corporis laborum nulla odio praesentium sequi!', 154),
(15, 'Тепловизор', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci alias aliquam eos iure perspiciatis temporibus.', 587),
(16, 'Холодильник', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid corporis laborum nulla odio praesentium sequi!', 2395),
(17, 'Пылесос', 'ipsum dolor sit amet, consectetur adipisicing elit. Adipisci alias aliquam eos iure perspiciatis temporibus.', 1655),
(18, 'Игрушка', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci alias aliquam eos iure perspiciatis temporibus.', 111),
(19, 'Конь с колесиками', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid corporis laborum nulla odio praesentium sequi!', 999),
(20, 'Заводной автомобиль', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid corporis laborum nulla odio praesentium sequi!', 1235);

--
-- Индексы сохранённых таблиц
--

--
-- Индексы таблицы `guestbook`
--
ALTER TABLE `guestbook`
  ADD UNIQUE KEY `id` (`id`);

--
-- Индексы таблицы `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `id` (`id`);

--
-- AUTO_INCREMENT для сохранённых таблиц
--

--
-- AUTO_INCREMENT для таблицы `guestbook`
--
ALTER TABLE `guestbook`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT для таблицы `products`
--
ALTER TABLE `products`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=22;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
