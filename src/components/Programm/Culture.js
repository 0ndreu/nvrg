/**
 * Created by lesha on 02.01.2018.
 */
import React from 'react';
import {Grid} from 'react-bootstrap';
import Gallery from '../Gallery/Gallery';

class Culture extends React.Component {

    state = {
        lightboxIsOpen: false,
    }



    makeUnsplashSrc(url) {
        return `${url}?dpr=2&auto=format&w=1024&h=1024`;
    }

    makeUnsplashSrcSet (url, size) {
        return `${url}?dpr=2&auto=format&w=${size} ${size}w`;
    }

    makeUnsplashThumbnail (url, orientation = 'landscape') {
    const dimensions = orientation === 'square'
        ? 'w=300&h=300'
        : 'w=240&h=159';
    return `${url}?dpr=2&auto=format&crop=faces&fit=crop&${dimensions}`;
    }

    render = () => {
        const DEFAULT_IMAGES = [
            { url: '/assets/ph/2.jpg', caption: ' ', orientation: 'landscape', useForDemo: true },
            { url: '/assets/ph/1.jpg', caption: ' ', orientation: 'landscape', useForDemo: true },
            { url: '/assets/ph/3.jpg', caption: ' ', orientation: 'landscape', useForDemo: true },
            { url: '/assets/ph/4.jpg', caption: ' ', orientation: 'landscape', useForDemo: true },
            { url: '/assets/ph/5.jpg', caption: ' ', orientation: 'landscape', useForDemo: true },
            { url: '/assets/ph/6.jpg', caption: ' ', orientation: 'landscape', useForDemo: true },
            { url: '/assets/ph/7.jpg', caption: ' ', orientation: 'landscape', useForDemo: true },
            { url: '/assets/ph/8.jpg', caption: ' ', orientation: 'landscape', useForDemo: true },
            { url: '/assets/ph/9.jpg', caption: ' ', orientation: 'landscape', useForDemo: true },
            { url: '/assets/ph/10.jpg', caption: ' ', orientation: 'landscape', useForDemo: true },
            { url: '/assets/ph/11.jpg', caption: ' ', orientation: 'landscape', useForDemo: true },
            { url: '/assets/ph/12.jpg', caption: ' ', orientation: 'landscape', useForDemo: true },
            { url: '/assets/ph/13.jpg', caption: ' ', orientation: 'landscape', useForDemo: true },
            { url: '/assets/ph/14.jpg', caption: ' ', orientation: 'landscape', useForDemo: true },
            { url: '/assets/ph/15.jpg', caption: ' ', orientation: 'landscape', useForDemo: true },
        ];


        return (

            <div className="abpagewr">
                <Grid>
                    <div className="text-container">
                        <br/>
                        <h1>Культурная программа</h1>
                        <p>В первый день школы для участников проводят экскурсию по кампусу. Показывают основные места, столовую и корпуса физтеха. После этого участники посещают Музей МФТИ в корпусе прикладной математики, узнают об основных моментах истории института. В качестве вечернего мероприятия проводится киновечер в клубе 11-ого общежития.</p>
                        <p>В течение смены для участников школы дважды проводят так называемые “вечер настолок”. Дети собираются в специально тематически подготовленном кураторами кабинете, где им предлагают такие настольные игры как Jenga, Imaginarium, Эволюция.</p>
                        <p>В качестве интеллектуального вечернего мероприятия кураторы подготавливают для участников викторину по образу и подобию “Что? Где? Когда?” Дети делятся на команды и отвечают на 26 вопросов на эрудицию из различных областей науки и культуры. Команда-победитель получает диплом и коробку конфет в качестве приза.</p>
                        <p>На выходных для участников школы организуют экскурсию в Москву. Ребята посещают основные достопримечательности. В программе так же посещение тематических музеев и выставок, связанных с направлением смены.</p>
                        <p>Традиционно кураторы подготавливают в качестве вечернего мероприятия “гитарный вечер” в одной из комнат общежития, где каждый может что-либо сыграть, спеть или просто послушать. Помимо вечерних развлекательных мероприятий, участники смен посещают различные лекции научно-популярного характера, проходящие во время смены в МФТИ.</p>
                        <p>Также в качестве заключительного мероприятия кураторами проводится прощальный вечер, в виде чаепития и беседы в приятной компании в уже полюбившемся общежитии, так у участников проекта остаются только самые положительные впечатления о студенческой жизни.</p>

                        <Gallery images={DEFAULT_IMAGES.map(({ caption, url, orientation, useForDemo }) => ({
                            src: this.makeUnsplashSrc(url),
                            thumbnail: this.makeUnsplashThumbnail(url, orientation),
                            srcSet: [
                                this.makeUnsplashSrcSet(url, 1024),
                                this.makeUnsplashSrcSet(url, 800),
                                this.makeUnsplashSrcSet(url, 320),
                            ],
                            caption,
                            orientation,
                            useForDemo,
                        }))}/>

                    </div>
                </Grid>
            </div>
        )
    }

}

export default Culture