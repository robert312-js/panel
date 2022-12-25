<template>
    
    <test-staff-page>
        <TestStaff-Sidebar page="3"/>
		<div class="testestaff-content">
			<TestStaff-Header page="Test Staff"/>
			

            <div class="testestaff-wrapper" v-if="IsUserAdmin >= 3">
                <div class="testestaff-delimiter">
                    <div class="testestaff-section">
                        <div class="testestaff-section-header">
                            <div class="testestaff-header-data">
                                <div class="icon">
                                    <fa icon="fa-book" />
                                </div>
                                <div class="header-texts">
                                    <h1>Test Staff</h1>
                                    <p><span style="color: #68B984;">{{score.correct}} răspunsuri corecte</span> / <span style="color: #FF6464;">{{score.wrong}} greșeli</span> / {{totalQuestions - (score.wrong + score.correct)}} întrebări rămase</p>
                                </div>
                            </div>
                        </div>
    
                        <div class="testestaff-hr"></div>
            
                        <div class="testestaff-section-data">
                            <div v-for="(item, index) in possibleQuestions" :class="['chapter-section', extendedChapters[item.id] ? 'extended' : false]">
                                <div class="chapter-wrap" @click="extendChapter(item.id)">
                                    <p>{{item.id}}</p>

                                    <fa class="chapter-icon" icon="fa-circle-chevron-down" v-if="!extendedChapters[item.id]" />
                                    <fa class="chapter-icon" icon="fa-circle-chevron-up" v-else />
                                </div>
    
                                <div class="chapter-extended">
                                    <p v-for="(itm, indx) in item.description"><span></span> {{itm.text}}</p>
                                    
                                    <div class="question-actions">
                                        <div class="mark-question" @click="markQuestion(item.id, 'correct')" v-if="!results[item.id]">MARCHEAZĂ CORECT</div>
                                        <div class="mark-question" @click="markQuestion(item.id, 'wrong')" v-if="!results[item.id]">MARCHEAZĂ GREȘIT</div>
                                    
                                        <div class="mark-question full-sized" @click="changeMark(item.id)" v-if="results[item.id] == 'correct'">JUCATORUL A RĂSPUNS CORECT</div>
                                        <div class="mark-question full-sized wrong" @click="changeMark(item.id)" v-if="results[item.id] == 'wrong'">JUCATORUL A RĂSPUNS GREȘIT</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="generate-button" @click="finishTest()"><fa icon="fa-hourglass-end"/> &nbsp;&nbsp; Finalizează testul</div>
            </div>

		</div>
	</test-staff-page>
</template>

<script src="./script.js"></script>

<style lang="css">
@import url('https://fonts.cdnfonts.com/css/akrobat');

test-staff-page {
	width: 100%;
	height: 100%;
	position: relative;
	transition: var(--tran-05);

	display: inline-flex;
	justify-content: left;
	align-items: left;
}

.testestaff-content {
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	gap: 1vw;

	padding: 1vh 5vh;
}

.testestaff-wrapper {
	height: 83vh;
	width: 90%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1vw;
}

.testestaff-wrapper .generate-button {
    width: 116vh;
    height: 8vh;
    background-color: #2a85ff;
    color: #ffffff95;
    font-size: 1vw;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: var(--tran-05);
    border-radius: .25vw;
    user-select: none;
    margin-right: 9%;
}

.testestaff-wrapper .generate-button:hover {
    background-color: #1369da;
}

.testestaff-content .testestaff-delimiter{
	height: 83vh;
	width: 90%;
	overflow-y: scroll;	
}

