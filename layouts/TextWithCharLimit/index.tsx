import styled from 'styled-components';
import { useState } from 'react';

interface TextWithCharLimitProps {
    children: string;
    charLimit?: number;
}

const TextWithCharLimit = (props: TextWithCharLimitProps) => {
    const { children, charLimit } = props;
    const [showMore, setShowMore] = useState(false);

    return (
        <>
            <Text>
                { showMore ? children : `${children.substring(0, charLimit || 250)}...` }
            </Text>
            <ShowMoreLabel onClick={ () => setShowMore(!showMore) }>
                { showMore ? 'Pokaż mniej' : 'Pokaż więcej' }
            </ShowMoreLabel>
        </>
    )
}

const Text = styled.div`
  font-size: 1rem;
`

const ShowMoreLabel = styled.div`
  cursor: pointer;
  font-weight: bold;
  margin: 8px 0 0 0;
  font-size: 1rem;
`

export default TextWithCharLimit;
