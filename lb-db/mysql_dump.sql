-- MySQL dump 10.13  Distrib 8.0.36, for macos14 (arm64)
--
-- Host: localhost    Database: library_db
-- ------------------------------------------------------
-- Server version	8.3.0

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `authors`
--

DROP TABLE IF EXISTS `authors`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `authors` (
  `author_id` int NOT NULL AUTO_INCREMENT,
  `author_firstname` varchar(100) NOT NULL,
  `author_lastname` varchar(100) NOT NULL,
  `author_middlename` varchar(25) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `deketed_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`author_id`)
) ENGINE=InnoDB AUTO_INCREMENT=27 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `authors`
--

LOCK TABLES `authors` WRITE;
/*!40000 ALTER TABLE `authors` DISABLE KEYS */;
INSERT INTO `authors` VALUES (1,'Kristen','Hong','','2024-05-02 19:22:07','2024-05-02 19:22:07','2024-05-02 19:22:07'),(2,'Robert','Wildinger','J','2024-05-02 19:22:07','2024-05-02 19:22:07','2024-05-02 19:22:07'),(3,'Lisa','See','','2024-05-02 19:22:07','2024-05-02 19:22:07','2024-05-02 19:22:07'),(4,'Patric','Karst','','2024-05-02 19:22:07','2024-05-02 19:22:07','2024-05-02 19:22:07'),(5,'Ashish','Prajapati','','2024-05-02 19:22:07','2024-05-02 19:22:07','2024-05-02 19:22:07'),(6,'Atsuko','Ikeda','','2024-05-02 19:22:07','2024-05-02 19:22:07','2024-05-02 19:22:07'),(7,'Mark','Lutz','','2024-05-02 19:22:07','2024-05-02 19:22:07','2024-05-02 19:22:07'),(8,'Saurabh','Shrivastava','','2024-05-02 19:22:07','2024-05-02 19:22:07','2024-05-02 19:22:07'),(9,'Naoko','Takei','Moore','2024-05-02 19:22:07','2024-05-02 19:22:07','2024-05-02 19:22:07'),(10,'Ana','Huang','','2024-05-02 19:22:07','2024-05-02 19:22:07','2024-05-02 19:22:07'),(11,'Saurabh','Shrivastava','','2024-05-02 19:22:07','2024-05-02 19:22:07','2024-05-02 19:22:07'),(12,'Christopher','Shockey','','2024-05-02 19:57:53','2024-05-02 19:57:53','2024-05-02 19:57:53'),(13,'P','eastman','D','2024-05-02 19:57:53','2024-05-02 19:57:53','2024-05-02 19:57:53'),(14,'Rebecca','Yarros','','2024-05-02 19:57:53','2024-05-02 19:57:53','2024-05-02 19:57:53'),(15,'Walter','Shields','','2024-05-02 19:57:53','2024-05-02 19:57:53','2024-05-02 19:57:53'),(16,'Kristen','Hong','','2024-05-02 19:57:53','2024-05-02 19:57:53','2024-05-02 19:57:53'),(17,'Robert','Wildinger','J','2024-05-02 19:57:53','2024-05-02 19:57:53','2024-05-02 19:57:53'),(18,'Lisa','See','','2024-05-02 19:57:53','2024-05-02 19:57:53','2024-05-02 19:57:53'),(19,'Patric','Karst','','2024-05-02 19:57:53','2024-05-02 19:57:53','2024-05-02 19:57:53'),(20,'Ashish','Prajapati','','2024-05-02 19:57:53','2024-05-02 19:57:53','2024-05-02 19:57:53'),(21,'Atsuko','Ikeda','','2024-05-02 19:57:53','2024-05-02 19:57:53','2024-05-02 19:57:53'),(22,'Mark','Lutz','','2024-05-02 19:57:53','2024-05-02 19:57:53','2024-05-02 19:57:53'),(23,'Saurabh','Shrivastava','','2024-05-02 19:57:53','2024-05-02 19:57:53','2024-05-02 19:57:53'),(24,'Naoko','Takei','Moore','2024-05-02 19:57:53','2024-05-02 19:57:53','2024-05-02 19:57:53'),(25,'Ana','Huang','','2024-05-02 19:57:53','2024-05-02 19:57:53','2024-05-02 19:57:53'),(26,'Saurabh','Shrivastava','','2024-05-02 19:57:53','2024-05-02 19:57:53','2024-05-02 19:57:53');
/*!40000 ALTER TABLE `authors` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `books`
--

DROP TABLE IF EXISTS `books`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `books` (
  `book_id` int NOT NULL AUTO_INCREMENT,
  `book_title` varchar(500) NOT NULL,
  `book_description` varchar(5000) NOT NULL,
  `book_image_url` varchar(255) DEFAULT NULL,
  `genre_id` int DEFAULT NULL,
  `author_id` int DEFAULT NULL,
  `total_copies` int NOT NULL,
  `available_copies` int NOT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `deketed_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`book_id`),
  KEY `genre_id` (`genre_id`),
  KEY `author_id` (`author_id`),
  CONSTRAINT `books_ibfk_1` FOREIGN KEY (`genre_id`) REFERENCES `genre` (`genre_id`),
  CONSTRAINT `books_ibfk_2` FOREIGN KEY (`author_id`) REFERENCES `authors` (`author_id`)
) ENGINE=InnoDB AUTO_INCREMENT=19 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `books`
--

