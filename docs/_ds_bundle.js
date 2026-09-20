/* @ds-bundle: {"format":4,"namespace":"Jess4342CybersecurityPortfolioDesignSystem_6543ae","components":[{"name":"BlogPostCard","sourcePath":"components/content/BlogPostCard.jsx"},{"name":"GalleryTile","sourcePath":"components/content/GalleryTile.jsx"},{"name":"TimelineEntry","sourcePath":"components/content/TimelineEntry.jsx"},{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"SectionHeading","sourcePath":"components/core/SectionHeading.jsx"},{"name":"SocialLink","sourcePath":"components/core/SocialLink.jsx"},{"name":"WindowCard","sourcePath":"components/core/WindowCard.jsx"},{"name":"Callout","sourcePath":"components/feedback/Callout.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"TextArea","sourcePath":"components/forms/TextArea.jsx"},{"name":"NavBar","sourcePath":"components/navigation/NavBar.jsx"}],"sourceHashes":{"components/content/BlogPostCard.jsx":"74ae7bc4f566","components/content/GalleryTile.jsx":"3dea78642801","components/content/TimelineEntry.jsx":"25c99301751c","components/core/Badge.jsx":"6d9656697b9c","components/core/Button.jsx":"5b95cb82254a","components/core/SectionHeading.jsx":"f09d0876b042","components/core/SocialLink.jsx":"afde8f586324","components/core/WindowCard.jsx":"2ed3ffcd7e84","components/feedback/Callout.jsx":"fdb7040a37be","components/forms/Input.jsx":"36035ab39ebf","components/forms/TextArea.jsx":"e149e6452b81","components/navigation/NavBar.jsx":"90c8c6a442c8","ui_kits/_backup/portfolio-site-2026-09-20/sections-backup.jsx":"4573b07f177d","ui_kits/portfolio-site/Sections.jsx":"3c0d587df278"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.Jess4342CybersecurityPortfolioDesignSystem_6543ae = window.Jess4342CybersecurityPortfolioDesignSystem_6543ae || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/content/BlogPostCard.jsx
try { (() => {
function BlogPostCard({
  title,
  date,
  tag,
  excerpt,
  readTime,
  href = '#'
}) {
  return React.createElement('a', {
    href,
    className: 'blogpost-card',
    style: {
      position: 'relative',
      display: 'block',
      textDecoration: 'none',
      color: 'var(--ink)',
      background: 'var(--white)',
      border: 'var(--border-w) solid var(--ink)',
      borderRadius: 'var(--radius-sm)',
      boxShadow: 'var(--shadow-hard-sm)',
      padding: '22px',
      transition: 'transform var(--dur-fast) var(--ease-out)'
    },
    onMouseEnter: e => e.currentTarget.style.transform = 'translate(-2px,-2px)',
    onMouseLeave: e => e.currentTarget.style.transform = 'none'
  }, React.createElement('svg', {
    className: 'blogpost-dogear',
    width: 44,
    height: 44,
    viewBox: '0 0 44 44',
    style: {
      position: 'absolute',
      top: '-1px',
      right: '-1px',
      pointerEvents: 'none'
    }
  }, React.createElement('path', {
    d: 'M0,0 L44,0 L44,44 Z',
    fill: 'var(--cream)'
  }), React.createElement('path', {
    d: 'M0,0 L44,44',
    stroke: 'var(--ink)',
    strokeWidth: '1.6',
    fill: 'none'
  })), React.createElement('div', {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: '14px'
    }
  }, React.createElement('span', {
    style: {
      fontFamily: 'var(--font-pixel)',
      fontSize: '11px',
      letterSpacing: 'var(--ls-pixel)',
      color: 'var(--indigo-deep)',
      textTransform: 'uppercase'
    }
  }, tag), React.createElement('span', {
    style: {
      fontFamily: 'var(--font-pixel)',
      fontSize: '11px',
      color: 'var(--text-faint)'
    }
  }, date)), React.createElement('h3', {
    style: {
      fontFamily: 'var(--font-body)',
      fontWeight: 700,
      fontSize: '19px',
      margin: '0 0 8px'
    }
  }, title), React.createElement('p', {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: '14px',
      lineHeight: 'var(--lh-normal)',
      color: 'var(--text-soft)',
      margin: '0 0 14px'
    }
  }, excerpt), React.createElement('span', {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: '12px',
      color: 'var(--teal-deep)'
    }
  }, readTime));
}
Object.assign(__ds_scope, { BlogPostCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/BlogPostCard.jsx", error: String((e && e.message) || e) }); }

// components/content/GalleryTile.jsx
try { (() => {
function GalleryTile({
  caption,
  date,
  size = 'md',
  image,
  href
}) {
  const heights = {
    sm: '140px',
    md: '200px',
    lg: '260px'
  };
  const Tag = href ? 'a' : 'div';
  return React.createElement(Tag, {
    className: 'gallery-tile',
    href,
    target: href ? '_blank' : undefined,
    rel: href ? 'noreferrer' : undefined,
    style: {
      position: 'relative',
      display: 'block',
      textDecoration: 'none',
      border: 'var(--border-w) solid var(--ink)',
      borderRadius: 'var(--radius-sm)',
      boxShadow: 'var(--shadow-hard-sm)',
      background: 'var(--white)',
      overflow: 'hidden'
    }
  }, React.createElement('img', {
    src: '../../assets/bluepin.png',
    alt: '',
    className: 'gallery-tile-pin',
    style: {
      position: 'absolute',
      top: '-20px',
      left: '-20px',
      width: '72px',
      height: '72px',
      zIndex: 2,
      pointerEvents: 'none'
    }
  }), image ? React.createElement('img', {
    src: image,
    alt: caption,
    style: {
      width: '100%',
      height: heights[size],
      objectFit: 'cover',
      display: 'block'
    }
  }) : React.createElement('div', {
    style: {
      height: heights[size],
      background: 'repeating-linear-gradient(45deg,var(--cream-deep),var(--cream-deep) 10px,var(--cream) 10px,var(--cream) 20px)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: 'var(--font-pixel)',
      fontSize: '11px',
      color: 'var(--ink-faint)'
    }
  }, 'IMAGE'), React.createElement('div', {
    style: {
      padding: '12px 14px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'baseline'
    }
  }, React.createElement('span', {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: '13px',
      color: 'var(--ink)'
    }
  }, caption), React.createElement('span', {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: '11px',
      color: 'var(--text-faint)'
    }
  }, date)));
}
Object.assign(__ds_scope, { GalleryTile });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/GalleryTile.jsx", error: String((e && e.message) || e) }); }

// components/content/TimelineEntry.jsx
try { (() => {
function TimelineEntry({
  date,
  title,
  org,
  description,
  last = false,
  icon,
  category,
  current = false
}) {
  const [open, setOpen] = React.useState(true);
  const hasBody = !!description;
  return React.createElement('div', {
    style: {
      display: 'flex',
      gap: '20px',
      paddingBottom: last ? 0 : '24px',
      position: 'relative'
    }
  }, React.createElement('div', {
    style: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      flexShrink: 0
    }
  }, icon ? React.createElement('div', {
    style: {
      width: '28px',
      height: '28px',
      background: current ? 'var(--indigo)' : 'var(--white)',
      border: 'var(--border-w-thick) solid var(--ink)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      boxShadow: current ? 'var(--glow-indigo-md)' : 'none',
      transition: 'box-shadow var(--dur-med) var(--ease-out)'
    }
  }, React.createElement('img', {
    src: icon,
    width: 14,
    height: 14,
    alt: '',
    style: {
      filter: current ? 'invert(1) brightness(1.8)' : 'none'
    }
  })) : React.createElement('div', {
    style: {
      width: '14px',
      height: '14px',
      background: current ? 'var(--indigo)' : 'var(--white)',
      border: 'var(--border-w-thick) solid var(--ink)',
      boxShadow: current ? 'var(--glow-indigo-md)' : 'none'
    }
  }), !last ? React.createElement('div', {
    style: {
      width: '2px',
      flex: 1,
      background: 'var(--ink)',
      marginTop: '6px'
    }
  }) : null), React.createElement('div', {
    style: {
      flex: 1,
      paddingBottom: '4px'
    }
  }, React.createElement('div', {
    onClick: () => hasBody && setOpen(o => !o),
    style: {
      cursor: hasBody ? 'pointer' : 'default',
      background: 'var(--white)',
      border: 'var(--border-w) solid var(--ink)',
      boxShadow: 'var(--shadow-hard-sm)',
      padding: '16px 18px',
      transition: 'transform var(--dur-fast) var(--ease-out)'
    },
    onMouseEnter: e => {
      if (hasBody) e.currentTarget.style.transform = 'translate(-2px,-2px)';
    },
    onMouseLeave: e => {
      e.currentTarget.style.transform = 'none';
    }
  }, React.createElement('div', {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      flexWrap: 'wrap',
      gap: '8px',
      marginBottom: '6px'
    }
  }, React.createElement('span', {
    style: {
      fontFamily: 'var(--font-pixel)',
      fontSize: '11px',
      color: 'var(--teal-deep)',
      letterSpacing: 'var(--ls-pixel)'
    }
  }, date), category ? React.createElement('span', {
    style: {
      fontFamily: 'var(--font-pixel)',
      fontSize: '10px',
      letterSpacing: 'var(--ls-pixel)',
      textTransform: 'uppercase',
      padding: '3px 8px',
      border: 'var(--border-w) solid var(--indigo)',
      color: 'var(--indigo-deep)',
      background: 'var(--indigo-dim)'
    }
  }, category) : null), React.createElement('div', {
    style: {
      fontFamily: 'var(--font-body)',
      fontWeight: 700,
      fontSize: '16px',
      color: 'var(--ink)'
    }
  }, title), React.createElement('div', {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: '13px',
      color: 'var(--text-faint)'
    }
  }, org), hasBody ? React.createElement('div', {
    style: {
      display: 'grid',
      gridTemplateRows: open ? '1fr' : '0fr',
      opacity: open ? 1 : 0,
      transition: 'grid-template-rows var(--dur-med) var(--ease-out), opacity var(--dur-med) var(--ease-out)'
    }
  }, React.createElement('p', {
    style: {
      overflow: 'hidden',
      fontFamily: 'var(--font-body)',
      fontSize: '14px',
      lineHeight: 'var(--lh-normal)',
      color: 'var(--text-soft)',
      margin: '10px 0 0'
    }
  }, description)) : null)));
}
Object.assign(__ds_scope, { TimelineEntry });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/TimelineEntry.jsx", error: String((e && e.message) || e) }); }

// components/core/Badge.jsx
try { (() => {
function Badge({
  children,
  tone = 'ink',
  pill = false,
  shimmer = false
}) {
  const tones = {
    ink: {
      background: 'var(--ink)',
      color: 'var(--white)',
      border: 'var(--ink)'
    },
    indigo: {
      background: 'var(--indigo-dim)',
      color: 'var(--indigo-deep)',
      border: 'var(--indigo)'
    },
    teal: {
      background: 'var(--teal-dim)',
      color: 'var(--teal-deep)',
      border: 'var(--teal)'
    },
    outline: {
      background: 'transparent',
      color: 'var(--ink)',
      border: 'var(--ink)'
    }
  };
  const t = tones[tone];
  const glass = shimmer ? {
    background: 'linear-gradient(135deg, rgba(255,255,255,.8) 0%, rgba(255,255,255,.45) 45%, rgba(255,255,255,.65) 100%)',
    backdropFilter: 'blur(10px) saturate(180%)',
    WebkitBackdropFilter: 'blur(10px) saturate(180%)',
    borderColor: 'rgba(16,16,20,.25)',
    boxShadow: 'inset 0 1px 0 rgba(255,255,255,.85), 0 4px 14px rgba(0,0,0,.08)'
  } : {};
  return React.createElement('span', {
    className: shimmer ? 'badge-shimmer' : undefined,
    style: {
      position: 'relative',
      overflow: 'hidden',
      fontFamily: 'var(--font-pixel)',
      fontSize: '11px',
      letterSpacing: 'var(--ls-pixel)',
      textTransform: 'uppercase',
      padding: '5px 10px',
      border: `var(--border-w) solid ${t.border}`,
      borderRadius: pill ? 'var(--radius-pill)' : 'var(--radius-sm)',
      background: t.background,
      color: t.color,
      display: 'inline-block',
      ...glass
    }
  }, children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function Button({
  children,
  variant = 'primary',
  size = 'md',
  icon,
  href,
  onClick,
  type = 'button',
  disabled
}) {
  const sizes = {
    sm: {
      padding: '8px 14px',
      fontSize: '12px'
    },
    md: {
      padding: '12px 22px',
      fontSize: '13px'
    },
    lg: {
      padding: '16px 30px',
      fontSize: '14px'
    }
  };
  const base = {
    fontFamily: 'var(--font-pixel)',
    letterSpacing: 'var(--ls-pixel)',
    textTransform: 'uppercase',
    border: 'var(--border-w-thick) solid var(--ink)',
    borderRadius: 'var(--radius-sm)',
    cursor: disabled ? 'not-allowed' : 'pointer',
    display: 'inline-flex',
    alignItems: 'center',
    gap: '8px',
    transition: 'transform var(--dur-fast) var(--ease-out), box-shadow var(--dur-fast) var(--ease-out)',
    opacity: disabled ? 0.45 : 1,
    ...sizes[size]
  };
  const variants = {
    primary: {
      background: 'var(--ink)',
      color: 'var(--white)',
      boxShadow: 'var(--shadow-hard-sm)'
    },
    secondary: {
      background: 'var(--white)',
      color: 'var(--ink)',
      boxShadow: 'var(--shadow-hard-sm)'
    },
    accent: {
      background: 'var(--indigo)',
      color: 'var(--white)',
      borderColor: 'var(--ink)',
      boxShadow: 'var(--shadow-hard-sm)'
    },
    ghost: {
      background: 'transparent',
      color: 'var(--ink)',
      border: 'var(--border-w) solid transparent',
      boxShadow: 'none'
    }
  };
  const style = {
    ...base,
    ...variants[variant]
  };
  const handlers = disabled ? {} : {
    onMouseDown: e => {
      e.currentTarget.style.transform = 'translate(3px,3px)';
      e.currentTarget.style.boxShadow = 'none';
    },
    onMouseUp: e => {
      e.currentTarget.style.transform = 'none';
      e.currentTarget.style.boxShadow = variants[variant].boxShadow || 'none';
    },
    onMouseLeave: e => {
      e.currentTarget.style.transform = 'none';
      e.currentTarget.style.boxShadow = variants[variant].boxShadow || 'none';
    }
  };
  const Tag = href ? 'a' : 'button';
  const iconLight = variant === 'primary' || variant === 'accent';
  return React.createElement(Tag, {
    href,
    type: href ? undefined : type,
    onClick,
    disabled,
    style,
    ...handlers
  }, icon ? React.createElement('img', {
    src: icon,
    alt: '',
    style: {
      width: '14px',
      height: '14px',
      display: 'inline-block',
      filter: iconLight ? 'invert(1) brightness(1.8)' : 'none'
    }
  }) : null, children);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/SectionHeading.jsx
try { (() => {
function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = 'left',
  icon
}) {
  return React.createElement('div', {
    style: {
      textAlign: align,
      marginBottom: 'var(--space-6)'
    }
  }, eyebrow ? React.createElement('div', {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: align === 'center' ? 'center' : 'flex-start',
      gap: '8px',
      fontFamily: 'var(--font-pixel)',
      fontSize: '13px',
      letterSpacing: 'var(--ls-pixel)',
      color: 'var(--indigo-deep)',
      marginBottom: '10px',
      textTransform: 'uppercase'
    }
  }, icon ? React.createElement('img', {
    src: icon,
    width: 14,
    height: 14,
    alt: '',
    style: {
      filter: 'invert(21%) sepia(89%) saturate(4500%) hue-rotate(327deg) brightness(95%)'
    }
  }) : null, `// ${eyebrow}`) : null, React.createElement('h2', {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--text-2xl)',
      lineHeight: 'var(--lh-tight)',
      color: 'var(--ink)',
      margin: 0,
      textTransform: 'uppercase'
    }
  }, title), subtitle ? React.createElement('p', {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: '15px',
      color: 'var(--text-soft)',
      margin: '8px 0 0'
    }
  }, subtitle) : null);
}
Object.assign(__ds_scope, { SectionHeading });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/SectionHeading.jsx", error: String((e && e.message) || e) }); }

// components/core/SocialLink.jsx
try { (() => {
const ICONS = {
  linkedin: 'https://unpkg.com/pixelarticons@1.8.1/svg/briefcase.svg',
  github: './jellyfish-bit-vector-illustration-decora-msmkedd1-lcxh.png',
  mail: 'https://unpkg.com/pixelarticons@1.8.1/svg/mail.svg',
  twitter: 'https://unpkg.com/pixelarticons@1.8.1/svg/bell.svg',
  external: 'https://unpkg.com/pixelarticons@1.8.1/svg/home.svg'
};
function SocialLink({
  platform,
  label,
  href
}) {
  const icon = ICONS[platform] || ICONS.external;
  const isImg = /^(http|\.)/.test(icon);
  return React.createElement('a', {
    href,
    target: '_blank',
    rel: 'noreferrer',
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '8px',
      padding: '10px 14px',
      border: 'var(--border-w) solid var(--ink)',
      borderRadius: 'var(--radius-sm)',
      background: 'var(--white)',
      color: 'var(--ink)',
      textDecoration: 'none',
      fontFamily: 'var(--font-pixel)',
      fontSize: '12px',
      letterSpacing: 'var(--ls-pixel)',
      textTransform: 'uppercase',
      boxShadow: 'var(--shadow-hard-sm)'
    }
  }, isImg ? React.createElement('img', {
    src: icon,
    alt: '',
    style: {
      width: platform === 'github' ? '11px' : '14px',
      height: platform === 'github' ? '16px' : '14px',
      display: 'inline-block'
    }
  }) : React.createElement('span', {
    style: {
      fontSize: '15px',
      lineHeight: 1
    }
  }, icon), label);
}
Object.assign(__ds_scope, { SocialLink });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/SocialLink.jsx", error: String((e && e.message) || e) }); }

// components/core/WindowCard.jsx
try { (() => {
function WindowCard({
  children,
  title,
  dark = false,
  padding = '24px',
  style,
  bodyStyle,
  onClose,
  onMaximize
}) {
  const bg = dark ? 'var(--panel)' : 'var(--surface)';
  const fg = dark ? 'var(--panel-fg)' : 'var(--ink)';
  return React.createElement('div', {
    style: {
      background: bg,
      color: fg,
      border: 'var(--border-w) solid var(--ink)',
      boxShadow: 'var(--shadow-hard-md)',
      borderRadius: 'var(--radius-sm)',
      ...style
    }
  }, title ? React.createElement('div', {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: '10px',
      padding: '10px 14px',
      borderBottom: `var(--border-w) solid ${dark ? 'var(--panel-line)' : 'var(--ink)'}`
    }
  }, React.createElement('span', {
    onClick: onClose,
    style: {
      width: '9px',
      height: '9px',
      borderRadius: '50%',
      background: 'var(--indigo)',
      cursor: onClose ? 'pointer' : 'default'
    }
  }), React.createElement('span', {
    style: {
      width: '9px',
      height: '9px',
      borderRadius: '50%',
      background: 'var(--amber)'
    }
  }), React.createElement('span', {
    onClick: onMaximize,
    style: {
      width: '9px',
      height: '9px',
      borderRadius: '50%',
      background: 'var(--teal)',
      cursor: onMaximize ? 'pointer' : 'default'
    }
  }), React.createElement('span', {
    style: {
      fontFamily: 'var(--font-pixel)',
      fontSize: '11px',
      letterSpacing: 'var(--ls-pixel)',
      marginLeft: '6px',
      color: dark ? 'var(--panel-fg-dim)' : 'var(--text-soft)'
    }
  }, title)) : null, React.createElement('div', {
    style: {
      padding,
      ...bodyStyle
    }
  }, children));
}
Object.assign(__ds_scope, { WindowCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/WindowCard.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Callout.jsx
try { (() => {
function Callout({
  tone = 'info',
  children
}) {
  const tones = {
    info: {
      border: 'var(--teal)',
      color: 'var(--teal-deep)',
      label: 'NOTE'
    },
    warn: {
      border: 'var(--amber)',
      color: '#8a5c00',
      label: 'WARN'
    },
    danger: {
      border: 'var(--danger)',
      color: 'var(--danger)',
      label: 'ALERT'
    }
  };
  const t = tones[tone];
  return React.createElement('div', {
    style: {
      display: 'flex',
      gap: '12px',
      padding: '14px 16px',
      background: 'var(--panel)',
      border: `var(--border-w) solid ${t.border}`,
      borderRadius: 'var(--radius-sm)'
    }
  }, React.createElement('span', {
    style: {
      fontFamily: 'var(--font-pixel)',
      fontSize: '11px',
      color: t.color,
      letterSpacing: 'var(--ls-pixel)',
      flexShrink: 0
    }
  }, `[${t.label}]`), React.createElement('span', {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: '13px',
      color: 'var(--panel-fg)',
      lineHeight: '1.6'
    }
  }, children));
}
Object.assign(__ds_scope, { Callout });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Callout.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function Input({
  label,
  type = 'text',
  placeholder,
  value,
  onChange,
  name
}) {
  return React.createElement('label', {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '8px',
      fontFamily: 'var(--font-pixel)',
      fontSize: '11px',
      letterSpacing: 'var(--ls-pixel)',
      textTransform: 'uppercase',
      color: 'var(--text-soft)'
    }
  }, label, React.createElement('input', {
    type,
    name,
    placeholder,
    value,
    onChange,
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: '15px',
      padding: '12px 14px',
      border: 'var(--border-w) solid var(--ink)',
      borderRadius: 'var(--radius-sm)',
      background: 'var(--white)',
      color: 'var(--ink)',
      outline: 'none'
    },
    onFocus: e => e.currentTarget.style.boxShadow = 'var(--glow-indigo-sm)',
    onBlur: e => e.currentTarget.style.boxShadow = 'none'
  }));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/TextArea.jsx
try { (() => {
function TextArea({
  label,
  placeholder,
  value,
  onChange,
  name,
  rows = 5
}) {
  return React.createElement('label', {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '8px',
      fontFamily: 'var(--font-pixel)',
      fontSize: '11px',
      letterSpacing: 'var(--ls-pixel)',
      textTransform: 'uppercase',
      color: 'var(--text-soft)'
    }
  }, label, React.createElement('textarea', {
    name,
    placeholder,
    value,
    onChange,
    rows,
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: '15px',
      padding: '12px 14px',
      border: 'var(--border-w) solid var(--ink)',
      borderRadius: 'var(--radius-sm)',
      background: 'var(--white)',
      color: 'var(--ink)',
      outline: 'none',
      resize: 'vertical'
    },
    onFocus: e => e.currentTarget.style.boxShadow = 'var(--glow-indigo-sm)',
    onBlur: e => e.currentTarget.style.boxShadow = 'none'
  }));
}
Object.assign(__ds_scope, { TextArea });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/TextArea.jsx", error: String((e && e.message) || e) }); }

// components/navigation/NavBar.jsx
try { (() => {
function NavBar({
  name,
  items,
  active,
  onNavigate,
  logo
}) {
  return React.createElement('nav', {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '18px 32px',
      borderBottom: 'var(--border-w-thick) solid var(--ink)',
      background: 'rgba(244,241,234,.55)',
      backdropFilter: 'blur(10px) saturate(180%)',
      WebkitBackdropFilter: 'blur(10px) saturate(180%)',
      position: 'sticky',
      top: 0,
      zIndex: 10
    }
  }, React.createElement('span', {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: logo ? '10px' : 0,
      fontFamily: 'var(--font-display)',
      fontSize: '18px',
      color: 'var(--ink)',
      letterSpacing: 'var(--ls-display)'
    }
  }, logo ? React.createElement('img', {
    src: logo,
    width: 28,
    height: 28,
    alt: '',
    style: {
      objectFit: 'contain'
    }
  }) : null, name), React.createElement('div', {
    style: {
      display: 'flex',
      gap: '26px'
    }
  }, items.map(it => React.createElement('a', {
    key: it,
    href: `#${it.toLowerCase()}`,
    onClick: e => {
      if (onNavigate) {
        e.preventDefault();
        onNavigate(it);
      }
    },
    style: {
      fontFamily: 'var(--font-pixel)',
      fontSize: '12px',
      letterSpacing: 'var(--ls-pixel)',
      textTransform: 'uppercase',
      color: active === it ? 'var(--indigo)' : 'var(--ink)',
      textDecoration: 'none',
      borderBottom: active === it ? '2px solid var(--indigo)' : '2px solid transparent',
      paddingBottom: '4px'
    }
  }, it))));
}
Object.assign(__ds_scope, { NavBar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/NavBar.jsx", error: String((e && e.message) || e) }); }

// ui_kits/_backup/portfolio-site-2026-09-20/sections-backup.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  SectionHeading,
  Badge,
  BlogPostCard,
  TimelineEntry,
  GalleryTile,
  Callout,
  Input,
  TextArea,
  Button,
  SocialLink,
  WindowCard
} = window.Jess4342CybersecurityPortfolioDesignSystem_6543ae;
const ICON = 'https://unpkg.com/pixelarticons@1.8.1/svg/';
function TypewriterHeading({
  prefix = '',
  text,
  fontSize = '64px',
  mono = false,
  uppercase = true
}) {
  const [n, setN] = React.useState(0);
  const [phase, setPhase] = React.useState('typing');
  React.useEffect(() => {
    let t;
    if (phase === 'typing') {
      if (n < text.length) {
        t = setTimeout(() => setN(n + 1), 110);
      } else {
        t = setTimeout(() => setPhase('pause'), 1400);
      }
    } else if (phase === 'pause') {
      t = setTimeout(() => setPhase('deleting'), 900);
    } else if (phase === 'deleting') {
      if (n > 0) {
        t = setTimeout(() => setN(n - 1), 55);
      } else {
        t = setTimeout(() => setPhase('typing'), 400);
      }
    }
    return () => clearTimeout(t);
  }, [n, phase, text]);
  const caretH = parseInt(fontSize) * 0.82;
  return /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: mono ? 'var(--font-mono)' : 'var(--font-display)',
      fontSize,
      lineHeight: 'var(--lh-tight)',
      textTransform: uppercase ? 'uppercase' : 'none',
      display: 'inline-block'
    }
  }, prefix, text.slice(0, n), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-block',
      width: mono ? '11px' : '6px',
      marginLeft: '4px',
      background: 'var(--indigo)',
      animation: 'blink 1s steps(1) infinite',
      height: caretH + 'px',
      verticalAlign: '-0.12em'
    }
  }));
}
function PeccyRun({
  maximized = false,
  onClose
} = {}) {
  const trackRef = React.useRef(null);
  const peccyRef = React.useRef(null);
  const obsElRefs = React.useRef([]);
  const [obsTypes, setObsTypes] = React.useState(['O', 'L', 'S']);
  React.useEffect(() => {
    const track = trackRef.current,
      peccy = peccyRef.current;
    const TYPE_KEYS = ['O', 'L', 'J', 'S', 'T', 'I'];
    const peccyX = 22,
      peccyW = 52,
      peccyH = 52;
    let obstacles = [];
    const gap = () => 170 + Math.random() * 190;
    let x = track.clientWidth + 80;
    const initTypes = [];
    for (let i = 0; i < 3; i++) {
      const type = TYPE_KEYS[Math.floor(Math.random() * TYPE_KEYS.length)];
      initTypes.push(type);
      obstacles.push({
        x,
        type,
        slot: i,
        jumped: false
      });
      x += BB[type].w * CELL + gap();
    }
    setObsTypes(initTypes);
    let jumping = false,
      jumpStart = 0;
    const JUMP_MS = 640,
      JUMP_H = 50,
      TRIGGER_X = 94;
    let raf,
      last = performance.now();
    function frame(now) {
      const dt = Math.min(32, now - last);
      last = now;
      const speed = 0.12;
      obstacles.forEach(o => {
        o.x -= speed * dt;
      });
      if (obstacles[0].x + BB[obstacles[0].type].w * CELL < -40) {
        obstacles.shift();
        const tail = obstacles[obstacles.length - 1];
        const newType = TYPE_KEYS[Math.floor(Math.random() * TYPE_KEYS.length)];
        const slot = obstacles.length ? (tail.slot + 1) % 3 : 0;
        const newObs = {
          x: tail.x + BB[tail.type].w * CELL + gap(),
          type: newType,
          slot,
          jumped: false
        };
        obstacles.push(newObs);
        setObsTypes(prev => {
          const next = prev.slice();
          next[slot] = newType;
          return next;
        });
      }
      if (!jumping) {
        const next = obstacles.find(o => !o.jumped && o.x + BB[o.type].w * CELL <= TRIGGER_X);
        if (next) {
          jumping = true;
          jumpStart = now;
          next.jumped = true;
        }
      }
      let y = 0;
      if (jumping) {
        const p = Math.min(1, (now - jumpStart) / JUMP_MS);
        y = -Math.sin(p * Math.PI) * JUMP_H;
        if (p >= 1) jumping = false;
      }
      if (peccy) peccy.style.transform = 'translateY(' + y + 'px)';
      obstacles.forEach(o => {
        const el = obsElRefs.current[o.slot];
        if (!el) return;
        el.style.left = o.x + 'px';
      });
      raf = requestAnimationFrame(frame);
    }
    raf = requestAnimationFrame(frame);
    return () => cancelAnimationFrame(raf);
  }, []);
  return /*#__PURE__*/React.createElement(WindowCard, {
    title: "~/peccy-run.sh",
    onClose: onClose,
    style: maximized ? {
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      background: 'transparent'
    } : undefined,
    bodyStyle: maximized ? {
      flex: 1,
      display: 'flex',
      flexDirection: 'column'
    } : undefined
  }, /*#__PURE__*/React.createElement("div", {
    ref: trackRef,
    style: {
      position: 'relative',
      height: maximized ? '100%' : 120,
      flex: maximized ? 1 : undefined,
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 0,
      right: 0,
      bottom: 24,
      height: 0,
      borderTop: 'var(--border-w) dashed var(--ink-faint)'
    }
  }), /*#__PURE__*/React.createElement("img", {
    ref: peccyRef,
    src: "../../assets/peccy-pixel-sm.png",
    alt: "",
    style: {
      position: 'absolute',
      left: 22,
      bottom: 24,
      width: 52,
      height: 52,
      pointerEvents: 'none'
    }
  }), [0, 1, 2].map(i => /*#__PURE__*/React.createElement(TetrisObstacle, {
    key: i,
    type: obsTypes[i],
    setRef: el => obsElRefs.current[i] = el
  }))));
}
const CELL = 9;
const BB = {
  O: {
    cells: [[0, 0], [1, 0], [0, 1], [1, 1]],
    w: 2,
    h: 2,
    color: 'var(--amber)'
  },
  L: {
    cells: [[0, 0], [0, 1], [0, 2], [1, 2]],
    w: 2,
    h: 3,
    color: 'var(--teal)'
  },
  J: {
    cells: [[1, 0], [1, 1], [1, 2], [0, 2]],
    w: 2,
    h: 3,
    color: 'var(--indigo)'
  },
  S: {
    cells: [[1, 0], [2, 0], [0, 1], [1, 1]],
    w: 3,
    h: 2,
    color: 'var(--teal-deep)'
  },
  T: {
    cells: [[0, 0], [1, 0], [2, 0], [1, 1]],
    w: 3,
    h: 2,
    color: 'var(--indigo-deep)'
  },
  I: {
    cells: [[0, 0], [0, 1], [0, 2], [0, 3]],
    w: 1,
    h: 4,
    color: 'var(--ink)'
  }
};
function TetrisObstacle({
  type,
  setRef
}) {
  const t = BB[type] || BB.O;
  return /*#__PURE__*/React.createElement("div", {
    ref: setRef,
    style: {
      position: 'absolute',
      bottom: 24,
      width: t.w * CELL,
      height: t.h * CELL,
      pointerEvents: 'none'
    }
  }, t.cells.map((c, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      position: 'absolute',
      left: c[0] * CELL,
      bottom: c[1] * CELL,
      width: CELL,
      height: CELL,
      background: t.color,
      border: '1px solid var(--ink)',
      boxShadow: 'inset -2px -2px 0 rgba(0,0,0,.28), inset 2px 2px 0 rgba(255,255,255,.4)'
    }
  })));
}
function TerminalLine({
  label,
  labelColor,
  value,
  charMs,
  onDone
}) {
  const [n, setN] = React.useState(0);
  React.useEffect(() => {
    let t;
    function step(i) {
      setN(i);
      if (i < value.length) {
        t = setTimeout(() => step(i + 1), charMs);
      } else if (onDone) {
        onDone();
      }
    }
    step(0);
    return () => clearTimeout(t);
  }, []);
  const done = n >= value.length;
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    style: {
      color: labelColor
    }
  }, label), " ", value.slice(0, n), !done ? /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-block',
      width: '7px',
      marginLeft: '2px',
      background: 'var(--teal)',
      animation: 'blink 1s steps(1) infinite',
      height: '13px',
      verticalAlign: '-2px'
    }
  }) : null);
}
function WhoamiTerminal() {
  const LINES = [{
    label: 'role:',
    labelColor: 'var(--panel-fg-dim)',
    value: 'Cloud Security Consultant'
  }, {
    label: 'focus:',
    labelColor: 'var(--panel-fg-dim)',
    value: 'IAM, Threat Modeling, Risk Management'
  }, {
    label: 'cert:',
    labelColor: 'var(--panel-fg-dim)',
    value: 'CISSP, GCIH'
  }, {
    label: 'status:',
    labelColor: 'var(--indigo)',
    value: 'ONLINE'
  }];
  const [active, setActive] = React.useState(0);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: '14px',
      color: 'var(--teal)',
      lineHeight: 1.9
    }
  }, LINES.slice(0, active + 1).map((l, i) => /*#__PURE__*/React.createElement(TerminalLine, {
    key: i,
    label: l.label,
    labelColor: l.labelColor,
    value: l.value,
    charMs: 16,
    onDone: () => setActive(a => Math.max(a, i + 1))
  })));
}
function Home({
  onNavigate
} = {}) {
  const heroRef = React.useRef(null);
  const [peccyOpen, setPeccyOpen] = React.useState(false);
  const onHeroMove = e => {
    const r = heroRef.current.getBoundingClientRect();
    heroRef.current.style.setProperty('--hx', (e.clientX - r.left) / r.width * 100 + '%');
    heroRef.current.style.setProperty('--hy', (e.clientY - r.top) / r.height * 100 + '%');
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '0 0 60px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    ref: heroRef,
    onMouseMove: onHeroMove,
    style: {
      minHeight: '400px',
      display: 'flex',
      alignItems: 'center',
      gap: 48,
      padding: '50px 32px 30px',
      overflow: 'hidden',
      position: 'relative',
      background: 'radial-gradient(650px circle at var(--hx,50%) var(--hy,40%), rgba(63,79,196,.24), rgba(0,179,164,.16) 45%, var(--cream) 72%)',
      transition: '--hx .5s ease-out,--hy .5s ease-out'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: 'flex',
      alignItems: 'center',
      gap: 48,
      position: 'relative',
      zIndex: 1,
      background: 'linear-gradient(160deg, rgba(255,255,255,.4) 0%, rgba(255,255,255,.14) 60%, rgba(255,255,255,.22) 100%)',
      backdropFilter: 'blur(16px) saturate(180%)',
      WebkitBackdropFilter: 'blur(16px) saturate(180%)',
      border: '1px solid rgba(255,255,255,.55)',
      borderRadius: '20px',
      boxShadow: 'inset 0 1px 0 rgba(255,255,255,.6), 0 8px 32px rgba(0,0,0,.12)',
      padding: '32px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: "indigo"
  }, "AVAILABLE FOR ENGAGEMENTS"), /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: '24px 0 20px'
    }
  }, /*#__PURE__*/React.createElement(TypewriterHeading, {
    text: "JESS4342"
  })), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: '19px',
      lineHeight: 'var(--lh-normal)',
      color: 'var(--text-soft)',
      maxWidth: '520px',
      margin: '0 0 28px'
    }
  }, "Security consultant specializing in IAM and GenAI security in the cloud."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "accent"
  }, "View My Work"), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary"
  }, "Contact Me"))), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: 'flex',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement(WindowCard, {
    dark: true,
    title: "~/whoami",
    onMaximize: () => setPeccyOpen(true)
  }, /*#__PURE__*/React.createElement(WhoamiTerminal, null)))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      zIndex: 2,
      background: 'var(--grid-bg)',
      pointerEvents: 'none'
    }
  }), peccyOpen && /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      zIndex: 3
    }
  }, /*#__PURE__*/React.createElement(PeccyRun, {
    maximized: true,
    onClose: () => setPeccyOpen(false)
  }))));
}
function About() {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '60px 32px 80px',
      maxWidth: 960,
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 'var(--space-6)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-pixel)',
      fontSize: '13px',
      letterSpacing: 'var(--ls-pixel)',
      color: 'var(--indigo-deep)',
      marginBottom: '10px',
      textTransform: 'uppercase'
    }
  }, "// About"), /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0
    }
  }, /*#__PURE__*/React.createElement(TypewriterHeading, {
    prefix: "$ ",
    text: "WHOAMI",
    fontSize: "36px"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 48
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1.3
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: '16px',
      lineHeight: 'var(--lh-normal)',
      color: 'var(--text-body)',
      marginBottom: 16,
      textAlign: 'justify'
    }
  }, "I've spent the last four years at AWS working in cloud security, first as a Cloud Security Support Engineer and most recently as a Cloud Security Consultant.", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("br", null), "My work sits directly at the intersection of cloud security, threat modeling, and emerging technology. Across customer engagements, I've helped organizations identify risks, threat model architectures, and bake security in GenAI solutions before they're shipped.", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("br", null), "I'm especially interested in securing technology that is continuously ever-evolving\u2014embedding security end-to-end and shifting left as threats emerge over time.", /*#__PURE__*/React.createElement("br", null)), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: '16px',
      lineHeight: 'var(--lh-normal)',
      color: 'var(--text-soft)',
      textAlign: 'justify'
    }
  }, "Outside of work, you can usually find me reading sci-fi and fantasy novels, writing speculative fiction, or running in unseasonable, sweltering Texas heat.", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("br", null), "Welcome to my little corner of the internet!"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8,
      flexWrap: 'wrap',
      marginTop: 24
    }
  }, ['GCIH', 'CISSP', 'Python', 'Burp Suite', 'Nmap', 'SAP-CO2'].map(s => /*#__PURE__*/React.createElement(Badge, {
    key: s,
    tone: "outline",
    shimmer: true
  }, s)))), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement(WindowCard, {
    title: "~/education.log"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: '14px',
      lineHeight: 1.8,
      color: 'var(--ink)'
    }
  }, /*#__PURE__*/React.createElement("strong", null, "B.S. Information Technology & Systems"), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--text-faint)'
    }
  }, "The University of Texas at Dallas, 2022", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("strong", {
    style: {
      color: 'var(--ink)'
    }
  }, "M.S. Business Analytics"), /*#__PURE__*/React.createElement("br", null), "The University of Texas at Dallas, 2023"))))));
}
const POSTS = [{
  tag: 'Writeup',
  date: '2024.11.02',
  title: 'Breaking a Weak JWT Implementation',
  excerpt: 'A walkthrough of a real finding from a recent web app engagement.',
  readTime: '6 min read'
}, {
  tag: 'Advisory',
  date: '2024.09.14',
  title: 'Notes on Supply-Chain Risk',
  excerpt: 'What I look for when auditing third-party dependencies.',
  readTime: '4 min read'
}, {
  tag: 'Opinion',
  date: '2024.06.30',
  title: 'Why Most Phishing Training Doesn\u2019t Work',
  excerpt: 'Rethinking the annual click-the-link exercise.',
  readTime: '5 min read'
}, {
  tag: 'Writeup',
  date: '2024.03.11',
  title: 'Privilege Escalation via Misconfigured Cron',
  excerpt: 'A common but overlooked Linux misconfiguration.',
  readTime: '7 min read'
}];
function Blog() {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '60px 32px 80px',
      maxWidth: 1100,
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    eyebrow: "Blog",
    title: "Field Notes"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(2,1fr)',
      gap: 20,
      marginTop: 24
    }
  }, POSTS.map(p => /*#__PURE__*/React.createElement(BlogPostCard, _extends({
    key: p.title
  }, p)))));
}
const PHOTOS = [{
  caption: 'OASC',
  date: '2026.07',
  size: 'md',
  image: '../../assets/oasc.jpg',
  href: 'https://www.linkedin.com/posts/stephenschmidt1_security-is-a-team-sport-and-were-privileged-activity-7352018172788514816-VJN1'
}, {
  caption: 'Cloud Security Exchange Summit',
  date: '2026.08',
  size: 'md',
  image: '../../assets/cloudsec-exchange-summit.jpg'
}, {
  caption: 'WiCyS Security Training Scholarship',
  date: '2022',
  size: 'md',
  image: '../../assets/wicys-scholarship.png'
}, {
  caption: 'CodePath AI Engineering Class',
  date: '2026.08',
  size: 'md',
  image: '../../assets/codepath-ai.png'
}, {
  caption: 'Flare x SANS "Sisterhood of the Traveling Packets" CTF',
  date: '2026.08',
  size: 'md',
  image: '../../assets/flare-sans-ctf.jpg'
}];
function Gallery() {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '60px 32px 80px',
      maxWidth: 1100,
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    eyebrow: "Gallery",
    title: "Memory Wall",
    subtitle: "of happenings and goings-on"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3,1fr)',
      gap: 16
    }
  }, PHOTOS.map(p => /*#__PURE__*/React.createElement(GalleryTile, _extends({
    key: p.caption
  }, p)))));
}
const JOBS = [{
  date: '2025 — Present',
  title: 'Cloud Security Consultant',
  org: 'AWS',
  category: 'Current',
  current: true,
  description: 'Helped healthcare and life sciences organizations build secure AWS infrastructure and GenAI solutions, with a focus on threat modeling, risk, resilience, and infrastructure as code.'
}];
const JOBS_PARALLEL = [{
  date: '2022-2025',
  title: 'Cloud Security Support Engineer',
  org: 'AWS',
  category: 'Full-time',
  description: 'Solved complex AWS security and infrastructure issues for customers, specializing in IAM, networking, access controls, logging, and cloud security.'
}, {
  date: '2022 — 2023',
  title: 'M.S. Business Analytics',
  org: 'The University of Texas at Dallas',
  category: 'Education',
  description: ''
}];
const JOBS_LAST = {
  date: '2020-2022',
  title: 'B.S. Information Technology & Systems',
  org: 'The University of Texas at Dallas',
  category: 'Education',
  description: '',
  last: true
};
function ParallelCard({
  it
}) {
  const hasBody = !!it.description;
  const [open, setOpen] = React.useState(true);
  return /*#__PURE__*/React.createElement("div", {
    onClick: () => hasBody && setOpen(o => !o),
    style: {
      flex: '1 1 220px',
      background: 'var(--white)',
      border: 'var(--border-w) solid var(--ink)',
      boxShadow: 'var(--shadow-hard-sm)',
      padding: '16px 18px',
      cursor: hasBody ? 'pointer' : 'default',
      transition: 'transform var(--dur-fast) var(--ease-out)'
    },
    onMouseEnter: e => {
      if (hasBody) e.currentTarget.style.transform = 'translate(-2px,-2px)';
    },
    onMouseLeave: e => {
      e.currentTarget.style.transform = 'none';
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      flexWrap: 'wrap',
      gap: 8,
      marginBottom: 6
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-pixel)',
      fontSize: 11,
      color: 'var(--teal-deep)',
      letterSpacing: 'var(--ls-pixel)'
    }
  }, it.date), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-pixel)',
      fontSize: 10,
      letterSpacing: 'var(--ls-pixel)',
      textTransform: 'uppercase',
      padding: '3px 8px',
      border: 'var(--border-w) solid var(--indigo)',
      color: 'var(--indigo-deep)',
      background: 'var(--indigo-dim)'
    }
  }, it.category)), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-body)',
      fontWeight: 700,
      fontSize: 16,
      color: 'var(--ink)'
    }
  }, it.title), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 13,
      color: 'var(--text-faint)'
    }
  }, it.org), hasBody ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateRows: open ? '1fr' : '0fr',
      opacity: open ? 1 : 0,
      transition: 'grid-template-rows var(--dur-med) var(--ease-out), opacity var(--dur-med) var(--ease-out)'
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      overflow: 'hidden',
      fontFamily: 'var(--font-body)',
      fontSize: 14,
      lineHeight: 'var(--lh-normal)',
      color: 'var(--text-soft)',
      margin: '10px 0 0'
    }
  }, it.description)) : null);
}
function ParallelTimelineEntry({
  items,
  last
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 20,
      paddingBottom: last ? 0 : 24,
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 28,
      height: 28,
      background: 'var(--white)',
      border: 'var(--border-w-thick) solid var(--ink)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: ICON + 'calendar.svg',
    width: 14,
    height: 14,
    alt: ""
  })), !last ? /*#__PURE__*/React.createElement("div", {
    style: {
      width: 2,
      flex: 1,
      background: 'var(--ink)',
      marginTop: 6
    }
  }) : null), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: 'flex',
      gap: 14,
      flexWrap: 'wrap'
    }
  }, items.map((it, i) => /*#__PURE__*/React.createElement(ParallelCard, {
    key: i,
    it: it
  }))));
}
function Timeline() {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '60px 32px 80px',
      maxWidth: 760,
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    eyebrow: "Timeline",
    title: "How I Got Here"
  }), JOBS.map(j => /*#__PURE__*/React.createElement(TimelineEntry, _extends({
    key: j.title
  }, j, {
    icon: j.current ? ICON + 'shield.svg' : ICON + 'calendar.svg'
  }))), /*#__PURE__*/React.createElement(ParallelTimelineEntry, {
    items: JOBS_PARALLEL
  }), /*#__PURE__*/React.createElement(TimelineEntry, _extends({}, JOBS_LAST, {
    icon: ICON + 'calendar.svg'
  })));
}
function Contact() {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '60px 32px 100px',
      maxWidth: 760,
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    eyebrow: "Contact",
    title: "Get In Touch"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 12,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(SocialLink, {
    platform: "linkedin",
    label: "LinkedIn",
    href: "#"
  }), /*#__PURE__*/React.createElement(SocialLink, {
    platform: "github",
    label: "GitHub",
    href: "#"
  })));
}
Object.assign(window, {
  Home,
  About,
  Blog,
  Gallery,
  Timeline,
  Contact
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/_backup/portfolio-site-2026-09-20/sections-backup.jsx", error: String((e && e.message) || e) }); }

// ui_kits/portfolio-site/Sections.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  SectionHeading,
  Badge,
  BlogPostCard,
  TimelineEntry,
  GalleryTile,
  Callout,
  Input,
  TextArea,
  Button,
  SocialLink,
  WindowCard
} = window.Jess4342CybersecurityPortfolioDesignSystem_6543ae;
const ICON = 'https://unpkg.com/pixelarticons@1.8.1/svg/';
function TypewriterHeading({
  prefix = '',
  text,
  fontSize = '64px',
  mono = false,
  uppercase = true
}) {
  const [n, setN] = React.useState(0);
  const [phase, setPhase] = React.useState('typing');
  React.useEffect(() => {
    let t;
    if (phase === 'typing') {
      if (n < text.length) {
        t = setTimeout(() => setN(n + 1), 110);
      } else {
        t = setTimeout(() => setPhase('pause'), 1400);
      }
    } else if (phase === 'pause') {
      t = setTimeout(() => setPhase('deleting'), 900);
    } else if (phase === 'deleting') {
      if (n > 0) {
        t = setTimeout(() => setN(n - 1), 55);
      } else {
        t = setTimeout(() => setPhase('typing'), 400);
      }
    }
    return () => clearTimeout(t);
  }, [n, phase, text]);
  const caretH = parseInt(fontSize) * 0.82;
  return /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: mono ? 'var(--font-mono)' : 'var(--font-display)',
      fontSize,
      lineHeight: 'var(--lh-tight)',
      textTransform: uppercase ? 'uppercase' : 'none',
      display: 'inline-block'
    }
  }, prefix, text.slice(0, n), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-block',
      width: mono ? '11px' : '6px',
      marginLeft: '4px',
      background: 'var(--indigo)',
      animation: 'blink 1s steps(1) infinite',
      height: caretH + 'px',
      verticalAlign: '-0.12em'
    }
  }));
}
function PeccyRun({
  maximized = false,
  onClose
} = {}) {
  const trackRef = React.useRef(null);
  const peccyRef = React.useRef(null);
  const obsElRefs = React.useRef([]);
  const [obsTypes, setObsTypes] = React.useState(['O', 'L', 'S']);
  React.useEffect(() => {
    const track = trackRef.current,
      peccy = peccyRef.current;
    const TYPE_KEYS = ['O', 'L', 'J', 'S', 'T', 'I'];
    const peccyX = 22,
      peccyW = 52,
      peccyH = 52;
    let obstacles = [];
    const gap = () => 170 + Math.random() * 190;
    let x = track.clientWidth + 80;
    const initTypes = [];
    for (let i = 0; i < 3; i++) {
      const type = TYPE_KEYS[Math.floor(Math.random() * TYPE_KEYS.length)];
      initTypes.push(type);
      obstacles.push({
        x,
        type,
        slot: i,
        jumped: false
      });
      x += BB[type].w * CELL + gap();
    }
    setObsTypes(initTypes);
    let jumping = false,
      jumpStart = 0;
    const JUMP_MS = 640,
      JUMP_H = 50,
      TRIGGER_X = 94;
    let raf,
      last = performance.now();
    function frame(now) {
      const dt = Math.min(32, now - last);
      last = now;
      const speed = 0.12;
      obstacles.forEach(o => {
        o.x -= speed * dt;
      });
      if (obstacles[0].x + BB[obstacles[0].type].w * CELL < -40) {
        obstacles.shift();
        const tail = obstacles[obstacles.length - 1];
        const newType = TYPE_KEYS[Math.floor(Math.random() * TYPE_KEYS.length)];
        const slot = obstacles.length ? (tail.slot + 1) % 3 : 0;
        const newObs = {
          x: tail.x + BB[tail.type].w * CELL + gap(),
          type: newType,
          slot,
          jumped: false
        };
        obstacles.push(newObs);
        setObsTypes(prev => {
          const next = prev.slice();
          next[slot] = newType;
          return next;
        });
      }
      if (!jumping) {
        const next = obstacles.find(o => !o.jumped && o.x + BB[o.type].w * CELL <= TRIGGER_X);
        if (next) {
          jumping = true;
          jumpStart = now;
          next.jumped = true;
        }
      }
      let y = 0;
      if (jumping) {
        const p = Math.min(1, (now - jumpStart) / JUMP_MS);
        y = -Math.sin(p * Math.PI) * JUMP_H;
        if (p >= 1) jumping = false;
      }
      if (peccy) peccy.style.transform = 'translateY(' + y + 'px)';
      obstacles.forEach(o => {
        const el = obsElRefs.current[o.slot];
        if (!el) return;
        el.style.left = o.x + 'px';
      });
      raf = requestAnimationFrame(frame);
    }
    raf = requestAnimationFrame(frame);
    return () => cancelAnimationFrame(raf);
  }, []);
  return /*#__PURE__*/React.createElement(WindowCard, {
    title: "~/peccy-run.sh",
    onClose: onClose,
    style: maximized ? {
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      background: 'transparent'
    } : undefined,
    bodyStyle: maximized ? {
      flex: 1,
      display: 'flex',
      flexDirection: 'column'
    } : undefined
  }, /*#__PURE__*/React.createElement("div", {
    ref: trackRef,
    style: {
      position: 'relative',
      height: maximized ? '100%' : 120,
      flex: maximized ? 1 : undefined,
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 0,
      right: 0,
      bottom: 24,
      height: 0,
      borderTop: 'var(--border-w) dashed var(--ink-faint)'
    }
  }), /*#__PURE__*/React.createElement("img", {
    ref: peccyRef,
    src: "../../assets/peccy-pixel-sm.png",
    alt: "",
    style: {
      position: 'absolute',
      left: 22,
      bottom: 24,
      width: 52,
      height: 52,
      pointerEvents: 'none'
    }
  }), [0, 1, 2].map(i => /*#__PURE__*/React.createElement(TetrisObstacle, {
    key: i,
    type: obsTypes[i],
    setRef: el => obsElRefs.current[i] = el
  }))));
}
const CELL = 9;
const BB = {
  O: {
    cells: [[0, 0], [1, 0], [0, 1], [1, 1]],
    w: 2,
    h: 2,
    color: 'var(--amber)'
  },
  L: {
    cells: [[0, 0], [0, 1], [0, 2], [1, 2]],
    w: 2,
    h: 3,
    color: 'var(--teal)'
  },
  J: {
    cells: [[1, 0], [1, 1], [1, 2], [0, 2]],
    w: 2,
    h: 3,
    color: 'var(--indigo)'
  },
  S: {
    cells: [[1, 0], [2, 0], [0, 1], [1, 1]],
    w: 3,
    h: 2,
    color: 'var(--teal-deep)'
  },
  T: {
    cells: [[0, 0], [1, 0], [2, 0], [1, 1]],
    w: 3,
    h: 2,
    color: 'var(--indigo-deep)'
  },
  I: {
    cells: [[0, 0], [0, 1], [0, 2], [0, 3]],
    w: 1,
    h: 4,
    color: 'var(--ink)'
  }
};
function TetrisObstacle({
  type,
  setRef
}) {
  const t = BB[type] || BB.O;
  return /*#__PURE__*/React.createElement("div", {
    ref: setRef,
    style: {
      position: 'absolute',
      bottom: 24,
      width: t.w * CELL,
      height: t.h * CELL,
      pointerEvents: 'none'
    }
  }, t.cells.map((c, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      position: 'absolute',
      left: c[0] * CELL,
      bottom: c[1] * CELL,
      width: CELL,
      height: CELL,
      background: t.color,
      border: '1px solid var(--ink)',
      boxShadow: 'inset -2px -2px 0 rgba(0,0,0,.28), inset 2px 2px 0 rgba(255,255,255,.4)'
    }
  })));
}
function TerminalLine({
  label,
  labelColor,
  value,
  charMs,
  onDone
}) {
  const [n, setN] = React.useState(0);
  React.useEffect(() => {
    let t;
    function step(i) {
      setN(i);
      if (i < value.length) {
        t = setTimeout(() => step(i + 1), charMs);
      } else if (onDone) {
        onDone();
      }
    }
    step(0);
    return () => clearTimeout(t);
  }, []);
  const done = n >= value.length;
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    style: {
      color: labelColor
    }
  }, label), " ", value.slice(0, n), !done ? /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-block',
      width: '7px',
      marginLeft: '2px',
      background: 'var(--teal)',
      animation: 'blink 1s steps(1) infinite',
      height: '13px',
      verticalAlign: '-2px'
    }
  }) : null);
}
function WhoamiTerminal() {
  const LINES = [{
    label: 'role:',
    labelColor: 'var(--panel-fg-dim)',
    value: 'Cloud Security Consultant'
  }, {
    label: 'focus:',
    labelColor: 'var(--panel-fg-dim)',
    value: 'IAM, Threat Modeling, Risk Management'
  }, {
    label: 'cert:',
    labelColor: 'var(--panel-fg-dim)',
    value: 'CISSP, GCIH'
  }, {
    label: 'status:',
    labelColor: 'var(--indigo)',
    value: 'ONLINE'
  }];
  const [active, setActive] = React.useState(0);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: '14px',
      color: 'var(--teal)',
      lineHeight: 1.9
    }
  }, LINES.slice(0, active + 1).map((l, i) => /*#__PURE__*/React.createElement(TerminalLine, {
    key: i,
    label: l.label,
    labelColor: l.labelColor,
    value: l.value,
    charMs: 16,
    onDone: () => setActive(a => Math.max(a, i + 1))
  })));
}
function Home({
  onNavigate
} = {}) {
  const heroRef = React.useRef(null);
  const [peccyOpen, setPeccyOpen] = React.useState(false);
  const onHeroMove = e => {
    const r = heroRef.current.getBoundingClientRect();
    heroRef.current.style.setProperty('--hx', (e.clientX - r.left) / r.width * 100 + '%');
    heroRef.current.style.setProperty('--hy', (e.clientY - r.top) / r.height * 100 + '%');
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '0 0 60px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    ref: heroRef,
    onMouseMove: onHeroMove,
    style: {
      minHeight: '400px',
      display: 'flex',
      alignItems: 'center',
      gap: 48,
      padding: '50px 32px 30px',
      overflow: 'hidden',
      position: 'relative',
      background: 'radial-gradient(650px circle at var(--hx,50%) var(--hy,40%), rgba(63,79,196,.24), rgba(0,179,164,.16) 45%, var(--cream) 72%)',
      transition: '--hx .5s ease-out,--hy .5s ease-out'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: 'flex',
      alignItems: 'center',
      gap: 48,
      position: 'relative',
      zIndex: 1,
      background: 'linear-gradient(160deg, rgba(255,255,255,.4) 0%, rgba(255,255,255,.14) 60%, rgba(255,255,255,.22) 100%)',
      backdropFilter: 'blur(16px) saturate(180%)',
      WebkitBackdropFilter: 'blur(16px) saturate(180%)',
      border: '1px solid rgba(255,255,255,.55)',
      borderRadius: '20px',
      boxShadow: 'inset 0 1px 0 rgba(255,255,255,.6), 0 8px 32px rgba(0,0,0,.12)',
      padding: '32px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: "indigo"
  }, "AVAILABLE FOR ENGAGEMENTS"), /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: '24px 0 20px'
    }
  }, /*#__PURE__*/React.createElement(TypewriterHeading, {
    text: "JESS4342"
  })), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: '19px',
      lineHeight: 'var(--lh-normal)',
      color: 'var(--text-soft)',
      maxWidth: '520px',
      margin: '0 0 28px'
    }
  }, "Security consultant specializing in IAM and GenAI security in the cloud."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "accent"
  }, "View My Work"), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary"
  }, "Contact Me"))), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: 'flex',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement(WindowCard, {
    dark: true,
    title: "~/whoami",
    onMaximize: () => setPeccyOpen(true)
  }, /*#__PURE__*/React.createElement(WhoamiTerminal, null)))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      zIndex: 2,
      background: 'var(--grid-bg)',
      pointerEvents: 'none'
    }
  }), peccyOpen && /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      zIndex: 3
    }
  }, /*#__PURE__*/React.createElement(PeccyRun, {
    maximized: true,
    onClose: () => setPeccyOpen(false)
  }))));
}
function About() {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '60px 32px 80px',
      maxWidth: 960,
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 'var(--space-6)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-pixel)',
      fontSize: '13px',
      letterSpacing: 'var(--ls-pixel)',
      color: 'var(--indigo-deep)',
      marginBottom: '10px',
      textTransform: 'uppercase'
    }
  }, "// About"), /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0
    }
  }, /*#__PURE__*/React.createElement(TypewriterHeading, {
    prefix: "$ ",
    text: "WHOAMI",
    fontSize: "36px"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 48
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1.3
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: '16px',
      lineHeight: 'var(--lh-normal)',
      color: 'var(--text-body)',
      marginBottom: 16,
      textAlign: 'justify'
    }
  }, "I've spent the last four years at AWS working in cloud security, first as a Cloud Security Support Engineer and most recently as a Cloud Security Consultant.", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("br", null), "My work sits directly at the intersection of cloud security, threat modeling, and emerging technology. Across customer engagements, I've helped organizations identify risks, threat model architectures, and bake security in GenAI solutions before they're shipped.", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("br", null), "I'm especially interested in securing technology that is continuously ever-evolving\u2014embedding security end-to-end and shifting left as threats emerge over time.", /*#__PURE__*/React.createElement("br", null)), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: '16px',
      lineHeight: 'var(--lh-normal)',
      color: 'var(--text-soft)',
      textAlign: 'justify'
    }
  }, "Outside of work, you can usually find me reading sci-fi and fantasy novels, writing speculative fiction, or running in unseasonable, sweltering Texas heat.", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("br", null), "Welcome to my little corner of the internet!"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8,
      flexWrap: 'wrap',
      marginTop: 24
    }
  }, ['GCIH', 'CISSP', 'Python', 'Burp Suite', 'Nmap', 'SAP-CO2'].map(s => /*#__PURE__*/React.createElement(Badge, {
    key: s,
    tone: "outline",
    shimmer: true
  }, s)))), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement(WindowCard, {
    title: "~/education.log"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: '14px',
      lineHeight: 1.8,
      color: 'var(--ink)'
    }
  }, /*#__PURE__*/React.createElement("strong", null, "B.S. Information Technology & Systems"), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--text-faint)'
    }
  }, "The University of Texas at Dallas, 2022", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("strong", {
    style: {
      color: 'var(--ink)'
    }
  }, "M.S. Business Analytics"), /*#__PURE__*/React.createElement("br", null), "The University of Texas at Dallas, 2023"))))));
}
const MEDIUM_URL = 'https://medium.com/@jessica-c';
const POSTS = [{
  tag: 'Essay',
  date: '2021.11.18',
  title: '5 Takeaways from AI Superpowers',
  excerpt: 'How will AI impact us and how will it develop in the future?',
  readTime: 'Read on Medium',
  href: 'https://medium.com/@jessica-c/5-takeaways-from-ai-superpowers-70b9acd29a96'
}];
function Blog() {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '60px 32px 80px',
      maxWidth: 1100,
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    eyebrow: "Blog",
    title: "Writing",
    subtitle: "published on Medium"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(2,1fr)',
      gap: 20,
      marginTop: 24,
      alignItems: 'stretch'
    }
  }, POSTS.map(p => /*#__PURE__*/React.createElement(BlogPostCard, _extends({
    key: p.title
  }, p))), /*#__PURE__*/React.createElement("a", {
    href: MEDIUM_URL,
    target: "_blank",
    rel: "noreferrer",
    style: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      gap: 10,
      padding: '22px',
      textDecoration: 'none',
      border: 'var(--border-w) dashed var(--ink)',
      borderRadius: 'var(--radius-sm)',
      background: 'transparent',
      color: 'var(--ink)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-pixel)',
      fontSize: '11px',
      letterSpacing: 'var(--ls-pixel)',
      color: 'var(--indigo-deep)',
      textTransform: 'uppercase'
    }
  }, "Medium"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontWeight: 700,
      fontSize: '19px'
    }
  }, "@jessica-c"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: '12px',
      color: 'var(--teal-deep)'
    }
  }, "View full profile \u2192"))));
}
const JOBS = [{
  date: '2025 — Present',
  title: 'Cloud Security Consultant',
  org: 'AWS',
  category: 'Current',
  current: true,
  description: 'Helped healthcare and life sciences organizations build secure AWS infrastructure and GenAI solutions, with a focus on threat modeling, risk, resilience, and infrastructure as code.'
}];
const JOBS_PARALLEL = [{
  date: '2022-2025',
  title: 'Cloud Security Support Engineer',
  org: 'AWS',
  category: 'Full-time',
  description: 'Solved complex AWS security and infrastructure issues for customers, specializing in IAM, networking, access controls, logging, and cloud security.'
}, {
  date: '2022 — 2023',
  title: 'M.S. Business Analytics',
  org: 'The University of Texas at Dallas',
  category: 'Education',
  description: ''
}];
const JOBS_LAST = {
  date: '2020-2022',
  title: 'B.S. Information Technology & Systems',
  org: 'The University of Texas at Dallas',
  category: 'Education',
  description: '',
  last: true
};
function ParallelCard({
  it
}) {
  const hasBody = !!it.description;
  const [open, setOpen] = React.useState(true);
  return /*#__PURE__*/React.createElement("div", {
    onClick: () => hasBody && setOpen(o => !o),
    style: {
      flex: '1 1 220px',
      background: 'var(--white)',
      border: 'var(--border-w) solid var(--ink)',
      boxShadow: 'var(--shadow-hard-sm)',
      padding: '16px 18px',
      cursor: hasBody ? 'pointer' : 'default',
      transition: 'transform var(--dur-fast) var(--ease-out)'
    },
    onMouseEnter: e => {
      if (hasBody) e.currentTarget.style.transform = 'translate(-2px,-2px)';
    },
    onMouseLeave: e => {
      e.currentTarget.style.transform = 'none';
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      flexWrap: 'wrap',
      gap: 8,
      marginBottom: 6
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-pixel)',
      fontSize: 11,
      color: 'var(--teal-deep)',
      letterSpacing: 'var(--ls-pixel)'
    }
  }, it.date), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-pixel)',
      fontSize: 10,
      letterSpacing: 'var(--ls-pixel)',
      textTransform: 'uppercase',
      padding: '3px 8px',
      border: 'var(--border-w) solid var(--indigo)',
      color: 'var(--indigo-deep)',
      background: 'var(--indigo-dim)'
    }
  }, it.category)), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-body)',
      fontWeight: 700,
      fontSize: 16,
      color: 'var(--ink)'
    }
  }, it.title), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 13,
      color: 'var(--text-faint)'
    }
  }, it.org), hasBody ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateRows: open ? '1fr' : '0fr',
      opacity: open ? 1 : 0,
      transition: 'grid-template-rows var(--dur-med) var(--ease-out), opacity var(--dur-med) var(--ease-out)'
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      overflow: 'hidden',
      fontFamily: 'var(--font-body)',
      fontSize: 14,
      lineHeight: 'var(--lh-normal)',
      color: 'var(--text-soft)',
      margin: '10px 0 0'
    }
  }, it.description)) : null);
}
function ParallelTimelineEntry({
  items,
  last
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 20,
      paddingBottom: last ? 0 : 24,
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 28,
      height: 28,
      background: 'var(--white)',
      border: 'var(--border-w-thick) solid var(--ink)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: ICON + 'calendar.svg',
    width: 14,
    height: 14,
    alt: ""
  })), !last ? /*#__PURE__*/React.createElement("div", {
    style: {
      width: 2,
      flex: 1,
      background: 'var(--ink)',
      marginTop: 6
    }
  }) : null), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: 'flex',
      gap: 14,
      flexWrap: 'wrap'
    }
  }, items.map((it, i) => /*#__PURE__*/React.createElement(ParallelCard, {
    key: i,
    it: it
  }))));
}
function Timeline() {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '60px 32px 80px',
      maxWidth: 760,
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    eyebrow: "Timeline",
    title: "How I Got Here"
  }), JOBS.map(j => /*#__PURE__*/React.createElement(TimelineEntry, _extends({
    key: j.title
  }, j, {
    icon: j.current ? ICON + 'shield.svg' : ICON + 'calendar.svg'
  }))), /*#__PURE__*/React.createElement(ParallelTimelineEntry, {
    items: JOBS_PARALLEL
  }), /*#__PURE__*/React.createElement(TimelineEntry, _extends({}, JOBS_LAST, {
    icon: ICON + 'calendar.svg'
  })));
}
function Contact() {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '60px 32px 100px',
      maxWidth: 760,
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    eyebrow: "Contact",
    title: "Get In Touch"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 12,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(SocialLink, {
    platform: "linkedin",
    label: "LinkedIn",
    href: "#"
  }), /*#__PURE__*/React.createElement(SocialLink, {
    platform: "github",
    label: "GitHub",
    href: "#"
  })));
}
Object.assign(window, {
  Home,
  About,
  Blog,
  Gallery,
  Timeline,
  Contact
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/portfolio-site/Sections.jsx", error: String((e && e.message) || e) }); }

__ds_ns.BlogPostCard = __ds_scope.BlogPostCard;

__ds_ns.GalleryTile = __ds_scope.GalleryTile;

__ds_ns.TimelineEntry = __ds_scope.TimelineEntry;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.SectionHeading = __ds_scope.SectionHeading;

__ds_ns.SocialLink = __ds_scope.SocialLink;

__ds_ns.WindowCard = __ds_scope.WindowCard;

__ds_ns.Callout = __ds_scope.Callout;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.TextArea = __ds_scope.TextArea;

__ds_ns.NavBar = __ds_scope.NavBar;

})();
