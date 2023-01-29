Feature: Calcular o resultado com base em dois números de 0 a 9
    
    Scenario: Somar dois números
        Given que a calculadora esta aberta
        When clico no botao "4"
        And clico no botao "plus"
        And clico no botao "6"
        And clico no botao "equals"
        Then exibe o resultado "10" 
        
    Scenario Outline: Calcular 
        Given que a calculadora esta aberta
        When clico no botao <numero1>
        And clico no botao <operacao>
        And clico no botao <numero2>
        And clico no botao "equals"
        Then exibe o resultado <resultado>

        Examples:
            | numero1 | operacao | numero2 | resultado |            
            | "4"     | "plus"   | "6"     | "10"      |        
            | "6"     | "minus"  | "4"     | "2"       |     
            | "8"     | "divide" | "2"     | "4"       |

