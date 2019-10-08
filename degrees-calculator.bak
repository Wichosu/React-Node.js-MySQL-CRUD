(display "Calculadora de conversiones. Por favor ingresa la cantidad a convertir \n")
(define degrees (read))
(display "Por favor selecciona la opcion que desees \n")
(display " 1.Celcius a Farenheit \n 2.Farenheit a Celcius \n 3.Celcius a Kelvin \n 4.Kelvin a Celcius \n 5.Kelvin a Farenheit \n 6.Farenheit a Kelvin \n")
(define option (read))
;Formulas
(define (ctf c) (+ (* c 1.8) 32));Celcius to Farenheit
(define (ftc f) (* (- f 32) 0.5));Farenheit to Celcius
(define (ctk c) (+ c 273.15));Celcius to Kelvin
(define (ktc k) (- k 273.15));Kelvin to Celcius
(define (ktf k) (+ (* (- k 273.15) 1.8) 32));Kelvin to Farenheit
(define (ftk f) (+ (* (- f 32) 0.5) 273.15));Farenheit to Kelvin
(cond 
  ((= option 1) 
   (begin 
     (display "Has seleccionado la opcion Celcius a Farenheit \n Tus grados Farenheit son ")
     (ctf degrees)))
  ((= option 2)
   (begin
     (display "Has seleccionado la opcion Farenheit a Celcius \n Tus grados Celcius son ")
     (ftc degrees)))
  ((= option 3)
   (begin
      (display "Has seleccionado la opcion Celcius a Kelvin \n Tus grados Kelvin son ")
      (ctk degrees)))
  ((= option 4)
   (begin
      (display "Has seleccionado la opcion Kelvin a Celcius \n Tus grados Celcius son ")
      (ktc degrees)))
  ((= option 5)
    (begin
      (display "Has seleccionado la opcion Kelvin a Farenheit \n Tus grados Farenheit son ")
      (ktf degrees)))
  ((= option 6)
   (begin
     (display "Has seleccionado la opcion Farenheit a Kelvin \n Tus grados Kelvin son ")
     (ftk degrees)))
  (else 
   (display "Seleccionaste una opcion no valida intenta de nuevo \n")))
   


   

    
