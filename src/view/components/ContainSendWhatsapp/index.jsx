import styles from './styles.module.css'

const ContainSendWhatsapp = ({children}) => {
    return (
        <div className={styles.containSendWhatsapp}>
            {children}
            <p>tu pedido sera enviado por whatsapp, por este medio te contactaran para pedirte direccion y caracteristicas de tu preferencia sobre tus productos...</p>
            
        </div>
    )
}

export default ContainSendWhatsapp