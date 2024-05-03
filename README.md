graph LR;
    Inicio --> Usuario_accede;
    Usuario_accede --> Carga_pagina;
    Carga_pagina --> Usuario_interactua;
    Usuario_interactua --> Actualizacion_interfaz;
    Actualizacion_interfaz --> Usuario_finaliza;
    Usuario_finaliza --> Fin;
    
