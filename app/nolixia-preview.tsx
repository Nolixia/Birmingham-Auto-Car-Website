import { contactUrl, portfolioUrl } from "./nolixia-preview-config";
import styles from "./NolixiaPreview.module.css";

export default function NolixiaPreview({ footer = false }: { footer?: boolean }) {
  return <aside className={`${styles.notice} ${footer ? styles.footer : ""}`} aria-label="Nolixia design preview">
    <div className={styles.copy}><strong>Design preview by <a href="https://nolixia.com">Nolixia</a></strong><span>Sample business content, images, reviews and prices. No real business service is offered here.</span></div>
    <nav className={styles.links} aria-label="Discuss this website design"><a className={styles.primary} href={contactUrl}>Discuss this design <span aria-hidden="true">→</span></a><a href={portfolioUrl}>View design details</a></nav>
  </aside>;
}