LOCK TABLES `books` WRITE;
/*!40000 ALTER TABLE `books` DISABLE KEYS */;
INSERT INTO `books` VALUES (1,'Fermented Vegetables: Creative Recipes for Fermenting 64 Vegetables & Herbs in Krauts, Kimchis, Brined Pickles, Chutneys, Relishes & Pastes','Master the techniques for making sauerkraut, kimchi, pickles, and other savory, probiotic-rich foods in your own kitchen.This easy-to-follow, comprehensive guide presents more than 120 recipes for fermenting 64 different vegetables and herbs. Learn the basics, and then refine your technique as you expand your repertoire to include curried golden beets, pickled green coriander, and carrot kraut. With a variety of creative and healthy recipes, many of which can be made in batches as small as one pint, you will enjoy this fun and delicious way to preserve and eat your vegetables.','https://m.media-amazon.com/images/I/A1v+n3IabuL._SY522_.jpg',2,1,10,10,'2024-05-02 20:00:34','2024-05-02 20:00:34','2024-05-02 20:00:34'),(2,'Are You My Mother?','When a mother bird\"s egg starts to jump, she hurries off to make sure she has something for her little one to eat. But as soon as she\"s gone, out pops the baby bird. He immediately sets off to find his mother, but not knowing what she looks like makes it a challenge. The little hatchling is determined to find his mother, even after meeting a kitten, a hen, a dog, and a Snort..','https://m.media-amazon.com/images/I/61GO+cnyq5L._SY522_.jpg',4,2,10,10,'2024-05-02 20:00:55','2024-05-02 20:00:55','2024-05-02 20:00:55'),(3,'Fourth Wing (The Empyrean Book 1)','A #1 New York Times bestseller • Optioned for TV by Amazon Studios • Amazon Best Books of the Year, #4 • Apple Best Books of the Year 2023 • Barnes & Noble Best Fantasy Book of 2023 • NPR \"\"\"Books We Love\"\"\" 2023 • Audible Best Books of 2023 • Hudson Book of the Year • Google Play Best Books of 2023 • Indigo Best Books of 2023 • Waterstones Book of the Year finalist • Goodreads Choice Award, semi-finalist • Newsweek Staffers\" Favorite Books of 2023 • Paste Magazine\"s Best Books of 2023','https://m.media-amazon.com/images/I/914HWd0RxsL._SY522_.jpg',2,3,10,10,'2024-05-02 20:01:26','2024-05-02 20:01:26','2024-05-02 20:01:26'),(4,'SQL QuickStart Guide: The Simplified Beginners Guide to Managing, Analyzing, and Manipulating Data With SQL (Coding & Programming - QuickStart Guides)','THE BEST SQL BOOK FOR BEGINNERS IN 2024 - HANDS DOWN!\n*INCLUDES FREE ACCESS TO A SAMPLE DATABASE, SQL BROWSER APP, COMPREHENSION QUIZES & SEVERAL OTHER DIGITAL RESOURCES!*\nThe same book currently in used in college-level courses while remaining approachable for beginners!\nNot sure how to prepare for the data-driven future?\nThis book shows you EXACTLY what you need to know to successfully use the SQL programming language to enhance your career!','https://m.media-amazon.com/images/I/61wEaFn6TmL._SY522_.jpg',2,4,10,10,'2024-05-02 20:01:55','2024-05-02 20:01:55','2024-05-02 20:01:55'),(5,'Fridge Love: Organize Your Refrigerator for a Healthier, Happier Life—with 100 Recipes','A one-of-a-kind guide to organizing your fridge—including practical tips for meal prep and storage, plus more than 100 recipes—that makes it easier to eat better, save money, and get the most out of your food. Practicing “fridge love” is a roadmap to eating healthier, saving money, and reducing food waste while enjoying a beautiful and harder-working fridge. This book—part organizational guide and part food-prep handbook—is your guide. Author Kristen Hong adopted a nutrient-dense, plant-based diet in an effort to lose weight and improve her health. But amidst the demands of day-to-day life and a busy family, she found it impossible to stick to. The solution? A smarter, better-organized fridge that served her real-life needs. In this invaluable resource, you will discover how a beautifully organized fridge can make your life—including healthy eating for the whole family—easier. It covers general fridge organization (for all models and configurations) as well as shopping tips, storage guidelines, the best meal-prep containers, and more than 100 easy plant-based recipes made for meal prepping.','https://m.media-amazon.com/images/I/916pknhAxcL._SY522_.jpg',2,5,5,3,'2024-05-02 20:05:15','2024-05-02 20:05:15','2024-05-02 20:05:15'),(6,'Fridge Love: Organize Your Refrigerator for a Healthier, Happier Life—with 100 Recipes','A one-of-a-kind guide to organizing your fridge—including practical tips for meal prep and storage, plus more than 100 recipes—that makes it easier to eat better, save money, and get the most out of your food. Practicing “fridge love” is a roadmap to eating healthier, saving money, and reducing food waste while enjoying a beautiful and harder-working fridge. This book—part organizational guide and part food-prep handbook—is your guide. Author Kristen Hong adopted a nutrient-dense, plant-based diet in an effort to lose weight and improve her health. But amidst the demands of day-to-day life and a busy family, she found it impossible to stick to. The solution? A smarter, better-organized fridge that served her real-life needs. In this invaluable resource, you will discover how a beautifully organized fridge can make your life—including healthy eating for the whole family—easier. It covers general fridge organization (for all models and configurations) as well as shopping tips, storage guidelines, the best meal-prep containers, and more than 100 easy plant-based recipes made for meal prepping.','https://m.media-amazon.com/images/I/916pknhAxcL._SY522_.jpg',2,5,5,3,'2024-05-02 20:07:43','2024-05-02 20:07:43','2024-05-02 20:07:43'),(7,'The Good Life: Lessons from the World\'s Longest Scientific Study of Happiness','A New York Times Bestseller.  What makes for a happy life, a fulfilling life? A good life? In their “captivating” (The Wall Street Journal) book, the directors of the Harvard Study of Adult Development, the longest scientific study of happiness ever conducted, show that the answer to these questions may be closer than you realize. What makes a life fulfilling and meaningful? The simple but surprising answer is: relationships. The stronger our relationships, the more likely we are to live happy, satisfying, and healthier lives. In fact, the Harvard Study of Adult Development reveals that the strength of our connections with others can predict the health of both our bodies and our brains as we go through life.','https://m.media-amazon.com/images/I/61vJIMszHfL._SY522_.jpg',8,6,3,2,'2024-05-02 20:07:43','2024-05-02 20:07:43','2024-05-02 20:07:43'),(8,'Lady Tan\'s Circle of Women: A Novel Kindle Edition','*NEW YORK TIMES BESTSELLER!*\n\nFrom “one of those special writers capable of delivering both poetry and plot” (The New York Times Book Review) an immersive historical novel inspired by the true story of a woman physician in 15th-century China—perfect for fans of Lisa See\'s classics Snow Flower and the Secret Fan and Tea Girl of Hummingbird Lane.\n\nAccording to Confucius, “an educated woman is a worthless woman,” but Tan Yunxian—born into an elite family, yet haunted by death, separations, and loneliness—is being raised by her grandparents to be of use. Her grandmother is one of only a handful of female doctors in China, and she teaches Yunxian the pillars of Chinese medicine, the Four Examinations—looking, listening, touching, and asking—something a man can never do with a female patient.\n\nFrom a young age, Yunxian learns about women\'s illnesses, many of which relate to childbearing, alongside a young midwife-in-training, Meiling. The two girls find fast friendship and a mutual purpose—despite the prohibition that a doctor should never touch blood while a midwife comes in frequent contact with it—and they vow to be forever friends, sharing in each other\'s joys and struggles. No mud, no lotus, they tell themselves: from adversity beauty can bloom.\n\nBut when Yunxian is sent into an arranged marriage, her mother-in-law forbids her from seeing Meiling and from helping the women and girls in the household. Yunxian is to act like a proper wife—embroider bound-foot slippers, recite poetry, give birth to sons, and stay forever within the walls of the family compound, the Garden of Fragrant Delights.\n\nHow might a woman like Yunxian break free of these traditions and lead a life of such importance that many of her remedies are still used five centuries later? How might the power of friendship support or complicate these efforts? A captivating story of women helping each other, Lady Tan\'s Circle of Women is a triumphant reimagining of the life of one person who was remarkable in the Ming dynasty and would be considered remarkable today.','https://m.media-amazon.com/images/I/81kXVrqh+aL._SY522_.jpg',7,7,5,2,'2024-05-02 20:07:43','2024-05-02 20:07:43','2024-05-02 20:07:43'),(9,'Ruby and Lonely','From the bestselling author of The Invisible String comes a timely and powerful story that teaches the secret to finding your own inner best friend forever!\n\nRuby\'s got a problem. At school and at home, everyone is so busy all the time, and no one seems to notice her at all. Ruby finds herself feeling kind of…lonely. But one day, while walking home alone after school, she decides to look at her problem from a new angle. She even gives it a name—Lonely—a seemingly small but significant decision that transforms her entire life in the most surprising and extraordinary way. Join Ruby as she discovers her inner best friend in this relatable and heartwarming story. A note from the author and discussion questions are included.','https://m.media-amazon.com/images/I/91QXqQcdPyL._SY522_.jpg',4,8,8,8,'2024-05-02 20:07:43','2024-05-02 20:07:43','2024-05-02 20:07:43'),(10,'The Good Life: Lessons from the World\'s Longest Scientific Study of Happiness','A New York Times Bestseller\n\nWhat makes for a happy life, a fulfilling life? A good life? In their “captivating” (The Wall Street Journal) book, the directors of the Harvard Study of Adult Development, the longest scientific study of happiness ever conducted, show that the answer to these questions may be closer than you realize.\n\nWhat makes a life fulfilling and meaningful? The simple but surprising answer is: relationships. The stronger our relationships, the more likely we are to live happy, satisfying, and healthier lives. In fact, the Harvard Study of Adult Development reveals that the strength of our connections with others can predict the health of both our bodies and our brains as we go through life.\n\nThe invaluable insights in this book emerge from the revealing personal stories of hundreds of participants in the Harvard Study as they were followed year after year for their entire adult lives, and this wisdom was bolstered by research findings from many other studies. Relationships in all their forms—friendships, romantic partnerships, families, coworkers, tennis partners, book club members, Bible study groups—all contribute to a happier, healthier life. And as The Good Life shows us, it\'s never too late to strengthen the relationships you already have, and never too late to build new ones. The Good Life provides examples of how to do this.\n\nDr. Waldinger\'s TED Talk about the Harvard Study, “What Makes a Good Life,” has been viewed more than 42 million times and is one of the ten most-watched TED talks ever. The Good Life has been praised by bestselling authors Jay Shetty “an empowering quest towards our greatest need: meaningful human connection”), Angela Duckworth (“In a crowded field of life advice...Schulz and Waldinger stand apart”), and happiness expert Laurie Santos (“Waldinger and Schulz are world experts on the counterintuitive things that make life meaningful”).\n\nWith “insightful [and] interesting” (Daniel Gilbert, New York Times bestselling author of Stumbling on Happiness) life stories, The Good Life shows us how we can make our lives happier and more meaningful through our connections to others.','https://m.media-amazon.com/images/I/61vJIMszHfL._SY522_.jpg',2,6,10,6,'2024-05-02 20:07:44','2024-05-02 20:07:44','2024-05-02 20:07:44'),(11,'AWS Solutions Architect Associate Exam - Service Summary Cards: Get answer to all W questions for AWS Services covered in AWS Certified Solutions Architect ... latest SAA-C03 (AWS Service Summary Cards)','With over 200 fully featured services available in Amazon Web Services (AWS), it can be a daunting task if you want to know about every service. Each AWS Service has its own Overview Page, Use Case, Documentation, FAQs, and Pricing pages, which can also contain detailed explanations of how each service works, coupled with its interdependencies with other services. This can lead to your learning focus being derailed into multiple technological areas that you may not have been initially aiming for.\n\nThis series is an attempt to cut down on that complication. You will find Service Summary Cards (SSC) describing all the W questions (What, Why, When, Where, Who, How, How much?) organized based on services covered in an AWS Certification Exam.\n\nThese cards are designed to provide the key information and can be useful to anyone who wants to learn about different AWS services, including someone who is not preparing for a certification exam.','https://m.media-amazon.com/images/I/712oolek3ML._SY522_.jpg',2,9,3,3,'2024-05-02 20:07:44','2024-05-02 20:07:44','2024-05-02 20:07:44'),(12,'Atsuko\'s Japanese Kitchen: Home-cooked comfort food made simple','Learn how to make the enigmatic and umami-rich comfort food of Japan, with over 60 recipes straight from Atsuko\'s Ikeda\'s authentic yet modern Japanese Kitchen.\n\nJapanese home-cooking is full of comfort, but a version of comfort food that is stylish, mouth-watering and less unhealthy than most. For those who aspire to recreate the Japanese dishes enjoyed in restaurants or on holiday, and to discover even more about the secrets and techniques involved in Japanese home cooking, you are invited into Atsuko\'s Kitchen. Learn the subtle art of creating a balanced meal as demonstrated with an easy-to-follow infographic. Learn the basics, such as how to season food the Japanese way, how to prepare dashi stock and how to make variations on basic rice. Choose from the delicious array of main dishes you might be familiar with, such as chicken teriyaki, tonkatsu pork, beef tataki, gyoza, seared tuna with ponzu, vegetable tempura, okonomiyaki, grilled eggplant with sesame sauce, plus recipes from Atsuko\'s own family and modern creative repertoire. Also featuring \'izakaya\' small plates for sharing and sumptuous modern desserts, there is Japanese comfort food for every occasion. With tips on how to present your dishes in the traditional way, anecdotes and cultural explanations of dishes, discover the secrets of Japanese home-cooking for yourself.','https://m.media-amazon.com/images/I/81JFF9PJ-zL._SY522_.jpg',2,10,5,5,'2024-05-02 20:07:44','2024-05-02 20:07:44','2024-05-02 20:07:44'),(13,'Learning Python, 5th Edition','Get a comprehensive, in-depth introduction to the core Python language with this hands-on book. Based on author Mark Lutz\'s popular training course, this updated fifth edition will help you quickly write efficient, high-quality code with Python. It\'s an ideal way to begin, whether you\'re new to programming or a professional developer versed in other languages.\n\nComplete with quizzes, exercises, and helpful illustrations, this easy-to-follow, self-paced tutorial gets you started with both Python 2.7 and 3.3— the latest releases in the 3.X and 2.X lines—plus all other releases in common use today. You\'ll also learn some advanced language features that recently have become more common in Python code.\n\nExplore Python\'s major built-in object types such as numbers, lists, and dictionaries\nCreate and process objects with Python statements, and learn Python\'s general syntax model\nUse functions to avoid code redundancy and package code for reuse\nOrganize statements, functions, and other tools into larger components with modules\nDive into classes: Python\'s object-oriented programming tool for structuring code\nWrite large programs with Python\'s exception-handling model and development tools\nLearn advanced Python tools, including decorators, descriptors, metaclasses, and Unicode processing','https://m.media-amazon.com/images/I/91RcdlPx1CL._SY522_.jpg',5,11,5,0,'2024-05-02 20:07:44','2024-05-02 20:07:44','2024-05-02 20:07:44'),(14,'AWS for Solutions Architects - Second Edition: The definitive guide to AWS Solutions Architecture for migrating to, building, scaling, and succeeding in the cloud 2nd ed','Become a master Solutions Architect with this comprehensive guide, featuring cloud design patterns and real-world solutions for building scalable, secure, and highly available systems\n\nPurchase of the print or Kindle book includes a free eBook in PDF format.\n\nKey Features\nGain expertise in automating, networking, migrating, and adopting cloud technologies using AWS\nUse streaming analytics, big data, AI/ML, IoT, quantum computing, and blockchain to transform your business\nUpskill yourself as an AWS solutions architect and explore details of the new AWS certification\nBook Description\nAre you excited to harness the power of AWS and unlock endless possibilities for your business? Look no further than the second edition of AWS for Solutions Architects! Imagine crafting cloud solutions that are secure, scalable, and optimized - not just good, but industry-leading.','https://m.media-amazon.com/images/I/6160P+juPyL._SY522_.jpg',2,12,5,2,'2024-05-02 20:07:44','2024-05-02 20:07:44','2024-05-02 20:07:44'),(15,'Donabe: Classic and Modern Japanese Clay Pot Cooking [A One-Pot Cookbook]','A beautiful and lavishly photographed cookbook focused on authentic Japanese clay-pot cooking, showcasing beloved recipes and updates on classics, with background on the origins and history of donabe.\n\nJapanese clay pot (donabe) cooking has been refined over centuries into a versatile and simple method for preparing both dramatic and comforting one-pot meals. In Donabe, Tokyo native and cooking school instructor Naoko Takei Moore and chef Kyle Connaughton offer inspiring Japanese home-style recipes such as Sizzling Tofu and Mushrooms in Miso Sauce and Dashi-Rich Shabu-Shabu, as well as California-inspired dishes including Steam-Fried Black Cod with Crisp Potatoes, Leeks, and Walnut-Nori Pesto or Smoked Duck Breast with Creamy Wasabi-Green Onion Dipping Sauce. All are rich in flavor, simple to prepare, and perfect for a communal dining experience with family and friends. Donabe also features recipes from luminary chefs such as David Kinch, Namae Shinobu, and Cortney Burns and Nick Balla, all of whom use donabe in their own kitchens. Collectible, beautiful, and functional, donabe can easily be an essential part of your cooking repetory.','https://m.media-amazon.com/images/I/81ol1svY+zL._SY522_.jpg',2,13,8,1,'2024-05-02 20:07:44','2024-05-02 20:07:44','2024-05-02 20:07:44'),(16,'Twisted Love (Twisted, 1)','From New York Times bestselling author and BookTok sensation Ana Huang comes a billionaire brother\'s best friend romance!\n\nHe has a heart of ice…but for her, he\'d burn the world\n\nA diverse new adult steamy romance from Tiktok sensation and USA Today bestselling author Ana Huang.\n\nAlex Volkov is a devil blessed with the face of an angel and cursed with a past he can\'t escape.\n\nDriven by a tragedy that has haunted him for most of his life, his ruthless pursuits for success and vengeance leave little room for matters of the heart.\n\nBut when he\'s forced to look after his best friend\'s sister, he starts to feel something in his chest:\n\nA crack.\n\nA melt.\n\nA fire that could end his world as he knew it.','https://m.media-amazon.com/images/I/71aXWhr9tTL._SY522_.jpg',6,14,5,5,'2024-05-02 20:07:44','2024-05-02 20:07:44','2024-05-02 20:07:44'),(17,'King of Wrath (Kings of Sin, 1)','*A NEW YORK TIMES BESTSELLER*\n\nAn arranged marriage billionaire romance standalone from New York Times bestselling author and BookTok sensation Ana Huang.\n\nShe was my North Star, the brightest jewel in my sky.\n\nRuthless. Meticulous. Arrogant.\n\nBillionaire CEO Dante Russo thrives on control, both personally and professionally.\n\nHe never planned to marry…until the threat of blackmail forces him into an engagement with a woman he barely knows.\n\nVivian Lau, jewelry heiress and daughter of his newest enemy. The wife he never wanted, and the weakness he never saw coming.\n\nIt doesn\'t matter how beautiful or charming she is. Dante will do everything in his power to destroy the blackmail and their betrothal.\n\nThere\'s only one problem: now that he has her, he can\'t bring himself to let her go.','https://m.media-amazon.com/images/I/81cMua2TpUL._SY522_.jpg',6,14,5,0,'2024-05-02 20:07:44','2024-05-02 20:07:44','2024-05-02 20:07:44'),(18,'Twisted Games (Twisted, 2)','From New York Times bestselling author and BookTok sensation Ana Huang comes a contemporary royal romance!\n\nStoic, broody, and arrogant, elite bodyguard Rhys Larsen has two rules: 1) Protect his clients at all costs 2) Do not become emotionally involved. Ever.\n\nHe has never once been tempted to break those rules...until her.\n\nBridget von Ascheberg. A princess with a stubborn streak that matches his own and a hidden fire that reduces his rules to ash. She\'s nothing he expected and everything he never knew he needed.\n\nDay by day, inch by inch, she breaks down his defenses until he\'s faced with a truth he can no longer deny: he swore an oath to protect her, but all he wants is to ruin her. Take her.\n\nBecause she\'s his.\n\nHis princess.\n\nHis forbidden fruit.\n\nHis every depraved fantasy.','https://m.media-amazon.com/images/I/71h5+dpAriL._SY522_.jpg',6,14,5,2,'2024-05-02 20:07:44','2024-05-02 20:07:44','2024-05-02 20:07:44');
/*!40000 ALTER TABLE `books` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `checkouts`
--

DROP TABLE IF EXISTS `checkouts`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `checkouts` (
  `checkout_id` int NOT NULL AUTO_INCREMENT,
  `user_id` int DEFAULT NULL,
  `book_id` int DEFAULT NULL,
  `checkout_date` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `due_date` date NOT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `deketed_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`checkout_id`),
  KEY `user_id` (`user_id`),
  KEY `book_id` (`book_id`),
  CONSTRAINT `checkouts_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`user_id`),
  CONSTRAINT `checkouts_ibfk_2` FOREIGN KEY (`book_id`) REFERENCES `books` (`book_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `checkouts`
--

LOCK TABLES `checkouts` WRITE;
/*!40000 ALTER TABLE `checkouts` DISABLE KEYS */;
/*!40000 ALTER TABLE `checkouts` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `genre`
--

DROP TABLE IF EXISTS `genre`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `genre` (
  `genre_id` int NOT NULL AUTO_INCREMENT,
  `genre_name` varchar(150) NOT NULL,
  PRIMARY KEY (`genre_id`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `genre`
--

LOCK TABLES `genre` WRITE;
/*!40000 ALTER TABLE `genre` DISABLE KEYS */;
INSERT INTO `genre` VALUES (1,'Fiction'),(2,'Non-Fiction'),(3,'Mystery'),(4,'Sci-Fiction'),(5,'Teen'),(6,'Children'),(7,'Classic'),(8,'Fantasy'),(9,'Horror');
/*!40000 ALTER TABLE `genre` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `returns`
--

DROP TABLE IF EXISTS `returns`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `returns` (
  `return_id` int NOT NULL AUTO_INCREMENT,
  `return_date` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `checkout_id` int DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `deketed_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`return_id`),
  KEY `checkout_id` (`checkout_id`),
  CONSTRAINT `returns_ibfk_1` FOREIGN KEY (`checkout_id`) REFERENCES `checkouts` (`checkout_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `returns`
--

LOCK TABLES `returns` WRITE;
/*!40000 ALTER TABLE `returns` DISABLE KEYS */;
/*!40000 ALTER TABLE `returns` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `user_id` int NOT NULL AUTO_INCREMENT,
  `user_firstname` varchar(150) NOT NULL,
  `user_lastname` varchar(150) NOT NULL,
  `user_password` varchar(50) NOT NULL,
  `email` varchar(150) NOT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `deketed_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`user_id`),
  UNIQUE KEY `email` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'Noi','Sinnang','12345','noi@gmail.com','2024-05-02 19:26:22','2024-05-02 19:26:22','2024-05-02 19:26:22');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-05-02 16:10:30
