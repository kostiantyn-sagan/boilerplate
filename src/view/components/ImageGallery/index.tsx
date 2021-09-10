// Core
import React from 'react';
import styled from 'styled-components';

// Elements
import { ImageGalleryItem, SectionTitle } from '../../elements';

// Hooks
import { useApiLoader } from '../../../tools/hooks';

// Styles
const SectionGallery = styled.section`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 16px;
  padding-bottom: 24px;
`;

const GalleryList = styled.ul`
  display: grid;
  max-width: calc(100vw - 48px);
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  grid-gap: 16px;
  margin-top: 0;
  margin-bottom: 0;
  padding: 0;
  list-style: none;
  margin-left: auto;
  margin-right: auto;
`;

// type PropTypes = {
//     source?: any;
// }
// :FC<PropTypes>
export const ImageGallery = () => {
    const { db, isFetching, isClientError, isServerError } = useApiLoader();
    const ImageGalleryJSX = db.map(({ id, webformatURL, tags }) => {
        return (
            <ImageGalleryItem
                key = { id }
                tags = { tags }
                webformatURL = { webformatURL }
            />
        );
    });

    return (
        <SectionGallery>
            <SectionTitle>ImageGallery</SectionTitle>
            {isFetching && <p>Загрузка данных</p>}
            {isClientError && <p>Неправильный запрос</p>}
            {isServerError && <p>Сервер не отвечает</p>}
            {!isServerError && !isClientError && (
                <GalleryList>{ImageGalleryJSX}</GalleryList>
            )}
        </SectionGallery>
    );
};
