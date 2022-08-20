import React from 'react'
import styles from './styles.module.scss'

const Image = ({ src }) => {
    return (
        <div
            className={styles.image_component}
            style={{ backgroundImage: `url('${src}')` }}
        />
    );
}

export default Image;