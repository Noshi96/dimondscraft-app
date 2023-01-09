export interface SliderElementData {
    styleConfig: StylingConfig;
}

export interface StylingConfig {
    width: string;
    height: string;

    cardImage: {
        height: string;
    }

    cardData: {
        height: string;

        artName: {
            height: string;
            fontSize: string;
            lineHeight: string;
        }

        artistName: {
            height: string;
            fontSize: string,
            lineHeight: string,
        }

        timerContainer: {
            marginTop: string;

            timerText : {
                fontSize: string,
                lineHeight: string,
            },

            timerCount: {
                fontSize: string,
                lineHeight: string,
            }
        }
    }


}

export const largeCardStyles: StylingConfig = {
    width: '420px',
    height: '660px',

    cardImage: {
        height: '420px',
    },

    cardData: {
        height: '240px',
        artName: {
            height: '58px',
            fontSize: '23px',
            lineHeight: '29px',
        },

        artistName: {
            height: '58px',
            fontSize: '21px',
            lineHeight: '29px',
        },

        timerContainer: {
            marginTop: '16px',

            timerText : {
                fontSize: '16px',
                lineHeight: '22px',
            },

            timerCount: {
                fontSize: '24px',
                lineHeight: '33px',
            }
        }
    }
}

export const mediumCardStyles: StylingConfig = {
    width: '320px',
    height: '490px',

    cardImage: {
        height: '320px',
    },

    cardData: {
        height: '190px',
        artName: {
            height: '42px',
            fontSize: '17px',
            lineHeight: '21px',
        },

        artistName: {
            height: '42px',
            fontSize: '15px',
            lineHeight: '21px',
        },

        timerContainer: {
            marginTop: '4px',

            timerText : {
                fontSize: '12px',
                lineHeight: '16px',
            },

            timerCount: {
                fontSize: '18px',
                lineHeight: '24px',
            }
        }

    }
}

export const selectCardImage = ({cardImage}: StylingConfig) => cardImage;
export const selectCardData = ({cardData}: StylingConfig) => cardData;
export const selectArtName = ({cardData}: StylingConfig) => cardData.artName;
export const selectArtistName = ({cardData}: StylingConfig) => cardData.artistName;
export const selectTimeContainer = ({cardData}: StylingConfig) => cardData.timerContainer;
export const selectTimerText = ({cardData}: StylingConfig) => cardData.timerContainer.timerText;
export const selectTimerCount = ({cardData}: StylingConfig) => cardData.timerContainer.timerCount;

