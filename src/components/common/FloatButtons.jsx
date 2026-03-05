import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import '../../styles/FloatButtons.css';
import QRZalo from '../../assets/images/qr_zalo.jpg';

const FloatButtons = () => {
  const [showTop, setShowTop] = useState(false);
  const [showZalo, setShowZalo] = useState(false);
  const { t } = useTranslation();

  useEffect(() => {
    const fn = () => setShowTop(window.scrollY > 300);
    window.addEventListener('scroll', fn);
    return () => window.removeEventListener('scroll', fn);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <div className="float-group">

      {/* Zalo tooltip */}
      <div
        className={`float-zalo-tooltip ${showZalo ? 'show' : ''}`}
        onMouseLeave={() => setShowZalo(false)}
      >
        <img
          src={QRZalo}
          alt="QR Zalo"
          className="float-zalo-qr"
        />
        <p>{t('float_zalo_qr')}</p>
      </div>

      {/* Nút Zalo */}
      <button
        className="float-btn float-btn-zalo"
        onMouseEnter={() => setShowZalo(true)}
        onMouseLeave={() => setShowZalo(false)}
        onClick={() => window.open('https://zalo.me/0909724768', '_blank')}
        aria-label={t('float_zalo_label')}
        title={t('float_zalo_label')}
      >
        <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="24" cy="24" r="24" fill="#0068FF"/>
          <text x="50%" y="55%" dominantBaseline="middle" textAnchor="middle"
            fill="white" fontSize="16" fontWeight="bold" fontFamily="Arial">
            {t('float_zalo_label')}
          </text>
        </svg>
        <span className="float-btn-label">{t('float_zalo_label')}</span>
      </button>

      {/* Nút Gọi Điện */}
      <a
        href="tel:0909724768"
        className="float-btn float-btn-phone"
        aria-label={t('float_phone_label')}
        title={t('float_phone_label')}
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
          strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07
            A19.5 19.5 0 013.07 9.81 19.79 19.79 0 01.22 1.18 2 2 0
            012.22 0h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81
            2 2 0 01-.45 2.11L6.91 7.91a16 16 0 006.07 6.07l1.27-1.27
            a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"/>
        </svg>
        <span className="float-btn-label">{t('float_phone_label')}</span>
      </a>

      {/* Nút Tư Vấn */}
      <Link
        to="/lien-he"
        className="float-btn float-btn-consult"
        aria-label={t('float_consult_label')}
        title={t('float_consult_label')}
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
          strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/>
        </svg>
        <span className="float-btn-label">{t('float_consult_label')}</span>
      </Link>

      {/* Nút Back to Top */}
      <button
        className={`float-btn float-btn-top ${showTop ? 'show' : ''}`}
        onClick={scrollToTop}
        aria-label={t('float_top_label')}
        title={t('float_top_label')}
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
          strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="18 15 12 9 6 15"/>
        </svg>
      </button>

    </div>
  );
};

export default FloatButtons;