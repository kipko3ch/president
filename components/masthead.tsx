'use client';

import {useEffect, useRef, useState} from 'react';
import Link from 'next/link';
import {usePathname} from 'next/navigation';
import {ChevronRight} from 'lucide-react';
import {MenuToggleIcon} from '@/components/ui/menu-toggle-icon';
import {config, href, nav, t, photos, type Locale} from '../lib/content';

type NavCategory = 'administration' | 'newsroom' | 'priorities' | 'statehouse';

export function Masthead({locale}: {locale: Locale}) {
  const path = usePathname();
  const home = path === href(locale);
  const [scrolled, setScrolled] = useState(false);
  const [activeTab, setActiveTab] = useState<NavCategory>('administration');
  const [menuOpen, setMenuOpen] = useState(false);
  const menu = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const update = () => setScrolled(window.scrollY > 48);
    update();
    window.addEventListener('scroll', update, {passive: true});
    return () => window.removeEventListener('scroll', update);
  }, []);

  const openMenu = () => {
    setMenuOpen(true);
    menu.current?.showModal();
  };

  const close = () => {
    setMenuOpen(false);
    menu.current?.close();
  };

  const navigation = nav.map(([route, label]) => (
    <Link key={route} href={href(locale, route)} onClick={close}
      aria-current={path === href(locale, route) ? 'page' : undefined}>
      {t(locale, label)}
    </Link>
  ));

  return (
    <header className={'masthead' + (home && !scrolled ? ' masthead-over-photo' : '')}>
      <div className="shell masthead-frame">
        <div className="masthead-top">
          <button className="masthead-control" onClick={openMenu}
            aria-haspopup="dialog" aria-expanded={menuOpen} aria-label={t(locale, ['Open menu', 'Fungua menyu'])}>
            <MenuToggleIcon open={menuOpen} className="size-5" duration={400} />
            <span>{t(locale, ['Menu', 'Menyu'])}</span>
          </button>
          <Link href={href(locale)} className="masthead-brand">
            <img src={config.logo} alt="State House Kenya" width="640" height="218"/>
          </Link>
          <div className="masthead-actions">
            <div className="languages">
              <Link href={'/en' + path.slice(3)} hrefLang="en" lang="en" aria-label="EN (English)"
                aria-current={locale === 'en' ? 'true' : undefined}>EN</Link>
              <span aria-hidden="true">/</span>
              <Link href={'/sw' + path.slice(3)} hrefLang="sw" lang="sw" aria-label="SW (Kiswahili)"
                aria-current={locale === 'sw' ? 'true' : undefined}>SW</Link>
            </div>
          </div>
        </div>
        <nav className="masthead-nav" aria-label={t(locale, ['Main navigation', 'Urambazaji mkuu'])}>
          {navigation}
          <Link href={href(locale, '#write')}>{t(locale, ['Contact', 'Mawasiliano'])}</Link>
        </nav>
      </div>

      {/* Expanded White House-style Multi-Column Mega Menu */}
      <dialog className="mega-menu" ref={menu} onCancel={close} aria-label={t(locale, ['Main navigation menu', 'Menyu kuu ya urambazaji'])}>
        <div className="mega-menu-bar shell">
          <button className="mega-menu-close" onClick={close} aria-label={t(locale, ['Close menu', 'Funga menyu'])}>
            <MenuToggleIcon open={true} className="size-5" duration={400} />
          </button>
          <Link href={href(locale)} onClick={close} className="mega-menu-center-brand">
            <img src={config.logo} alt="State House Kenya" width="160" height="54"/>
          </Link>
        </div>

        <div className="mega-menu-body shell">
          {/* Column 1: Categories with arrow indicator */}
          <div className="mega-col-categories" role="tablist">
            <button
              type="button"
              role="tab"
              aria-selected={activeTab === 'administration'}
              className={'mega-cat-btn' + (activeTab === 'administration' ? ' is-active' : '')}
              onMouseEnter={() => setActiveTab('administration')}
              onClick={() => setActiveTab('administration')}
            >
              <span>{t(locale, ['Administration', 'Utawala'])}</span>
              <ChevronRight size={16} aria-hidden="true"/>
            </button>

            <button
              type="button"
              role="tab"
              aria-selected={activeTab === 'newsroom'}
              className={'mega-cat-btn' + (activeTab === 'newsroom' ? ' is-active' : '')}
              onMouseEnter={() => setActiveTab('newsroom')}
              onClick={() => setActiveTab('newsroom')}
            >
              <span>{t(locale, ['News & Speeches', 'Habari na Hotuba'])}</span>
              <ChevronRight size={16} aria-hidden="true"/>
            </button>

            <button
              type="button"
              role="tab"
              aria-selected={activeTab === 'priorities'}
              className={'mega-cat-btn' + (activeTab === 'priorities' ? ' is-active' : '')}
              onMouseEnter={() => setActiveTab('priorities')}
              onClick={() => setActiveTab('priorities')}
            >
              <span>{t(locale, ['Residences & Delivery', 'Makazi na Utekelezaji'])}</span>
              <ChevronRight size={16} aria-hidden="true"/>
            </button>

            <button
              type="button"
              role="tab"
              aria-selected={activeTab === 'statehouse'}
              className={'mega-cat-btn' + (activeTab === 'statehouse' ? ' is-active' : '')}
              onMouseEnter={() => setActiveTab('statehouse')}
              onClick={() => setActiveTab('statehouse')}
            >
              <span>{t(locale, ['About State House', 'Kuhusu Ikulu'])}</span>
              <ChevronRight size={16} aria-hidden="true"/>
            </button>
          </div>

          {/* Column 2: Sub-items corresponding to active category */}
          <div className="mega-col-links" role="tabpanel">
            {activeTab === 'administration' && (
              <div className="mega-links-list">
                <Link href={href(locale, 'presidency/president')} onClick={close}>
                  {t(locale, ['President William Samoei Ruto', 'Rais William Samoei Ruto'])}
                </Link>
                <Link href={href(locale, 'presidency/first-lady')} onClick={close}>
                  {t(locale, ['First Lady Rachel Ruto', 'Mama wa Taifa Rachel Ruto'])}
                </Link>
                <Link href={href(locale, 'presidency/deputy-president')} onClick={close}>
                  {t(locale, ['The Deputy President', 'Naibu Rais'])}
                </Link>
                <Link href={href(locale, 'presidency/cabinet')} onClick={close}>
                  {t(locale, ['The Cabinet of Kenya', 'Baraza la Mawaziri'])}
                </Link>
                <Link href={href(locale, '#write')} onClick={close}>
                  {t(locale, ['Write to the President', 'Mwandikie Rais'])}
                </Link>
              </div>
            )}

            {activeTab === 'newsroom' && (
              <div className="mega-links-list">
                <Link href={href(locale, 'newsroom')} onClick={close}>
                  {t(locale, ['All News and Dispatches', 'Habari na Taarifa Zote'])}
                </Link>
                <Link href={href(locale, 'newsroom?category=speeches')} onClick={close}>
                  {t(locale, ['Presidential Speeches & Remarks', 'Hotuba na Matamshi ya Rais'])}
                </Link>
                <Link href={href(locale, 'newsroom?category=cabinet')} onClick={close}>
                  {t(locale, ['Cabinet Dispatches', 'Taarifa za Baraza la Mawaziri'])}
                </Link>
                <Link href={href(locale, 'newsroom?category=briefings')} onClick={close}>
                  {t(locale, ['Press Briefings & Advisories', 'Taarifa kwa Vyombo vya Habari'])}
                </Link>
              </div>
            )}

            {activeTab === 'priorities' && (
              <div className="mega-links-list">
                <Link href={href(locale, '#state-residences')} onClick={close}>
                  {t(locale, ['State Houses and Lodges', 'Ikulu na Makazi ya Rais'])}
                </Link>
                <Link href={href(locale, '#delivery')} onClick={close}>
                  {t(locale, ['Promises & Delivery','Ahadi na Utekelezaji'])}
                </Link>
                <Link href={href(locale, 'newsroom/weekly-engagements')} onClick={close}>
                  {t(locale, ['Public Engagements & Delivery', 'Shughuli za Umma na Utekelezaji'])}
                </Link>
              </div>
            )}

            {activeTab === 'statehouse' && (
              <div className="mega-links-list">
                <Link href={href(locale, 'presidency/history')} onClick={close}>
                  {t(locale, ['History of State House', 'Historia ya Ikulu'])}
                </Link>
                <Link href={href(locale, 'gallery')} onClick={close}>
                  {t(locale, ['Photo & Architectural Gallery', 'Matunzio ya Picha na Majengo'])}
                </Link>
                <Link href={href(locale, '#write')} onClick={close}>
                  {t(locale, ['Public Petitions & Correspondence', 'Maombi na Mawasiliano ya Umma'])}
                </Link>
              </div>
            )}
          </div>

          {/* Column 3: Featured Administration Portraits (Kenyan context: President & First Lady) */}
          <div className="mega-col-portraits">
            <Link href={href(locale, 'presidency/president')} onClick={close} className="mega-portrait-card">
              <div className="mega-portrait-frame">
                <img src={'/media/' + photos.president.file} alt="President William Ruto" />
              </div>
              <p className="mega-portrait-label">{t(locale, ['President William Ruto', 'Rais William Ruto'])}</p>
            </Link>

            <Link href={href(locale, 'presidency/first-lady')} onClick={close} className="mega-portrait-card">
              <div className="mega-portrait-frame">
                <img src={'/media/' + photos.firstLady.file} alt="First Lady Rachel Ruto" />
              </div>
              <p className="mega-portrait-label">{t(locale, ['First Lady Rachel Ruto', 'Mama wa Taifa Rachel Ruto'])}</p>
            </Link>
          </div>
        </div>
      </dialog>
    </header>
  );
}
