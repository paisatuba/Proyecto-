<template>
 <div class="cards">
        
        <div class="one">
            <img alt="BSP Iglesia" class="Banda" src="@/components/icons/corno.png" height=60%  width=100% />
            <div class="textos">
                <h3>Ensayo metales</h3>
                <p>Lunes 2-4</p>
                <p>Miercoles 2-4</p>
            </div>
        </div>
        <div class="two">
            <img alt="BSP Iglesia" class="Banda" src="@/components/icons/saxofon.png" height=55%  width=100% />
            <div class="textos">
                <h3>Ensayo maderas</h3>
                <p>Martes 2-4</p>
                <p>Jueves 2-4</p>
            </div>
        </div>
        <div class="three">
            <img alt="BSP Iglesia" class="Banda" src="@/components/icons/percu.png" height=55%  width=100% />
            <div class="textos">
                <h3>Ensayo percusion</h3>
                <p>Viernes 2-4</p>
                <p>Sabado 2-4</p>
            </div>
        </div>
        <div class="four">
            <div class="textos">
                <div class="textos2">
                <h3>Ensayo toda la banda</h3>
                <p>Lunes 10-12</p>
                <p>Jueves 10-12</p>
                </div>
            </div>
        </div>
       
    
</div>
   
</template>
<script>
export default {

}
</script>
<style>
    .cards {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 10px;
    grid-auto-rows: minmax(100px, auto);
   
    width: 100%;
    height: 80%;
    }
    .one {
    grid-column: 1 ;
    grid-row: 1;
    
    }
    
    .two {
    grid-column: 2 ;
    grid-row: 1;
  
    }
    .three {
    grid-column: 3;
    grid-row: 1;
   
    }
    .four {
    grid-column: 1/4;
    grid-row: 2;

    }
    
    
    .textos{
        font-size: 18px;
        color:yellow;
    }
    .textos2{
        text-align: center;
        font-size: 20px;
    }
</style>