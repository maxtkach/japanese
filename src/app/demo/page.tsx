'use client';

import React from 'react';
import ParallaxSection from '../components/animations/ParallaxSection';
import SakuraPetals from '../components/animations/SakuraPetals';
import TeaCup from '../components/animations/TeaCup';
import MovingClouds from '../components/animations/MovingClouds';
import { motion } from 'framer-motion';

// Анимация для появления контента
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6 }
  }
};

// Анимация заголовка с задержкой для дочерних элементов
const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3
    }
  }
};

// Анимация для букв
const letterAnimation = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      stiffness: 100,
      damping: 10
    }
  }
};

const DemoPage = () => {
  // Разбиваем текст на отдельные буквы для анимации
  const titleText = "Демонстрация анимаций";
  const titleLetters = titleText.split("");
  
  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100">
      {/* Облака на фоне */}
      <MovingClouds count={10} minOpacity={0.2} maxOpacity={0.4} />
      
      {/* Первая секция с параллаксом */}
      <ParallaxSection
        className="min-h-screen flex flex-col items-center justify-center text-center p-8"
        speed={0.3}
        direction="up"
        bgColor="#111111"
      >
        <motion.div 
          className="max-w-4xl mx-auto"
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          <div className="flex justify-center mb-8">
            {titleLetters.map((letter, index) => (
              <motion.span
                key={index}
                className="text-5xl md:text-7xl font-bold text-white inline-block"
                variants={letterAnimation}
                style={{ display: letter === " " ? "inline-block" : "inline-block", width: letter === " " ? "0.5em" : "auto" }}
              >
                {letter}
              </motion.span>
            ))}
          </div>
          
          <motion.p 
            className="text-xl text-neutral-300 mb-12"
            variants={fadeIn}
          >
            Прокрутите страницу, чтобы увидеть все эффекты в действии
          </motion.p>
          
          <motion.div 
            className="animate-bounce"
            variants={fadeIn}
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              width="24" 
              height="24" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              className="text-white w-10 h-10"
            >
              <path d="M12 5v14M5 12l7 7 7-7"/>
            </svg>
          </motion.div>
        </motion.div>
      </ParallaxSection>
      
      {/* Секция с лепестками сакуры */}
      <ParallaxSection
        className="min-h-screen flex items-center justify-center relative py-20"
        bgColor="#1c1c1c"
        speed={0.5}
        direction="down"
      >
        <SakuraPetals count={40} />
        
        <motion.div 
          className="max-w-2xl mx-auto text-center px-4 z-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          variants={fadeIn}
        >
          <motion.h2 
            className="text-4xl md:text-6xl font-bold mb-6 text-pink-200"
            whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
          >
            Лепестки сакуры
          </motion.h2>
          <p className="text-lg text-neutral-300 mb-8">
            Нежные лепестки сакуры, созданные с помощью Three.js, падают с лёгкостью ветра, добавляя атмосферу японской весны.
          </p>
        </motion.div>
      </ParallaxSection>
      
      {/* Секция с чашкой чая */}
      <ParallaxSection
        className="min-h-screen flex items-center justify-center relative py-20"
        bgColor="#0f0f0f"
        speed={0.3}
        direction="left"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto px-4">
          <motion.div 
            className="flex items-center justify-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            variants={fadeIn}
          >
            <div className="w-full h-[400px]">
              <TeaCup />
            </div>
          </motion.div>
          
          <motion.div 
            className="flex flex-col justify-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            variants={fadeIn}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-green-200">
              Чайная церемония
            </h2>
            <p className="text-lg text-neutral-300 mb-4">
              Традиционная японская чайная церемония — это искусство, уходящее корнями в глубину веков.
            </p>
            <p className="text-lg text-neutral-300">
              Вращающаяся чашка чая, созданная с помощью Three.js, символизирует гармонию и единство с природой.
            </p>
          </motion.div>
        </div>
      </ParallaxSection>
      
      {/* Секция с облаками */}
      <ParallaxSection
        className="min-h-screen flex items-center justify-center relative py-20"
        bgColor="#131336"
        speed={0.4}
        direction="right"
      >
        <MovingClouds count={15} minOpacity={0.6} maxOpacity={0.9} className="opacity-30" />
        
        <motion.div 
          className="max-w-2xl mx-auto text-center px-4 z-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          variants={fadeIn}
        >
          <motion.h2 
            className="text-4xl md:text-6xl font-bold mb-6 text-blue-200"
            whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
          >
            Облака над Фудзи
          </motion.h2>
          <p className="text-lg text-neutral-200 mb-8">
            Движущиеся облака, созданные с помощью Framer Motion, передают атмосферу 
            спокойствия и величия, характерную для японских пейзажей.
          </p>
        </motion.div>
      </ParallaxSection>
      
      {/* Заключительная секция */}
      <ParallaxSection
        className="min-h-screen flex items-center justify-center relative py-20"
        bgColor="#000000"
        speed={0.2}
        direction="up"
      >
        <motion.div 
          className="max-w-2xl mx-auto text-center px-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          variants={fadeIn}
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-white">
            Спасибо за внимание
          </h2>
          <p className="text-lg text-neutral-300 mb-12">
            Все эти эффекты доступны для использования в вашем ресторане. 
            Создайте неповторимую атмосферу для ваших гостей.
          </p>
          <motion.a 
            href="/"
            className="inline-block bg-gradient-to-r from-red-600 to-red-700 text-white px-8 py-4 rounded-lg text-lg font-medium"
            whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
            whileTap={{ scale: 0.95 }}
          >
            Вернуться на главную
          </motion.a>
        </motion.div>
      </ParallaxSection>
    </div>
  );
};

export default DemoPage; 