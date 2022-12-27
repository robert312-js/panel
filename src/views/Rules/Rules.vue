<template>
	
	<rules-page>
		<rules-Sidebar page="4"/>
		<div class="rules-content">
			<rules-Header page="Regulamente Server"/>
			
			<div class="rules-delimiter">
				<div class="rules-section">
					<div class="rules-section-header">
						<div class="rules-header-data">
							<div class="icon">
								<fa icon="fa-book" />
							</div>
							<div class="header-texts">
								<h1>Regulament server</h1>
								<p>Citeste regulamentul serverului cu mare atentie!</p>
							</div>
						</div>
					</div>

					<div class="rules-hr"></div>
		
					<div class="rules-section-data">
						<div v-for="(item, index) in rules['server']" :class="['chapter-section', extendedChapters['server' + item.id] ? 'extended' : false]">
							<div class="chapter-wrap">
								<p @click="extendChapter(item.id, 'server')">{{item.id}}</p>
								<fa class="chapter-icon" icon="fa-circle-chevron-down" @click="extendChapter(item.id, 'server')" v-if="!extendedChapters['server' + item.id]" />
								<fa class="chapter-icon" icon="fa-circle-chevron-up" @click="extendChapter(item.id, 'server')" v-else />
							</div>

							<div class="chapter-extended">
								<p v-for="(itm, indx) in item.rules"><span></span> {{itm.text}}</p>
							</div>
						</div>
					</div>
				</div>

				<div class="rules-section">
					<div class="rules-section-header">
						<div class="rules-header-data">
							<div class="icon">
								<fa icon="fa-solid fa-building-shield" />
							</div>
							<div class="header-texts">
								<h1>Regulament Politie</h1>
								<p>Citeste regulamentul factiunii inainte de a aplica, te va ajuta sa reusesti sa intri!</p>
							</div>
						</div>
					</div>
					<div class="rules-hr"></div>
		
					<div class="rules-section-data">
						<div v-for="(item, index) in rules['politie']" :class="['chapter-section', extendedChapters['politie' + item.id] ? 'extended' : false]">
							<div class="chapter-wrap">
								<p @click="extendChapter(item.id, 'politie')">{{item.id}}</p>
								<fa class="chapter-icon" icon="fa-circle-chevron-down" @click="extendChapter(item.id, 'politie')" v-if="!extendedChapters['politie' + item.id]" />
								<fa class="chapter-icon" icon="fa-circle-chevron-up" @click="extendChapter(item.id, 'politie')" v-else />
							</div>

							<div class="chapter-extended">
								<p v-for="(itm, indx) in item.rules"><span>{{itm.id}}</span> {{itm.text}}</p>
							</div>
						</div>
					</div>
				</div>

				<div class="rules-section">
					<div class="rules-section-header">
						<div class="rules-header-data">
							<div class="icon">
								<fa icon="fa-solid fa-suitcase-medical" />
							</div>
							<div class="header-texts">
								<h1>Regulament Smurd</h1>
								<p>Citeste regulamentul factiunii inainte de a aplica, te va ajuta sa reusesti sa intri!</p>
							</div>
						</div>
					</div>
					<div class="rules-hr"></div>
		
					<div class="rules-section-data">
						<div v-for="(item, index) in rules['medici']" :class="['chapter-section', extendedChapters['medici' + item.id] ? 'extended' : false]">
							<div class="chapter-wrap">
								<p @click="extendChapter(item.id, 'medici')">{{item.id}}</p>
								<fa class="chapter-icon" icon="fa-circle-chevron-down" @click="extendChapter(item.id, 'medici')" v-if="!extendedChapters['medici' + item.id]" />
								<fa class="chapter-icon" icon="fa-circle-chevron-up" @click="extendChapter(item.id, 'medici')" v-else />
							</div>

							<div class="chapter-extended">
								<p v-for="(itm, indx) in item.rules"><span>{{itm.id}}</span> {{itm.text}}</p>
							</div>
						</div>
					</div>
				</div>

			</div>
		</div>
	</rules-page>
</template>

<script src="./rules.js"></script>

