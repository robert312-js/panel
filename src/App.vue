<template>
	<div class="app">
		<router-view />
	</div>
</template>

<style lang="scss">
@import url('https://fonts.cdnfonts.com/css/pf-dindisplay-pro');
@import url('https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;0,1000;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900;1,1000&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap');


:root {
	/* ===== Colors ===== */
    --panel-color: #1a1d1f;
	--background: #111315;
	--panel-accent-color: #0e0e0e;
	--panel-accent-color-hover: #000000;
	--panel-border-color: #ffffff40;

	--panel-vehicle-border: #ffffff20;
	--panel-history-border: #ffffff10;
	--text-color: #ffffff;

	--pagination-text-color: #ffffff;
	--pagination-accent-color: #5DA7DB;

    --border-color: #3c4044;
    --title-icon-color: #fff;

	--box-color: #2a85ff;
	--box-color-hover: rgb(223, 211, 211);
	--box-text-color-hover: #000;
	
	--add-user-color: rgb(10, 194, 25);
    
	/* ===== Box Shadow ===== */
	--shadow-1: rgb(0 0 0 / 5%) 0rem 1.25rem 1.6875rem 0rem;
    
    /* ====== Transition ====== */
    --tran-05: all 0.5s ease;
    --tran-03: all 0.3s ease;
    --tran-03: all 0.2s ease;
}

.dashboard{
	width: 100%;
	height: 100%;
	position: relative;
	transition: var(--tran-05);

	display: inline-flex;
	justify-content: left;
	align-items: left;
}

* {
	margin: 0;
	padding: 0;
	
	box-sizing: border-box;
	font-family: 'Poppins'
}

body {
    background: var(--background);
	transition: var(--tran-05);
	height:100%;
}

</style>