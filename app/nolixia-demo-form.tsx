"use client";

import { useState, useSyncExternalStore, type FormEvent, type ReactNode } from "react";
import { contactUrl } from "./nolixia-preview-config";
import styles from "./NolixiaPreview.module.css";

const subscribe = () => () => {};
export function usePreviewReady() {
  return useSyncExternalStore(subscribe, () => true, () => false);
}

export default function DemoForm({ children, className = "" }: { children: ReactNode; className?: string }) {
  const ready = usePreviewReady();
  const [complete, setComplete] = useState(false);
  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    event.currentTarget.reset();
    setComplete(true);
  }
  return <form className={className} onSubmit={submit} autoComplete="off">
    <fieldset className={styles.fields} disabled={!ready}>
      <p className={styles.formNote}>Interactive form preview. Use invented details only. This demonstration does not send the form or save an enquiry.</p>
      {children}
    </fieldset>
    {complete && <p className={styles.formResult} role="status">Preview complete. No enquiry was sent. <a href={contactUrl}>Discuss this website design with Nolixia →</a></p>}
    <noscript><p className={styles.formNote}>The sample form requires JavaScript. <a href={contactUrl}>Contact Nolixia about this design</a>.</p></noscript>
  </form>;
}