<style lang="css">
@import url('https://fonts.cdnfonts.com/css/akrobat');

rules-page {
	width: 100%;
	height: 100%;
	position: relative;
	transition: var(--tran-05);

	display: inline-flex;
	justify-content: left;
	align-items: left;
}

.rules-content {
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	gap: 1vw;

	padding: 1vh 5vh;
}

.rules-content .rules-delimiter{
	height: 83vh;
	width: 90%;
	overflow-y: scroll;	
}

.rules-content .rules-delimiter::-webkit-scrollbar-track{
    background: linear-gradient(to top, transparent, #ffffff05);
}

.rules-content .rules-delimiter::-webkit-scrollbar{
    width: .3vw;
    border-radius: .25vw;
}

.rules-content .rules-delimiter::-webkit-scrollbar-thumb{
    background-color: #ffffff20;
}

.rules-content .rules-delimiter .rules-section {
	margin-top: 2rem;
	width: 90%;
	border-radius: .50vw;
	padding: 1.5rem;

	display: flex;
	flex-direction: column;
	justify-content: left;
	align-items: left;
	gap: .8vw;
}

.rules-content .rules-delimiter .rules-section .rules-section-header {
	display: inline-flex;
	gap: 0.8vw;
	justify-content: space-between;
	align-items: center;
}

.rules-content .rules-delimiter .rules-section .rules-section-header .rules-header-data {
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	gap: 1vw;
}

.rules-content .rules-delimiter .rules-section .rules-section-header .rules-expand-section {
	width: 10vw;
	height: 4.5vh;
	color: #fff;
	text-transform: uppercase;
	border-radius: .25vw;
	padding: 0.5rem;
    background-color: rgb(129, 188, 251);

	user-select: none;
	display: inline-flex;
	justify-content: center;
	align-items: center;
	gap: .6vw;
	transition: 1s all;
}

.rules-content .rules-delimiter .rules-section .rules-section-header .rules-expand-section:hover {
    -webkit-box-shadow: 0px 69px 76px 0px rgba(129, 188, 251, .050),0px 34px 76px 0px rgba(129, 188, 251, .050),0px 5px 46px 0px rgba(129, 188, 251, .050),0px 5px 46px 0px rgba(129, 188, 251, .050);
            box-shadow: 0px 69px 76px 0px rgba(129, 188, 251, .050),0px 34px 76px 0px rgba(129, 188, 251, .050),0px 5px 46px 0px rgba(129, 188, 251, .050),0px 5px 46px 0px rgba(129, 188, 251, .050);
    -o-transition: all 0.23232323s ease-in-out;
    transition: all 0.23232323s ease-in-out;
    -webkit-transition: all 0.23232323s ease-in-out;
    -moz-transition: all 0.23232323s ease-in-out;
}

.rules-content .rules-delimiter .rules-section .rules-section-header .icon {
	width: 3.5vh;
	height: 3.5vh;
	padding: 2vh;
	background-color: var(--box-color);
	display: flex;
	justify-content: center;
	align-items: center;
	color: var(--title-icon-color);
	border-radius: .35vw;
}

.rules-content .rules-delimiter .rules-section .rules-section-header .header-texts h1 {
	font-family: 'Poppins';
	font-size: 0.9rem;
	font-weight: 600;
	color: var(--text-color);
}

.rules-content .rules-delimiter .rules-section .rules-section-header .header-texts p {
	font-family: 'Poppins';
	font-size: .7rem;
	font-weight: 400;
	opacity: .7;
	color: var(--text-color);
}

.rules-content .rules-delimiter .rules-section .rules-hr {
	opacity: .25;
	width: 100%;
	height: 0.2vh;

	border-radius: 0.25vw;
	background-color: var(--panel-border-color);
	margin-top: 1vh;
}

.rules-content .rules-delimiter .rules-section .rules-section-data {
	width: 100%;
	display: flex;
	flex-direction: column;
	gap: 2vh;
	padding: 1vh 0;
}

.rules-content .rules-delimiter .rules-section .rules-section-data > .chapter-section{
	display: flex;
	flex-direction: column;
	transition: 1s;
	user-select: none;
}

.rules-content .rules-delimiter .rules-section .rules-section-data > .chapter-section > .chapter-wrap{
	width: 100%;
	height: 6.5vh;
	background: #ffffff12;
	border-radius: .25vw;
	padding: 2vh 1.5vw;
	display: flex;
	color: #fff;
	align-items: center;
	gap: .5vw;
	font-family: "Akrobat" !important;
	font-weight: 400;
	font-size: 17px;
	opacity: .5;
}

.rules-content .rules-delimiter .rules-section .rules-section-data > .chapter-section > .chapter-wrap > .chapter-icon{
	margin-left: auto;
	transition: 1s;
}

.rules-content .rules-delimiter .rules-section .rules-section-data > .chapter-section > .chapter-wrap > .chapter-icon:hover{
	transform: scale(85%);
}

.rules-content .rules-delimiter .rules-section .rules-section-data > .chapter-section > .chapter-wrap > p{
	opacity: .950;
	transition: .5s;
}

.rules-content .rules-delimiter .rules-section .rules-section-data > .chapter-section > .chapter-wrap:hover > p{
	opacity: .5;
}

.rules-content .rules-delimiter .rules-section .rules-section-data > .chapter-section > .chapter-wrap > p:hover{
	opacity: .5;
}

.rules-content .rules-delimiter .rules-section .rules-section-data > .chapter-section > .chapter-extended{
	background: #ffffff02;
	padding: 2vh 1.5vw;
	color: #fff;
	animation: chapter-fade .5s;

	display: none;
	flex-direction: column;
	gap: 2vh;
}

.rules-content .rules-delimiter .rules-section .rules-section-data > .chapter-section.extended > .chapter-extended{
	display: flex;
}

.rules-content .rules-delimiter .rules-section .rules-section-data > .chapter-section > .chapter-extended > p > span{
	opacity: .5;
}

@keyframes chapter-fade{
	from {
		opacity: 0;
	} to {
		opacity: 1;
	}
}

.styled-table {
    font-size: 0.9em;
    font-family: sans-serif;
    min-width: 100%;
	border-collapse: collapse;
}

.styled-table thead {
	color: var(--text-color);
	text-align: left;
}

.styled-table thead tr {
    color: #ffffff;
    text-align: left;
}

.styled-table th,
.styled-table td {
    padding: 12px 20px;
}

.styled-table td {
	padding: 2vh 2vh;
	color: white; 
}

.styled-table tbody td .rules-icon {
	display: inline-flex;
	gap: 0.8vw;
	justify-content: left;
	align-items: center;

	width: 13vh;
	height: 3.5vh;
	color: white;
	background-color: #40c18c;

	display: flex;
	justify-content: center;
	align-items: center;
	border-radius: .35vw;
}

.styled-table tbody td .rules-icon.helper {
	background-color: #40c160;
}

.styled-table tbody td .rules-icon.moderator {
	background-color: #0098ff;
}

.styled-table tbody td .rules-icon.developer {
	background-color: #4638c2;
}

.styled-table tbody td .rules-icon.fondator {
	background-color: #ec3c3c;
}

.styled-table tbody td .rules-member {
	display: inline-flex;
	gap: 0.8vw;
	justify-content: center;
	align-items: center;
}

.styled-table tbody td .rules-member .icon {
	width: 3.5vh;
	height: 3.5vh;
	padding: 2vh;
	background-color: var(--box-color);
	display: flex;
	justify-content: center;
	align-items: center;
	color: var(--title-icon-color);
	border-radius: .35vw;
}

.styled-table tbody td .rules-member .rules-member-texts h1 {
	font-family: 'Poppins';
	font-size: 0.9rem;
	font-weight: 600;
	color: var(--text-color);
}

.styled-table tbody td .rules-member .rules-member-texts p {
	font-family: 'Poppins';
	font-size: .7rem;
	font-weight: 400;
	opacity: .7;
	color: var(--text-color);
}

.styled-table tbody tr {
    border-bottom: 1px solid #dddddd20;
}

</style>