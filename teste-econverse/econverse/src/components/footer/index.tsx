import React from 'react';
import styles from './footer.module.sass';

// Importar imagens
import facebookIcon from '../../assets/images/footer/facebook.svg';
import instagramIcon from '../../assets/images/footer/instagram.svg';
import youtubeIcon from '../../assets/images/footer/youtube.svg';
import visaIcon from '../../assets/images/footer/visa.svg';
import eloIcon from '../../assets/images/footer/elo.svg';
import dinnersIcon from '../../assets/images/footer/dinners.svg';
import mastercardIcon from '../../assets/images/footer/mastercard.svg';
import pixIcon from '../../assets/images/footer/pix.svg';
import ifoodIcon from '../../assets/images/footer/ifood.svg';
import amexIcon from '../../assets/images/footer/amex.svg';
import ticketIcon from '../../assets/images/footer/ticket.svg';
import sodexoIcon from '../../assets/images/footer/sodexo.svg';
import econverseLogo from '../../assets/images/footer/econverse.svg';
import vtexLogo from '../../assets/images/footer/vtexFooter.svg';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.section}>
          <h4>Sobre nós</h4>
          <ul>
            <li>CONHEÇA</li>
            <li>COMO COMPRAR</li>
            <li>INDICAÇÃO E DESCONTO</li>
          </ul>
          <div className={styles.socialMedia}>
            <img
              src={facebookIcon}
              alt="Facebook"
              width={22}
              height={22}
            />
            <img
              src={instagramIcon}
              alt="Instagram"
              width={22}
              height={22}
            />
            <img
              src={youtubeIcon}
              alt="YouTube"
              width={22}
              height={22}
            />
          </div>
        </div>
        <div className={styles.section}>
          <h4>INFORMAÇÕES ÚTEIS</h4>
          <ul>
            <li>FALE CONOSCO</li>
            <li>DÚVIDAS</li>
            <li>PRAZOS DE ENTREGA</li>
            <li>FORMAS DE PAGAMENTO</li>
            <li>POLÍTICA DE PRIVACIDADE</li>
            <li>TROCAS E DEVOLUÇÕES</li>
          </ul>
        </div>
        <div className={styles.section}>
          <h4>FORMAS DE PAGAMENTO</h4>
          <div className={styles.paymentMethods}>
            <img
              src={visaIcon}
              alt="Visa"
              width={40}
              height={25}
            />
            <img
              src={eloIcon}
              alt="Elo"
              width={40}
              height={25}
            />
            <img
              src={dinnersIcon}
              alt="Dinners"
              width={40}
              height={25}
            />
            <img
              src={mastercardIcon}
              alt="Mastercard"
              width={40}
              height={25}
            />
            <img
              src={pixIcon}
              alt="Pix"
              width={40}
              height={25}
            />
            <img
              src={ifoodIcon}
              alt="iFood"
              width={40}
              height={25}
            />
            <img
              src={amexIcon}
              alt="Amex"
              width={40}
              height={25}
            />
            <img
              src={ticketIcon}
              alt="Ticket"
              width={40}
              height={25}
            />
            <img
              src={sodexoIcon}
              alt="Sodexo"
              width={40}
              height={25}
            />
          </div>
        </div>
        <div className={styles.newsletter}>
          <h4>
            CADASTRE-SE E RECEBA NOSSAS <strong>NOVIDADES E PROMOÇÕES</strong>
          </h4>
          <p>
            Exceptetur sint occaecat cudatdat non ent, sunt in culpa qui officia
            lorem ipsum
          </p>
          <div className={styles.subscribe}>
            <input type="email" placeholder="SEU E-MAIL" />
            <button>OK</button>
          </div>
        </div>
      </div>
      <div className={styles.footerBottom}>
        <p>COPYRIGHT © 2019, TODOS OS DIREITOS RESERVADOS.</p>
        <div className={styles.partnerLogos}>
          <img
            src={econverseLogo}
            alt="Econverse"
            width={80}
            height={30}
          />
          <img
            src={vtexLogo}
            alt="VTEX"
            width={80}
            height={30}
          />
        </div>
      </div>
    </footer>
  );
}