.testestaff-content .testestaff-delimiter::-webkit-scrollbar-track{
    background: linear-gradient(to top, transparent, #ffffff05);
}

.testestaff-content .testestaff-delimiter::-webkit-scrollbar{
    width: .3vw;
    border-radius: .25vw;
}

.testestaff-content .testestaff-delimiter::-webkit-scrollbar-thumb{
    background-color: #ffffff20;
}

.testestaff-content .testestaff-delimiter .testestaff-section {
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

.testestaff-content .testestaff-delimiter .testestaff-section .testestaff-section-header {
	display: inline-flex;
	gap: 0.8vw;
	justify-content: space-between;
	align-items: center;
}

.testestaff-content .testestaff-delimiter .testestaff-section .testestaff-section-header .testestaff-header-data {
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	gap: 1vw;
}

.testestaff-content .testestaff-delimiter .testestaff-section .testestaff-section-header .testestaff-expand-section {
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

.testestaff-content .testestaff-delimiter .testestaff-section .testestaff-section-header .testestaff-expand-section:hover {
    -webkit-box-shadow: 0px 69px 76px 0px rgba(129, 188, 251, .050),0px 34px 76px 0px rgba(129, 188, 251, .050),0px 5px 46px 0px rgba(129, 188, 251, .050),0px 5px 46px 0px rgba(129, 188, 251, .050);
            box-shadow: 0px 69px 76px 0px rgba(129, 188, 251, .050),0px 34px 76px 0px rgba(129, 188, 251, .050),0px 5px 46px 0px rgba(129, 188, 251, .050),0px 5px 46px 0px rgba(129, 188, 251, .050);
    -o-transition: all 0.23232323s ease-in-out;
    transition: all 0.23232323s ease-in-out;
    -webkit-transition: all 0.23232323s ease-in-out;
    -moz-transition: all 0.23232323s ease-in-out;
}

.testestaff-content .testestaff-delimiter .testestaff-section .testestaff-section-header .icon {
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

.testestaff-content .testestaff-delimiter .testestaff-section .testestaff-section-header .header-texts h1 {
	font-family: 'Poppins';
	font-size: 0.9rem;
	font-weight: 600;
	color: var(--text-color);
}

.testestaff-content .testestaff-delimiter .testestaff-section .testestaff-section-header .header-texts p {
	font-family: 'Poppins';
	font-size: .7rem;
	font-weight: 400;
	opacity: .7;
	color: var(--text-color);
}

.testestaff-content .testestaff-delimiter .testestaff-section .testestaff-hr {
	opacity: .25;
	width: 100%;
	height: 0.2vh;

	border-radius: 0.25vw;
	background-color: var(--panel-border-color);
	margin-top: 1vh;
}

.testestaff-content .testestaff-delimiter .testestaff-section .testestaff-section-data {
	width: 100%;
	display: flex;
	flex-direction: column;
	gap: 2vh;
	padding: 1vh 0;
}

.testestaff-content .testestaff-delimiter .testestaff-section .testestaff-section-data > .chapter-section{
	display: flex;
	flex-direction: column;
	transition: 1s;
	user-select: none;
}

.testestaff-content .testestaff-delimiter .testestaff-section .testestaff-section-data > .chapter-section > .chapter-wrap{
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

.testestaff-content .testestaff-delimiter .testestaff-section .testestaff-section-data > .chapter-section > .chapter-wrap > .chapter-icon{
	margin-left: auto;
	transition: 1s;
}

.testestaff-content .testestaff-delimiter .testestaff-section .testestaff-section-data > .chapter-section > .chapter-wrap > .chapter-icon:hover{
	transform: scale(85%);
}

.testestaff-content .testestaff-delimiter .testestaff-section .testestaff-section-data > .chapter-section > .chapter-wrap > p{
	opacity: .950;
	transition: .5s;
}

.testestaff-content .testestaff-delimiter .testestaff-section .testestaff-section-data > .chapter-section > .chapter-wrap:hover > p{
	opacity: .5;
}

.testestaff-content .testestaff-delimiter .testestaff-section .testestaff-section-data > .chapter-section > .chapter-wrap > p:hover{
	opacity: .5;
}

.testestaff-content .testestaff-delimiter .testestaff-section .testestaff-section-data > .chapter-section > .chapter-extended{
	background: #ffffff02;
	padding: 2vh 1.5vw;
	color: #fff;
	animation: chapter-fade .5s;

	display: none;
	flex-direction: column;
	gap: 2vh;
}

.testestaff-content .testestaff-delimiter .testestaff-section .testestaff-section-data > .chapter-section.extended > .chapter-extended{
	display: flex;
}

.testestaff-content .testestaff-delimiter .testestaff-section .testestaff-section-data > .chapter-section > .chapter-extended > p > span{
	opacity: .5;
}

.testestaff-content .testestaff-delimiter .testestaff-section .testestaff-section-data > .chapter-section > .chapter-extended > .question-actions{
    width: 100%;
    height: 6.5vh;
    display: flex;
    align-items: center;
    gap: 1vw;
    margin-top: 1.5%;
}

.testestaff-content .testestaff-delimiter .testestaff-section .testestaff-section-data > .chapter-section > .chapter-extended > .question-actions > .mark-question{
    background: #FF6464;
    padding: 2.150vh 2.650vh;
    border-radius: .25vw;
    font-family: "Akrobat";
    font-weight: bold;
    letter-spacing: .1vh;
    font-size: 1.150em;
    transition: .5s;
}

.testestaff-content .testestaff-delimiter .testestaff-section .testestaff-section-data > .chapter-section > .chapter-extended > .question-actions > .mark-question.full-sized{
    width: 35%;
    text-align: center;
}

.testestaff-content .testestaff-delimiter .testestaff-section .testestaff-section-data > .chapter-section > .chapter-extended > .question-actions > .mark-question.full-sized.wrong{
    background: #FF6464;
}

.testestaff-content .testestaff-delimiter .testestaff-section .testestaff-section-data > .chapter-section > .chapter-extended > .question-actions > .mark-question:hover{
    opacity: .650;
}

.testestaff-content .testestaff-delimiter .testestaff-section .testestaff-section-data > .chapter-section > .chapter-extended > .question-actions > .mark-question:nth-child(1){
    background: #68B984;
}

</style>