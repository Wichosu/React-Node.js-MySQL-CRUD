(display "Programa que calcula la fuerza en Newtons \n")
(display "Ingresa la velocidad inicial \n")
(define vi(read))
(display "Ingresa la velocidad final \n")
(define vf(read))
(display "Ingresa el tiempo \n")
(define t(read))
(display "Ingresa la masa \n")
(define m(read))
;Formulas
;Especial para convertir horas a segundos (define (seconds) (* t 1200))  
(define (aceleracion) (/ (- vf vi 0.0) t)); 0.0 para que arroje un resultado en numeros reales en vez de racionales
(define (fuerza) (* m (aceleracion)))
;resultados
(display "Tu aceleracion es \n")
(aceleracion)
(display "Tu fuerza en newtons es \n")
(fuerza)