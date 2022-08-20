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
        <div class="two">Two</div>
        <div class="three">Three</div>
        <div class="four">Four</div>
        <div class="five">Five</div>
        <div class="six">Six</div>
    
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
    background-color: gray;
    width: 100%;
    height: 80%;
    }
    .one {
    grid-column: 1 ;
    grid-row: 1;
    border : 1px solid black;
    }
    
    .two {
    grid-column: 2 ;
    grid-row: 1;
    border : 1px solid black;
    }
    .three {
    grid-column: 3;
    grid-row: 1;
    border : 1px solid black;
    }
    .four {
    grid-column: 1;
    grid-row: 2;
    border : 1px solid black;
    }
    .five {
    grid-column: 2;
    grid-row: 2;
    border : 1px solid black;
    }
    .six {
    grid-column: 3;
    grid-row: 2;
    border : 1px solid black;
    }
    .textos{
        font-size: 18px;
        color:yellow;
    }
</style>